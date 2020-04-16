import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
    $('#google-auth').remove('hide');
  });
};

const printNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-expand navbar-light bg-light">';
  domString += '<img src="src/img/1031px-Pan_Am_Logo.svg.png" width="40" height="40" class="d-inline-block align-top" alt="panAm Logo">';
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
};

export default { printNavbar };
