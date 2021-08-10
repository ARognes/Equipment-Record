'use strict';

const btnDeleteAccount = document.getElementById('btn-delete-account');
const divConfirmation = document.getElementById('div-confirmation');
const btnConfirm = document.getElementById('btn-confirm');
const btnDeny = document.getElementById('btn-deny');

btnDeleteAccount.onclick = () => {
  divConfirmation.hidden = false;
}

btnDeny.onclick = () => {
  divConfirmation.hidden = true;
}

btnConfirm.onclick = async () => {
  divConfirmation.hidden = true;
  try {

    await auth.currentUser.delete();
    console.log('user removed from auth');
    
  } 
  catch (error) {
    try {

      //const credentials = promptForCredentials();
      // Need a menu to login easily
      await auth.currentUser.reauthenticateWithCredential(credential);
      await auth.currentUser.delete();
      console.log('user removed from auth');
    }
    catch (error2) {
      console.log(error2);
      return;
    }
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