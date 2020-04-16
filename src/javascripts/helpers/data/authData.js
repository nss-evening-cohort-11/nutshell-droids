
import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../utils';

const authDiv = $('#auth');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      const domString = 'You are now logged in';
      utils.printToDom('temp', domString);
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
