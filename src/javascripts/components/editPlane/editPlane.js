import utils from '../../helpers/utils';
import planesDataComponent from '../../helpers/data/planesData';


const showForm = (planeId) => {
  planesDataComponent.getSinglePlane(planeId)
    .then((resp) => {
      const plane = resp.data;
      let domString = '';
      domString += '<h2 class="text-center">Edit Plane</h2>';
      domString += `<form class="col-10 offset-1 edit-plane-form-tag" data-id="${planeId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="plane-make">Make</label>';
      domString += `<input type="text" class="form-control" id="edit-plane-make" placeholder="Boeing" value="${plane.make}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="plane-model">Model</label>';
      domString += `<input type="text" class="form-control" id="edit-plane-model" placeholder="747" value="${plane.model}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="plane-type">Type</label>';
      domString += `<input type="text" class="form-control" id="edit-plane-type" placeholder="Jumbo-Passenger" value="${plane.type}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="plane-seating-capacity">Seating Capacity</label>';
      domString += `<input type="number" class="form-control" id="edit-plane-seating-capacity" placeholder="600" value="${plane.seatingCapacity}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="plane-price">Price</label>';
      domString += `<input type="text" class="form-control" id="edit-plane-price" placeholder="55 M" value="${plane.price}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="plane-speed">Speed</label>';
      domString += `<input type="text" class="form-control" id="edit-plane-speed" placeholder="55" value="${plane.speed}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="plane-image">Plane Image Url</label>';
      domString += `<input type="text" class="form-control" id="edit-plane-image" placeholder="planesimage.com" value="${plane.imageUrl}">`;
      domString += '</div>';
      domString += '</form>';

      utils.printToDom('edit-plane', domString);
    })
    .catch((err) => console.error('could not edit the selected plane', err));
};

export default { showForm };
