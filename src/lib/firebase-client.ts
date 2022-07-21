import type { FirebaseApp } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import {
	Firestore,
	collection,
	getFirestore,
	onSnapshot,
	QueryDocumentSnapshot,
	type DocumentData,
	getDocs,
	setDoc,
	doc,
	addDoc
} from 'firebase/firestore'
import {
	getAuth,
	signOut as _signOut,
	onIdTokenChanged,
	getIdTokenResult,
	type IdTokenResult,
	type ParsedToken,
} from 'firebase/auth'
import type { DocumentModel } from '$lib/models/DocumentModels'
import { readable, type Readable } from 'svelte/store'
import { browser } from '$app/env'
import { FIREBASE_CLIENT_CONFIG } from './constants-clients'
import { session } from '$app/stores'
import { getBytes, getStorage, ref } from 'firebase/storage'
import { encode } from 'base64-arraybuffer'


async function setToken(token: string) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ token })
	}

	await fetch('/api/token', options)
}

function listenForAuthChanges() {
	const auth = getAuth(app)

	onIdTokenChanged(auth, async (user) => {
			if (user) {
				const IdTokenResult: IdTokenResult = await getIdTokenResult(user)
				await setToken(IdTokenResult.token)
				const claims: ParsedToken = IdTokenResult.claims
				const accessLevel = parseInt(claims?.accessLevel as string) || 0
				const businessID = claims.businessID as string

				session.set({ 
					user: {
						name: user.displayName,
						email: user.email,
						uid: user.uid,
						accessLevel,
						businessID
					}
				})

				return
			}
			
			await setToken('')

			session.set({ user: null })
			console.log('Token Gone')
		}, 
		err => console.error(err.message)
	)
}


export let app: FirebaseApp
export let db: Firestore
export function initializeFirebase() {
	if (!app) {
		app = initializeApp(FIREBASE_CLIENT_CONFIG)
		db = getFirestore(app)
		listenForAuthChanges()
	}
}


export async function register(username: string, email: string, password: string) {
	const { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } = await import('firebase/auth')
	const { doc, setDoc, serverTimestamp } = await import('firebase/firestore/lite')
	const auth = getAuth(app)

	await createUserWithEmailAndPassword(auth, email, password)
	await updateProfile(auth.currentUser, { displayName: username })
	await sendEmailVerification(auth.currentUser)

	// Create user in firestore, somewhat useless until connected with other collections
	const userRef = doc(db, 'users', email)
	await setDoc(userRef, {
		businessID: '',
		businessName: '',
		uid: auth.currentUser.uid,
		email: auth.currentUser.email,
		phone: null,
		createdAt: serverTimestamp()
	})
}

export async function signInGoogle() {
	const { setPersistence, browserLocalPersistence, signInWithRedirect, GoogleAuthProvider } = await import('firebase/auth')
	const auth = getAuth(app)
	
	await setPersistence(auth, browserLocalPersistence)
	
	await signInWithRedirect(auth, new GoogleAuthProvider())
}

export async function signInEmail(email: string, password: string) {
	const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await import('firebase/auth')
	// initializeFirebase()
	const auth = getAuth(app)
	
	await setPersistence(auth, browserLocalPersistence)

	await signInWithEmailAndPassword(auth, email, password)
}

// Username is being removed...
export async function signInUsername(username: string, password: string) {
	const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await import('firebase/auth')
	const { getDoc, doc } = await import('firebase/firestore/lite')

	const auth = getAuth(app)


	const userDoc = await getDoc(doc(db, 'users', username))
	if (!userDoc.exists()) return

	// Get user's email
	const email = userDoc?.data()?.email

	await setPersistence(auth, browserLocalPersistence)
	await signInWithEmailAndPassword(auth, email, password)
}

export async function signOut() {
	const auth = getAuth(app)
	await _signOut(auth)
	location.reload()
}

