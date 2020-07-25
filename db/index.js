const mysql = require('mysql');
const config = require('../dbConfig.json');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database...");
})

module.exports = connection;