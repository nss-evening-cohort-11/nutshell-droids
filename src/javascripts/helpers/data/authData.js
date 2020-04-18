import firebase from 'firebase/app';
import 'firebase/auth';
import lounge from '../../components/theLounge/theLounge';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('#the-lounge').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
      $('#google-auth').addClass('hide');
    } else {
      // person is NOT logged in
      $('#navbar-logout-button').addClass('hide');
      $('#google-auth').removeClass('hide');
      $('#the-lounge').addClass('hide');
    }
    lounge.printCrew();
  });
};

export default { checkLoginStatus };
