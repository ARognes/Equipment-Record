'strict-mode';

import { validatePassword } from './helpers.js';


const auth = firebase.auth();

const pSignUp = document.getElementById('p-sign-up');
const divSignUp = document.getElementById('div-sign-up');
const pSignIn = document.getElementById('p-sign-in');
const divSignIn = document.getElementById('div-sign-in');
const divSignedIn = document.getElementById('signedIn');
const divSignedOut = document.getElementById('signedOut');
const btnSignIn = document.getElementById('btn-signIn');
const btnSignOut = document.getElementById('btn-sign-out');
const btnSignUp = document.getElementById('btn-signUp');
const btnGoogle = document.getElementById('btn-google');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorLog = document.getElementById('errors');

let username = '';

email.onkeydown = enterPassword;
password.onkeydown = enterPassword;
confirmPassword.onkeydown = enterPassword;

function enterPassword(event) {
  if (event.code === 'Enter') {
    if (btnSignIn.hidden) btnSignUp.click();
    else btnSignIn.click();
  }
}

divSignUp.onclick = () => {
    btnSignIn.hidden = true;
    btnSignUp.hidden = false;
    confirmPassword.hidden = false;
    name.hidden = false;
    btnGoogle.innerHTML = 'Sign up with Google';
    pSignUp.hidden = true;
    pSignIn.hidden = false;
}

divSignIn.onclick = () => {
  btnSignIn.hidden = false;
  btnSignUp.hidden = true;
  confirmPassword.hidden = true;
  name.hidden = true;
  btnGoogle.innerHTML = 'Sign in with Google';
  pSignUp.hidden = false;
  pSignIn.hidden = true;
}

btnSignUp.onclick = () => {
  if (!btnSignIn.hidden) return;
  username = name.value;
  let error = validatePassword(username, email.value, password.value, confirmPassword.value);
  if (error) {
    errorLog.innerHTML = error;
    return;
  }
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      errorLog.innerHTML = error.code;
    });
  })
  .catch(error => {
    errorLog.innerHTML = error.code;
  });
}

// Google auth
btnGoogle.onclick = () => auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
  let provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      username = result.additionalUserInfo.profile.name;
    })
    .catch(error => {
      errorLog.innerHTML = error.code;
      console.log(error)

    });
  })
  .catch(error => {
    errorLog.innerHTML = error.code;
    console.log(error)
  });

btnSignIn.onclick = () => auth.signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {

  })
  .catch((error) => {
    errorLog.innerHTML = error.code;
  });


const db = firebase.firestore();
const btnBusinessCode = document.getElementById('btn-business-code');
const businessCode = document.getElementById('business-code');
const divFindBusiness = document.getElementById('find-business');
const btnAddBusiness = document.getElementById('btn-add-business');
const divMainMenu = document.getElementById('main-menu');

let userRef;
auth.onAuthStateChanged(user => {
  if (user) {
    //window.location = '/public/index.html';
    divSignedIn.hidden = false;
    divSignedOut.hidden = true;
    userRef = db.collection('users').doc(user.uid);

    userRef.get().then(doc => {
      if (!doc.exists) {
        userRef.set({
          business: '',
          name: username,
          phone: null,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true }).then(() => {
          divFindBusiness.hidden = false;
          divMainMenu.style.display = 'none';
        })
        .catch(error => {
          errorLog.innerHTML = error.code;
        });
      }
      else {
        
      }
    });

  } else {
    divSignedIn.hidden = true;
    divSignedOut.hidden = false;
    username = null;
  }
});

btnBusinessCode.onclick = enterBusinessCode;

businessCode.onkeydown = (event) => {
  event.code === 'Enter' && enterBusinessCode();
}

function enterBusinessCode() {
  const businessRef = db.collection('businesses');
  businessRef.where('code', '==', businessCode.value).get()
    .then(query => {
      if (query.docs.length > 0 && query.docs[0] !== null) {
        userRef.set({ business: query.docs[0].id }, { merge: true }).then(() => {
          console.log('Business added to ' + username);
          divFindBusiness.hidden = true;
          divMainMenu.style.display = 'flex';
        })
        .catch(error => {

        });
      }
      else {

      }
    })
    .catch(error => {

    });
}

btnAddBusiness.onclick = () => {
  console.log('create new business menu');
}


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

function changeMenu(from, to) {

  const fromDiv = document.getElementById(from + '-menu');
  const toDiv = document.getElementById(to + '-menu');

  fromDiv.style.display = 'none';
  fromDiv.hidden = true;

  toDiv.style.display = 'flex';
  toDiv.hidden = false;

  pTitle.innerHTML = to;
}

// Go through all menu changing buttons and set them up
const menuButtons = [...Array.from(document.getElementsByClassName('btn-menu')), 
                    ...Array.from(document.getElementsByClassName('btn-top-left')),
                    ...Array.from(document.getElementsByClassName('btn-top-right')),
                    document.getElementById('btn-equipment-add')];
menuButtons.forEach(btn => {
  const [from, to] = btn.name.split(' ');
  btn.onclick = () => changeMenu(from, to);
});

const btnDeleteAccount = document.getElementById('btn-delete-account');
const divConfirmation = document.getElementById('div-confirmation');
const btnConfirm = document.getElementById('btn-confirm');
const btnDeny = document.getElementById('btn-deny');

btnSignOut.onclick = () => {
  divConfirmation.hidden = false;
  btnConfirm.onclick = () => {
    auth.signOut();
    divConfirmation.hidden = true;
  }
}

btnDeleteAccount.onclick = () => {
  divConfirmation.hidden = false;
  btnConfirm.onclick = () => {
    divConfirmation.hidden = true;
    let authDeleted = false;
    auth.currentUser.delete().then(() => {
      // User successfully deleted
      console.log('user removed from auth');
      authDeleted = true;
    })
    .catch(error => {
      console.log(error);

      //const credentials = promptForCredentials();
      // Need a menu to login easily


      auth.currentUser.reauthenticateWithCredential(credential).then(() => {
        auth.currentUser.delete().then(() => {
          // User successfully deleted
          console.log('user removed from auth');
          authDeleted = true;
        })
        .catch(error => {
          console.log(error);
          // Something went wrong
        });
      })
      .catch(error => {
        console.log(error);
        // Could not reauthenticate, make user retry
      })
    });
    if (!authDeleted) {
      console.log('Error, auth not deleted');
      return;
    }

    // TODO Delete user info from storage

    // Delete user from firestore
    userRef.delete().then(() => {
      // User firestore account deleted
      console.log('user removed from firestore');
    })
    .catch(error => {
      console.log(error);
    });
  }
}



btnDeny.onclick = () => {
  divConfirmation.hidden = true;
}


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
