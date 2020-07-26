const mysql = require('mysql');
const config = require('../dbConfig.json');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    throw err;
  }
})

module.exports = connection;