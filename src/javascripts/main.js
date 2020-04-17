import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import myNavbar from './components/myNavbar/myNavBar';
import authData from './helpers/data/authData';
import hub from './components/hub/hub';
import 'bootstrap';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.printNavbar();
  authData.checkLoginStatus();
  hub.printAirports();
};

init();
