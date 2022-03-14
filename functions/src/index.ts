import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();


/**
 * Add equipment to firestore
 */
export const addEquipment = functions.https.onCall( async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Not signed in');
  
  if (await checkIfNameExists(data.businessID, data.name, 'equipment')) throw new functions.https.HttpsError('already-exists', 'Name already exists');

  // Generate random barcode
  const barcode = (Date.now() + Math.floor(Math.random() * 1000000000000)) % 1000000000000;

  const docRef = await db.collection('equipment').add({
    name: data.name,
    desc: data.desc,
    tags: data.tags,
    imageCount: Math.min(data.imageCount, 5),
    price: data.price,
    purchaseDate: data.purchaseDate,
    project: null,
    businessID: data.businessID,
    checkedOutID: null,
    checkedOutName: null,
    barcode,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  return docRef.id;
});


async function checkIfNameExists(businessID: string, name: string, collection: string) {
  const query = await db.collection(collection).where('name', '==', name).where('businessID', '==', businessID).get();
  if (query.docs.length > 0) return true;
  return false;
}
