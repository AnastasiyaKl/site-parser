'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const datan = require('./db.js');

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'pug');

// app.get("/", urlencodedParser, function (request, response) {
//   response.sendFile(__dirname + "/index.html");
// });

app.post("/", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);

  res.render('index',{obj: datan.data})
  // response.send(`${request.body.userName}`);
});

app.get('/', function (req, res) {
    res.render('index',{obj: datan.data})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
