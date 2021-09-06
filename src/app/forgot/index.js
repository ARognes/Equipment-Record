'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

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

const btnSubmit = document.getElementById('btn-submit');
const email = document.getElementById('email');


btnSubmit.onclick = async () => {
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) return 'Please enter a valid email';
  if (!grecaptcha.getResponse().length) return 'Please fill out the reCaptcha';
  sendPasswordResetEmail(auth, email.value);

  btnSubmit.remove();
  email.parentElement.remove();
  document.getElementById('div-captcha').remove();
  document.getElementById('btn-cancel').innerText = 'Continue';
  document.getElementById('header').innerText = 'Email Sent';
}
