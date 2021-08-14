'use strict';

const SMALL_COMPRESSION_PERCENTAGE = 0.9;
const SMALL_COMPRESSION_MAX_SIZE = 800;

const TINY_COMPRESSION_PERCENTAGE = 0.8;
const TINY_COMPRESSION_MAX_SIZE = 400;

const EQUIPMENT_MENU_PATH = 'equipment.html';

const auth = firebase.auth();
const db = firebase.firestore();
const divImages = document.getElementById('div-images');
const btnImages = document.getElementById('images');
let images = [], smallImages = [], tinyImages = [];


const btnAddEquipmentFirestore = document.getElementById('btn-add-equipment-firestore');

auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }

  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    const userData = userDoc.data();
    const businessID = userData.businessID;

    btnAddEquipmentFirestore.onclick = async () => {
      const name = document.getElementById('name').value;
      const desc = document.getElementById('desc').value;

      if (!name.length) return;

      try {

        // Check if equipment already exists
        const query = await db.collection('equipment').where('name', '==', name).get();
        if (query.docs.length > 0) {
          console.log('name already exists');
          return;
        }

        // Add equipment to firestore
        const docRef = await db.collection('equipment').add({
          name: name,
          desc: desc,
          imageCount: images.length,
          price: 10,
          purchaseDate: null,
          project: null,
          businessID: businessID,
          checkedOut: null,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Add images to firebase storage
        for (let i = 0; i < images.length; i++) {
          await uploadImage(smallImages[i], docRef.id + '/img_' + i);
          await uploadImage(tinyImages[i], docRef.id + '/tiny_img_' + i);
        }

        window.location = EQUIPMENT_MENU_PATH;
      }
      catch (error) { console.error(error); }
    }

    const storageRef = firebase.storage().ref(businessID + '/equipment/');
    function uploadImage(image, imageName) {
      return new Promise((resolve, reject) => {
        const task = storageRef.child(imageName).put(image);
        task.on('state_changed', snapshot => {
          const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percentage);
        }, error => reject(error), () => resolve());
      });
    }
  }
  catch (error) { console.error(error); }
});

// Make user wait until this is complete to add to firestore!
btnImages.onchange = () => {
  const files = [...btnImages.files];
  if (!files.length) return;

  // Compress images to small and tiny versions
  files.forEach(async (file, i) => {
    const j = i + images.length;
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
          const resultImage = await blobToImage(result);
          images[j] = resultImage;
          divImages.append(resultImage);
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
}

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