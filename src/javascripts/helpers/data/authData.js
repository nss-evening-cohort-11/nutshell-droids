import firebase from 'firebase/app';
import 'firebase/auth';

import dashboard from '../../components/dashboard/dashboard';
import hub from '../../components/hub/hub';
import hangarComponent from '../../components/hangar/hangar';

// import editPlane from '../../components/editPlane/editPlane';

import myNavBar from '../../components/myNavbar/myNavBar';

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
    myNavBar.clickEvent();
    dashboard.dashBoardEvents();
    dashboard.printDashboard();
    hub.clickEvent();
    hangarComponent.clickEvent();
  });
};

export default { checkLoginStatus };
