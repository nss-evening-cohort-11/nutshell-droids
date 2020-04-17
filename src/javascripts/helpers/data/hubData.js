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

export default {
  getAllAirports,
};
