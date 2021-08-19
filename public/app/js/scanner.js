
const video = document.createElement('video');
const canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d');
const loadingMessage = document.getElementById('loading-message');
const outputData = document.getElementById('output-data');
const divFoundEquipment = document.getElementById('div-found-equipment');
const titleFoundEquipment = document.getElementById('title-found-equipment');

const auth = firebase.auth();
const db = firebase.firestore();
let businessID;
let barcodeReady = true;
let lastBarcode = null;
let lastQRCode = null;

auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }
  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
    businessID = userDoc.data().businessID;
  }
  catch(error) { console.error(error); }

});

let inputCameras = [];
navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    devices.forEach(device => {
      if (device.kind === 'videoinput') inputCameras.push(device);
    });
  });


// https://unpkg.com/browse/scandit-sdk@4.6.1/src/lib/cameraAccess.ts
const backCameraKeywords = [
  "rear",
  "back",
  "rück",
  "arrière",
  "trasera",
  "trás",
  "traseira",
  "posteriore",
  "后面",
  "後面",
  "背面",
  "后置",
  "後置",
  "背置",
  "задней",
  "الخلفية",
  "후",
  "arka",
  "achterzijde",
  "หลัง",
  "baksidan",
  "bagside",
  "sau",
  "bak",
  "tylny",
  "takakamera",
  "belakang",
  "אחורית",
  "πίσω",
  "spate",
  "hátsó",
  "zadní",
  "darrere",
  "zadná",
  "задня",
  "stražnja",
  "belakang",
  "बैक"
];

function isBackCameraLabel(label) {
  return backCameraKeywords.some(keyword => {
    return label.toLowerCase().includes(keyword);
  });
}

let cameraId;
(async () => {
  let devices = await navigator.mediaDevices.enumerateDevices();
  // if permission is not given, label of video devices will be an empty string
  if (devices.filter( device => device.kind === "videoinput" ).every( device => device.label === "" )) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { ideal: "environment" }
          },
          audio: false
        });

      // enumerate devices again - now the label field should be non-empty, as we have a stream active
      // (even if we didn't get persistent permission for camera)
      devices = await navigator.mediaDevices.enumerateDevices();

      // close the stream, as we don't need it anymore
      stream.getTracks().forEach(track => track.stop());
  }

  const backCameras = devices.filter(device => device.kind === 'videoinput' && isBackCameraLabel(device.label));
  const cameraResolutions = backCameras.map(camera => {
      const regExp = new RegExp(/\b([0-9]+)MP?\b/, 'i');
      const match = regExp.exec(camera.label);
      if (match !== null) return parseInt(match[1], 10);
      else return null;
    }
  );

  // Choose highest resolution back camera
  cameraId = backCameras[backCameras.length-1];
  if (!cameraResolutions.some(cameraResolution => cameraResolution === null)) cameraId = backCameras[cameraResolutions.lastIndexOf(Math.max(...cameraResolutions ))];
})();

const mediaOptions = { audio: false, video: { facingMode: 'environment', deviceId: cameraId } };

navigator.mediaDevices.getUserMedia(mediaOptions).then(streamVideo).catch(error);

let requestAnim;
function streamVideo(stream) {
  video.srcObject = stream;
  video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
  video.play();
  requestAnim = requestAnimationFrame(tick);
}

function error(error) {
  console.error(error);
}

function tick() {
  loadingMessage.innerText = '⌛ Loading video...'
  if (video.readyState !== video.HAVE_ENOUGH_DATA || !businessID) {
    requestAnimationFrame(tick);
    return;
  }
  loadingMessage.hidden = true;

  canvas.width = video.videoWidth;
  if (video.videoWidth < video.videoHeight) {
    canvas.height = video.videoWidth;
    ctx.drawImage(video, 0, 0, canvas.width, video.videoHeight);
  }
  else {
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height * (canvas.height / canvas.width));
  }

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = jsQR(imageData.data, imageData.width, imageData.height, {
    inversionAttempts: 'dontInvert',
  });
  if (code) {
    drawBox(code.location, '#ff3b58');
    if (requestAnim) fetchQRCode(code.data);
  }
  else if (barcodeReady) {
    barcodeReady = false;
    Quagga.decodeSingle({
      decoder: {
          readers: ["code_128_reader"] 
      },
      locate: true,
      src: canvas.toDataURL()
    }, result => {
      barcodeReady = true;
      if (!result || !result.codeResult) return;
      console.log(result.codeResult.code);
      if (requestAnim) fetchBarcode(result.codeResult.code);
    });
  }
  if (requestAnim) requestAnimationFrame(tick);
}

async function fetchBarcode(barcode) {
  console.log('Fetching barcode:', barcode);
  if (!barcode || barcode.length !== 12 || !/^\d+$/.test(barcode) || barcode === lastBarcode) return;
  lastBarcode = barcode;

  // Fetch from db
  try {
    const query = await db.collection('equipment').where('barcode', '==', parseInt(barcode)).get();
    console.log(query);
    const equipmentDoc = query.docs.find(doc => doc.data().businessID === businessID);
    if (!equipmentDoc) return;
    const equipmentData = equipmentDoc.data();
    cancelAnimationFrame(requestAnim);
    requestAnim = undefined;

    // Show equipment checked out menu
    video.pause();
    divFoundEquipment.classList.remove('hidden');
    titleFoundEquipment.innerText = `Checkout ${equipmentData.name}?`;
    canvas.hidden = true;
  }
  catch (error) { console.error(error); }
}

async function fetchQRCode(QRCode) {
  if (!QRCode || QRCode.length !== 20 || QRCode === lastQRCode) return;
  lastQRCode = QRCode;

  // Fetch from db
  try {
    const equipmentDoc = await db.collection('equipment').doc(QRCode).get();
    if (!equipmentDoc) return;
    const equipmentData = equipmentDoc.data();
    if (equipmentData.businessID !== businessID) return;
    cancelAnimationFrame(requestAnim);
    requestAnim = undefined;

    // Show equipment checked out menu
    video.pause();
    divFoundEquipment.classList.remove('hidden');
    titleFoundEquipment.innerText = `Checkout ${equipmentData.name}?`;
    canvas.hidden = true;
  }
  catch (error) { console.error(error); }
}

function stopStreamedVideo(videoElem) {
  if (!videoElem || videoElem.srcObject) return;
  const tracks = videoElem.srcObject.getTracks();

  tracks.forEach(function(track) {
    track.stop();
  });

  videoElem.srcObject = null;
  cancelAnimationFrame(requestAnim);
  requestAnim = undefined;
}

function drawLine(begin, end, color) {
  ctx.beginPath();
  ctx.moveTo(begin.x, begin.y);
  ctx.lineTo(end.x, end.y);
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawBox(box, color) {
  drawLine(box.topLeftCorner, box.topRightCorner, color);
  drawLine(box.topRightCorner, box.bottomRightCorner, color);
  drawLine(box.bottomRightCorner, box.bottomLeftCorner, color);
  drawLine(box.bottomLeftCorner, box.topLeftCorner, color);
}

/*
async function arst() {
  try {
    const image = await readImageFromFile(files[0]);
    const code = jsQR(image.data, image.width, image.height);
    alert(code);
  }
  catch (error) { console.error(error) }
}

function readImageFromFile(file) {
  return new Promise(resolve => {
    let reader = new FileReader();
    reader.onload = () => {
        let img = new Image;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, img.width, img.height);
          remove(canvas);
          resolve({ data: imageData.data, width: img.width, height: img.height});
        }
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
*/