'use strict';

import { local, session } from './storage-factory.js';

const LOGIN_MENU_PATH = 'login.html';
const auth = firebase.auth();
const db = firebase.firestore();

const pTitle = document.getElementById('title');
document.getElementById('title').innerHTML = local.getItem('businessName') || '';


auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  
  try {
    const userDoc = await db.collection('users').doc(user.uid).get();
    const userData = userDoc.data();
    local.setItem('businessName', userData.businessName);
    document.getElementById('title').innerHTML = userData.businessName;
    console.log(userData);
  }
  catch (error) {
    console.error(error);
  }

});
