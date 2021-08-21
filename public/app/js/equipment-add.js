'use strict';

const SMALL_COMPRESSION_PERCENTAGE = 0.9;
const SMALL_COMPRESSION_MAX_SIZE = 800;

const TINY_COMPRESSION_PERCENTAGE = 0.6;
const TINY_COMPRESSION_MAX_SIZE = 200;

const EQUIPMENT_MENU_PATH = 'equipment.html';

const auth = firebase.auth();
const db = firebase.firestore();
const divImages = document.getElementById('div-images');
const btnCamera = document.getElementById('camera');
const btnImages = document.getElementById('images');
const labelCamera = document.getElementById('label-camera');
const labelImages = document.getElementById('label-images');
let images = [], smallImages = [], tinyImages = [];


const btnAddEquipmentFirestore = document.getElementById('btn-add-equipment-firestore');

auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }

  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
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

  // Compress images to small and tiny versions
  files.forEach(async (file, i) => {
    const j = i + smallImages.length;
    let blob = null;
    try {
      const img = await blobToImage(file);
      const croppedImg = document.createElement('canvas');
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      croppedImg.width = img.naturalWidth;
      croppedImg.height = img.naturalHeight;
      aspectRatio > 1 ? croppedImg.width = img.naturalHeight : croppedImg.height = img.naturalWidth;
      croppedImg.getContext('2d').drawImage(img, (croppedImg.width - img.naturalWidth) / 2, (croppedImg.height - img.naturalHeight) / 2);
      blob = await canvasToBlob(croppedImg);
    }
    catch (error) { console.error(error); }

    new Compressor(blob, {
      quality: SMALL_COMPRESSION_PERCENTAGE,
      maxWidth: SMALL_COMPRESSION_MAX_SIZE,
      maxHeight: SMALL_COMPRESSION_MAX_SIZE,
      async success(result) {
        smallImages[j] = result;
        try {
          const resultImg = await blobToImage(result);
          const divImg = document.createElement('div');
          divImg.setAttribute('class', 'div-image');
          const btnRemove = document.createElement('button');
          divImg.appendChild(resultImg);
          divImg.appendChild(btnRemove);
          divImages.appendChild(divImg);
          images[j] = resultImg;
          btnRemove.onclick = () => {
            images.splice(j, 1);
            smallImages.splice(j, 1);
            tinyImages.splice(j, 1);
            divImg.remove();
            labelImages.hidden = false;
            labelCamera.hidden = false;
          }
        }
        catch (error) { console.error(error) }
      },
      error(error) { console.error(error); }
    });
    new Compressor(blob, {
      quality: TINY_COMPRESSION_PERCENTAGE,
      maxWidth: TINY_COMPRESSION_MAX_SIZE,
      maxHeight: TINY_COMPRESSION_MAX_SIZE,
      success(result) {
        tinyImages[j] = result;
      },
      error(error) { console.error(error); }
    });
  });
};

function blobToImage(blob) {
  return new Promise(resolve => {
    const url = URL.createObjectURL(blob);
    let img = new Image();
    img.onload = function() {
      URL.revokeObjectURL(this.src);
      resolve(this);
    }
    img.src = url;
  });
}

function canvasToBlob(canvas) {
  return new Promise(resolve => {
    canvas.toBlob(resolve);
  });
}

// TODO: Submit this to a fb function that makes sure everything or nothing goes through
async function submitEquipmentFirestore(businessID, ) {
  const name = document.getElementById('name').value;
  const desc = document.getElementById('desc').value;
  const price = document.getElementById('price').value || 0;

  if (!name.length) return;

  try {

    // Check if equipment already exists
    const query = await db.collection('equipment').where('name', '==', name).get();
    if (query.docs.length > 0) {
      console.log('name already exists');
      return;
    }

    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    const barcode = (Date.now() * 100000 + randomValues[0]) % 1000000000000;

    // Add equipment to firestore
    const docRef = await db.collection('equipment').add({
      name: name,
      desc: desc,
      imageCount: smallImages.length,
      price: price,
      purchaseDate: null,
      project: null,
      businessID: businessID,
      checkedOutID: null,
      checkedOutName: null,
      barcode: barcode,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Add images to firebase storage
    for (let i = 0; i < images.length; i++) {
      await uploadImage(smallImages[i], `${businessID}/equipment/${docRef.id}/img_${i}`);
      await uploadImage(tinyImages[i], `${businessID}/equipment/${docRef.id}/tiny_img_${i}`);
    }
    
    function uploadImage(image, storageRef) {
      return new Promise((resolve, reject) => {
        const task = firebase.storage().ref(storageRef).put(image);
        task.on('state_changed', snapshot => {
          const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percentage);
        }, error => reject(error), () => resolve());
      });
    }

    window.location = EQUIPMENT_MENU_PATH;
  }
  catch (error) { console.error(error); }
}