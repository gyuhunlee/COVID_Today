const axios = require('axios');

module.exports = {
  covidData: () => {
    return axios.get('https://covidtracking.com/api/v1/states/current.json')
      .then(result => result)
      .catch(err => {
        console.log('Error getting COVID19 Data', err);
      });
  }
};
