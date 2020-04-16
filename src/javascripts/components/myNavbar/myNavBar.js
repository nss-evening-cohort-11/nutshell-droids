import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const logoutEvent = () => {
  $('.navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const printNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-expand navbar-light bg-light">';
  domString += '<img src="src/img/1031px-Pan_Am_Logo.svg.png" width="40" height="40" class="d-inline-block align-top" alt="panAm Logo">';
  domString += '<ul class="navbar-nav ml-auto">';
  domString += '<li class="nav-item active">';
  domString += '<a class="nav-link" href="#">Dashboard</a>';
  domString += '</li>';
  domString += '<button class="btn btn-danger navbar-logout-button">Log Out</button>';
  domString += '</ul>';
  domString += '</div>';
  domString += '</nav>';

  utils.printToDom('printNavbar', domString);
  $('body').on('click', '.navbar-logout-button', logoutEvent);
};

export default { printNavbar };
