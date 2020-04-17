import airportComponent from './airportComponent';
import airportData from '../../helpers/data/hubData';
import utils from '../../helpers/utils';

const printAirports = () => {
  airportData.getAllAirports()
    .then((airports) => {
      let domString = '';
      domString += '<h1>Airports</h1>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      airports.forEach((airport) => {
        domString += airportComponent.buildAirport(airport);
      });
      utils.printToDom('hub', domString);
    })
    .catch((err) => console.error('cannot print airports', err));
};

export default { printAirports };
