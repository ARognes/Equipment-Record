'use strict';


btnSignOut.onclick = () => {
  divConfirmation.hidden = false;
  btnConfirm.onclick = () => {
    auth.signOut();
    divConfirmation.hidden = true;
  }
}