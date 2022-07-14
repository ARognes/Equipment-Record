import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import { DocumentModel } from './DocumentModel'

export class EquipmentModel extends DocumentModel {
	constructor(doc: QueryDocumentSnapshot<DocumentData>) {
		super(doc)
	}

	_collection = 'equipment'
	_id = ''
	// done = false
	// pending_delete = false
}
