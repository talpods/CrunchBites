const database = require('./data/database');

const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
const photos = require('./data/database.js');

app.get('/restaurants', (req, res) => {
 
  database.query('Select * from restaurants ',function(error,restaurants){
    res.json(restaurants);
  })
  //res.send(photos);
});
app.get('/orders', (req, res) => {
  database.query('Select o.id, o.restaurant_id, o.total_cost,  o.time, r.id, r.name AS name ,r.logo_url from orders AS o, restaurants as r WHERE o.restaurant_id= r.id',function(error,orders){
    res.json(orders);
  })

});

app.get('/menu/:id', (req, res) => {
  const {id}=req.params;
  database.query(`Select i.id, i.restaurant_id, i.price, i.name AS dish,  r.id, r.name AS name ,
  r.logo_url from items AS i, restaurants as r WHERE i.restaurant_id= r.id && i.restaurant_id=?`
  ,[id] ,function(error,menu){
    res.json(menu);
  })

  

});



app.listen(3000, () => {})