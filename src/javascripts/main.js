import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import myNavbar from './components/myNavbar/myNavBar';
import authData from './helpers/data/authData';
import theLounge from './components/theLounge/theLounge';
import 'bootstrap';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.printNavbar();
  authData.checkLoginStatus();
  theLounge.clickEvent();
};

init();
