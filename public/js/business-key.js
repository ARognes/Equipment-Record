'use strict';

const MAIN_MENU_PATH = 'main.html';

const auth = firebase.auth();
const db = firebase.firestore();

const btnBusinessCode = document.getElementById('btn-business-code');
const businessCode = document.getElementById('business-code');
const divFindBusiness = document.getElementById('find-business');
const btnAddBusiness = document.getElementById('btn-business-add');

auth.onAuthStateChanged(async (user) => {
  if (!user) return;
  
  const userRef = await db.collection('users').doc(user.uid);


  btnBusinessCode.onclick = enterBusinessCode;
  businessCode.onkeydown = (event) => {
    event.code === 'Enter' && enterBusinessCode();
  }
  
  async function enterBusinessCode() {
    const input = businessCode.value;
    console.log(input);
  
    try {
      const query = await db.collection('businesses').where('code', '==', businessCode.value).get();
      if (query.docs.length > 0 && query.docs[0] !== null) {
        const businessName = query.docs[0].data().name;
        await userRef.set({ 
          businessName: businessName,
          businessID: query.docs[0].id,
        }, { merge: true });
        console.log('business added');
        window.localStorage.setItem('businessName', businessName);
        window.location = MAIN_MENU_PATH;
        return;
      }
  
      console.log('No business found');
    } 
    catch (error) { console.log(error) }
  }
  
  btnAddBusiness.onclick = () => {
    console.log('create new business menu');
  }

});