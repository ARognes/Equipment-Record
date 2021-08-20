'use strict';

import { local, session } from './storage-factory.js';

const LOGIN_MENU_PATH = 'login.html';
const auth = firebase.auth();
const db = firebase.firestore();
let username = null;
let businessID = null;

const divProjectsContainer = document.getElementById('div-projects-container');


auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;
  }
  catch(error) { console.error(error); }
  loadProjects();
});

async function loadProjects() {
  
}