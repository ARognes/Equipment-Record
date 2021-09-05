'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth} from 'firebase/auth';
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { loadImage, getQueryData, searchForItem } from './helpers.js';
import { local, session } from './storage-factory.js';
i

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

const LOGIN_MENU_PATH = 'login.html';
const EQUIPMENT_INFO_MENU = 'equipment-info.html';
let username = null;
let businessID = null;
let equipmentResults = [];

const itemContainer = [...document.getElementsByClassName('item-container')][0];
const search = document.getElementById('search');

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
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
    const queryEquipment = await getDocs(query(collection(db, 'equipment'), where('businessID', '==', businessID)));
    
    // Map and sort query alphabetically
    const data = getQueryData(queryEquipment);
    for (const d of data) await setupEquipment(d);
    if (!data.length) {
      const loader = itemContainer.getElementsByClassName('loader')[0];
      if (loader) loader.remove();
      itemContainer.innerText = 'No equipment found';
    }
    return data;
  }
  catch (error) { console.error(error); }
}

let loadingList = [];
let loadingListLoaded = 0;

async function setupEquipment(data) {

  let imageURL = '../images/temp.svg';
  if (data.imageCount) {
    const refStr = `${ data.businessID }/equipment/${ data.id }/tiny_img_0`;

    // Check localstorage
    imageURL = local.getItem(refStr);
    if (imageURL) return imageURL;
  
    console.log('downloaded image url', refStr);
    const url = await getDownloadURL(storage, ref(refStr));
    local.setItem(ref, url);
    imageURL = url;
  }

  // Create DOM render
  const div = document.createElement('div');
  loadingList.push(div);
  div.setAttribute('id', data.id);
  div.classList.add('item');
  div.classList.add('hidden');
  const img = document.createElement('img');
  img.onload = () => {
    loadingListLoaded++;
    if (loadingListLoaded >= loadingList.length) {
      [...itemContainer.childNodes].forEach(item => item.classList.remove('hidden'));
      const loader = itemContainer.getElementsByClassName('loader')[0];
      if (loader) loader.remove();
    }
  }
  img.src = imageURL;
  div.appendChild(img);
  let innerHTML = 
   `<p class="item-name">${ data.name }</p>
    <div class="item-desc">
      <p>${ data.desc }</p>
    </div>`;
  
  if (data.checkedOutID) innerHTML += `<div class="item-right">${ data.checkedOutName }</div>`;
  innerHTML += `</div>`;
  div.innerHTML += innerHTML;
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
