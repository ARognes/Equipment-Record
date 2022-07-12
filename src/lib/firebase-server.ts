import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { initializeApp } from 'firebase-admin/app'
import type { Document } from '$lib/Document'
import { browser } from '$app/env'
import { FIREBASE_PROJECT_ID } from './constants-server'


const adminCredentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS as string)

async function initializeFirebase() {
	if (browser) return
	const { apps, credential } = await import('firebase-admin')
	if (apps.length) return
	initializeApp({
		credential: credential.cert(adminCredentials),
		projectId: FIREBASE_PROJECT_ID
	})
}

export async function decodeToken(token: string): Promise<DecodedIdToken | null> {
	if (!token || token === 'null' || token === 'undefined' || browser) return null
	try {
		const { auth } = await import('firebase-admin')
		initializeFirebase()
		return await auth().verifyIdToken(token)
	} catch (err) { return null }
}

export async function setAccessLevel(uid: string, accessLevel: number): Promise<boolean> {
	return _setCustomClaims(uid, { accessLevel })
}

export async function setBusinessID(uid: string, businessID: string): Promise<boolean> {
	return _setCustomClaims(uid, { businessID })
}

// Minimum access to token changing, highest security, check everything
async function _setCustomClaims(uid: string, customClaims): Promise<boolean> {
	if (!uid || !customClaims || browser) return null
	try {
		console.log('cc:', uid, customClaims)
		const { auth } = await import('firebase-admin')
		initializeFirebase()
		await auth().setCustomUserClaims(uid, customClaims)
		return true
	} catch (e) { console.error(e); return false }
}

export async function getDoc(collectionPath: string, did: string): Promise<Document> {
	if (!did || browser) return null
	const { firestore } = await import('firebase-admin')
	initializeFirebase()
	const db = firestore()

	const doc = await db.collection(collectionPath).doc(did).get()
	if (!doc.exists) return null
	const document: Document = <Document>doc.data()
	document._id = doc.id
	return document
}

export async function getDocs(collectionPath: string, businessID: string): Promise<Array<Document>> {
	if (!businessID || browser) return []
	const { firestore } = await import('firebase-admin')
	initializeFirebase()
	const db = firestore()

	const querySnapshot = await db.collection(collectionPath).where('businessID', '==', businessID).get()
	const list: Array<Document> = []
	querySnapshot.forEach((doc) => {
		const document: Document = <Document>doc.data()
		document._id = doc.id
		list.push(document)
	})
	return list
}

// export async function createDocument(collectionPath: string, uid: string): Promise<Document> {
// 	initializeFirebase()
// 	const db = firestore()
// 	const doc = await (await db.collection(collectionPath).add({ uid })).get()

// 	const document = <Document>doc.data() // Just need the data on the server
// 	document._id = doc.id
// 	return document
// }
