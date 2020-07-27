const db = require('../../db/index.js');

module.exports = {
  prevData: (req, res) => {
    const today = req.body.today;
    db.query(`SELECT * FROM States where today=${today}`, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(result);
    });
  }
}
