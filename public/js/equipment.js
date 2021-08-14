'use strict';

const LOGIN_MENU_PATH = 'login.html';
const auth = firebase.auth();
const db = firebase.firestore();

const divEquipmentContainer = document.getElementById('div-equipment-container');

const equipmentDivs = [];

auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  loadEquipment();
});

// TODO: only load x amount of data at a time
async function loadEquipment() {
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    const businessID = userDoc.data().businessID;
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
        try {
          const url = await storageRef.child(docs[i].id + '/tiny_img_' + j).getDownloadURL();
          docs[i].imageURLs.push(url);
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
    const divEquipment = [...document.getElementsByClassName('div-equipment')];
    divEquipment.forEach(setupEquipment);
  }
  catch (error) { console.error(error); }
}

function displayEquipment(data) {
  let div = 
  `<div class="div-equipment">
    <div class="div-equipment-images">`;
  
  data.imageURLs.forEach(url => {
    div += `<img src="${ url }">`;
    
  });

  div += 
    `</div>
    <p class="div-equipment-name">${ data.name }</p>
    <div class="div-equipment-desc">
      <p>${ data.desc }</p>
    </div>
    <button class="btn-equipment-check-out">Check out</button>
    <button class="btn-equipment-history">History</button>
    <button class="btn-equipment-edit">Edit</button>
  </div>`;
  divEquipmentContainer.innerHTML += div;
}

function setupEquipment(div) {
  const divImages = div.children[0];
  const btnCheckOut = div.children[3];
  const btnHistory = div.children[4];
  const btnEdit = div.children.length > 4 ? div.children[5] : null;
  
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

  btnCheckOut.onclick = stopProp;
  btnHistory.onclick = stopProp;
  if (btnEdit) btnEdit.onclick = stopProp;
}

// Don't click through buttons and activate div-equipment
function stopProp(event) {
  if (!event) event = window.event;
  event.stopPropagation();
}