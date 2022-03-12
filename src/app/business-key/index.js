'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore/lite';
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
const MAIN_MENU_PATH = '../main';
const btnBusinessCode = document.getElementById('btn-business-code');
const businessCode = document.getElementById('business-code');
const btnAddBusiness = document.getElementById('btn-business-add');
const divHighlight = document.getElementById('highlight-container');
const btnSignOut = document.getElementById('btn-sign-out');

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }

  btnSignOut.onclick = () => signOut(auth);


  const userRef = doc(db, 'users', user.displayName);

  btnBusinessCode.onclick = enterBusinessCode;
  businessCode.onkeydown = (event) => setTimeout(() => inputChange(event), 1);
  function inputChange(event) {
    event.code === 'Enter' && enterBusinessCode();
    businessCode.value = businessCode.value.replace(/[^a-z0-9]/gi,'');
    businessCode.selectionStart = businessCode.selectionEnd = businessCode.value.length;
    [...divHighlight.children].forEach((el, i) => {
      el.classList.replace('highlight-on', 'highlight-off');
      if (i === businessCode.value.length) el.classList.replace('highlight-off', 'highlight-on');
    });
  }
  
  async function enterBusinessCode() {
    const input = businessCode.value.toUpperCase();
    if (input.length !== 6) return;
  
    try {
      
      const queryBusinesses = await getDocs(query(collection(db, 'businesses'), where('code', '==', input))); 
      if (queryBusinesses.docs.length > 0 && queryBusinesses.docs[0] !== null) {
        const businessName = queryBusinesses.docs[0].data().name;
        const businessID = queryBusinesses.docs[0].id;
        await setDoc(userRef, { 
          businessName: businessName,
          businessID: businessID,
        }, { merge: true });

        local.setItem('businessName', businessName);
        local.setItem('businessID', businessID);

        window.location = MAIN_MENU_PATH;
        return;
      }
  
      console.log('No business found');
    } 
    catch (error) { console.log(error) }
  }
  
  btnAddBusiness.onclick = () => {
    console.log('Show create new business menu');
    alert("Not complete");
  }
});