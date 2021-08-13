'use strict';

const LOGIN_MENU_PATH = '/public/menus/login.html';
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
    const query = await db.collection('equipment').where('businessID', '==', businessID).get();
    
    const docs = query.docs.map(doc => doc.data());
    docs.sort((a, b) => a.name.localeCompare(b.name));

    docs.forEach(displayEquipment);
    const divEquipment = [...document.getElementsByClassName('div-equipment')];
    divEquipment.forEach(setupEquipment);
  }
  catch (error) { console.error(error); }
}

function displayEquipment(data) {
  console.log(data.name);
  const photoSRC = '../images/temp.png';
  divEquipmentContainer.innerHTML += 
  `<div class="div-equipment">
    <div class="div-equipment-images">
      <img src="${ photoSRC }">
    </div>
    <p class="div-equipment-name">${ data.name }</p>
    <div class="div-equipment-desc">
      <p>${ data.desc }</p>
    </div>
    <button class="btn-equipment-check-out">Check out</button>
    <button class="btn-equipment-history">History</button>
    <button class="btn-equipment-edit">Edit</button>
  </div>`;
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