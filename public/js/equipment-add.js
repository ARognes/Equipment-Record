'use strict';

const EQUIPMENT_MENU_PATH = '/public/menus/equipment.html';
const auth = firebase.auth();
const db = firebase.firestore();

const btnAddEquipmentFirestore = document.getElementById('btn-add-equipment-firestore');

auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }

  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    const userData = userDoc.data();
    const businessID = userData.businessID;

    btnAddEquipmentFirestore.onclick = async () => {
      const name = document.getElementById('name').value;
      const desc = document.getElementById('desc').value;

      if (!name.length) return;

      try {

        // Check if equipment already exists
        const query = await db.collection('equipment').where('name', '==', name).get();
        if (query.docs.length > 0) {
          console.log('name already exists');
          return;
        }

        /*const doc = await db.collection('equipment').doc(eid).get();
        if (doc.exists) {
          console.log('name already exists');
          return;
        }*/

        // Add equipment to firestore
        await db.collection('equipment').doc().set({
          name: name,
          desc: desc,
          photo: null,
          price: 10,
          purchaseDate: null,
          project: null,
          businessID: businessID,
          checkedOut: null,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        window.location = EQUIPMENT_MENU_PATH;
      }
      catch (error) { console.error(error); }
    }
  }
  catch (error) { console.error(error); }
});