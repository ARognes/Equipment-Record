'use strict';

import { local, session } from './storage-factory.js';

const LOGIN_MENU_PATH = 'login.html';
const auth = firebase.auth();
const db = firebase.firestore();
let username = null;
let businessID = null;
let parameters = new URLSearchParams(window.location.search);
let equipmentID = parameters.get('id');
let equipmentName = parameters.get('name');

const title = document.getElementById('title');
title.innerText = equipmentName;
const divImages = document.getElementById('div-images');
const divImageBtns = document.getElementById('div-images-buttons');
const desc = document.getElementById('desc');


let images = checkCachedImages();
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
    img.scrollIntoView({ behavior: 'smooth' });
    btnImage.classList.add('btn-image-active');
  }
});
[...document.getElementsByClassName('btn-image-inactive')][0]?.classList.add('btn-image-active');


let lastScrollLeft = 0;
divImages.addEventListener('scroll', () => {
  const index = Math.round(divImages.scrollLeft / window.innerWidth);
  const dif = lastScrollLeft - divImages.scrollLeft;
  lastScrollLeft = divImages.scrollLeft;

  const buttons = [...document.getElementsByClassName('btn-image-inactive')];
  if (index > 0 && dif < 0) buttons[index - 1].classList.remove('btn-image-active');
  if (index < buttons.length - 1 && dif > 0) buttons[index + 1].classList.remove('btn-image-active');
  buttons[index].classList.add('btn-image-active');
});


document.body.addEventListener('scroll', () => {
  divImages.style.top = -document.body.scrollTop / 2 + 'px';
});

auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
    username = userDoc.data().name;

    
    const equipmentData = await getEquipmentData();
    images = await downloadImages(equipmentData.imageCount);
    [...divImages.children].forEach((img, i) => {
      if (i < images.length) {
        img.src = images[i];
        img.addEventListener('load', () => {
          img.style.filter = null;
        });
      }
    });

    desc.innerText = equipmentData.desc;

  }
  catch(error) { console.error(error); }
});


async function getEquipmentData() {
  try {
    const equipmentDoc = await db.collection('equipment').doc(equipmentID).get();
    const equipmentData = equipmentDoc.data();
    equipmentData.id = equipmentDoc.id;
    return equipmentData;
  }
  catch(error) { console.error(error); }
}

function checkCachedImages() {
  const imageURLs = [];
  let j = 0;
  while(j < 5) {
    const imageName = `${equipmentID}/tiny_img_${j++}`;

    // Check localstorage
    const url = local.getItem(imageName);
    if (url) imageURLs.push(url);
    else break;
  }
  if (!imageURLs.length) imageURLs.push('../images/temp.png');
  return imageURLs;
  
}

async function downloadImages(count) {
  try {
    const storageRef = firebase.storage().ref(`${ businessID }/equipment/`);

    // Download image urls
    const imageURLs = [];
    
    for (let j = 0; j < count; j++) {
      const imageName = `${equipmentID}/img_${j}`;
    
      // Check localstorage
      const url = local.getItem(imageName);
      if (url) imageURLs.push(url);
      else {
        console.log('downloaded image urls');
        const url = await storageRef.child(imageName).getDownloadURL();
        imageURLs.push(url);
        local.setItem(imageName, url);
      }
    }
    if (!imageURLs.length) imageURLs.push('../images/temp.png');
    return imageURLs;
  }
  catch(error) { console.error(error); }
}
