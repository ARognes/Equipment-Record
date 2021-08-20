'use strict';

import { local, session } from './storage-factory.js';

const LOGIN_MENU_PATH = 'login.html';
const EQUIPMENT_INFO_MENU = 'equipment-info.html';
const auth = firebase.auth();
const db = firebase.firestore();
let username = null;
let businessID = null;
let equipmentResults = [];

const divEquipmentContainer = document.getElementById('div-equipment-container');
const search = document.getElementById('search');


auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;

    equipmentResults = await loadEquipment();

  }
  catch(error) { console.error(error); }
});

// TODO: only load x amount of data at a time
async function loadEquipment() {
  try {
    const storageRef = firebase.storage().ref(businessID + '/equipment/');
    const query = await db.collection('equipment').where('businessID', '==', businessID).get();
    
    // Map and sort query alphabetically
    const docs = query.docs.map(doc => {
      let data = doc.data();
      data.id = doc.id;
      return data;
    });
    docs.sort((a, b) => a.name.localeCompare(b.name));

    // Download image url
    for (let i = 0; i < docs.length; i++) {
      if (docs[i].imageCount <= 0) {
        docs[i].imageURL = '../images/temp.png';
        continue;
      }

      const imageName = `${docs[i].id}/tiny_img_0`;

      // Check localstorage
      docs[i].imageURL = local.getItem(imageName);
      if (docs[i].imageURL) continue;

      try {
        console.log('downloaded image url');
        docs[i].imageURL = await storageRef.child(imageName).getDownloadURL();
        local.setItem(imageName, docs[i].imageURL);
      }
      catch (error) { console.error(error); }
    }

    // Display and setup equipment
    docs.forEach(setupEquipment);
    //return docs.map(setupEquipment);
    return docs;
  }
  catch (error) { console.error(error); }
}

function setupEquipment(data) {
  let div = document.createElement('div');
  div.setAttribute('id', data.id);
  div.classList.add('div-equipment');
  //div.innerHTML = 
  let innerHTML = 
  `<img src="${ data.imageURL }">
    <p class="div-equipment-name">${ data.name }</p>
    <div class="div-equipment-desc">
      <p>${ data.desc }</p>
    </div>`;
  
  if (data.checkedOutID) innerHTML += `<div class="div-equipment-assignment">${ data.checkedOutName }</div>`;
  innerHTML += `</div>`;
  div.innerHTML = innerHTML;
  divEquipmentContainer.appendChild(div);

  const jsDiv = document.getElementById(data.id);
  jsDiv.onclick = () => window.location = EQUIPMENT_INFO_MENU + `?id=${ data.id }&name=${ data.name }`;
}

// Don't click through buttons and activate div-equipment
function stopProp(event) {
  if (!event) event = window.event;
  event.stopPropagation();
}

let searchMode = 'alphabetical';
search.onkeydown = async e => {
  if (e.code === 'Enter') console.log('search', search.value);

  const value = await waitForValue();

  if (value.length < 1) {
    equipmentResults.forEach(data => {
      const div = document.getElementById(data.id);
      div.hidden = false;
      div.getElementsByClassName('div-equipment-name')[0].innerText = data.name;
    });
  }
  else {
    equipmentResults.forEach(data => {
      const div = document.getElementById(data.id);
      if (!data.name.toUpperCase().includes(value)) div.hidden = true;
      else {
        div.hidden = false;
        let name = div.getElementsByClassName('div-equipment-name')[0];
        name.innerHTML = data.name.replace(new RegExp(value, "gi"), match => `<mark>${match}</mark>`);
      }
    });
  }
}

async function waitForValue() {
  return new Promise(resolve => {
    let value = search.value;
    (function wait() {
    if (value !== search.value) return resolve(search.value.toUpperCase());
    setTimeout(wait, 30);
    })();
  });
}