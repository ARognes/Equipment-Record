'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore/lite';

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

const MAIN_MENU_PATH = '../main';
const btnBusinessCode = document.getElementById('btn-business-code');
const businessCode = document.getElementById('business-code');
const divFindBusiness = document.getElementById('find-business');
const btnAddBusiness = document.getElementById('btn-business-add');

auth.onAuthStateChanged(async user => {
  if (!user) return;
  
  const userRef = doc(db, 'users', user.uid); //db.collection('users').doc(user.uid);

  btnBusinessCode.onclick = enterBusinessCode;
  businessCode.onkeydown = (event) => {
    event.code === 'Enter' && enterBusinessCode();
  }
  
  async function enterBusinessCode() {
    const input = businessCode.value;
    console.log(input);
  
    try {
      
      const queryBusinesses = await getDocs(query(collection(db, 'businesses'), where('code', '==', businessCode.value))); //await db.collection('businesses').where('code', '==', businessCode.value).get();
      if (queryBusinesses.docs.length > 0 && queryBusinesses.docs[0] !== null) {
        const businessName = queryBusinesses.docs[0].data().name;
        await setDoc(userRef, { 
          businessName: businessName,
          businessID: queryBusinesses.docs[0].id,
        }, { merge: true });
        console.log('business added');
        // window.localStorage.setItem('businessName', businessName);
        window.location = MAIN_MENU_PATH;
        return;
      }
  
      console.log('No business found');
    } 
    catch (error) { console.log(error) }
  }
  
  btnAddBusiness.onclick = () => {
    console.log('Show create new business menu');
  }

});