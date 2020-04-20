import firebase from 'firebase/app';
import 'firebase/auth';

const buildPlanes = (plane) => {
  const deletePlaneBtn = firebase.auth().currentUser === null ? '' : '<i class="delete-planes delete-btn far fa-2x fa-times-circle"></i>';
  const editPlaneBtn = firebase.auth().currentUser === null ? '' : '<i class="edit-planes edit-btn fas fa-pencil-alt"></i>';
  let domString = '';
  domString += `<div class="fancy-card plane" id=${plane.id}>`;
  domString += '<div class="additional">';
  domString += `<div class="user-card" id=${plane.id}>`;
  domString += `<img width="450" height="250px"src="${plane.imageUrl}" alt="image of ${plane.make} ">`;
  domString += `${deletePlaneBtn}`;
  domString += `${editPlaneBtn}`;
  domString += '</div>';
  domString += '<div class="more-info shading">';
  domString += `<div class="card-title mb-3 mt-3 ml-3 mr-3">${plane.make}</div>`;
  domString += '<div class="coords">';
  domString += '</div>';
  domString += '<div class="coords">';
  domString += `<div class="text-center">Plane Model: ${plane.model}</div>`;
  domString += '</div>';
  domString += '<div class="stats">';
  domString += '<div>';
  domString += '<i class="fas fa-users"></i>';
  domString += `<div class="value">${plane.seatingCapacity}</div>`;
  domString += '</div>';
  domString += '<div>';
  domString += '<i class="fas fa-plane"></i>';
  domString += `<div class="value">${plane.type}</div>`;
  domString += '</div>';
  domString += '<div>';
  domString += '<i class="fas fa-dollar-sign"></i>';
  domString += `<div class="value">${plane.price}</div>`;
  domString += '</div>';
  domString += '<div>';
  domString += '<i class="fas fa-tachometer-alt"></i>';
  domString += `<div class="value">${plane.speed}</div>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="general hubGeneral">';
  domString += `<div class="card-title mb-3 mt-3">${plane.make}</div>`;
  domString += `<div class="description-font"><p>${plane.description}</p></div>`;
  domString += '<span class="more text-white">Mouse over the card for more info</span>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildPlanes };
