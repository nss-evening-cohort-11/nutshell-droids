
import firebase from 'firebase/app';
import 'firebase/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('.navbar-logout-button').removeClass('hide');
      $('.navbar-login-button').addClass('hide');
    } else {
      // person is NOT logged in
      $('.navbar-logout-button').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
