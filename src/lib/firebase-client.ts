import type { FirebaseApp } from 'firebase/app'
import type { Firestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import {
	collection,
	getFirestore,
	query,
	where,
	addDoc,
	getDoc,
	doc,
	setDoc,
	deleteDoc
} from 'firebase/firestore/lite'
import {
	getAuth,
	signOut as _signOut,
	onIdTokenChanged,
	getIdTokenResult,
	signInWithRedirect,
} from 'firebase/auth'
import { userStore } from './storage'
import type { Document } from '$lib/Document'
import { readable } from 'svelte/store'
import { browser } from '$app/env'
import type { AnyObject } from 'AppModule'
import { FIREBASE_CLIENT_CONFIG } from './constants-clients'
import { goto } from '$app/navigation'
import { session } from '$app/stores';


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
				const IdTokenResult = await getIdTokenResult(user)
				await setToken(IdTokenResult.token)

				console.log('LOGIN', user)
				userStore.set({
					name: user.displayName,
					email: user.email,
					uid: user.uid,
					accessLevel: IdTokenResult.claims.accessLevel,
				})

				session.set({ 
					user: {
						name: user.displayName,
						email: user.email,
						uid: user.uid,
						accessLevel: IdTokenResult.claims.accessLevel,
						businessName: undefined,
						businessID: undefined
					}
				})

				return
			}
			
			await setToken('')
			userStore.set(undefined)

			session.set({ user: undefined })
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

function getDbObject(document: Document): Partial<Document> {
	const obj: AnyObject = {}
	Object.keys(document)
		.filter((k) => document._dbFields.includes(k))
		.forEach((k) => {
			obj[k] = document[k as keyof Document]
		})
	return obj
}

export async function saveDocument(document: Document) {
	const dbObject = getDbObject(document)
	if (!document._collection) throw Error('Objects that extends Document must specify __collection')

	if (document._id) {
		await setDoc(doc(db, document._collection, document._id), dbObject)
	} else {
		const todoRef = await addDoc(collection(db, document._collection), dbObject)
		document._id = todoRef.id
	}
}

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

export async function deleteDocument(document: Document) {
	if (!document._collection) throw Error('Objects that extends Document must specify __collection')

	await deleteDoc(doc(db, document._collection, document._id))
}

export function getCollectionStore<T extends Document>(
	type: { new (data: AnyObject): T },
	collectionPath: string,
	uid: string,
	initialData: Array<T> = []
) {
	return readable<Array<T>>(initialData, (set) => {
		let dbUnsubscribe: () => void
		let unsubbed = false
		const unsub = () => {
			unsubbed = true
			if (dbUnsubscribe) {
				dbUnsubscribe()
			}
		}
		if (browser) {
			(async () => {
				if (unsubbed) return
				const q = query(collection(db, collectionPath), where('uid', '==', uid))
				dbUnsubscribe = onSnapshot(q, (docs) => {
					const newDocuments: Array<T> = []
					docs.forEach((doc) => {
						const newDoc = new type(doc.data())
						newDoc._id = doc.id
						newDocuments.push(newDoc)
					})
					set(newDocuments)
				})
			})()
		}

		return unsub
	})
}
