import firebase from 'firebase/app';
import 'firebase/auth';

import hangar from '../../components/hangar/hangar';

const hangarDiv = $('#the-hangar');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('#navbar-logout-button').removeClass('hide');
      $('#google-auth').addClass('hide');
      hangarDiv.removeClass('hide');
    } else {
      // person is NOT logged in
      $('#navbar-logout-button').addClass('hide');
      $('#google-auth').removeClass('hide');
      hangarDiv.addClass('hide');
    }
    hangar.printPlanes();
  });
};

export default { checkLoginStatus };
