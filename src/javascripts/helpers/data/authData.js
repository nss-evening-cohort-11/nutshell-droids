
import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      $('.navbar-logout-button').removeClass('hide');
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      $('.navbar-logout-button').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
