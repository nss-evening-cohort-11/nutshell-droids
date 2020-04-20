import firebase from 'firebase/app';
import 'firebase/auth';

import crewComponent from '../crew/crew';
import crewData from '../../helpers/data/crewData';
import utils from '../../helpers/utils';
import showModalPrint from '../crew/editCrew';

const removeCrew = (e) => {
  const selectedCrewId = e.target.closest('.fancy-card').id;
  crewData.deleteCrew(selectedCrewId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printCrew();
    })
    .catch((err) => console.error('They are not here', err));
};

const createCrew = (e) => {
  e.preventDefault();
  const newCrew = {
    name: $('#name').val(),
    img: $('#img').val(),
    baseCity: $('#baseCity').val(),
    position: $('#position').val(),
    hireDate: $('#hireDate').val(),
  };
  crewData.addCrew(newCrew)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printCrew();
    })
    .catch((err) => console.error('could not add them', err));
};

const editCrewEvent = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  const userId = uid;
  const selectedCrewId = e.target.closest('.get-edit-id').id;
  const changedCrew = {
    name: $('#edit-name').val(),
    img: $('#edit-img').val(),
    baseCity: $('#edit-baseCity').val(),
    position: $('#edit-position').val(),
    hireDate: $('#edit-hireDate').val(),
    uid: userId,
  };
  crewData.updateCrew(selectedCrewId, changedCrew)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printCrew();
    })
    .catch((err) => console.error('could not update crew', err));
};

const showModalEvent = (e) => {
  const selectedCrewId = e.target.closest('.fancy-card').id;
  showModalPrint.showCrewModal(selectedCrewId);
};

const printCrew = () => {
  const accordianBtn = firebase.auth().currentUser === null ? '' : '<button class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i class="iconblue fas fa-2x fa-plus-circle"></i></button>';
  crewData.getAllCrews()
    .then((crews) => {
      let domString = '';
      domString += `
      <div class="accordion" id="accordionExample">
      <h2>
        ${accordianBtn}
      </h2>
      </div>
      <div id="collapseOne" class="collapse m-2" aria-labelledby="headingOne" data-parent="#accordionExample">
          <form class="text-left m-auto container">
            <div class="form-group">
              <div class="form-row">
                <div class="col-md-5 mb-3 form-group">
                  <label for="name"> Name: </label>
                  <input type="text" class="form-control" id="name">
                </div>
                <div class="col-md-4 mb-3">
                  <label for="city">Base City:</label>
                  <input type="text" class="form-control" id="baseCity">
                </div>
                <div class="col-md-1 mb-3">
                <label for="position">Position:</label>
                  <input type="text" class="form-control" id="position">
                </div>
                <div class="col-md-2 mb-3">
                <label for="hireDate">Hire Date:</label>
                  <input type="text" class="form-control" id="hireDate">
                </div>
              </div>
            <div class="form-row">
              <div class="col-md-2 mb-3">
                <label for="image">Image:</label>
                <input max-lengthtype="text" class="form-control" id="img">
              </div>
              
              <div class="col-md-2 d-flex align-items-end flex-column">
                <button class="btnblue add-crew-btn btn btn-primary mt-auto ml-auto mr-auto" type="submit">Add Crew</button>
              </div>
            </div>
          </form>
        </div>
          </div>
            <div class="modal fade" id="crewModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div id="printCrewModal" class="modal-dialog modal-lg" role="document">
          </div>
        </div>
        `;

      domString += '<div class="d-flex flex-wrap justify-content-center">';
      crews.forEach((crew) => {
        domString += crewComponent.buildCrew(crew);
      });
      utils.printToDom('dashboard-nav-link', 'Crew');
      utils.printToDom('the-breakroom', '');
      utils.printToDom('hub', '');
      utils.printToDom('the-lounge', domString);
    })
    .catch((err) => console.error('The crew is not here', err));
};
const clickEvent = () => {
  $('body').on('click', '.delete-crew', removeCrew);
  $('body').on('click', '.add-crew-btn', createCrew);
  $('body').on('click', '.crew-edit-button', showModalEvent);
  $('body').on('click', '#save-crew-edit', editCrewEvent);
};

export default {
  printCrew, clickEvent, showModalEvent, editCrewEvent,
};
