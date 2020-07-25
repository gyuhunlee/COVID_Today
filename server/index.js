const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/public')));




const port = process.env.PORT || 3456;

app.listen(port, console.log(`Listening on http://localhost:${port}`));