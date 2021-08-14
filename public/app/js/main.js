'use strict';

const LOGIN_MENU_PATH = 'login.html';
const auth = firebase.auth();
const db = firebase.firestore();

const pTitle = document.getElementById('title');
document.getElementById('title').innerHTML = localStorage.getItem('businessName') || 'Equipment Record';


auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  
  try {
    const userDoc = await db.collection('users').doc(user.uid).get();
    const userData = userDoc.data();
    document.getElementById('title').innerHTML = userData.businessName;
  }
  catch (error) {
    console.error(error);
  }

});
