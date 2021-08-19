'use strict';

import { local, session } from './storage-factory.js';

const LOGIN_MENU_PATH = 'login.html';
const auth = firebase.auth();
const db = firebase.firestore();
let username = null;
let businessID = null;

const divEquipmentContainer = document.getElementById('div-equipment-container');


auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;
  }
  catch(error) { console.error(error); }
  loadEquipment();
});

// TODO: only load x amount of data at a time
async function loadEquipment() {
  try {
    const storageRef = firebase.storage().ref(businessID + '/equipment/');
    const query = await db.collection('equipment').where('businessID', '==', businessID).get();
    
    // Map and sort query
    const docs = query.docs.map(doc => {
      let data = doc.data();
      data.id = doc.id;
      return data;
    });
    docs.sort((a, b) => a.name.localeCompare(b.name));

    // Download image urls
    for (let i = 0; i < docs.length; i++) {
      docs[i].imageURLs = [];

      for (let j = 0; j < docs[i].imageCount; j++) {
        const imageName = docs[i].id + '/tiny_img_' + j;

        // Check localstorage
        const url = local.getItem(imageName);
        if (url) {
          docs[i].imageURLs.push(url);
          continue;
        }

        try {
          console.log('downloaded image urls');
          const url = await storageRef.child(imageName).getDownloadURL();
          docs[i].imageURLs.push(url);
          local.setItem(imageName, url);
        }
        catch (error) {
          if (error.code === 'storage/object-not-found') j = docs[i].imageCount;
          else throw error;
        }
      }
      if (!docs[i].imageURLs.length) docs[i].imageURLs.push('../images/temp.png');
    }

    // Display and setup equipment
    docs.forEach(displayEquipment);
    docs.forEach(setupEquipment);
    //const divEquipment = [...document.getElementsByClassName('div-equipment')];
    //divEquipment.forEach(setupEquipment);
  }
  catch (error) { console.error(error); }
}

function displayEquipment(data) {
  let div = 
  `<div id="${ data.id }" class="div-equipment">
    <div class="div-equipment-images">`;
  
  data.imageURLs.forEach(url => {
    div += `<img src="${ url }">`;
  });

  div += 
    `</div>
    <p class="div-equipment-name">${ data.name }</p>
    <div class="div-equipment-desc">
      <p>${ data.desc }</p>
    </div>`;
  
  if (!data.checkedOutID) div += `<button class="btn-equipment-check-out">Check out</button>`;
  else if (data.checkedOutID === auth.currentUser.uid) div += `<button class="btn-equipment-check-in">Check in</button>`;
  else div += `<div class="btn-equipment-check-out">${ data.checkedOutName }</div>`;

  div += 
    `<button class="btn-equipment-history">History</button>
    <button class="btn-equipment-edit">Edit</button>
  </div>`;
  divEquipmentContainer.innerHTML += div;
}

function setupEquipment(data) {
  const div = document.getElementById(data.id);
  const divImages = div.getElementsByClassName('div-equipment-images')[0];
  const btnCheckOut = div.getElementsByClassName('btn-equipment-check-out')[0];
  const btnCheckIn = div.getElementsByClassName('btn-equipment-check-in')[0];
  const btnHistory = div.getElementsByClassName('btn-equipment-history')[0];
  const btnEdit = div.getElementsByClassName('btn-equipment-edit')[0];
  
  div.onclick = () => {
    if (div.classList.contains('div-equipment-active')) {
      div.classList.remove('div-equipment-active');
      divImages.style.overflow = 'hidden';
      divImages.scrollTop = 0;
    } else {
      div.classList.add('div-equipment-active');
      divImages.style.overflow = 'auto';
    }
  }

  if (btnCheckOut) btnCheckOut.onclick = async () => {
    stopProp();
    try {
      await db.collection('equipment').doc(data.id).update({ checkedOutID: auth.currentUser.uid, checkedOutName: username });
      location.reload();
    }
    catch(error) { console.error(error); }
  }

  if (btnCheckIn) btnCheckIn.onclick = async () => {
    stopProp();
    try {
      await db.collection('equipment').doc(data.id).update({ checkedOutID: null, checkedOutName: null });
      location.reload();
    }
    catch(error) { console.error(error); }
  }

  if (btnHistory) btnHistory.onclick = stopProp;
  if (btnEdit) btnEdit.onclick = stopProp;
}

// Don't click through buttons and activate div-equipment
function stopProp(event) {
  if (!event) event = window.event;
  event.stopPropagation();
}