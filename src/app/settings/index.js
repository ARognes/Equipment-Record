'use strict';

import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore, doc, addDoc, getDoc, getDocs, collection, query, where, serverTimestamp } from 'firebase/firestore/lite';
// import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFunctions, httpsCallable } from 'firebase/functions';
// import { compress, blobToImage, cropImage, removeOnKeyboard } from '../global/js/helpers.js';

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
const auth = getAuth(app);
const fun = getFunctions(app);

const LOGIN_MENU_PATH = '../login';   

const btnDeleteAccount = document.getElementById('btn-delete-account');
const btnAdmin = document.getElementById('btn-admin');
const divConfirmation = document.getElementById('div-confirmation');
const btnConfirm = document.getElementById('btn-confirm');
const btnDeny = document.getElementById('btn-deny');

let uid = null;

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }

  uid = user.uid;

});

btnAdmin.onclick = async () => {
  const requestAccessLevel = httpsCallable(fun, 'requestAccessLevel');
  try {
    await requestAccessLevel({ uid, accessLevel: 2 });
  }
  catch (error) { console.error(error); }
}

btnDeleteAccount.onclick = () => {
  divConfirmation.hidden = false;
}

btnDeny.onclick = () => {
  divConfirmation.hidden = true;
}

btnConfirm.onclick = async () => {
  divConfirmation.hidden = true;
  try {

    await auth.currentUser.delete();
    console.log('user removed from auth');
    
  } 
  catch (error) {
    try {

      //const credentials = promptForCredentials();
      // Need a menu to login easily
      await auth.currentUser.reauthenticateWithCredential(credential);
      await auth.currentUser.delete();
      console.log('user removed from auth');
    }
    catch (error2) {
      console.log(error2);
      return;
    }
  }

  // TODO Delete user info from storage

  // Delete user from firestore
  userRef.delete().then(() => {
    // User firestore account deleted
    console.log('user removed from firestore');
  })
  .catch(error => {
    console.log(error);
  });
}