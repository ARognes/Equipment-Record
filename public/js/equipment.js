'use strict';

const auth = firebase.auth();

let prototypeEquipment = [...document.getElementsByClassName('div-equipment')][0];

for (let i = 0; i < 12; i++) {
  let clone = prototypeEquipment.cloneNode(true);
  prototypeEquipment.after(clone);
}

const pTitle = document.getElementById('title');
const divEquipment = [...document.getElementsByClassName('div-equipment')];

function stopProp(event) {
  if (!event) event = window.event;
  event.stopPropagation();
}

divEquipment.forEach(div => {
  const divImages = div.children[0];
  const btnCheckOut = div.children[3];
  const btnHistory = div.children[4];
  const btnEdit = div.children.length > 4 ? div.children[5] : null;
  
  div.onclick = () => {
    if (div.classList.contains('div-equipment-active')) {
      div.classList.remove('div-equipment-active');
      divImages.style.overflow = 'hidden';
      divImages.scrollTop = 0;
    } else {
      div.classList.add('div-equipment-active');
      divImages.style.overflow = 'auto';
    }
  }

  btnCheckOut.onclick = stopProp;
  btnHistory.onclick = stopProp;
  if (btnEdit) btnEdit.onclick = stopProp;
}); 
