const db = require('../../db/index.js');
const info = require('..//api/covidAPI.js');


module.exports = {
  covidData: (req, res) => {
    var today = req.params.today;
    var queryCommand = `SELECT * FROM States where today=${today}`
    db.query(queryCommand, (err, result) => {
      if (result === undefined) {
        info.currentCovidData()
          .then(response => {
            response.data.forEach(result => {
              var todayData = [ result.date, result.state, result.positive, result.positiveIncrease, result.deathIncrease, result.total ];

              var insertCommand = "INSERT IGNORE INTO States ( today, statename, positive, positiveIncrease, deathIncrease, total ) VALUES ( ?, ?, ?, ?, ?, ? )";
              db.query(insertCommand, todayData, (err, response) => {
                if (err) {
                  console.log(err);
                }
              });

            });
          });
      }
      db.query(queryCommand, (err, finalResult) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send(finalResult);
      });
    });
  },

  sortBy: (req, res) => {
    var sorting = req.params.sortby.split('-');
    var today = req.params.today;
    var queryCommand = `SELECT * FROM States where today=${today} ORDER BY ${sorting[0]} ${sorting[1]}`;
    db.query(queryCommand, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    })
  },

  getAllDates: (req, res) => {
    var queryCommand = 'SELECT * FROM Dates ORDER BY today DESC';
    db.query(queryCommand, (err, result) => {
      res.status(200).send(result);
    })
  }
}
