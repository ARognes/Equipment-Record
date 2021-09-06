'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
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
const EQUIPMENT_IMAGES_MAX = 10;
let businessID = null;
let parameters = new URLSearchParams(window.location.search);
let equipmentID = parameters.get('id');
let equipmentName = parameters.get('name');

const title = document.getElementById('title');
title.innerText = equipmentName;
const divImages = document.getElementById('div-images');
const divImageBtns = document.getElementById('div-images-buttons');
const desc = document.getElementById('desc');

document.body.scrollTop = window.innerWidth;

let images = checkCachedImages();
populateImages(images);

divImages.addEventListener('scroll', () => {
  const index = Math.round(divImages.scrollLeft / window.innerWidth);
  const buttons = [...document.getElementsByClassName('btn-image-inactive')];
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('btn-image-active');
  }
  buttons[index].classList.add('btn-image-active');
});


document.body.addEventListener('scroll', () => {
  divImages.style.top = -document.body.scrollTop / 2 + 'px';
});


auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid)); //db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    // username = userDoc.data().name;
    
    const equipmentData = await getEquipmentData();

    // Load temp
    if (equipmentData.imageCount === 0) {
      while (divImages.firstChild) divImages.removeChild(divImages.firstChild);
      while (divImageBtns.firstChild) divImages.removeChild(divImageBtns.firstChild);
      populateImages(null);
    }
    else {

      // Download small blurred images
      if (images.length !== equipmentData.imageCount) {
        console.log('reloading tiny images');
        images = await downloadImages(equipmentData.imageCount, 'tiny_img');
        while (divImages.firstChild) divImages.removeChild(divImages.firstChild);
        while (divImageBtns.firstChild) divImages.removeChild(divImageBtns.firstChild);
        populateImages(images);
      }

      // Download full sized images
      images = await downloadImages(equipmentData.imageCount, 'img');
      [...divImages.children].forEach((img, i) => {
        if (i < images.length) {
          img.src = images[i];
          img.addEventListener('load', () => {
            img.style.filter = null;
          });
        }
      });
    }
    
   

    desc.innerText = equipmentData.desc;

  }
  catch(error) { console.error(error); }
});


async function getEquipmentData() {
  try {
    const equipmentDoc = await getDoc(doc(db, 'equipment', equipmentID)); //db.collection('equipment').doc(equipmentID).get();
    const equipmentData = equipmentDoc.data();
    equipmentData.id = equipmentDoc.id;
    return equipmentData;
  }
  catch(error) { console.error(error); }
}

function populateImages(images) {
  if (!images) {
    const img = document.createElement('img');
    divImages.appendChild(img);
    img.src = '../global/images/temp.svg';
    return;
  }
  if (!images.length) {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    divImages.appendChild(loader);
    return;
  }
  images.forEach((url, i) => {
    const img = document.createElement('img');
    divImages.appendChild(img);
    img.src = url;
    img.style.filter = "blur(16px)";
    if (images.length === 1) return;
    const btnImage = document.createElement('div');
    btnImage.classList.add('btn-image-inactive');
    divImageBtns.appendChild(btnImage);
    btnImage.onclick = () => {
      [...document.getElementsByClassName('btn-image-active')].forEach(btn => btn.classList.remove('btn-image-active'));
      img.scrollIntoView({ behavior: 'smooth' });
    }
  });
  [...document.getElementsByClassName('btn-image-inactive')][0]?.classList.add('btn-image-active');
}


function checkCachedImages() {
  const imageURLs = [];
  let j = 0;
  while (j < EQUIPMENT_IMAGES_MAX) {
    const imageName = `${ equipmentID }/tiny_img_${ j++ }`;

    // Check localstorage
    const url = local.getItem(imageName);
    if (url) imageURLs.push(url);
    else break;
  }
  return imageURLs;
}


async function downloadImages(count, name) {
  console.log('looking for images');
  try {
    const imagePathName = `${ businessID }/equipment/`; //firebase.storage().ref(`${ businessID }/equipment/`);

    // Download image urls
    const imageURLs = [];
    
    for (let j = 0; j < count; j++) {
      const imageName = `${ equipmentID }/${ name }_${ j }`;
    
      // Check localstorage
      const url = local.getItem(imageName);
      if (url) imageURLs.push(url);
      else {
        console.log('downloaded image url');
        const url = await getDownloadURL(ref(storage, imagePathName + imageName));
        imageURLs.push(url);
        local.setItem(imageName, url);
      }
    }
    if (!imageURLs.length) imageURLs.push('../global/images/temp.svg');
    return imageURLs;
  }
  catch(error) { console.error(error); }
}
