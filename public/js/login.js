'use strict';

const MAIN_MENU_PATH = '/public/menus/main.html';
const BUSINESS_MENU_PATH = '/public/menus/business-key.html';

const auth = firebase.auth();

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
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    await auth.signInWithEmailAndPassword(email.value, password.value);
  } 
  catch (error) { errorLog.innerHTML = error }
}

btnSignIn.onclick = () => signIn();

btnSignUp.onclick = () => {
  if (!btnSignIn.hidden) return;
  username = name.value;
  errorLog.innerHTML = validatePassword(username, email.value, password.value, confirmPassword.value);
  if (errorLog.innerHTML) return;

  signIn();
}

// Google auth
btnGoogle.onclick = async () => {
  try {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    username = result.additionalUserInfo.profile.name;
  } 
  catch (error) { errorLog.innerHTML = error }
}

auth.onAuthStateChanged(async (user) => {
  if (!user) {
    errorLog.innerHTML = 'Something went wrong... Please reload the page';
    return;
  }

  const db = firebase.firestore();
  const userRef = db.collection('users').doc(user.uid);
  window.localStorage.setItem('username', user.name);

  try {
    // Check if user exists in firestore
    const userDoc = await userRef.get();
    const userData = userDoc.data();

    // Add user to firestore
    if (!userDoc.exists) {  
      await userRef.set({
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
    const businessID = userData.businessID;
    let businessDoc = null;
    if (typeof businessID === 'string' && businessID !== '') businessDoc = await db.collection('businesses').doc(businessID).get();
    if (!businessDoc || !businessDoc.exists) window.location = BUSINESS_MENU_PATH;
    else window.location = MAIN_MENU_PATH;
    window.localStorage.setItem('businessName', userData.businessName);
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