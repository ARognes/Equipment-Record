'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth} from 'firebase/auth';
import { getFirestore, doc, addDoc, getDoc, getDocs, collection, query, where, serverTimestamp } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
// import { getFunctions, httpsCallable } from 'firebase/functions';
import { compress, blobToImage, cropImage, removeOnKeyboard } from '../global/js/helpers.js';

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
// const fun = getFunctions(app);


const SMALL_COMPRESSION_PERCENTAGE = 0.9;
const SMALL_COMPRESSION_MAX_SIZE = 1200;

const TINY_COMPRESSION_PERCENTAGE = 0.6;
const TINY_COMPRESSION_MAX_SIZE = 200;

const EQUIPMENT_MENU_PATH = '../equipment';
const LOGIN_MENU_PATH = '../login';   


if (location.hostname === "localhost") {
  useEmulator(fun, "localhost", 5001);
  console.log('Using emulator');
}

const divImages = document.getElementById('div-images');
const btnCamera = document.getElementById('camera');
const btnImages = document.getElementById('images');
const labelCamera = document.getElementById('label-camera');
const labelImages = document.getElementById('label-images');
let images = [], smallImages = [], tinyImages = [];


const btnAddEquipmentFirestore = document.getElementById('btn-add-equipment-firestore');
// const baseMenu = document.getElementById('base-menu');
// window.onresize = removeOnKeyboard([btnAddEquipmentFirestore, baseMenu]);

// const input = document.querySelectorAll('input, textarea');

// input.forEach(el => el.onfocus = () => {
//   baseMenu.style.bottom = '-100px';
//   btnAddEquipmentFirestore.style.bottom = '-100px';
// });

// input.forEach(el => el.onblur = () => {
//   baseMenu.style.bottom = null;
//   btnAddEquipmentFirestore.style.bottom = null;
// });





auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }

  try {
    const userDoc = await getDoc(doc(db, 'users', auth.currentUser.displayName));
    const userData = userDoc.data();
    const businessID = userData.businessID;

    btnAddEquipmentFirestore.onclick = () => submitEquipmentFirestore(businessID);
  }
  catch (error) { console.error(error); }
});

// Make user wait until this is complete to add to firestore!
btnCamera.addEventListener('input', () => loadImages(btnCamera.files));
btnImages.addEventListener('input', () => loadImages(btnImages.files));
async function loadImages(btnFiles) {
  let files = [...btnFiles];
  if (!files.length) return;
  const remainingImages = 5 - divImages.childNodes.length;
  if (files.length >= remainingImages) {
    files = files.slice(0, remainingImages);
    labelImages.hidden = true;
    labelCamera.hidden = true;
  }

  // Display each image for user to crop
  files.forEach(file => cropImage(file, callback));
    
  async function callback(blob) {
    const i = smallImages.length;

    // Compress images to small and tiny versions
    smallImages[i] = await compress(blob, SMALL_COMPRESSION_PERCENTAGE, SMALL_COMPRESSION_MAX_SIZE);

    // Render image in HTML
    try {
      const resultImg = await blobToImage(smallImages[i]);
      const divImg = document.createElement('div');
      divImg.setAttribute('class', 'div-image');
      const btnRemove = document.createElement('button');
      divImg.appendChild(resultImg);
      divImg.appendChild(btnRemove);
      divImages.appendChild(divImg);
      images[i] = resultImg;
      btnRemove.onclick = () => {
        images.splice(i, 1);
        smallImages.splice(i, 1);
        tinyImages.splice(i, 1);
        divImg.remove();
        labelImages.hidden = false;
        labelCamera.hidden = false;
      }
    }
    catch (error) { console.error(error) }

    tinyImages[i] = await compress(blob, TINY_COMPRESSION_PERCENTAGE, TINY_COMPRESSION_MAX_SIZE);

  }
};


async function submitEquipmentFirestore(businessID) {
  const name = document.getElementById('name').value;
  const desc = document.getElementById('desc').value;
  const price = document.getElementById('price').value || 0;
  const tags = null;

  if (!name.length) return;

  try {
    if (await checkIfNameExists(businessID, name, 'equipment')) throw 'Name already exists';

    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    const barcode = (Date.now() * 100000000 + randomValues[0]) % 1000000000000;
    const imageCount = Math.min(images.length, 5);

    // Add equipment to firestore
    const docRef = await addDoc(collection(db, 'equipment'), {
      name,
      desc,
      tags,
      barcode,
      imageCount,
      price,
      purchaseDate: null,
      businessID,
      userAssigned: null,
      projectAssigned: null,
      timeAssigned: null,
      createdAt: serverTimestamp()
    });

    // Add images to firebase storage
    for (let i = 0; i < imageCount; i++) {
      await uploadBytes(ref(storage, `${ businessID }/equipment/${ docRef.id }/img_${ i }`), smallImages[i]);
      await uploadBytes(ref(storage, `${ businessID }/equipment/${ docRef.id }/tiny_img_${ i }`), tinyImages[i]);
    }

    window.location = EQUIPMENT_MENU_PATH;
  }
  catch (error) { console.error(error); }
}

async function checkIfNameExists(businessID, name, col) {
  const queryEquipment = await getDocs(query(collection(db, col), where('name', '==', name), where('businessID', '==', businessID))); //collection(db, collection).where('name', '==', name).where('businessID', '==', businessID)
  if (queryEquipment.docs.length > 0) return true;
  return false;
}


// TODO: Submit this to a fb function that makes sure everything or nothing goes through
// async function submitEquipmentFirestore(businessID) {
//   const name = document.getElementById('name').value;
//   const desc = document.getElementById('desc').value;
//   const price = document.getElementById('price').value || 0;

//   if (!name.length) return;

//   try {

//     // Check if equipment already exists
//     const query = await db.collection('equipment').where('name', '==', name).get();
//     if (query.docs.length > 0) {
//       console.log('name already exists');
//       return;
//     }

//     const randomValues = new Uint32Array(1);
//     window.crypto.getRandomValues(randomValues);
//     const barcode = (Date.now() * 100000 + randomValues[0]) % 1000000000000;

//     // Add equipment to firestore
//     const docRef = await db.collection('equipment').add({
//       name: name,
//       desc: desc,
//       imageCount: smallImages.length,
//       price: price,
//       purchaseDate: null,
//       project: null,
//       businessID: businessID,
//      // checkedOutID: null,
//       userAssigned: null,
//       barcode: barcode,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     });

//     // Add images to firebase storage
//     for (let i = 0; i < images.length; i++) {
//       await uploadImage(smallImages[i], `${businessID}/equipment/${docRef.id}/img_${i}`);
//       await uploadImage(tinyImages[i], `${businessID}/equipment/${docRef.id}/tiny_img_${i}`);
//     }
    
//     function uploadImage(image, storageRef) {
//       return new Promise((resolve, reject) => {
//         const task = firebase.storage().ref(storageRef).put(image);
//         task.on('state_changed', snapshot => {
//           const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log(percentage);
//         }, error => reject(error), () => resolve());
//       });
//     }

//     window.location = EQUIPMENT_MENU_PATH;
//   }
//   catch (error) { console.error(error); }
// }