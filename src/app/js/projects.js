'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { getStorage, ref } from 'firebase/storage';
import { getQueryData, loadPreviewImage } from './helpers.js';
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
// const storage = getStorage(app);

const LOGIN_MENU_PATH = 'login.html';
const PROJECT_INFO_MENU = 'project-info.html';
let username = null;
let businessID = null;

const itemContainer = [...document.getElementsByClassName('item-container')][0];


auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;
    
    const projects = loadProjects();

  }
  catch(error) { console.error(error); }
});

async function loadProjects() {
  try {
    const query = await getDocs(query(collection(db, 'projects'), where('businessID', '==', businessID))); //db.collection('projects').where('businessID', '==', businessID).get();     
    if (!query.docs.length) return;
    const data = getQueryData(query);
    data.forEach(setupProject);
    return data;
  }
  catch(error) { console.error(error); }
}

function setupProject(data) {

  // Load icon image
  const imageURL = loadPreviewImage(data);

  // Render to DOM
  let div = document.createElement('div');
  div.setAttribute('id', data.id);
  div.classList.add('item');
  let innerHTML = 
  `<img src="${ imageURL }">
    <p class="item-name">${ data.name } (${ data.equipment.length })</p>
    <div class="item-desc">
      <p>${ data.desc }</p>
    </div>
  </div>`;

  div.innerHTML = innerHTML;
  itemContainer.appendChild(div);

  const jsDiv = document.getElementById(data.id);
  jsDiv.onclick = () => window.location = PROJECT_INFO_MENU + `?id=${ data.id }&name=${ data.name }`;

}
