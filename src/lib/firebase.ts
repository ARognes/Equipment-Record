/**
 * Wrapper for firebase or any server(less) service
 * 
 * These are client only
 * however, server side rendering wouldn't hurt 🤔
 */

import { browser } from '$app/env'
import { getDoc as getDocFB, getDocs, getFirestore, where, query, doc, collection, updateDoc as updateDocFB, addDoc as addDocFB } from 'firebase/firestore/lite'
import { getBytes, getStorage, ref } from 'firebase/storage'
import { session } from '$lib/storage'
import { app } from '$lib/app'
import { encode } from 'base64-arraybuffer'
import { log, error } from '$lib/logging'


export async function getDoc(reference) {
  if (!browser || !reference) return null

  let doc = null
  try {
    doc = await getDocFB(reference)
    
    doc = (doc) => {
      const docData = doc.data()
      docData.id = doc.id
      return docData
    }

    log('Firestore 1 read')
  }
  catch(e) { error(e) }
  finally { return doc }
}

export async function allDocs(businessID: string, col: string) {
  if (!browser) return null

  let allDocs = session.getItem(col)

  if (allDocs) return allDocs
  
  try {
    const db = getFirestore(app)
    const queryDocs = await getDocs(query(collection(db, col),
                                    where('businessID', '==', businessID)))
    
    allDocs = queryDocs.docs.map(doc => {
      const docData = doc.data()
      docData.id = doc.id
      return docData
    })

    session.setItem(col, allDocs)

    log(`Firestore ${ allDocs?.length } reads`)
  }
  catch(e) { error(e) }
  finally { return allDocs }
}


export async function queryDocs(businessID: string, col: string, wheres: any) {
  if (!browser) return null

  let allDocs = null

  // if (allDocs) return allDocs
  
  try {
    const db = getFirestore(app)
    const queryDocs = await getDocs(query(collection(db, col),
                                    where('businessID', '==', businessID),
                                    ...wheres))
    
    allDocs = queryDocs.docs.map(doc => {
      const docData = doc.data()
      docData.id = doc.id
      return docData
    })

    // session.setItem(col, allDocs)

    log(`Firestore Query ${ allDocs?.length } reads`)
  }
  catch(e) { error(e) }
  finally { return allDocs }
}


export async function getSRC(equipment, tiny: boolean, i: number): Promise<string> {
  if (!browser) return null

  let img: string = null

  try {
    const storage = getStorage(app)
    log('Downloading Image')

    const bytes = await getBytes(ref(storage, `${ equipment.businessID }/equipment/${ equipment.id }${tiny ? '/tiny_img_' : '/img_'}${ equipment.imageOrder[i] }`))
    img = `data:image/png;base64,${ encode(bytes) }`

  } catch (e) { error(e) }
  finally { return img }
}


export async function allSRC(equipment, tiny: boolean): Promise<String[]> {
  if (!browser) return null

  let imgs: string[] = []

  try {
    const storage = getStorage(app)
    log('Downloading Image')
    
    for (let i in equipment.imageOrder) {
      const bytes = await getBytes(ref(storage, `${ equipment.businessID }/equipment/${ equipment.id }${tiny ? '/tiny_img_' : '/img_'}${ equipment.imageOrder[i] }`))
      imgs.push(`data:image/png;base64,${ encode(bytes) }`)
    }

  } catch (e) { error(e) }
  finally { return imgs }
}


export async function updateDoc(col: string, id: string, fields) {
  if (!browser) return null

  try {
    const db = getFirestore(app)
    const ref = await updateDocFB(doc(db, col, id), fields)
    log(`Firestore Update 1 write`)
    return ref

  } catch (e) { error(e) }
}


export async function addDoc(col: string, fields) {
  if (!browser) return null

  try {
    const db = getFirestore(app)
    const ref = await addDocFB(collection(db, col), fields)
    log(`Firestore Add 1 write`)
    return ref

  } catch (e) { error(e) }
}


/**
 * Go through assignments and rename all instances of document
 */
export async function changeName(id: string, name: string) {

  let allDocs = null

  try {
    const db = getFirestore(app)
    const queryDocs = await getDocs(query(collection(db, 'assignments'),
                                    where('equipmentID', '==', id)))
    
    for (let doc of queryDocs.docs) 
      updateDocFB(doc.ref, { equipmentName: name})

    log(`Firestore Rename ${ queryDocs?.docs?.length } writes`)
  }
  catch(e) { error(e) }
}