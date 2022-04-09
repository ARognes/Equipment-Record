/**
 * Wrapper for firebase or any server(less) service
 * 
 * These are client only
 */

import { browser } from '$app/env'
import { getDocs, getFirestore, where, query, collection, updateDoc as updateDocFB, deleteField, doc } from 'firebase/firestore/lite'
import { getBytes, getStorage, ref } from 'firebase/storage'
import { session } from '$lib/storage'
import { app } from '$lib/app'
import { encode } from 'base64-arraybuffer'
import { log } from 'fractils'


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

    log('hit')
  }
  catch(e) { log(e) }
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

  } catch (e) { log(e) }
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

  } catch (e) { log(e) }
  finally { return imgs }
}

export async function updateDoc(col: string, id: string, fields) {
  if (!browser) return null

  try {
    log('Updating doc')
    const db = getFirestore(app)

    await updateDocFB(doc(db, col, id), fields)

  } catch (e) { log(e) }
}
