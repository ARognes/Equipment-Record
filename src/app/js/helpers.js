'use strict';

import { local, session } from './storage-factory.js';
import Compressor from 'compressorjs';

// export async function loadImage(refStr, storage, ref, getDownloadURL) {

//   // Check localstorage
//   let imageURL = local.getItem(refStr);
//   if (imageURL) return imageURL;

//   console.log('downloaded image url', refStr);
//   const url = await getDownloadURL(storage, ref(refStr));
//   local.setItem(ref, url);
//   return url;
// }

export function getQueryData(query) {
  return query.docs.map(doc => {
    let data = doc.data();
    data.id = doc.id;
    return data;
  }).sort((a, b) => a.name.localeCompare(b.name));
}


export async function searchForItem(search, items) {

  const value = await waitForValue(search);

  if (value.length < 1) { // Clear search highlighting
    items.forEach(data => {
      const div = document.getElementById(data.id);
      div.hidden = false;
      div.getElementsByClassName('item-name')[0].innerText = data.name;
    });
  }
  else {
    items.forEach(data => { // Highlight name of search results
      const div = document.getElementById(data.id);
      if (!data.name.toUpperCase().includes(value)) div.hidden = true;
      else {
        div.hidden = false;
        let name = div.getElementsByClassName('item-name')[0];
        name.innerHTML = data.name.replace(new RegExp(value, "gi"), match => `<mark>${match}</mark>`);
      }
    });
  }
}

function waitForValue(search) {
  return new Promise(resolve => {
    let value = search.value;
    (function wait() {
    if (value !== search.value) return resolve(search.value.toUpperCase());
    setTimeout(wait, 30);
    })();
  });
}

export function compress(blob, quality, size) {
  return new Promise((resolve, reject) => {
    new Compressor(blob, {
      quality: quality,
      maxWidth: size,
      maxHeight: size,
      async success(result) { return resolve(result); },
      error(error) { reject(error); }
    });
  });
}

export function blobToImage(blob) {
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

export function canvasToBlob(canvas) {
  return new Promise(resolve => {
    canvas.toBlob(resolve);
  });
}

// Create and display image cropper tool
export async function cropImage(file, callback) {

  // Cover screen in black background
  const background = document.createElement('div');
  background.style = 'position: fixed; left: 0; right: 0; top: 0; bottom: 0; background-color: #000;';
  document.body.append(background);

  const cropBox = document.createElement('div');
  cropBox.style = 'position: fixed; left 0; top: calc(50vh - 50vw); width: 100vw; height: calc(100vw + 6px); overflow: auto;';
  background.append(cropBox);

  const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
  canvas.style = 'position: absolute;';
  cropBox.appendChild(canvas);

  let img;
  let canvasStyleWidth = 0;
  let canvasStyleHeight = 0;
  try {
    img = await blobToImage(file);
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    if (aspectRatio < 1) {
      canvasStyleWidth = window.innerWidth; 
      canvasStyleHeight = img.naturalHeight * window.innerWidth / img.naturalWidth;
    }
    else {
      canvasStyleWidth = aspectRatio * window.innerWidth;
      canvasStyleHeight = window.innerWidth;
    }
    canvas.style = `position: absolute; left: 0; top: 0; width: ${ canvasStyleWidth }px; height: ${ canvasStyleHeight }px;`;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
  catch (error) { console.error(error); }

  // Submit button
  const enter = document.createElement('button');
  enter.innerText = 'Enter';
  enter.style = 'position: fixed; left: 6px; width: calc(100% - 12px); bottom: 6px; height: 40px; background-color: #f00;';
  background.append(enter);
  enter.onclick = async () => {
    let left = -cropBox.scrollLeft / canvasStyleWidth * canvas.width;
    let top = -cropBox.scrollTop / canvasStyleHeight * canvas.height;
    const width = canvas.width;
    const height = canvas.height;
    canvas.width = width > height ? height : width;
    canvas.height = canvas.width;
    ctx.drawImage(img, left, top, width, height);
    const blob = await canvasToBlob(canvas);
    callback(blob);
    exitCropImage();
  }

  // Exit button
  const exit = document.createElement('button');
  exit.innerText = 'X';
  exit.style = 'position: fixed; left: 6px; width: 40px; top: 6px; height: 40px;';
  background.append(exit);
  exit.onclick = exitCropImage;
  function exitCropImage() {
    background.remove();
  }
}

