import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

/**
 * Set user access level
 */
export const requestAccessLevel = functions.https.onCall( async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Not signed in');

  functions.logger.info(data);

  const customClaims = { accessLevel: data.accessLevel };
  await admin.auth().setCustomUserClaims(data.uid, customClaims);

  functions.logger.info(data);
});

// Set user access level on sign up
// export const processSignUp = functions.auth.user().onCreate(async (user) => {

//   functions.logger.info(user);

//   const customClaims = { accessLevel: 2 };
//   await admin.auth().setCustomUserClaims(user.uid, customClaims);

//   functions.logger.info(user);


  // Check if user meets role criteria.
  // if (
  //   user.email &&
  //   user.email == 'test3@gmail.com'
  //   // user.emailVerified
  // ) {
  //   const customClaims = { accessLevel: 2 };

    
  //   try {
  //     // Set custom user claims on this newly created user.
  //     await admin.auth().setCustomUserClaims(user.uid, customClaims);
  //     console.log('done');

  //     // Update real-time database to notify client to force refresh.
  //     // const metadataRef = getDatabase().ref('metadata/' + user.uid);

  //     // Set the refresh time to the current UTC timestamp.
  //     // This will be captured on the client to force a token refresh.
  //     // await  metadataRef.set({refreshTime: new Date().getTime()});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
// });


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
