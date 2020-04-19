import planesData from '../../helpers/data/planesData';
import utils from '../../helpers/utils';
import planeComponent from '../plane/plane';
import editPlane from '../editPlane/editPlane';
// import editPlane from '../editPlane/editPlane';


const editPlaneEvent = (e) => {
  e.preventDefault();
  $('#planeEditModal').modal('show');
  const planeId = e.target.closest('.user-card').id;
  editPlane.showForm();
  planesData.getSinglePlane(planeId)
    .then((plane) => {
      $('#edit-plane-image').val(plane.imageUrl);
      $('#edit-plane-make').val(plane.make);
      $('#edit-plane-model').val(plane.model);
      $('#edit-plane-type').val(plane.type);
      $('#edit-plane-seating-capacity').val(plane.seatingCapacity);
      $('#edit-plane-price').val(plane.price);
      $('#edit-plane-speed').val(plane.speed);
    })
    .catch((err) => console.error('modals suck', err));
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
  // $('body').on('click', '.edit-plane-btn', updatePlaneEvent);
};

export default { printPlanes, clickEvent };
