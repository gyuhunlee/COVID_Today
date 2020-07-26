const db = require('./index.js');
const info = require('../server/api/covidAPI.js');

// info.covidData
const seedDB = () => {
  info.covidData()
    .then((res) => {
      console.log(res.data)
      // db.query() insert into

      db.end();
    })
    .catch((err) => {
      console.log('Unable to seed DB', err);
    })
}

seedDB();

