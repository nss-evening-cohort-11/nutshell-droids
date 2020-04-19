import utils from '../../helpers/utils';
import airportData from '../../helpers/data/hubData';

const showAirportModal = (selectedAirport) => {
  $('#airportModal').modal('show');
  airportData.getSingleAirport(selectedAirport)
    .then((response) => {
      const airport = response.data;
      let domString = '';
      domString += `
      <div class="modal-content text-left">
        <div class="modal-header">
          <h5 class="modal-title" id="airportModallabel">Edit ${airport.airportName}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="form-row">
          <div class="col-md-5 mb-3 form-group">
            <label for="edit-name">Airport Name: </label>
            <input type="text" class="form-control" id="edit-name" placeholder="${airport.airportName}" value="${airport.airportName}">
          </div>
          <div class="col-md-4 mb-3">
            <label for="edit-name">City: </label>
            <input type="text" class="form-control" id="edit-city" placeholder="${airport.city}" value="${airport.city}">
          </div>
          <div class="col-md-1 mb-3">
            <label for="edit-state">State: </label>
            <input type="text" class="form-control" id="edit-state" placeholder="${airport.state}" value="${airport.state}">
          </div>
          <div class="col-md-2 mb-3">
            <label for="edit-country">Country: </label>
            <input type="text" class="form-control" id="edit-country" placeholder="${airport.country}" value="${airport.country}">
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-2 mb-3">
            <label for="edit-code">Airport Code: </label>
            <input type="text" class="form-control" id="edit-code" placeholder="${airport.airportCode}" value="${airport.airportCode}">
          </div>
          <div class="col-md-2 mb-3">
            <label for="edit-flights">Flights: </label>
            <input type="text" class="form-control" id="edit-flights" placeholder="${airport.numFlights}" value="${airport.numFlights}">
          </div>
          <div class="col-md-2 mb-3">
          <label for="edit-restaurants">Restaurants: </label>
          <input type="text" class="form-control" id="edit-restaurants" placeholder="${airport.numRestaurants}" value="${airport.numRestaurants}">
          </div>
          <div class="col-md-2 mb-3">
            <label for="edit-shuttles">Shuttles: </label>
            <input type="text" class="form-control" id="edit-shuttles" placeholder="${airport.numShuttles}" value="${airport.numShuttles}">
          </div>
          <div class="col-md-2 mb-3">
            <label for="edit-hotels">Hotels: </label>
            <input type="text" class="form-control" id="edit-hotels" placeholder="${airport.numHotels}" value="${airport.numHotels}">
          </div>
          <div class="col-md-2 mb-3 mt-3 pl-1 form-check"> 
            <label><input type="radio" name="optradio" value="false" checked>Domestic</label>
            <label><input type="radio" name="optradio" id="radio" value="true">International</label>
          </div>
        </div>
          <div id="${selectedAirport}" class="form-row get-edit-id justify-content-center inline">
            <div class="col-md-7 m-0 p-0">
              <label for="edit-imgUrl">Image of City:</label>
              <input type="text" class="form-control" id="edit-imgUrl" placeholder="${airport.imgUrl}" value="${airport.imgUrl}">
            </div>
            <div class="col-md-4 ml-auto pt-4">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button id="save-airport-edit" type="button" class="btn btn-secondary" data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
     `;
      utils.printToDom('printAirportModal', domString);
    })
    .catch((err) => console.error('Cannot edit the airport', err));
};

export default { showAirportModal };
