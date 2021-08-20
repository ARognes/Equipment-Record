'use strict';

import { local, session } from './storage-factory.js';

const LOGIN_MENU_PATH = 'login.html';
const PROJECT_MENU_PATH = 'projects.html';
const auth = firebase.auth();
const db = firebase.firestore();
let username = null;
let businessID = null;

const btnAddProjectFirestore = document.getElementById('btn-add-project-firestore');


auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;

    btnAddProjectFirestore.onclick = submitProjectFirestore;
  }
  catch(error) { console.error(error); }
});

async function submitProjectFirestore() {
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

    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    const barcode = (Date.now() * 100000 + randomValues[0]) % 1000000000000;

    // Add project to firestore
    const docRef = await db.collection('projects').add({
      name: name,
      desc: desc,
      businessID: businessID,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    window.location = PROJECT_MENU_PATH;
  }
  catch (error) { console.error(error); }
}