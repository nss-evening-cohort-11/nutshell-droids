import planesData from '../../helpers/data/planesData';
import utils from '../../helpers/utils';
import planeComponent from '../plane/plane';
import editPlane from '../editPlane/editPlane';


const editPlaneEvent = (e) => {
  e.preventDefault();
  const planeId = e.target.closest('.user-card').id;
  $('#planeEditModal').modal('show');
  editPlane.showForm(planeId);
};


const updatePlane = (e) => {
  e.preventDefault();
  const planeId = $('.edit-plane-form-tag').data('id');
  const editedPlane = {
    uid: utils.getMyUid,
    imageUrl: $('#edit-plane-image').val(),
    make: $('#edit-plane-make').val(),
    model: $('#edit-plane-model').val(),
    type: $('#edit-plane-type').val(),
    seatingCapacity: $('#edit-plane-seating-capacity').val(),
    price: $('#edit-plane-price').val(),
    speed: $('#edit-plane-speed').val(),
  };
  planesData.updatePlane(planeId, editedPlane)
    .then(() => {
      $('#planeEditModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      printPlanes();
    })
    .catch((err) => console.error('could not update the plane', err));
};

const printPlanes = () => {
  planesData.getPlanes()
    .then((planes) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      planes.forEach((plane) => {
        domString += planeComponent.buildPlanes(plane);
      });
      utils.printToDom('the-breakroom', '');
      utils.printToDom('the-hangar', domString);
    })
    .catch((err) => console.error('get planes broke', err));
};

const clickEvent = () => {
  $('body').on('click', '.edit-planes', editPlaneEvent);
  $('body').on('click', '#button-save-edit-plane', updatePlane);
};

export default { printPlanes, clickEvent, editPlaneEvent };
