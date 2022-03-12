'use strict';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore/lite';
import { local, session } from '../global/js/storage-factory.js';
import { getQueryData } from '../global/js/helpers.js';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import JsBarcode from 'jsbarcode';


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

const LOGIN_MENU_PATH = '../login';
const pTitle = document.getElementById('title');
const btnGenerate = document.getElementById('generate');

let businessID = local.getItem('businessID');
let businessName = local.getItem('businessName');

pTitle.innerHTML = businessName || '';


btnGenerate.onclick = async () => {

  console.log(businessID);

  if (!businessID) {
    console.error("BusinessID not defined");
    return;
  }

  const queryEquipment = await getDocs(query(collection(db, 'equipment'), where('businessID', '==', businessID)));

  const equipment = getQueryData(queryEquipment);

  const pdf = new jsPDF();
  pdf.setFontSize(12);
  pdf.text("Equipment-Record: " + businessName, 10, 10);

  let i = 30;
  for (const num in equipment) {

    let canvas = document.createElement('canvas');
    QRCode.toCanvas(canvas, equipment[num].id, (error) => error ? console.error(error) : null);
    
    pdf.addImage(canvas, "JPEG", 5, i, 80, 80);
    pdf.addImage(canvas, "JPEG", 80, i + 5, 40, 40);
    pdf.addImage(canvas, "JPEG", 82.5, i + 52.5, 20, 20);
    pdf.text(equipment[num].name + ": " + equipment[num].id, 10, i);

    JsBarcode(canvas, equipment[num].barcode, {format: "CODE128", width: 12, height: 500, fontSize: 80});

    pdf.addImage(canvas, "JPEG", 140, i + 6, 60, 60 * canvas.height / canvas.width);
    pdf.addImage(canvas, "JPEG", 130, i + 50, 40, 40 * canvas.height / canvas.width);
    pdf.addImage(canvas, "JPEG", 178, i + 51, 20, 20 * canvas.height / canvas.width);

    i += 90;
    if (i % 297 > 250) {
      i = 30;
      pdf.addPage();
      pdf.text("Equipment-Record: " + businessName, 10, 10);
    }
  }

  pdf.save("Equipment Codes.pdf");
}

auth.onAuthStateChanged(async user => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  
  try {
    const userDoc = await getDoc(doc(db, 'users', user.displayName));
    const userData = userDoc.data();
    businessID = userData.businessID;
    businessName = userData.businessName;
    local.setItem('businessID', businessID);
    local.setItem('businessName', businessName);
    pTitle.innerText = businessName;
  }
  catch (error) { console.error(error); }
});
