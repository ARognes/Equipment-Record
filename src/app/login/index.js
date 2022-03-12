/**
 * local: username, businessName, businessID all set here if known
 * 
 * 
 * 
 * 
 * 
 */

'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, updateProfile, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp} from 'firebase/firestore/lite';
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

const MAIN_MENU_PATH = '../main';
const BUSINESS_KEY_PATH = '../business-key';

const header = document.getElementById('header');
const view = document.getElementById('view');
const pSignUp = document.getElementById('p-sign-up');
const divRegister = document.getElementById('link-sign-up');
const pSignIn = document.getElementById('p-sign-in');
const divSignIn = document.getElementById('link-sign-in');
const btnSignIn = document.getElementById('btn-sign-in');
const btnRegister = document.getElementById('btn-register');
const btnGoogle = document.getElementById('btn-google');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const forgot = document.getElementById('forgot');
const divCaptcha = document.getElementById('div-captcha');
const errorLog = document.getElementById('errors');

let usernameVal = '';

view.onclick = () => setPasswordView(password.type === 'text');
function setPasswordView(bool) {
  if (bool) {
    password.type = 'password';
    confirmPassword.type = 'password';
    view.src = '../global/images/view.svg';
  }
  else {
    password.type = 'text';
    confirmPassword.type = 'text';
    view.src = '../global/images/hide.svg';
  }
}

email.onkeydown = enterPassword;
password.onkeydown = enterPassword;
confirmPassword.onkeydown = enterPassword;

function enterPassword(event) {
  if (event.code === 'Enter') {
    if (btnSignIn.hidden) btnRegister.click();
    else btnSignIn.click();
  }
}

divRegister.onclick = () => {
  btnSignIn.hidden = true;
  btnRegister.hidden = false;
  header.innerText = 'Register';
  divCaptcha.hidden = false;
  confirmPassword.parentElement.hidden = false;
  username.parentElement.hidden = false;
  email.placeholder = 'Email';
  forgot.hidden = true;
  pSignUp.hidden = true;
  pSignIn.hidden = false;
  setPasswordView(false);
}

divSignIn.onclick = () => {
  btnSignIn.hidden = false;
  btnRegister.hidden = true;
  header.innerText = 'Sign In';
  divCaptcha.hidden = true;
  confirmPassword.parentElement.hidden = true;
  username.parentElement.hidden = true;
  email.placeholder = 'Username or Email';
  forgot.hidden = false;
  pSignUp.hidden = false;
  pSignIn.hidden = true;
  setPasswordView(true);
}

btnSignIn.onclick = signIn;
btnRegister.onclick = register;
btnGoogle.onclick = fbAuth;

async function signIn() {
  try {

    await setPersistence(auth, browserLocalPersistence);
    let emailVal = email.value;

    // Get user email from username
    if (!stringIsEmail(email.value)) {
      const emailDoc = await getDoc(doc(db, 'users', email.value));
      if (emailDoc.exists()) emailVal = emailDoc.data().email;
    }

    await signInWithEmailAndPassword(auth, emailVal, password.value);
  } 
  catch (error) { errorLog.innerText = error; }
}

async function register() {
  if (!btnSignIn.hidden) return;
  if (!grecaptcha.getResponse().length) return errorLog.innerText = 'Please verify with reCAPTCHA';
  usernameVal = username.value;
  errorLog.innerText = validatePassword(usernameVal, email.value, password.value, confirmPassword.value);
  if (errorLog.innerText) return;

  try {
    const userDoc = await getDoc(doc(db, 'users', usernameVal));
    if (userDoc.exists()) {
      errorLog.innerText = 'Username already taken';
      return;
    }

    await setPersistence(auth, browserLocalPersistence);
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    await updateProfile(auth.currentUser, { displayName: usernameVal });
    await sendEmailVerification(auth.currentUser);
  }
  catch (error) { errorLog.innerText = 'Email already in use' }
}

async function fbAuth() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    usernameVal = result.user.displayName;
  } 
  catch (error) { console.error(error); errorLog.innerText = 'Unable to login with Google'; }
}

auth.onAuthStateChanged(async user => {
  if (!user) return;

  const userRef = doc(db, 'users', usernameVal || user.displayName);
  local.setItem('username', usernameVal);

  try {
    // Check if user exists in firestore
    const userDoc = await getDoc(userRef);

    // Add user to firestore
    if (!userDoc.exists()) { 
      await setDoc(userRef, {
        businessID: '',
        businessName: '',
        uid: user.uid,
        email: user.email,
        phone: null,
        createdAt: serverTimestamp()
      });
      window.location = BUSINESS_KEY_PATH;
      return;
    }
    
    let businessDoc = null;
    const businessID = userDoc.data().businessID;
    local.setItem('businessName', userDoc.data().businessName);
    local.setItem('businessID', businessID);

    // If user isn't associated with any business, send to business code page, else main menu
    if (typeof businessID === 'string' && businessID !== '') businessDoc = await getDoc(doc(db, 'businesses', businessID));
    if (!businessDoc || !businessDoc.exists) window.location = BUSINESS_KEY_PATH;
    else window.location = MAIN_MENU_PATH;
  } 
  catch (error) { 
    console.error(error);
    errorLog.innerText = 'Something went wrong... Please try again later';
   };
});

function validatePassword(username, email, p, cp) {
  if (username.length < 1) return "Please enter your name";
  if (email.length < 3) return "Please enter your email";  
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) return "Please enter a valid email";
  if (p.length < 12) return "Your password must be at least 12 characters"; 
  if (p.search(/[a-z]/i) < 0) return "Your password must contain at least one letter"; 
  if (p.search(/[0-9]/) < 0) return "Your password must contain at least one digit"; 
  //if (p.search(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/) < 0) return "Your password must contain at least one special character"; 
  if (p !== cp) return "Your passwords do not match";
  return "";
}

function stringIsEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
