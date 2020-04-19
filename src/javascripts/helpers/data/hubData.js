import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllAirports = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/airports.json`)
    .then((response) => {
      const demAirports = response.data;
      const airports = [];
      if (demAirports) {
        Object.keys(demAirports).forEach((airportId) => {
          demAirports[airportId].id = airportId;
          airports.push(demAirports[airportId]);
        });
      }
      resolve(airports);
    })
    .catch((err) => reject(err));
});

const deleteAirport = (airportId) => axios.delete(`${baseUrl}/airports/${airportId}.json`);

const addAirport = (newAirport) => axios.post(`${baseUrl}/airports.json`, newAirport);

export default {
  getAllAirports,
  deleteAirport,
  addAirport,
};
