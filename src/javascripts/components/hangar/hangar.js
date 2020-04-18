import planesData from '../../helpers/data/planesData';
import utils from '../../helpers/utils';
import planeComponent from '../plane/plane';

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

export default { printPlanes };
