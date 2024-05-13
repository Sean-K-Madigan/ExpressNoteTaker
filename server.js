const express = require('express');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();