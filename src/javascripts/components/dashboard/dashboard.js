import hangarComponent from '../hangar/hangar';
import hubComponent from '../hub/hub';
import loungeComponent from '../theLounge/theLounge';
import foodComponent from '../food/food';

import utils from '../../helpers/utils';

const printDashboard = () => {
  let domString = '';
  domString += '<div class="d-flex flex-wrap justify-content-center text-center row ml-5 mr-5 dashboard">';
  domString += '<div class="card col-4 m-2 p-0">';
  domString += '<div class="card-header">Airports</div>';
  // eslint-disable-next-line max-len
  domString += '<img class="card-img-top" id="dash-card-airports" src="https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Picture of inside of airport">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Click the image to view PanAm\'s memory making travel destinations in the Airports Dashboard. Authorized user can log in to add, delete or update each airport\'s information.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card col-4 m-2 p-0 plane">';
  domString += '<div class="card-header"><h2>Planes</h2></div>';
  domString += '<img class="card-img-top" id="dash-card-planes" src="https://flyfresno.com/wp-content/uploads/2017/03/fresno_terminal.png" alt="Picture of planes">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Click the image to view PanAm\'s elite line of airplanes in the Planes Dashboard. Authorized users can log in to add, delete or update information.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card col-4 m-2 p-0 crew">';
  domString += '<div class="card-header"><h2>Crew</h2></div>';
  domString += '<img class="card-img-top" id="dash-card-crews" height="297px" src="https://www.nycaviation.com/newspage/wp-content/gallery/photos-meet-the-stars-of-airport-247-miami/airport-247-miami_ss_sneak-peek_001_596x334.jpg" alt="Picture of crew members">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Click the image to view the amazing staff of PanAm Airlines in the Crew Dashboard. Authorized users can log in to add, delete or update information.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card col-4 m-2 p-0 food">';
  domString += '<div class="card-header"><h2>Menu</h2></div>';
  // eslint-disable-next-line max-len
  domString += '<img class="card-img-top" id="dash-card-foods" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1074731250%2F960x0.jpg%3Ffit%3Dscale" alt="Airport food picture">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Click the image to view PanAm\'s mouth-watering food and drink options in the Menu Dashboard. Authorized users can log in to add, delete or update information.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('hub', '');
  utils.printToDom('the-hangar', '');
  utils.printToDom('the-lounge', '');
  utils.printToDom('eat', '');
  utils.printToDom('the-breakroom', domString);
  utils.printToDom('dashboard-nav-link', '');
};

const dashBoardEvents = () => {
  $('body').on('click', '#dash-card-crews', loungeComponent.printCrew);
  $('body').on('click', '#dash-card-airports', hubComponent.printAirports);
  $('body').on('click', '#dash-card-planes', hangarComponent.printPlanes);
  $('body').on('click', '#dash-card-foods', foodComponent.printEntrees);
};

export default { printDashboard, dashBoardEvents };
