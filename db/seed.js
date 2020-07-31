const db = require('./index.js');
const info = require('../server/api/covidAPI.js');

// info.covidData
const seedDB = () => {
  info.prevCovidData()
    .then((res) => {
      res.data.forEach(result => {
        // console.log(state);
        var prevData = [ result.date, result.state, result.positive, result.positiveIncrease, result.deathIncrease, result.total ];

        var queryCommand = "INSERT INTO States ( today, statename, positive, positiveIncrease, deathIncrease, total ) VALUES ( ?, ?, ?, ?, ?, ? )";
        db.query(queryCommand, prevData, (err, response) => {
          if (err) {
            console.log(err);
          }
        });

        var queryCommandTwo = "INSERT IGNORE INTO Dates (today) VALUES (?)";
        db.query(queryCommandTwo, [ result.date ], (err, res) => {
          if (err) {
            console.log(err);
          }
        })
      })

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