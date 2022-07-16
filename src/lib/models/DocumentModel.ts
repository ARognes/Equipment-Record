
export class DocumentModel {
	constructor(doc: DocumentData) {
		this._load(doc)
	}

	_load(doc: DocumentData) {
		if (doc) {
			Object.assign(this, doc.data())
			this._id = doc.id
		}
	}

	_collection = ''
	_id = ''
}
