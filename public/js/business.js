'use strict';

const auth = firebase.auth();
const db = firebase.firestore();

let username = '';

const btnBusinessCode = document.getElementById('btn-business-code');
const businessCode = document.getElementById('business-code');
const divFindBusiness = document.getElementById('find-business');
const btnAddBusiness = document.getElementById('btn-add-business');

btnBusinessCode.onclick = enterBusinessCode;

businessCode.onkeydown = (event) => {
  event.code === 'Enter' && enterBusinessCode();
}

async function enterBusinessCode() {
  const businessRef = db.collection('businesses');

  try {
    const query = await businessRef.where('code', '==', businessCode.value).get();
    if (query.docs.length > 0 && query.docs[0] !== null) await userRef.set({ business: query.docs[0].id }, { merge: true });
  } 
  catch (error) { console.log(error) }
}

btnAddBusiness.onclick = () => {
  console.log('create new business menu');
}