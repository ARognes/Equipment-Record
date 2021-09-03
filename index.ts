import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

export const addEquipment = functions.https.onCall( async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Not signed in');
  

  try {
    if (await checkIfNameExists(data.businessID, data.name, 'equipment')) throw new functions.https.HttpsError('already-exists', 'Name already exists');

    // Generate random barcode
    const barcode = (Date.now() + Math.floor(Math.random() * 1000000000000)) % 1000000000000;

    const docRef = await db.collection('equipment').add({
      name: data.name,
      desc: data.desc,
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

    return { equipmentID: docRef.id };
  }
  catch(error) { console.log(error); }
  return;

  // Add equipment to firestore
  // return new Promise(async (resolve, reject) => {
  //   try {
  //     const docRef = await db.collection('equipment').add({
  //       name: data.name,
  //       desc: data.desc,
  //       imageCount: Math.min(data.imageCount, 5),
  //       price: data.price,
  //       purchaseDate: data.purchaseDate,
  //       project: null,
  //       businessID: data.businessID,
  //       checkedOutID: null,
  //       checkedOutName: null,
  //       barcode,
  //       createdAt: admin.firestore.FieldValue.serverTimestamp()
  //     });
  //     if (!docRef) reject('Equipment not added');

  //     resolve({ equipmentID: docRef.id });
  //   }
  //   catch(error) { reject(error); }
  //   reject();
  // });
});


async function checkIfNameExists(businessID: string, name: string, collection: string) {
  const query = await db.collection(collection).where('name', '==', name).where('businessID', '==', businessID).get();
  if (query.docs.length > 0) return true;
  return false;
}