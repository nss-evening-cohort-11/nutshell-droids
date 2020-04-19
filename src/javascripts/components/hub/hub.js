import firebase from 'firebase/app';
import 'firebase/auth';

import airportComponent from './airportComponent';
import airportData from '../../helpers/data/hubData';
import showModalPrint from './editAirport';
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

const createAirport = (e) => {
  e.preventDefault();
  const radio = $('#radio').is(':checked');
  const newAirport = {
    airportName: $('#name').val(),
    imgUrl: $('#image').val(),
    city: $('#city').val(),
    state: $('#state').val(),
    country: $('#country').val(),
    airportCode: $('#airportCode').val(),
    numFlights: $('#numFlights').val(),
    numRestaurants: $('#restaurants').val(),
    numShuttles: $('#shuttles').val(),
    numHotels: $('#hotels').val(),
    isInternational: radio,
  };
  airportData.addAirport(newAirport)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printAirports();
    })
    .catch((err) => console.error('could not add airport', err));
};

const editAirportEvent = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  const userId = uid;
  const radio = $('#radio').is(':checked');
  const selectedAirportId = e.target.closest('.get-edit-id').id;
  const changedAirport = {
    airportName: $('#edit-name').val(),
    imgUrl: $('#edit-imgUrl').val(),
    city: $('#edit-city').val(),
    state: $('#edit-state').val(),
    country: $('#edit-country').val(),
    airportCode: $('#edit-code').val(),
    numFlights: $('#edit-flights').val(),
    numRestaurants: $('#edit-restaurants').val(),
    numShuttles: $('#edit-shuttles').val(),
    numHotels: $('#edit-hotels').val(),
    isInternational: radio,
    uid: userId,
  };
  airportData.updateAirport(selectedAirportId, changedAirport)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printAirports();
    })
    .catch((err) => console.error('could not update airport', err));
};

const showModalEvent = (e) => {
  e.preventDefault();
  const selectedAirportId = e.target.closest('.fancy-card').id;
  showModalPrint.showAirportModal(selectedAirportId);
};

const printAirports = () => {
  airportData.getAllAirports()
    .then((airports) => {
      let domString = '';
      domString += `
      <div class="accordion" id="accordionExample">
      <h2>
        <button id="auth-add-airport" class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i class="iconblue fas fa-2x fa-plus-circle"></i></button>
      </h2>
      </div>
        <div id="collapseOne" class="collapse m-2" aria-labelledby="headingOne" data-parent="#accordionExample">
          <form class="text-left m-auto container">
            <div class="form-group">
              <div class="form-row">
                <div class="col-md-5 mb-3 form-group">
                  <label for="name">Airport Name: </label>
                  <input type="text" class="form-control" id="name">
                </div>
                <div class="col-md-4 mb-3">
                  <label for="city">City:</label>
                  <input type="text" class="form-control" id="city">
                </div>
                <div class="col-md-1 mb-3">
                <label for="state">State:</label>
                  <input type="text" class="form-control" id="state">
                </div>
                <div class="col-md-2 mb-3">
                <label for="country">Country:</label>
                  <input type="text" class="form-control" id="country">
                </div>
              </div>
            <div class="form-row">
              <div class="col-md-2 mb-3">
                <label for="airportCode">Airport Code:</label>
                <input max-lengthtype="text" class="form-control" id="airportCode">
              </div>
              <div class="col-md-2 mb-3">
                <label for="numFlights">Flights: </label>
                <input type="text" class="form-control" id="numFlights">
              </div>
              <div class="col-md-2 mb-3">
                <label for="restaurants">Restaurants: </label>
                <input type="text" class="form-control" id="restaurants">
              </div>
              <div class="col-md-2 mb-3">
                <label for="shuttles">Shuttles:</label>
                <input type="text" class="form-control" id="shuttles">
              </div>
              <div class="col-md-2 mb-3">
                <label for="hotels">Hotels:</label>
                <input type="text" class="form-control" id="hotels">
              </div>
              <div class="col-md-2 mb-3 mt-3 pl-4 form-check">    
                  <label><input type="radio" name="optradio" value="false" checked>Domestic</label>
                  <label><input type="radio" name="optradio" id="radio" value="true">International</label>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-10">
                <label for="image">City Image Url:</label>
                <input type="text" class="form-control" id="image">
              </div>
              <div class="col-md-2 d-flex align-items-end flex-column">
                <button class="btnblue add-airport-btn btn btn-primary mt-auto ml-auto mr-auto" type="submit">Add Airport</button>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div class="modal fade" id="airportModal" tabindex="-1" role="dialog" aria-labelledby="airportModalLabel" aria-hidden="true">
            <div id="printAirportModal" class="modal-dialog modal-lg" role="document">
            </div>
            </div>`;
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
  $('body').on('click', '.add-airport-btn', createAirport);
  $('body').on('click', '.edit-button', showModalEvent);
  $('body').on('click', '#save-airport-edit', editAirportEvent);
};

export default {
  printAirports,
  clickEvent,
  showModalEvent,
  editAirportEvent,
};
