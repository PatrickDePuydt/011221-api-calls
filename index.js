// Dependencies
const express = require('express');
// const axios = require('axios');
require('dotenv').config();

// Initialize our express server
const app = express();


// Write out a home route (stub)

app.get('/', (req, res) => {
  res.send('Hello');
});

// call app
app.listen(3000, () => {
  console.log(`🛺 Listening`);
})