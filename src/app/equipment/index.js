'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth} from 'firebase/auth';
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getQueryData, searchForItem } from '../global/js/helpers.js';
import { local, session } from '../global/js/storage-factory.js';

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
const storage = getStorage(app);

const LOGIN_MENU_PATH = '../login';
const EQUIPMENT_INFO_MENU = '../equipment-info';
let equipmentResults = [];

const itemContainer = [...document.getElementsByClassName('item-container')][0];
const search = document.getElementById('search');

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await getDoc(doc(db, 'users', user.displayName));
    const businessID = userDoc.data().businessID;
    search.value = '';

    equipmentResults = await loadEquipment(businessID);

  }
  catch(error) { console.error(error); }
});

// TODO: only load x amount of data at a time
async function loadEquipment(businessID) {
  try {
    const queryEquipment = await getDocs(query(collection(db, 'equipment'), where('businessID', '==', businessID)));
    
    // Map and sort query alphabetically
    const dataArray = getQueryData(queryEquipment);

    // Setup skeleton equipment divs
    dataArray.forEach(data => {
      data.div = document.createElement('div');
      data.div.setAttribute('id', data.id);
      data.div.classList.add('item');
    });

    // Setup all equipment concurrently
    await Promise.allSettled(dataArray.map(setupEquipment));
    
    // Display equipment divs
    dataArray.forEach(data => itemContainer.appendChild(data.div));

    // Remove loader
    const loader = itemContainer.getElementsByClassName('loader')[0];
    if (loader) loader.remove();
    if (!dataArray.length) itemContainer.innerText = 'No equipment found';

    return dataArray;
  }
  catch (error) { console.error(error); }
}

async function setupEquipment(data) {
  let imageURL = '../global/images/temp.svg';
  if (data.imageCount) {
    try {
      const refStr = `${ data.businessID }/equipment/${ data.id }/tiny_img_0`;

      // Check localstorage
      imageURL = local.getItem(refStr);
      if (!imageURL) {
        console.log('downloaded image url for', data.name);
        const url = await getDownloadURL(ref(storage, refStr));
        local.setItem(ref, url);
        imageURL = url;
      }
    }
    catch(error) { imageURL = '../global/images/temp.svg'; }
  }

  // Create DOM render
  const img = await loadImageSrc(imageURL);
  data.div.appendChild(img);
  let innerHTML = 
  `<p class="item-name">${ data.name }</p>
    <div class="item-desc">
      <p>${ data.desc }</p>
    </div>`;
  
  if (data.checkedOutName) innerHTML += `<div class="item-right">${ data.checkedOutName }</div>`;
  innerHTML += `</div>`;
  data.div.innerHTML += innerHTML;

  // Link div to its info page
  data.div.onclick = () => window.location = EQUIPMENT_INFO_MENU + `?id=${ data.id }&name=${ data.name }`;
  return data.div;
}

search.onkeydown = () => searchForItem(search, equipmentResults);

function loadImageSrc(imageURL) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => resolve(img);
    img.src = imageURL;
  });
}

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
