const express = require('express');
const bodyParser = require('body-parser');
require('./services/mongo');

const app = express();

module.exports = app;
