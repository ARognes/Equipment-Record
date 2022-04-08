/**
 * Wrapper for firebase or any server(less) service
 * 
 * These are client only
 */

import { browser } from '$app/env'
import { getDocs, getFirestore, where, query, collection, updateDoc, deleteField } from 'firebase/firestore/lite'
import { getBytes, getStorage, ref } from 'firebase/storage'
import { session } from '$lib/storage'
import { app } from '$lib/app'
import { encode } from 'base64-arraybuffer'
import { dev } from '$app/env'


export async function allDocs(businessID: string, col: string) {
  if (!browser) return null
  
  
  let allDocs = session.getItem(col)
  console.log(allDocs)
  if (allDocs) return allDocs
  
  try {
    const db = getFirestore(app)
    const queryDocs = await getDocs(query(collection(db, col),
                                    where('businessID', '==', businessID)))
    allDocs = <any[]> queryDocs.docs.map(doc => {
      const docData = doc.data()
      docData.id = doc.id
      return docData
    })

    session.setItem(col, allDocs)
    if (dev) console.log('hit')
  }
  catch(e) { if (dev) console.error(e) }
  finally { return allDocs }
}

export async function getSRC(equipment, tiny: boolean, i: number): Promise<string> {
  if (!browser) return null

  let img: string = null

  try {
    const storage = getStorage(app)
    if (dev) console.log('Downloading Image')

    const bytes = await getBytes(ref(storage, `${ equipment.businessID }/equipment/${ equipment.id }${tiny ? '/tiny_img_' : '/img_'}${ equipment.imageOrder[i] }`))
    img = `data:image/png;base64,${ encode(bytes) }`

  } catch (e) { if (dev) console.error(e) }
  finally { return img }
}

export async function allSRC(equipment, tiny: boolean): Promise<String[]> {
  if (!browser) return null

  let imgs: string[] = []

  try {
    const storage = getStorage(app)
    if (dev) console.log('Downloading Image')
    
    for (let i in equipment.imageOrder) {
      const bytes = await getBytes(ref(storage, `${ equipment.businessID }/equipment/${ equipment.id }${tiny ? '/tiny_img_' : '/img_'}${ equipment.imageOrder[i] }`))
      imgs.push(`data:image/png;base64,${ encode(bytes) }`)
    }

  } catch (e) { if (dev) console.error(e) }
  finally { return imgs }
}


// export async function adminDocs() {
//   console.log('ADMIN DOCS')

//   // const businessID = '3dzNj3uI0VUa8dLvKlAz'

//   const db = getFirestore(admin)
//   const allEquipment = await getDocs(collection(db, 'equipment'))

//   // Storage: bid/equipment/eid/img_# | tiny_img_#
//   // console.log(allEquipment.docs)

//   allEquipment.docs.forEach(async doc => {

//     try {
      
//       let imageOrder = []

//       for (let i = 0; i < doc.data().imageCount; i++) 
//         imageOrder.push(i)
      
//       console.log('done', imageOrder)
//       await updateDoc(doc.ref, {
//         imageURLs: deleteField(),
//         imageOrder
//       })
//     }
//     catch(e) {  }
//       // if (printOne && imageURLs.length) {
//     //   printOne = false
//     //   console.log(imageURLs[0])
//     //   const arst = await getBytes(imageURLs[0])
//     //   console.log('->', arst)
//     // }

//   })
// }



