// import { ADMIN_DB_URL } from './constants-server'
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { auth, apps, firestore } from 'firebase-admin'
import type { Document } from '$lib/Document'


function initializeFirebase() {
	if (apps.length) return
	initializeApp({
		credential: applicationDefault(),	// https://firebase.google.com/docs/admin/setup?authuser=0
		// databaseURL: `https://${ ADMIN_DB_URL }.firebaseio.com`
	})
}

export async function decodeToken(token: string): Promise<DecodedIdToken | null> {
	if (!token || token === 'null' || token === 'undefined') return null
	try {
		initializeFirebase()
		return await auth().verifyIdToken(token)
	} catch (err) { return null }
}

export async function getDoc(collectionPath: string, uid: string): Promise<Document> {
	if (!uid) return null
	initializeFirebase()
	const db = firestore()

	const doc = await db.collection(collectionPath).doc(uid).get()
	if (!doc.exists) return null
	const document: Document = <Document>doc.data()
	document._id = doc.id
	return document
}

export async function getDocuments(collectionPath: string, uid: string): Promise<Array<Document>> {
	if (!uid) return []
	initializeFirebase()
	const db = firestore()
	const querySnapshot = await db.collection(collectionPath).where('uid', '==', uid).get()
	const list: Array<Document> = []
	querySnapshot.forEach((doc) => {
		const document: Document = <Document>doc.data() // Just need the data on the server
		document._id = doc.id
		list.push(document)
	});
	return list
}

export async function createDocument(collectionPath: string, uid: string): Promise<Document> {
	initializeFirebase()
	const db = firestore()
	const doc = await (await db.collection(collectionPath).add({ uid })).get()

	const document = <Document>doc.data() // Just need the data on the server
	document._id = doc.id
	return document
}
