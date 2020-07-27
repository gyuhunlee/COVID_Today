const axios = require('axios');

module.exports = {
  covidData: () => {
    return axios.get('https://covidtracking.com/api/v1/states/daily.json')
      .then(result => result)
      .catch(err => {
        console.log('Error getting COVID19 Data', err);
      });
  }
};

// Historical JSON
// https://covidtracking.com/api/v1/states/daily.json


// Today JSON
// https://covidtracking.com/api/v1/states/current.json