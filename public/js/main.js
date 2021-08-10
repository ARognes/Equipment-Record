'use strict';

const auth = firebase.auth();
const db = firebase.firestore();

let username = '';

const divMainMenu = document.getElementById('main-menu');


const pTitle = document.getElementById('title');


const equipmentAddMenu = document.getElementById('equipment-add-menu');
const btnAddEquipmentFirestore = document.getElementById('btn-add-equipment-firestore');

// Send request to firebase function, which will handle database itself
btnAddEquipmentFirestore.onclick = () => {
  const name = 'test', eid = sha256(name);
  const business = 'start', bid = sha256(business), businessRef = db.collection('businesses').doc(bid);

  db.collection('equipment').doc(eid).get()
    .then(docSnapshot => {
      if (docSnapshot.exists) {
        console.log('name already exists');
        return;
      }
      db.collection('equipment').doc(eid).set({
        name: name,
        desc: '',
        photo: null,
        price: 10,
        purchaseDate: null,
        project: null,
        business: businessRef,
        checkedOut: null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
      return;
    });
}
