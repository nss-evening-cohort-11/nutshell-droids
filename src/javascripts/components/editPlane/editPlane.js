import utils from '../../helpers/utils';
// import planeData from '../../helpers/data/planesData';


const showForm = () => {
  let domString = '';
  domString += '<h2 class="text-center">Edit Plane</h2>';
  domString += '<form class="col-10 offset-1 edit-plane-form-tag" id="">';
  domString += '<div class="form-group">';
  domString += '<label for="plane-make">Make</label>';
  domString += '<input type="text" class="form-control" id="edit-plane-make" placeholder="Boeing" value="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="plane-model">Model</label>';
  domString += '<input type="text" class="form-control" id="edit-plane-model" placeholder="747" value="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="plane-type">Type</label>';
  domString += '<input type="text" class="form-control" id="edit-plane-type" placeholder="Jumbo-Passenger" value="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="plane-seating-capacity">Seating Capacity</label>';
  domString += '<input type="number" class="form-control" id="edit-plane-seating-capacity" placeholder="600" value="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="plane-price">Price</label>';
  domString += '<input type="text" class="form-control" id="edit-plane-price" placeholder="55 M" value="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="plane-speed">Speed</label>';
  domString += '<input type="text" class="form-control" id="edit-plane-speed" placeholder="55" value="">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="plane-image">Plane Image Url</label>';
  domString += '<input type="text" class="form-control" id="edit-plane-image" placeholder="planesimage.com" value="">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-dark" id="edit-plane-btn">Edit Plane</button>';
  domString += '</form>';

  utils.printToDom('edit-plane', domString);
};

export default { showForm };
