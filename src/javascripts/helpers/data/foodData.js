import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/food.json`)
    .then((response) => {
      const demFoods = response.data;
      const foods = [];
      if (demFoods) {
        Object.keys(demFoods).forEach((foodId) => {
          demFoods[foodId].id = foodId;
          foods.push(demFoods[foodId]);
        });
      }
      resolve(foods);
    })
    .catch((err) => reject(err));
});
// Following Code  ---- TRIED to be able to food my type

// const getFoodByType = (type) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/food.json?orderBy="type"&equalTo="${type}"`)
//     .then((response) => {
//       const demFoods = response.data;
//       const foods = [];
//       if (demFoods) {
//         Object.keys(demFoods).forEach((item) => {
//           demFoods[item].type = item;
//           foods.push(demFoods[item]);
//         });
//       }
//       resolve(foods);
//     })
//     .catch((err) => reject(err));
// });

export default {
  getAllFoods,
  // getFoodByType,
};
