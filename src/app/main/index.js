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

  if (!businessID) {
    console.error("BusinessID not defined");
    return;
  }

  const queryEquipment = await getDocs(query(collection(db, 'equipment'), where('businessID', '==', businessID)));

  const equipment = getQueryData(queryEquipment);
  equipment.sort((a, b) => a.name > b.name);

  savePDF(equipment);
}

function savePDF(equipment) {

  const pdf = new jsPDF({ unit: 'in', format: 'letter'});
  pdf.text('Equipment codes: ' + businessName, 0.12, 0.3);
  pdf.setLineWidth(0.002);
  pdf.setFontSize(6);

  // Print qr codes
  let equipmentIndex = 0;
  let printingQRCodes = true;
  let canvas = document.createElement('canvas');
  while (equipmentIndex < equipment.length) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 5; j++) {

        if (printingQRCodes) {
          QRCode.toCanvas(canvas, equipment[equipmentIndex].id, (error) => error ? console.error(error) : null);
          let x = 1.5 + j * 1.5;
          let y = 0.5 + i;
          pdf.addImage(canvas, "JPEG", x, y, 1, 1, '', 'NONE', 90);
          canvas.width = 1000;
          canvas.height = 420;
          let ctx = canvas.getContext('2d');
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.font = '80px monospace';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'black';
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 2;

          let restOfName = equipment[equipmentIndex].name;
          let k = 0;
          while (restOfName) {
            let name = restOfName;
            if (restOfName.length >= 18) {
              name = restOfName.substring(0, 18);
              restOfName = restOfName.substring(18);
            }
            else restOfName = null;
            ctx.fillText(name, canvas.width / 2, 80 * k + 60);
            k++;
          }
          
          pdf.addImage(canvas, "JPEG", x + 0.35, y + 0.58, 1, 0.42, '', 'NONE', 90);

        } else {
          JsBarcode(canvas, equipment[equipmentIndex].barcode, {format: "CODE128", width: 12, height: 500, fontSize: 80});
          let x = 0.5 + j * 1.5;
          let y = 0.6 + i;
          pdf.addImage(canvas, "JPEG", x + 0.1, y, 1.3, 0.63523);

          canvas.width = 1500;
          canvas.height = 630;
          let ctx = canvas.getContext('2d');
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.font = '80px monospace';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'black';
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 2;

          const CUT_LEN = 30;
          ctx.fillText(equipment[equipmentIndex].name.substring(0, CUT_LEN), canvas.width / 2, 60);
          if (equipment[equipmentIndex].name.length > CUT_LEN) ctx.fillText(equipment[equipmentIndex].name.substring(CUT_LEN), canvas.width / 2, 140);
          
          pdf.addImage(canvas, "JPEG", x, y + 0.66, 1.5, 0.63);

        }

        pdf.setDrawColor('gray');
        pdf.line(0.5 + j * 1.5, 0.5 + i, 2 + j * 1.5, 0.5 + i);
        pdf.line(0.5 + j * 1.5, 1.5 + i, 2 + j * 1.5, 1.5 + i);
        pdf.line(0.5 + j * 1.5, 0.5 + i, 0.5 + j * 1.5, 1.5 + i);
        pdf.line(2 + j * 1.5, 0.5 + i, 2 + j * 1.5, 1.5 + i);
        pdf.setDrawColor('black');
        
        equipmentIndex++;
        
        if (equipmentIndex >= equipment.length) {
          if (printingQRCodes) {
            printingQRCodes = false;
            equipmentIndex = 0;
          } 
          else {
            pdf.save("Equipment Codes.pdf");
            return;
          }
        }
      }
    }
    pdf.addPage();
  }

  pdf.save("Equipment Codes.pdf");
}

function savePDFHuman(equipment) {
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
