const database = require('./data/database');

const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
const photos = require('./data/database.js');

app.get('/restaurants', (req, res) => {
  database.query('Select * from restaurants',function(error,restaurants){
    res.json(restaurants);
  })
  //res.send(photos);
});

app.listen(3000, () => {})