import airportComponent from './airportComponent';
import airportData from '../../helpers/data/hubData';
import utils from '../../helpers/utils';

const removeAirport = (e) => {
  const selectedAirportId = e.target.closest('.fancy-card').id;
  airportData.deleteAirport(selectedAirportId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printAirports();
    })
    .catch((err) => console.error('cannot remove airport', err));
};

const printAirports = () => {
  airportData.getAllAirports()
    .then((airports) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      airports.forEach((airport) => {
        domString += airportComponent.buildAirport(airport);
      });
      utils.printToDom('the-breakroom', '');
      utils.printToDom('hub', domString);
    })
    .catch((err) => console.error('cannot print airports', err));
};

const clickEvent = () => {
  $('body').on('click', '.delete-airport', removeAirport);
};

export default { printAirports, clickEvent };
