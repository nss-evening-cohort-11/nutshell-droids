import utils from '../../helpers/utils';

const printNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  domString += '<a class="navbar-brand" href="#">';
  domString += '<img src="src/img/1031px-Pan_Am_Logo.svg.png" width="40" height="40" class="d-inline-block align-top" alt=""></img>';
  domString += '</a>';
  domString += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">';
  domString += '<span class="navbar-toggler-icon"></span>';
  domString += '</button>';
  domString += '<div class="collapse navbar-collapse" id="navbarNav">';
  domString += '<ul class="navbar-nav ml-auto">';
  domString += '<li class="nav-item active">';
  domString += '<a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>';
  domString += '</li>';
  domString += '<button class="btn btn-danger">Log In';
  domString += '</button>';
  domString += '</ul>';
  domString += '</div>';
  domString += '</nav>';

  utils.printToDom('printNavbar', domString);
};


export default { printNavbar };
