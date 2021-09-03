'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signOut} from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';


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

const LOGIN_MENU_PATH = 'login.html';
let businessID = null;
let username = null;
const btnSignOut = document.getElementById('btn-sign-out');

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {

    const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;

    btnSignOut.onclick = () => {
      // divConfirmation.hidden = false;
      // btnConfirm.onclick = () => {
        signOut(auth);
        // divConfirmation.hidden = true;
      // }
    }

  }
  catch(error) { console.error(error); }
});


