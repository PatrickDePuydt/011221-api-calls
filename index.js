// Dependencies
const express = require('express');
const axios = require('axios');
require('dotenv').config();

// Initialize our express server
const app = express();

// Write out a home route (stub)
app.get('/', (req, res) => {
  axios.get('http://www.google.com')
    .then(response => {
      res.send(response.data);
    });
});

// call app
app.listen(3000, () => {
  console.log(`🛺 Listening`);
})