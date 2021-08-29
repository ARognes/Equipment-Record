'use strict';

const LOGIN_MENU_PATH = 'login.html';   
const auth = firebase.auth();
const db = firebase.firestore();
let businessID = null;
let username = null;
const btnSignOut = document.getElementById('btn-sign-out');

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;

    btnSignOut.onclick = () => {
      // divConfirmation.hidden = false;
      // btnConfirm.onclick = () => {
        auth.signOut();
        // divConfirmation.hidden = true;
      // }
    }

  }
  catch(error) { console.error(error); }
});


