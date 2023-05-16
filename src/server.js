'use strict'

const express = require('express');
const cors = require('cors');

// **** Create Express Singleton ****
const app = express();

// **** MIDDLEWARE ****
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Home Page');
});

app.get('/success', (req, res, next) => {
  res.status(200).send('Success');
});

app.get('/bad', (req, res, next) => {
  next('Error')
});

app.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
})

const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app }