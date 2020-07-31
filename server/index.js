const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const controller = require('./controller/controller');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public')));


app.get('/covid/domestic/:today', controller.covidData);
app.get('/covid/domestic/:today/:sortby', controller.sortBy);
app.get('/getdata', controller.getAllDates);

const port = process.env.PORT || 3456;

app.listen(port, console.log(`Listening on http://localhost:${port}`));