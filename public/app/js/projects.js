'use strict';

import { getQueryData, loadPreviewImage } from './helpers.js';

const LOGIN_MENU_PATH = 'login.html';
const PROJECT_INFO_MENU = 'project-info.html';
const auth = firebase.auth();
const db = firebase.firestore();
let username = null;
let businessID = null;

const itemContainer = [...document.getElementsByClassName('item-container')][0];


auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;
    
    const projects = loadProjects();

  }
  catch(error) { console.error(error); }
});

async function loadProjects() {
  try {
    const query = await db.collection('projects').where('businessID', '==', businessID).get();     
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
