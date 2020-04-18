

import utils from '../../helpers/utils';

const printDashboard = () => {
  let domString = '';
  domString += '<div class="card" id="dash-card-airports">';
  domString += '<div class="card-header">Airports</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-planes">';
  domString += '<div class="card-header">Planes</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-crews">';
  domString += '<div class="card-header">Crew</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-foods">';
  domString += '<div class="card-header">Food</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
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

export default { printDashboard };
