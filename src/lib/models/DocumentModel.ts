import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'

export class DocumentModel {
	constructor(doc: QueryDocumentSnapshot<DocumentData>) {
		if (doc) {
			Object.assign(this, doc.data())
			this._id = doc.id
		}
	}

	_collection = ''
	_id = ''
}
