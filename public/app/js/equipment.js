'use strict';

import { loadPreviewImage, getQueryData, searchForItem } from './helpers.js';

const LOGIN_MENU_PATH = 'login.html';
const EQUIPMENT_INFO_MENU = 'equipment-info.html';
const auth = firebase.auth();
const db = firebase.firestore();
let username = null;
let businessID = null;
let equipmentResults = [];

const itemContainer = [...document.getElementsByClassName('item-container')][0];
const search = document.getElementById('search');

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;
    search.value = '';

    equipmentResults = await loadEquipment();

  }
  catch(error) { console.error(error); }
});

// TODO: only load x amount of data at a time
async function loadEquipment() {
  try {
    const query = await db.collection('equipment').where('businessID', '==', businessID).get();
    
    // Map and sort query alphabetically
    const data = getQueryData(query);
    for (const d of data) await setupEquipment(d);
    return data;
  }
  catch (error) { console.error(error); }
}

async function setupEquipment(data) {

  // Load icon image
  const imageURL = await loadPreviewImage(data);

  // Create DOM render
  let div = document.createElement('div');
  div.setAttribute('id', data.id);
  div.classList.add('item');
  let innerHTML = 
  `<img src="${ imageURL }">
    <p class="item-name">${ data.name }</p>
    <div class="item-desc">
      <p>${ data.desc }</p>
    </div>`;
  
  if (data.checkedOutID) innerHTML += `<div class="item-right">${ data.checkedOutName }</div>`;
  innerHTML += `</div>`;
  div.innerHTML = innerHTML;
  itemContainer.appendChild(div);

  // Link div to info page
  const jsDiv = document.getElementById(data.id);
  jsDiv.onclick = () => window.location = EQUIPMENT_INFO_MENU + `?id=${ data.id }&name=${ data.name }`;
}

search.onkeydown = () => searchForItem(search, equipmentResults);

// const baseMenu = document.getElementById('base-menu');
// const btnEquipmentAdd = document.getElementById('btn-equipment-add');

// Remove base menu if keyboard is up
// search.onfocus = () => {
//   baseMenu.style.height = 0;
//   btnEquipmentAdd.hidden = true;
// }

// search.onblur = () => {
//   baseMenu.style.height = 'auto';
//   btnEquipmentAdd.hidden = false;
// }
