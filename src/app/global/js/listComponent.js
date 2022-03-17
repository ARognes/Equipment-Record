// 'use strict';

// import { local, session } from './storage-factory.js';


// import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore/lite';
// import { getStorage, ref, getDownloadURL, list } from 'firebase/storage';
// import { getQueryData, searchForItem, removeOnKeyboard } from '../global/js/helpers.js';
// import { local, session } from '../global/js/storage-factory.js';


// const ITEM_INFO_MENU = '../equipment-info';
// let equipmentResults = [];

// const itemContainer = [...document.getElementsByClassName('item-container')][0];
// const search = document.getElementById('search');
// search.value = '';

// search.onkeydown = () => searchForItem(search, equipmentResults);

// export class ListComponent {

//   #storage;
//   itemContainer;

//   constructor(db, storage, businessID, database) {
//     this.#storage = storage;

//     // Create foundation
//     itemContainer = 

//     const foundation = 
//     `<header>
//       <input type="text" id="search" placeholder="search">
//       <button id="filter">I</button>
//     </header>

//     <div class="menu">
//       <div class="item-container"><div class="loader"></div></div>
//       <button onclick="window.location='../equipment-add'" id="btn-equipment-add">+</button>
//     </div>`


//     // TODO: only load x amount of data at a time
//     try {
//       const queryDatabase = await getDocs(query(collection(db, database), 
//                                           where('businessID', '==', businessID)));
      
//       // Map and sort query alphabetically
//       const dataArray = getQueryData(queryDatabase);

//       // Hookup to html, then load images
//       dataArray.map(setupListItemSkeleton)
//               .forEach(async data => await setupListItemImages(data));

//       // Remove loader
//       const loader = itemContainer.getElementsByClassName('loader')[0];
//       if (loader) loader.remove();
//       if (!dataArray.length) itemContainer.innerText = 'No equipment found';

//       // return dataArray;
//     }
//     catch (error) { console.error(error); }
//   }


//   #setupListItemSkeleton(data) {
//     const div = document.createElement('div');
//     div.setAttribute('id', data.id);
//     div.classList.add('item');

//     const divImage = document.createElement('div');
//     divImage.classList.add('loader');
//     divImage.style.left = '22px';
//     div.appendChild(divImage);
//     data.div = div;

//     let innerHTML = 
//     `<p class="item-name">${ data.name }</p>
//       <div class="item-desc">
//         <p>${ data.desc }</p>
//       </div>`;
    
//     if (data.checkedOutName) innerHTML += `<div class="item-right">${ data.checkedOutName }</div>`;
//     innerHTML += `</div>`;
//     div.innerHTML += innerHTML;

//     // Link div to its info page
//     div.onclick = () => window.location = ITEM_INFO_MENU + `?id=${ data.id }&name=${ data.name }`;
//     itemContainer.appendChild(div);
//     return data;
//   }

//   async #setupListItemImages(data) {
//     let imageURL = '../global/images/temp.svg';
//     if (data.imageCount) {
//       try {
//         const refStr = `${ data.businessID }/equipment/${ data.id }/tiny_img_0`;

//         // Check localstorage
//         imageURL = local.getItem(refStr);
//         if (!imageURL) {
//           console.log('downloaded image url for', data.name);
//           const url = await getDownloadURL(ref(this.#storage, refStr));
//           local.setItem(ref, url);
//           imageURL = url;
//         }
//       }
//       catch(error) { imageURL = '../global/images/temp.svg'; }
//     }

//     // Create DOM render
//     const img = await loadImageSrc(imageURL);
//     data.div.children[0].remove();
//     data.div.prepend(img);
//   }

//   #loadImageSrc(imageURL) {
//     return new Promise((resolve, reject) => {
//       const img = document.createElement('img');
//       img.onload = () => resolve(img);
//       img.src = imageURL;
//     });
//   }
// }

