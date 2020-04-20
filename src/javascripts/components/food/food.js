import foodData from '../../helpers/data/foodData';
import utils from '../../helpers/utils';
import menuBuilder from './foodComponent';

const printEntrees = () => {
  foodData.getAllFoods()
    .then((foods) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      foods.forEach((foodAvailable) => {
        if (foodAvailable.type) {
          domString += menuBuilder.buildMenu(foodAvailable);
        } else {
          domString += '';
        }
      });
      utils.printToDom('dashboard-nav-link', 'Food');
      utils.printToDom('the-breakroom', '');
      utils.printToDom('hub', domString);
    })
    .catch((err) => console.error('cannot print foods', err));
};

export default { printEntrees };
