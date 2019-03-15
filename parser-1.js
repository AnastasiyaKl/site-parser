const fs = require('fs')
const fetch = require('node-fetch')
const request = require('request')
const rp = require('request-promise')
const FormData = require('form-data')
const cheerio = require('cheerio')
const url = 'https://www.searates.com/container/shippingport'
const queryUrl = 'https://www.searates.com/map/get-ports-sealines'

let companies = [];
let counter = 0;

rp.post({
        uri: url,
    }, function (error, response, body) {
        const $ = cheerio.load(body);

        $('#shipping_line_user > option').each(function () {
            companies.push({
                name: $(this).html(),
                value: $(this).attr('value')
            })
        })
    }
).then((res) => {
    let formedData = [];
      for (let company in companies){
            let formData = new FormData()
            formData.append('id_sealine', companies[company].value)

            fetch(queryUrl, {
                method: 'POST',
                body: formData
            })
              .then(res => res.json())
              .then((res) => {
                  res.list_port.forEach(obj => {
                      formedData.push({
                          company_name: companies[company].name,
                          port_name: obj.name_en,
                          country_code: obj.code,
                          lon: obj.lon,
                          lat: obj.lat
                      })
                  })
                  return formedData;
              })
              .then((formedData)=>{
                  fs.writeFile('./parsed.json', JSON.stringify(formedData), (err) => {
                      if (err) {
                          console.log(err)
                          return
                      }
                  })
              })
        }
  })

  .catch(error => console.error('Error:', error))





