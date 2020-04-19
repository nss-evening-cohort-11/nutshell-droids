import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const logoutEvent = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
};

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const printNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-expand navbar-light bg-light">';
  // eslint-disable-next-line max-len
  domString += '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pan_Am_Logo.svg/1031px-Pan_Am_Logo.svg.png" width="40" height="40" class="d-inline-block align-top" alt="panAm Logo">';
  domString += '<h1 id="dashboard-nav-link" class="center"></h1>';
  domString += '<ul class="navbar-nav ml-auto">';
  domString += '<li class="nav-item active">';
  domString += '<a class="nav-link" href="#">Dashboard<span class="sr-only">(current)</span></a>';
  domString += '</li>';
  domString += '<button id="navbar-logout-button" class="btn btn-danger">Log Out</button>';
  domString += '<button id="google-auth" class="btn btn-danger navbar-login-button">Login</button>';
  domString += '</ul>';
  domString += '</nav>';

  utils.printToDom('printNavbar', domString);
  $('body').on('click', '#navbar-logout-button', logoutEvent);
  $('body').on('click', '#google-auth', signMeIn);
};

export default { printNavbar };
