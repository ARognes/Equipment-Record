import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { initializeApp } from 'firebase-admin/app'
import { DocumentModel } from '$lib/models/DocumentModel'
import { browser } from '$app/env'
import { FIREBASE_PROJECT_ID } from './constants-server'
import type { UserRecord } from 'firebase-admin/lib/auth/user-record'
import fbAdmin from 'firebase-admin'


const adminCredentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS as string)

async function initializeFirebase() {
	if (browser) return
	if (fbAdmin?.apps?.length) return
	initializeApp({
		credential: fbAdmin?.credential.cert(adminCredentials),
		projectId: FIREBASE_PROJECT_ID
	})
}

export async function decodeToken(token: string): Promise<DecodedIdToken | null> {
	if (!token || token === 'null' || token === 'undefined' || browser) return null
	try {
		initializeFirebase()
		return await auth().verifyIdToken(token)
	} catch (err) { return null }
}

interface UserRecordSession extends UserRecord {
	customClaims: UserSession
}

// Minimum access to token changing, highest security, check everything
export async function setCustomUserClaims(uid: string, updateElement: UpdateCustomUserClaimElement ): Promise<boolean> {
	if (!uid || browser) return null
	try {
		initializeFirebase()
		console.log('Setting Cusom Claims!', uid, updateElement)

		const currentUser: UserRecordSession = await fbAdmin?.auth().getUser(uid) as UserRecordSession
		if (!currentUser) return false
		const customClaims: UserSession = { ...currentUser?.customClaims }
		customClaims[updateElement.name] = updateElement.value
		await fbAdmin?.auth().setCustomUserClaims(uid, customClaims)
		return true
	} catch (e) { console.error(e); return false }
}

export async function getDoc(collectionPath: string, did: string): Promise<DocumentModel> {
	if (!did || browser) return null
	try {
		initializeFirebase()
		const db: fbAdmin.firestore.Firestore = fbAdmin?.firestore()

		const doc: fbAdmin.firestore.DocumentSnapshot<fbAdmin.firestore.DocumentData> = await db.collection(collectionPath).doc(did).get()
		return new DocumentModel(doc)
	} catch (e) { console.error(); return null }
}

export async function allDocs(collectionPath: string, businessID: string): Promise<Array<DocumentModel>> {
	if (!businessID || browser) return []
	initializeFirebase()
	const db = fbAdmin?.firestore()

	const querySnapshot: fbAdmin.firestore.QuerySnapshot<fbAdmin.firestore.DocumentData> = await db.collection(collectionPath).where('businessID', '==', businessID).get()
	const docList: Array<DocumentModel> = querySnapshot.docs.map(doc => new DocumentModel(doc))
	return docList
}

// export async function createDocument(collectionPath: string, uid: string): Promise<DocumentModel> {
// 	initializeFirebase()
// 	const db = firestore()
// 	const doc = await (await db.collection(collectionPath).add({ uid })).get()

// 	const document = <DocumentModel>doc.data() // Just need the data on the server
// 	document._id = doc.id
// 	return document
// }
