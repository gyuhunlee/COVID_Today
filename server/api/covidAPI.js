const axios = require('axios');

module.exports = {
  covidData: () => {
    return axios.get('https://covidtracking.com/api/v1/states/current.json')
      .then((result) => {
        // console.log(result);
        return result;
      })
      .catch((err) => {
        console.err('Error getting COVID19 Data', err);
      });
  }
};
