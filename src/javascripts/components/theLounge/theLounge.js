import crewComponent from '../crew/crew';
import crewData from '../../helpers/data/crewData';
import utils from '../../helpers/utils';

const printCrew = () => {
  crewData.getAllCrews()
    .then((crews) => {
      let domString = '';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      crews.forEach((crew) => {
        domString += crewComponent.buildCrew(crew);
      });
      utils.printToDom('the-breakroom', '');
      utils.printToDom('the-lounge', domString);
    })
    .catch((err) => console.error('The crew is not here', err));
};

export default { printCrew };
