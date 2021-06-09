const express = require('express');
const routes = require('./routes');
require("dotenv").config({
    path: process.env.NODE_ENV.trim() === 'test' ? '.env.test' : '.env'
});

const app = express();
app.use(express.json());
app.use(routes);   

module.exports = app;