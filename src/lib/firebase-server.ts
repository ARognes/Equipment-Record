import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { applicationDefault, initializeApp } from 'firebase-admin/app'
import type { Document } from '$lib/Document'
import { browser } from '$app/env'


async function initializeFirebase() {
	if (browser) return
	const { apps } = await import('firebase-admin')
	if (apps.length) return
	initializeApp({	credential: applicationDefault() })
}

export async function decodeToken(token: string): Promise<DecodedIdToken | null> {
	if (!token || token === 'null' || token === 'undefined' || browser) return null
	try {
		const { auth } = await import('firebase-admin')
		initializeFirebase()
		return await auth().verifyIdToken(token)
	} catch (err) { return null }
}

export async function getDoc(collectionPath: string, uid: string): Promise<Document> {
	if (!uid || browser) return null
	const { firestore } = await import('firebase-admin')
	initializeFirebase()
	const db = firestore()

	const doc = await db.collection(collectionPath).doc(uid).get()
	if (!doc.exists) return null
	const document: Document = <Document>doc.data()
	document._id = doc.id
	return document
}

// export async function getDocuments(collectionPath: string, uid: string): Promise<Array<Document>> {
// 	if (!uid) return []
// 	initializeFirebase()
// 	const db = firestore()
// 	const querySnapshot = await db.collection(collectionPath).where('uid', '==', uid).get()
// 	const list: Array<Document> = []
// 	querySnapshot.forEach((doc) => {
// 		const document: Document = <Document>doc.data() // Just need the data on the server
// 		document._id = doc.id
// 		list.push(document)
// 	});
// 	return list
// }

// export async function createDocument(collectionPath: string, uid: string): Promise<Document> {
// 	initializeFirebase()
// 	const db = firestore()
// 	const doc = await (await db.collection(collectionPath).add({ uid })).get()

// 	const document = <Document>doc.data() // Just need the data on the server
// 	document._id = doc.id
// 	return document
// }
