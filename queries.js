'use strict';
//
// const express = require('express');
// const app = express();
// const datan = require('./db.js');


const country = document.getElementById('country-input');
const company = document.getElementById('company-input');
const port = document.getElementById('port-name-input');
const search = document.getElementById('search-input');

search.onclick = () => {
  if(country.value || company.value || port.value){
    console.log(country.value , company.value, port.value);
  }
}