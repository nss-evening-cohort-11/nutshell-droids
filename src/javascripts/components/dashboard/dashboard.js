import utils from '../../helpers/utils';

const printDashboard = () => {
  let domString = '';
  domString += '<div class="card" id="dash-card-airports">';
  domString += '<div class="card-header">Airports</div>';
  domString += '<img class="card-img-top" src="https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Picture of inside of airport">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-planes">';
  domString += '<div class="card-header">Planes</div>';
  domString += '<img class="card-img-top" src="https://flyfresno.com/wp-content/uploads/2017/03/fresno_terminal.png" alt="Picture of planes">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-crews">';
  domString += '<div class="card-header">Crew</div>';
  // eslint-disable-next-line max-len
  domString += '<img class="card-img-top" src="https://www.nycaviation.com/newspage/wp-content/gallery/photos-meet-the-stars-of-airport-247-miami/airport-247-miami_ss_sneak-peek_001_596x334.jpg" alt="Picture of crew members">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-foods">';
  domString += '<div class="card-header">Food</div>';
  // eslint-disable-next-line max-len
  domString += '<img class="card-img-top" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1074731250%2F960x0.jpg%3Ffit%3Dscale" alt="Airport food picture">';
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('the-lounge', domString);
};

const dashBoardEvents = () => {
  $(body).on(click, '#dash-card-foods', foodComponent.printFood);
  $(body).on(click, '#dash-card-airports', airportComponent.printAirport);
  $(body).on(click, '#dash-card-crews', crewComponent.printCrew);
  $(body).on(click, '#dash-card-planes', planeComponent.printPlane);
};

export default { printDashboard, dashBoardEvents };
