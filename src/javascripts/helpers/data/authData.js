import firebase from 'firebase/app';
import 'firebase/auth';
import hub from '../../components/hub/hub';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('#navbar-logout-button').removeClass('hide');
      $('#google-auth').addClass('hide');
    } else {
      // person is NOT logged in
      $('#navbar-logout-button').addClass('hide');
      $('#google-auth').removeClass('hide');
    }
    hub.clickEvent();
    hub.printAirports();
  });
};

export default { checkLoginStatus };
