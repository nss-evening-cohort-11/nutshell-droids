import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import authData from './helpers/data/authData';
import auth from './components/auth/auth';

import 'bootstrap';
import '../styles/main.scss';
import myNavbar from './components/myNavbar/myNavBar';

const init = () => {
  console.error('Its CODE DAY');
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.printNavbar();
};

init();