export async function passwordResetEmail(email: string) {
	const auth = getAuth(app)
	const { sendPasswordResetEmail } = await import('firebase/auth')
	await sendPasswordResetEmail(auth, email)
}

// export async function deleteDocument(document: Document) {
// 	if (!document._collection) throw Error('Objects that extends Document must specify __collection')

// 	await deleteDoc(doc(db, document._collection, document._id))
// }

// DocumentModel wrapper for firebase's getDocs
export async function allDocs<T extends DocumentModel>(
	type: { new (data: QueryDocumentSnapshot<DocumentData>): T },
	businessID: string
): Promise<T[]> 
{
	if (!browser) return []

	try {

		// Model names reflect collection names, ex: EquipmentModel -> equipment
		const collectionName: string = new type({} as any).getCollectionName()
		const collectionPath = 'businesses/' + businessID + '/' + collectionName
		const querySnapshot = await getDocs(collection(db, collectionPath))
		const documents: T[] = querySnapshot.docs.map(doc => new type(doc))
		return documents

	} catch (err) { console.error(err); return null }
}

export async function getCollectionStore<T extends DocumentModel>(
	type: { new (data: QueryDocumentSnapshot<DocumentData>): T },
	businessID: string,
): Promise<Readable<T[]>> {
	if (!browser) return null
	try {

		// Model names reflect collection names, ex: EquipmentModel -> equipment
		const collectionName: string = new type({} as any).getCollectionName()
		const collectionPath = 'businesses/' + businessID + '/' + collectionName
		const col = collection(db, collectionPath)
		const querySnapshot = await getDocs(col)
		const initialDocuments: T[] = querySnapshot.docs.map(doc => new type(doc))

		return readable<T[]>(initialDocuments, set => {
			let dbUnsubscribe: () => void
			let unsubbed = false
			
			const unsub = () => {
				unsubbed = true
				if (dbUnsubscribe) dbUnsubscribe()
			}

			(async () => {
				if (unsubbed) return

				dbUnsubscribe = onSnapshot(col, docs => {
					const newDocuments: Array<T> = docs.docs.map(doc => new type(doc))
					set(newDocuments)
				})
			})()
			
			return unsub
		})

	} catch (err) { console.error(err); return null }
}

export async function getImage(businessID: string, eid: string, index: number, tiny: boolean): Promise<string> {
	if (!businessID || !eid || index === null || !browser) return null
	try {
    const storage = getStorage(app)
		console.log('Downloading image')
	
		const tinyURL = tiny ? '/tiny_img_' : '/img_'
		const url = `${ businessID }/equipment/${ eid }${ tinyURL }${ index }`
		const reference = ref(storage, url)
		const bytes = await getBytes(reference)
		const img: string = `data:image/png;base64,${ encode(bytes) }`
		return img

  } catch (e) { console.error(e); return null }
}

export async function allImages(businessID: string, eid: string, imageOrder: Array<number>, tiny: boolean): Promise<Array<string>> {
	if (!businessID || !eid || !imageOrder?.length || !browser) return null

	try {
    const storage = getStorage(app)
		const imgs: Array<string> = []
		console.log('Downloading', imageOrder.length, 'images')

    for (let i in imageOrder) {
			const tinyURL = tiny ? '/tiny_img_' : '/img_'
			const url = `${ businessID }/equipment/${ eid }${ tinyURL }${ imageOrder[i] }`
			const reference = ref(storage, url)
      const bytes = await getBytes(reference)
      imgs.push(`data:image/png;base64,${ encode(bytes) }`)
    }

		return imgs

  } catch (e) { console.error(e); return null }
}


export async function saveDoc(docu: DocumentModel) {
	if (!docu?._collectionPath?.length) throw Error('Classes that extend DocumentModel must specify _collectionPath')

	if (docu._id) await setDoc(doc(db, docu._collectionPath, docu._id), docu.toDB())
	else {
		const todoRef = await addDoc(collection(db, docu._collectionPath), docu.toDB())
		docu._id = todoRef.id
	}
}
