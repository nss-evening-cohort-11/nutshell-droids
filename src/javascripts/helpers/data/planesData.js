import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlanes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/planes.json`)
    .then((response) => {
      const dosePlanes = response.data;
      const planes = [];
      if (dosePlanes) {
        Object.keys(dosePlanes).forEach((planeId) => {
          dosePlanes[planeId].id = planeId;
          planes.push(dosePlanes[planeId]);
        });
      }
      resolve(planes);
    })
    .catch((err) => reject(err));
});

const deletePlanes = (planeId) => axios.delete(`${baseUrl}/planes/${planeId}.json`);

const getSinglePlane = (planeId) => axios.get(`${baseUrl}/planes/${planeId}.json`);


export default { getPlanes, deletePlanes, getSinglePlane };
