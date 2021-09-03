'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { local, session } from './storage-factory.js';

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

const MAIN_MENU_PATH = 'main.html';
const BUSINESS_MENU_PATH = 'business-key.html';

const pSignUp = document.getElementById('p-sign-up');
const divSignUp = document.getElementById('div-sign-up');
const pSignIn = document.getElementById('p-sign-in');
const divSignIn = document.getElementById('div-sign-in');
const btnSignIn = document.getElementById('btn-signIn');
const btnSignUp = document.getElementById('btn-signUp');
const btnGoogle = document.getElementById('btn-google');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorLog = document.getElementById('errors');

let username = '';

email.onkeydown = enterPassword;
password.onkeydown = enterPassword;
confirmPassword.onkeydown = enterPassword;

function enterPassword(event) {
  if (event.code === 'Enter') {
    if (btnSignIn.hidden) btnSignUp.click();
    else btnSignIn.click();
  }
}

divSignUp.onclick = () => {
    btnSignIn.hidden = true;
    btnSignUp.hidden = false;
    confirmPassword.hidden = false;
    name.hidden = false;
    btnGoogle.innerHTML = 'Sign up with Google';
    pSignUp.hidden = true;
    pSignIn.hidden = false;
}

divSignIn.onclick = () => {
  btnSignIn.hidden = false;
  btnSignUp.hidden = true;
  confirmPassword.hidden = true;
  name.hidden = true;
  btnGoogle.innerHTML = 'Sign in with Google';
  pSignUp.hidden = false;
  pSignIn.hidden = true;
}

async function signIn() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, email.value, password.value);
  } 
  catch (error) { errorLog.innerHTML = error }
}

btnSignIn.onclick = () => signIn();

btnSignUp.onclick = async () => {
  if (!btnSignIn.hidden) return;
  username = name.value;
  errorLog.innerHTML = validatePassword(username, email.value, password.value, confirmPassword.value);
  if (errorLog.innerHTML) return;

  try {
    await setPersistence(auth, browserLocalPersistence);
    await createUserWithEmailAndPassword(auth, email.value, password.value);
  }
  catch (error) { errorLog.innerHTML = error }

  // signIn();
}

// Google auth
btnGoogle.onclick = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    username = result.additionalUserInfo.profile.name;
  } 
  catch (error) { errorLog.innerHTML = error }
}

auth.onAuthStateChanged(async user => {
  if (!user) {
    errorLog.innerHTML = 'Something went wrong... Please reload the page';
    return;
  }

  const userRef = doc(db, 'users', user.uid);
  local.setItem('username', user.name);

  try {
    // Check if user exists in firestore
    const userDoc = await getDoc(userRef);

    // Add user to firestore
    if (!userDoc.exists) {  
      await setDoc(userRef, {
        businessID: '',
        businessName: '',
        name: username,
        phone: null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      window.location = BUSINESS_MENU_PATH;
      return;
    }
    
    // TODO This should be a firebase function, don't show user the business information
    // Check if a business on firestore is associated with this user
    const businessID = userDoc.data().businessID;
    let businessDoc = null;
    if (typeof businessID === 'string' && businessID !== '') businessDoc = await getDoc(doc(db, 'businesses', businessID)); //db.collection('businesses').doc(businessID).get();
    if (!businessDoc || !businessDoc.exists) window.location = BUSINESS_MENU_PATH;
    else window.location = MAIN_MENU_PATH;
    local.setItem('businessName', userDoc.data().businessName);
  } 
  catch (error) { errorLog.innerHTML = error };
});

function validatePassword(username, email, p, cp) {
  if (username.length < 1) return "Please enter your name";
  if (email.length < 3) return "Please enter your email";  
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) return "Please enter a valid email";
  if (p.length < 8) return "Your password must be at least 8 characters"; 
  if (p.search(/[a-z]/i) < 0) return "Your password must contain at least one letter"; 
  if (p.search(/[0-9]/) < 0) return "Your password must contain at least one digit"; 
  if (p.search(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/) < 0) return "Your password must contain at least one special character"; 
  if (p !== cp) return "Your passwords do not match";
  return "";
}