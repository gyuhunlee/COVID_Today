const db = require('../../db/index.js');
const info = require('..//api/covidAPI.js');


module.exports = {
  covidData: (req, res) => {
    const today = req.params.today;
    db.query(`SELECT * FROM States where today=${today}`, (err, result) => {
      if (!result.length) {
        info.currentCovidData()
          .then(response => {
            if (today === response.data.date) {
              // console.log('hi')
              response.data.forEach(result => {
                var todayData = [ result.date, result.state, result.positive, result.positiveIncrease, result.deathIncrease, result.total ];

                var queryCommand = "INSERT INTO States ( today, statename, positive, positiveIncrease, deathIncrease, total ) VALUES ( ?, ?, ?, ?, ?, ? )";
                db.query(queryCommand, todayData, (err, response) => {
                  if (err) {
                    console.log(err);
                  }
                });

              });
            }
        })
      }
      db.query(`SELECT * FROM States where today=${today}`, (err, todayResult) => {
        const yesterday = (Number(today) - 1).toString();
        if (!todayResult.length) {
          db.query(`SELECT * FROM States where today=${yesterday}`, (err, yesResult) => {
            if (err) {
              res.status(500).send('Uh oh, something went wrong');
            } else {
              res.status(200).send(yesResult);
            }
          });
        } else {
          res.status(200).send(todayResult);
        }
      })

    });
  }
}
