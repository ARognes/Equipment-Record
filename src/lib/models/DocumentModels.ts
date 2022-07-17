import { allImages, getImage } from '$lib/firebase-client'
import { Timestamp } from 'firebase/firestore'

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

	toDB(): object {
		return Object.fromEntries(Object.entries(this).filter(entry => entry[0][0] !== '_'))
	}

	static getCollectionName(): string {
		return this.name.substring(0, this.name.length - 5).toLowerCase()
	}

	_collectionPath: string = ''
	_id = ''
}


export class EquipmentModel extends DocumentModel {
	constructor(doc: DocumentData) {
		super(doc)
		this._load(doc)
	}

	_load(doc: DocumentData) {
		if (doc) {
			const data = doc.data()
			this.attributes = new Map(data.attributes?.map(attr => [attr.key, attr.value]))
			this.createdAt = data.createdAt?.toDate()
			this.timeAssigned = data.timeAssigned?.toDate()
			delete data.attributes
			delete data.createdAt
			delete data.timeAssigned

			Object.assign(this, data)
			this._id = doc.id
		}
	}

	// Client only!
	// Expected use: doc.tinyImage = await doc.loadTinyImage()
	// This ugly pattern is beacuse svelte needs an assignment to take place to update binds
	async loadTinyImage(): Promise<string> {
		// this._tinyImage = await getImage(this.businessID, this._id, 0, true)
		// return this._tinyImage
		return null
	}

	// Client only!
	async loadImages(): Promise<string[]> {
		// this._images = await allImages(this.businessID, this._id, this.imageOrder, true)
		return this._images
	}

	toDB(): object {
		const dbObject = Object.fromEntries(Object.entries(this).filter(entry => entry[0][0] !== '_'))
		dbObject.attributes = [...dbObject.attributes].map(entry => ({ key: entry[0], value: entry[1] }))	// Map to list of objects
		dbObject.createdAt = dbObject.createdAt ? Timestamp.fromDate(dbObject.createdAt) : undefined
		dbObject.timeAssigned = dbObject.timeAssigned ? Timestamp.fromDate(dbObject.timeAssigned) : undefined

		return dbObject
	}
	
	// Why am I using empty strings instead of undefined?
	// Non-firestore fields are prefixed with an underscore
	_id: string
	_collectionPath: string
	name: string
	barcode: string
	createdAt: Date
	timeAssigned: Date
	projectAssigned: string
	userAssigned: string
	desc: string
	imageOrder: number[]
	tags: string[]
	attributes: Map<string, string>
	

	// Empty until method called
	_tinyImage: string
	_images: string[]
}

// This is able to search from name and attributes
export class EquipmentSearchWrapper {
	constructor(public doc: EquipmentModel) {

		// attributes Map to array of SearchText pairs
		this.attributeHighlight = [...doc.attributes].map(attr => new AttributeSearchText(attr[0], attr[1]))
		this.nameHighlight = [ new SearchText(doc.name, false) ]
	}

	nameHighlight: SearchText[]
	attributeHighlight: AttributeSearchText[]
}

export class SearchText {
	constructor(public text: string, public highlight: boolean) {}
}

export class AttributeSearchText {
	constructor(key: string | SearchText[], value: string | SearchText[]) {
		this.key = typeof key === 'string' ? [new SearchText(key, false)] : key
		this.value = typeof value === 'string' ? [new SearchText(value, false)] : value
	}

	key: SearchText[]
	value: SearchText[]
}
