import hangarComponent from '../hangar/hangar';
import hubComponent from '../hub/hub';
import loungeComponent from '../theLounge/theLounge';

import utils from '../../helpers/utils';

const printDashboard = () => {
  let domString = '';
  domString += '<div class="d-flex flex-wrap justify-content-center text-center row ml-5 mr-5">';
  domString += '<div class="card col-4 m-2 p-0">';
  domString += '<div class="card-header">Airports</div>';
  // eslint-disable-next-line max-len
  domString += '<img class="card-img-top" id="dash-card-airports" src="https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Picture of inside of airport">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card col-4 m-2 p-0">';
  domString += '<div class="card-header">Planes</div>';
  domString += '<img class="card-img-top" id="dash-card-planes" src="https://flyfresno.com/wp-content/uploads/2017/03/fresno_terminal.png" alt="Picture of planes">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card col-4 m-2 p-0">';
  domString += '<div class="card-header">Crew</div>';
  // eslint-disable-next-line max-len
  domString += '<img class="card-img-top" id="dash-card-crews" height="297px" src="https://www.nycaviation.com/newspage/wp-content/gallery/photos-meet-the-stars-of-airport-247-miami/airport-247-miami_ss_sneak-peek_001_596x334.jpg" alt="Picture of crew members">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card col-4 m-2 p-0">';
  domString += '<div class="card-header">Food</div>';
  // eslint-disable-next-line max-len
  domString += '<img class="card-img-top" id="dash-card-foods" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1074731250%2F960x0.jpg%3Ffit%3Dscale" alt="Airport food picture">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('dashboard-nav-link', '');
  utils.printToDom('hub', '');
  utils.printToDom('the-hangar', '');
  utils.printToDom('the-lounge', '');
  utils.printToDom('eat', '');
  utils.printToDom('the-breakroom', domString);
};

const dashBoardEvents = () => {
  $('body').on('click', '#dash-card-crews', loungeComponent.printCrew);
  $('body').on('click', '#dash-card-airports', hubComponent.printAirports);
  $('body').on('click', '#dash-card-planes', hangarComponent.printPlanes);
};

export default { printDashboard, dashBoardEvents };
