const mysql = require('mysql');


const connect = mysql.createConnection({

});

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database...");
})