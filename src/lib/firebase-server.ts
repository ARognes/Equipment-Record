import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { initializeApp } from 'firebase-admin/app'
import type { DocumentModel } from '$lib/models/DocumentModel'
import { browser } from '$app/env'
import { FIREBASE_PROJECT_ID } from './constants-server'
import fbAdmin from 'firebase-admin'


const adminCredentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS as string)

async function initializeFirebase() {
	if (browser) return
	// const { apps, credential } = await import('firebase-admin')
	if (fbAdmin?.apps?.length) return
	initializeApp({
		credential: fbAdmin.credential.cert(adminCredentials),
		projectId: FIREBASE_PROJECT_ID
	})
}

export async function decodeToken(token: string): Promise<DecodedIdToken | null> {
	if (!token || token === 'null' || token === 'undefined' || browser) return null
	try {
		// const { auth } = await import('firebase-admin')
		initializeFirebase()
		return await fbAdmin?.auth().verifyIdToken(token)
	} catch (err) { return null }
}

// Minimum access to token changing, highest security, check everything
export async function setCustomUserClaims(uid: string, updateElement: UpdateCustomUserClaimElement ): Promise<boolean> {
	if (!uid || browser) return null
	try {
		// const { auth } = await import('firebase-admin')
		initializeFirebase()
		console.log('Setting Cusom Claims!', uid, updateElement)

		const currentUser = await fbAdmin.auth().getUser(uid)
		if (!currentUser) return false
		const customClaims = { ...currentUser?.customClaims }
		customClaims[updateElement.name] = updateElement.value
		await fbAdmin?.auth().setCustomUserClaims(uid, customClaims)
		return true
	} catch (e) { console.error(e); return false }
}

export async function getDoc(collectionPath: string, did: string): Promise<DocumentModel> {
	if (!did || browser) return null
	// const { firestore } = await import('firebase-admin')
	initializeFirebase()
	const db = fbAdmin?.firestore()

	const doc = await db.collection(collectionPath).doc(did).get()
	if (!doc.exists) return null
	const document: DocumentModel = <DocumentModel>doc.data()
	document._id = doc.id
	return document
}

export async function getDocs(collectionPath: string, businessID: string): Promise<Array<DocumentModel>> {
	if (!businessID || browser) return []
	// const { firestore } = await import('firebase-admin')
	initializeFirebase()
	const db = fbAdmin?.firestore()

	const querySnapshot = await db.collection(collectionPath).where('businessID', '==', businessID).get()
	const list: Array<DocumentModel> = []
	querySnapshot.forEach((doc) => {
		const document: DocumentModel = <DocumentModel>doc.data()
		document._id = doc.id
		list.push(document)
	})
	return list
}

// export async function createDocument(collectionPath: string, uid: string): Promise<DocumentModel> {
// 	initializeFirebase()
// 	const db = firestore()
// 	const doc = await (await db.collection(collectionPath).add({ uid })).get()

// 	const document = <DocumentModel>doc.data() // Just need the data on the server
// 	document._id = doc.id
// 	return document
// }
