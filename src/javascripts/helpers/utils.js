import firebase from 'firebase/app';
import 'firebase/auth';

const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};

const getMyUid = () => {
  const userUid = firebase.auth().currentUser.uid;
  return userUid;
};

export default { printToDom, getMyUid };
