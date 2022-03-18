'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, getDocs, query, collection, where, orderBy, limit } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { local, session } from '../global/js/storage-factory.js';
import { getQueryData } from '../global/js/helpers.js';

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
const FOLDER = 'projects';
const PROJECT_IMAGES_MAX = 10;

let businessID = null;
let parameters = new URLSearchParams(window.location.search);
let projectID = parameters.get('id');
let projectName = parameters.get('name');

const title = document.getElementById('title');
title.innerText = projectName;
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
    const userDoc = await getDoc(doc(db, 'users', user.displayName)); 
    businessID = userDoc.data().businessID;
    
    const projectData = await getProjectData();

    desc.innerText = projectData.desc;

    // Assignment
    // const assignmentQuery = await getDocs(query(collection(db, 'assignments'), 
    //                                      where('businessID', '==', businessID), 
    //                                      where('projectIDAssigned', '==', projectID),
    //                                      where('current', '==', true)));

    const equipmentQuery = await getDocs(query(collection(db, 'equipment'), 
                                         where('businessID', '==', businessID), 
                                         where('projectAssigned', '==', projectName)));


    const equipmentData = equipmentQuery.docs.map(doc => {
      let data = doc.data();
      data.id = doc.id;
      return data;
    });

    const divEquipmentContainer = document.getElementById('div-equipment-container');
    equipmentData.forEach(equip => {
      const item = document.createElement('div');

      const date = timeSince(equip.timeAssigned?.toDate());

      item.innerHTML = `<strong>${ equip.name }</strong>:\t`
                       + `${ equip.userAssigned }\t${ date }`;
      
      item.style.display = 'block';
      divEquipmentContainer.appendChild(item);
    });

    // History Towards
    const fromHistoryQuery = await getDocs(query(collection(db, 'assignments'), 
                                         where('businessID', '==', businessID), 
                                         where('projectID', '==', projectID),
                                         orderBy('createdAt', 'desc'),
                                         limit(10)));

    // History Away
    const toHistoryQuery = await getDocs(query(collection(db, 'assignments'), 
                                         where('businessID', '==', businessID), 
                                         where('lastProjectID', '==', projectID),
                                         orderBy('createdAt', 'desc'),
                                         limit(10)));

    console.log(fromHistoryQuery, toHistoryQuery);

    const historyData = fromHistoryQuery.docs.concat(toHistoryQuery.docs).map(doc => {
      let data = doc.data();
      data.id = doc.id;
      return data;
    }).sort((a, b) => b.createdAt - a.createdAt);

    console.log(historyData.map(a => [a.createdAt, a.projectName]));

    const divHistoryContainer = document.getElementById('div-history-container');


    historyData.forEach(assn => {
      const item = document.createElement('div');

      const dateStarted = timeSince(assn.createdAt.toDate());
      console.log(assn);
      let otherProject = assn.projectName;
      let toFrom = 'to ->';
      if (assn.projectID == projectID) {
        otherProject = assn.lastProjectName;
        toFrom = '<- from';
      }
      if (otherProject == undefined || otherProject == null) {
        otherProject = ' (created)';
        toFrom = '';
      }
      let lastUsername = assn.lastUsername;
      if (lastUsername == null) lastUsername = '';
      
      item.innerHTML = `<strong>${ assn.equipmentName }</strong>: `
                     + `${ assn.username } ${ dateStarted } `
                     + `${ toFrom } ${ otherProject } ${ lastUsername }`;

      item.style.display = 'block';
      divHistoryContainer.appendChild(item);
    });


    // Load temp
    if (projectData.imageCount === 0) {
      while (divImages.firstChild) divImages.removeChild(divImages.firstChild);
      while (divImageBtns.firstChild) divImages.removeChild(divImageBtns.firstChild);
      populateImages(null);
    }
    else {

      // Download small blurred images
      if (images.length !== projectData.imageCount) {
        console.log('reloading tiny images');
        images = await downloadImages(projectData.imageCount, 'tiny_img');
        while (divImages.firstChild) divImages.removeChild(divImages.firstChild);
        while (divImageBtns.firstChild) divImages.removeChild(divImageBtns.firstChild);
        populateImages(images);
      }

      // Download full sized images
      images = await downloadImages(projectData.imageCount, 'img');
      [...divImages.children].forEach((img, i) => {
        if (i < images.length) {
          img.src = images[i];
          img.addEventListener('load', () => {
            img.style.filter = null;
          });
        }
      });
    }
  }
  catch(error) { console.error(error); }
});


async function getProjectData() {
  try {
    const projectDoc = await getDoc(doc(db, FOLDER, projectID));
    const projectData = projectDoc.data();
    projectData.id = projectDoc.id;
    return projectData;
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
  while (j < PROJECT_IMAGES_MAX) {
    const imageName = `${ projectID }/tiny_img_${ j++ }`;

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
    const imagePathName = `${ businessID }/${ FOLDER }/`; 

    // Download image urls
    const imageURLs = [];
    
    for (let j = 0; j < count; j++) {
      const imageName = `${ projectID }/${ name }_${ j }`;
    
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


function timeSince(date) {

  if (date == null) return '';

  const millis = date.getTime();

  const seconds = Math.floor((new Date() - millis) / 1000);

  let interval = seconds / 31536000;

  interval = seconds / 2592000;
  if (interval > 1) return `${ date.getDate() } ${ date.getMonth() } ${ date.getYear() } ${ date.getHours % 12 }${date.getMinutes()}`;
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ((interval < 2) ? " day ago" : " days ago");
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ((interval < 2) ? " hour ago" : " hours ago");
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ((interval < 2) ? " minute ago" : " minutes ago");
  
  return Math.floor(seconds) + " seconds ago";
}
