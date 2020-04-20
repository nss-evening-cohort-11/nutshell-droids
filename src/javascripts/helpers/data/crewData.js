import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllCrews = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json`)
    .then((response) => {
      const demCrews = response.data;
      const crews = [];
      if (demCrews) {
        Object.keys(demCrews).forEach((crewId) => {
          demCrews[crewId].id = crewId;
          crews.push(demCrews[crewId]);
        });
      }
      resolve(crews);
    })
    .catch((err) => reject(err));
});

const deleteCrew = (crewId) => axios.delete(`${baseUrl}/crew/${crewId}.json`);

const addCrew = (newCrew) => axios.post(`${baseUrl}/crew.json`, newCrew);

const getSingleCrew = (crewId) => axios.get(`${baseUrl}/crew/${crewId}.json`);

const updateCrew = (crewId, modifiedCrew) => axios.put(`${baseUrl}/crew/${crewId}.json`, modifiedCrew);

export default {
  getAllCrews,
  deleteCrew,
  addCrew,
  updateCrew,
  getSingleCrew,
};
