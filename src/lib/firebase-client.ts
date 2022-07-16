import type { FirebaseApp } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import {
	Firestore,
	collection,
	getFirestore,
	query,
	where,
	onSnapshot,
	QueryDocumentSnapshot,
	type DocumentData,
	getDocs
} from 'firebase/firestore'
import {
	getAuth,
	signOut as _signOut,
	onIdTokenChanged,
	getIdTokenResult,
	type IdTokenResult,
	type ParsedToken,
} from 'firebase/auth'
import type { DocumentModel } from '$lib/models/DocumentModel'
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
				const accessLevel = parseInt(claims?.accessLevel as string)
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

// function getDbObject(document: Document): Partial<Document> {
// 	const obj: AnyObject = {}
// 	Object.keys(document)
// 		.filter((k) => document._dbFields.includes(k))
// 		.forEach((k) => {
// 			obj[k] = document[k as keyof Document]
// 		})
// 	return obj
// }

// export async function saveDocument(document: Document) {
// 	const dbObject = getDbObject(document)
// 	if (!document._collection) throw Error('Objects that extends Document must specify __collection')

// 	if (document._id) {
// 		await setDoc(doc(db, document._collection, document._id), dbObject)
// 	} else {
// 		const todoRef = await addDoc(collection(db, document._collection), dbObject)
// 		document._id = todoRef.id
// 	}
// }

// export function getDocumentStore<T extends Document>(
// 	type: { new (data: AnyObject): T },
// 	document: T
// ) {
// 	return readable<T | undefined>(document, (set) => {
// 		let dbUnsubscribe: () => void
// 		let unsubbed = false
// 		const unsub = () => {
// 			unsubbed = true
// 			if (dbUnsubscribe) dbUnsubscribe()
// 		}
// 		if (browser) {
// 			(async () => {
// 				if (unsubbed) return
// 				dbUnsubscribe = onSnapshot(doc(db, document._collection, document._id), (doc) => {
// 					if (doc.exists()) {
// 						const newDoc = new type(doc.data())
// 						newDoc._id = doc.id
// 						set(newDoc)
// 					} else {
// 						set(undefined)
// 						dbUnsubscribe()
// 					}
// 				})
// 			})()
// 		}

// 		return unsub
// 	})
// }

// function providerFor(name: string) {
// 	switch (name) {
// 		case 'google':
// 			return new GoogleAuthProvider()
// 		default:
// 			throw 'unknown provider ' + name
// 	}
// }

// export async function signInWith(name: string, email: string = '', password: string = '') {
// 	const auth = getAuth(app)
// 	await setPersistence(auth, browserLocalPersistence)

// 	if (name === 'google') await signInWithPopup(auth, new GoogleAuthProvider())
// 	else if (name === 'email') await signInWithEmailAndPassword(auth, email, password)
// 	else throw 'unknown provider: ' + name
// }

export async function register(username: string, email: string, password: string) {
	const { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } = await import('firebase/auth')
	const { doc, setDoc, serverTimestamp } = await import('firebase/firestore/lite')

	const auth = getAuth(app)

	await createUserWithEmailAndPassword(auth, email, password)
	await updateProfile(auth.currentUser, { displayName: username })
	await sendEmailVerification(auth.currentUser)

	// const userSnap = await getDoc(userRef)
	// if (userSnap.exists()) {
		
	// }

	// Create user in firestore
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
	const auth = getAuth(app)
	const { setPersistence, browserLocalPersistence, signInWithRedirect, GoogleAuthProvider } = await import('firebase/auth')
	
	await setPersistence(auth, browserLocalPersistence)
	
	await signInWithRedirect(auth, new GoogleAuthProvider())
}

export async function signInEmail(email: string, password: string) {
	const auth = getAuth(app)
	const { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } = await import('firebase/auth')
	
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


// Model names reflect collection names, ex: EquipmentModel -> equipment
function _modelNameToColName(modelName: string): string {
	return modelName.substring(0, modelName.length - 5).toLowerCase()
}

// DocumentModel wrapper for firebase's getDocs
export async function allDocs<T extends DocumentModel>(
	type: { new (data: QueryDocumentSnapshot<DocumentData>): T },
	businessID: string
): Promise<Array<T>> 
{
	// Model names reflect collection names, ex: EquipmentModel -> equipment
	const collectionName: string = _modelNameToColName(type.name)
	const equipmentQuery = query(collection(db, collectionName), where('businessID', '==', businessID))
	const querySnapshot = await getDocs(equipmentQuery)
	const documents: Array<T> = querySnapshot.docs.map(doc => new type(doc))
	return documents
}

export async function getCollectionStore<T extends DocumentModel>(
	type: { new (data: QueryDocumentSnapshot<DocumentData>): T },
	businessID: string,
) {
	if (!browser) return null

	// Get initial DocumentModels
	// Model names reflect collection names, ex: EquipmentModel -> equipment
	const collectionName: string = _modelNameToColName(type.name)
	const equipmentQuery = query(collection(db, collectionName), where('businessID', '==', businessID))
	const querySnapshot = await getDocs(equipmentQuery)
	const initialDocuments: Array<T> = querySnapshot.docs.map(doc => new type(doc))

	return readable<Array<T>>(initialDocuments, set => {
		let dbUnsubscribe: () => void
		let unsubbed = false
		
		const unsub = () => {
			unsubbed = true
			if (dbUnsubscribe) dbUnsubscribe()
		}

		(async () => {
			if (unsubbed) return

			dbUnsubscribe = onSnapshot(equipmentQuery, docs => {
				const newDocuments: Array<T> = docs.docs.map(doc => new type(doc))
				set(newDocuments)
			})
		})()
	
		return unsub
	})
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


