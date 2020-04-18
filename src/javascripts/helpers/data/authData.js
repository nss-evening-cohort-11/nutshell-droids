import firebase from 'firebase/app';
import 'firebase/auth';
import lounge from '../../components/theLounge/theLounge';
import hub from '../../components/hub/hub';

import hangar from '../../components/hangar/hangar';

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

    lounge.printCrew();
    
    hub.clickEvent();
    
    hangar.printPlanes();
    
    hub.printAirports();
  });
};

export default { checkLoginStatus };
