const express = require('express');
const bodyParser = require('body-parser');
require('./services/mongo');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
