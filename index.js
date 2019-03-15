'use strict';

const express = require('express');
const app = express();
const datan = require('./db.js');

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index',{obj: datan.data})
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
