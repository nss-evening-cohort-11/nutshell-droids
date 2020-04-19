import planesData from '../../helpers/data/planesData';
import utils from '../../helpers/utils';
import planeComponent from '../plane/plane';

const removePlane = (e) => {
  const selectedPlaneId = e.target.closest('.fancy-card').id;
  planesData.deletePlanes(selectedPlaneId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printPlanes();
    })
    .catch((err) => console.error('cannot remove airport', err));
};

const printPlanes = () => {
  planesData.getPlanes()
    .then((planes) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      planes.forEach((plane) => {
        domString += planeComponent.buildPlanes(plane);
      });
      utils.printToDom('dashboard-nav-link', 'Planes');
      utils.printToDom('the-breakroom', '');
      utils.printToDom('the-hangar', domString);
    })
    .catch((err) => console.error('get planes broke', err));
};

const clickEvent = () => {
  $('body').on('click', '.delete-planes', removePlane);
};

export default { printPlanes, clickEvent };
