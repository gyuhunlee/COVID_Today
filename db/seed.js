const db = require('./index.js');
const info = require('../server/api/covidAPI.js');

// info.covidData
const seedDB = () => {
  info.covidData()
    .then((res) => {
      res.data.forEach(result => {
        // console.log(state);
        var todayData = [ result.date, result.state, result.positive, result.positiveIncrease, result.deathIncrease, result.total ];

        var queryCommand = "INSERT INTO States ( today, statename, positive, positiveIncrease, deathIncrease, total ) VALUES ( ?, ?, ?, ?, ?, ? )";
        db.query(queryCommand, todayData, (err, response) => {
          if (err) {
            console.log(err);
          }
        });
      })
      // console.log(res.data)
      // db.query() insert into

      db.end();
    })
    .catch((err) => {
      console.log('Unable to seed DB', err);
    })
}

seedDB();



// Data Website
// https://covidtracking.com/data/api

// Schema
// sudo mysql -u root < theschema.sql