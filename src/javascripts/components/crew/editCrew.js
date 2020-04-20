import utils from '../../helpers/utils';
import crewData from '../../helpers/data/crewData';

const showCrewModal = (selectedCrew) => {
  $('#crewModal').modal('show');
  crewData.getSingleCrew(selectedCrew)
    .then((response) => {
      const crew = response.data;
      let domString = '';
      domString += `
      <div class="modal-content text-left">
        <div class="modal-header">
          <h5 class="modal-title" id="crewModallabel">Edit ${crew.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="form-row">
          <div class="col-md-5 mb-3 form-group">
            <label for="edit-name">Crew Name: </label>
            <input type="text" class="form-control" id="edit-name" placeholder="${crew.name}" value="${crew.name}">
          </div>
          <div class="col-md-4 mb-3">
            <label for="edit-baseCity">Base City: </label>
            <input type="text" class="form-control" id="edit-baseCity" placeholder="${crew.baseCity}" value="${crew.BaseCity}">
          </div>
          <div class="col-md-1 mb-3">
            <label for="edit-position">Position: </label>
            <input type="text" class="form-control" id="edit-position" placeholder="${crew.position}" value="${crew.position}">
          </div>
          <div class="col-md-2 mb-3">
            <label for="edit-hireDate">Hire Date: </label>
            <input type="text" class="form-control" id="edit-hireDate" placeholder="${crew.hireDate}" value="${crew.hireDate}">
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-2 mb-3">
            <label for="edit-img">Image: </label>
            <input type="text" class="form-control" id="edit-img" placeholder="${crew.img}" value="${crew.img}">
          </div>
          <div id="${selectedCrew}" class="form-row get-edit-id justify-content-center inline">
            <div class="col-md-4 ml-auto pt-4">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button id="save-crew-edit" type="button" class="btn btn-secondary" data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
     `;
      utils.printToDom('printCrewModal', domString);
    })
    .catch((err) => console.error('Cannot edit the airport', err));
};

export default { showCrewModal };
