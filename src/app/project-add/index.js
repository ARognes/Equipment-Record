'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore/lite';
import { local, session } from '../global/js/storage-factory.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAH4i8ugZfZMlbBTruvXJa4DSKaj361U6c',
  authDomain: 'equipment-record-7aed6.firebaseapp.com',
  projectId: 'equipment-record-7aed6',
  storageBucket: 'equipment-record-7aed6.appspot.com',
  messagingSenderId: '142864501598',
  appId: '1:142864501598:web:59f7f61dd863cfba0e9dcf',
  measurementId: 'G-JHE1LXPNQ9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const LOGIN_MENU_PATH = '../login';
const PROJECT_MENU_PATH = '../projects';
let username = null;
let businessID = null;

const btnAddProjectFirestore = document.getElementById('btn-add-project-firestore');


auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
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
    const queryNames = await getDocs(query(collection(db, 'equipment'), where('name', '==', name))); //db.collection('equipment').where('name', '==', name).get();
    if (queryNames.docs.length > 0) {
      console.log('name already exists');
      return;
    }

    // Add project to firestore
    await addDoc(collection(db, 'projects'), {
      name: name,
      desc: desc,
      imageCount: 0,
      color: null,
      businessID: businessID,
      equipment: [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    window.location = PROJECT_MENU_PATH;
  }
  catch (error) { console.error(error); }
}