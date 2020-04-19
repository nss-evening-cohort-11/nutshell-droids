import planesData from '../../helpers/data/planesData';
import utils from '../../helpers/utils';
import planeComponent from '../plane/plane';

const createPlane = (e) => {
  e.preventDefault();
  const newPlane = {
    imageUrl: $('#plane-image').val(),
    model: $('#model').val(),
    make: $('#make').val(),
    type: $('#plane-type').val(),
    seatingCapacity: $('#capacity').val(),
    price: $('#price').val(),
    speed: $('#speed').val(),
    description: $('#description').val(),
  };
  planesData.addPlanes(newPlane)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printPlanes();
    })
    .catch((err) => console.error('could not add plane', err));
};

const printPlanes = () => {
  planesData.getPlanes()
    .then((planes) => {
      let domString = '';
      domString += '<div class="accordion" id="accordionExample">';
      domString += '<h2>';
      domString += '<button class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">';
      domString += '<i class="iconblue fas fa-2x fa-plus-circle"></i></button>';
      domString += '</h2>';
      domString += '</div>';
      domString += '<div id="collapseOne" class="collapse m-2" aria-labelledby="headingOne" data-parent="#accordionExample">';
      domString += '<form class="text-left m-auto container">';
      domString += '<div class="form-group">';
      domString += '<div class="form-row">';
      domString += '<div class="col-md-3 mb-3 form-group">';
      domString += '<label for="name">Make:</label>';
      domString += '<input type="text" class="form-control" id="make">';
      domString += '</div>';
      domString += '<div class="col-md-3 mb-3">';
      domString += '<label for="city">Model:</label>';
      domString += '<input type="text" class="form-control" id="model">';
      domString += '</div>';
      domString += '<div class="col-md-3 mb-3">';
      domString += '<label for="state">Type:</label>';
      domString += '<input type="text" class="form-control" id="plane-type">';
      domString += '</div>';
      domString += '<div class="col-md-2 mb-3">';
      domString += '<label for="country">Seating Capacity:</label>';
      domString += '<input type="text" class="form-control" id="capacity">';
      domString += '</div>';
      domString += '</div>';
      domString += '<div class="form-row">';
      domString += '<div class="col-md-2 mb-3">';
      domString += '<label for="airportCode">Price:</label>';
      domString += '<input max-lengthtype="text" class="form-control" id="price">';
      domString += '</div>';
      domString += '<div class="col-md-2 mb-3">';
      domString += '<label for="numFlights">Speed:</label>';
      domString += '<input type="text" class="form-control" id="speed"></input>';
      domString += '</div>';
      domString += '<div class="col-md-8 mb-3">';
      domString += '<label for="image">Plane Image Url:</label>';
      domString += '<input type="text" class="form-control" id="plane-image"></input>';
      domString += '</div>';
      domString += '<div class="col-md-12 mb-3">';
      domString += '<label for="description">Description:</label>';
      domString += '<input type="text" class="form-control" id="description">';
      domString += '</div>';
      domString += '</div>';
      domString += '<div class="row justify-content-center">';
      domString += '<button class="btnblue add-plane-btn btn btn-primary mx-auto d-block" type="submit">Add Plane</button>';
      domString += '</div>';
      domString += '</div>';
      domString += '</form>';
      domString += '</div>';
      domString += '</div>';
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
  $('body').on('click', '.add-plane-btn', createPlane);
};

export default { printPlanes, clickEvent };
