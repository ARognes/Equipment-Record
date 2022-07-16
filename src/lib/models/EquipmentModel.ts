import { DocumentModel } from './DocumentModel'
import { allImages, getImage } from '$lib/firebase-client'

export class EquipmentModel extends DocumentModel {
	constructor(doc: DocumentData) {
		super(doc)
		this._load(doc)
	}

	// Expected use: doc.tinyImage = await doc.loadTinyImage()
	// This ugly pattern is beacuse svelte needs an assignment to take place to update binds
	async loadTinyImage(): Promise<string> {
		this.tinyImage = await getImage(this.businessID, this._id, 0, true)
		return this.tinyImage
	}

	async loadImages(): Promise<string[]> {
		this.images = await allImages(this.businessID, this._id, this.imageOrder, true)
		return this.images
	}
	
	// Why am I using empty strings instead of undefined?
	_collection = 'equipment'
	_id: string = ''
	businessID: string = ''
	name: string = ''
	barcode: string = ''
	createdAt: string = ''
	timeAssigned: string = ''
	projectAssigned: string = ''
	userAssigned: string = ''
	desc: string = ''
	imageOrder: number[] = []
	tags: string[] = []

	// Empty until method called
	tinyImage: string = ''
	images: string[] = []
}
