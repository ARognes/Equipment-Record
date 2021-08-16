
const video = document.createElement('video');
const canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d');
const loadingMessage = document.getElementById('loading-message');
const outputData = document.getElementById('output-data');
const divFoundEquipment = document.getElementById('div-found-equipment');
const titleFoundEquipment = document.getElementById('title-found-equipment');

const auth = firebase.auth();
const db = firebase.firestore();
let businessID;

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

let mediaOptions = { audio: false, video: { facingMode: 'application' } };
let inputCameraIndex = 0;
document.getElementById('change-camera').onclick = () => {
  if (++inputCameraIndex >= inputCameras.length) inputCameraIndex = 0;
  mediaOptions.video.deviceId = inputCameras[inputCameraIndex].deviceId;
  document.getElementById('test').innerHTML = inputCameraIndex;
  stopStreamedVideo(video);
  navigator.mediaDevices.getUserMedia(mediaOptions).then(streamVideo).catch(error);
}

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
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
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
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');


      if (requestAnim) fetchEquipment(code.data);
    }
  }
  if (requestAnim) requestAnimationFrame(tick);
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

async function fetchEquipment(qrData) {
  if (!businessID || !qrData) return;
  
  // Filter out noise

  // Fetch from db
  try {
    const equipmentDoc = await db.collection('equipment').doc(qrData).get();
    const equipmentData = equipmentDoc.data();
    if (equipmentData.businessID !== businessID) console.log('Invalid businessID', equipmentData.businessID, businessID);
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