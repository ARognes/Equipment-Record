
const video = document.createElement('video');
const canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");
const loadingMessage = document.getElementById("loading-message");
const outputData = document.getElementById("output-data");

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(async (user) => {
  if (!user) { window.location = LOGIN_MENU_PATH; return; }


});

navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "environment", } }).then(streamVideo).catch(error);

function streamVideo(stream) {
  video.srcObject = stream;
  video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  video.play();
  requestAnimationFrame(tick);
}

function error(error) {
  console.error(error);
}

function tick() {
  loadingMessage.innerText = "⌛ Loading video..."
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
      inversionAttempts: "dontInvert",
    });
    if (code) {
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");

      if (outputData.innerText !== code.data) fetchEquipment(code.data);
      //outputData.innerText = code.data;
    }
  }
  requestAnimationFrame(tick);
}

function drawLine(begin, end, color) {
  ctx.beginPath();
  ctx.moveTo(begin.x, begin.y);
  ctx.lineTo(end.x, end.y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.stroke();
}
fetchEquipment('bs');
function fetchEquipment(qrData) {
  if (!auth.currentUser) {
    console.log('worked');
  }
  
  // Filter out noise

  // Fetch from db
  db.collection('equipment').doc(qrData).get()
  .then(equipmentDoc => {
    const equipmentData = equipmentDoc.data();
    console.log(equipmentData.name);
    outputData.innerText = equipmentData.name;
    if (equipmentData.businessID !== auth.currentUser.businessID) console.log('Invalid qr-code');
  })
  .catch(error => {
    console.log('Invalid qr-code');
    outputData.innerText = equipmentData.name;
  });
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
          const ctx = canvas.getContext("2d");
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