
import utils from '../../helpers/utils';

const printDashboard = () => {
  let domString = '';
  domString += '<div class="card" id="dash-card-food">';
  domString += '<div class="card-header"> Featured</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-food">';
  domString += '<div class="card-header">Featured</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-food">';
  domString += '<div class="card-header">Featured</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="card" id="dash-card-food">';
  domString += '<div class="card-header">Featured</div>';
  domString += `<img class="card-img-top" src="..." alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  domString += '</div>';
  domString += '</div>';
  utils.printToDom('the-lounge', domString);
};

export default { printDashboard };
