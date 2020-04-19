import utils from '../../helpers/utils';
import airportData from '../../helpers/data/hubData';

const showAirportModal = (selectedAirport) => {
  $('#airportModal').modal('show');
  airportData.getSingleAirport(selectedAirport)
    .then((response) => {
      const airport = response.data;
      console.log(airport);
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
     </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button id="save-board-edit" type="button" class="btn btn-secondary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
     `;
      utils.printToDom('printAirportModal', domString);
    })
    .catch((err) => console.error('Cannot edit the airport', err));
};

export default { showAirportModal };
