import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import myNavbar from './components/myNavbar/myNavBar';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  authData.checkLoginStatus();
  myNavbar.printNavbar();
};

init();
