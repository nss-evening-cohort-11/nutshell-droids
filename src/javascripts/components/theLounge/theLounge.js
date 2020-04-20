import crewComponent from '../crew/crew';
import crewData from '../../helpers/data/crewData';
import utils from '../../helpers/utils';

const removeCrew = (e) => {
  const selectedCrewId = e.target.closest('.fancy-card').id;
  crewData.deleteCrew(selectedCrewId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printCrew();
    })
    .catch((err) => console.error('fire them boys', err));
};

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

const clickEvent = () => {
  $('body').on('click', '.delete-crew', removeCrew);
};

export default { printCrew, clickEvent };
