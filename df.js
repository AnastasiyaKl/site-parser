const json = require('./p.json');
const fs = require('fs');

for (let el in json){
    for (let list in json[el].list_port){
        json[el].list_port[list].company = el || 'df';
    }    
}
let df = JSON.stringify(json)
fs.writeFile('./p-m-2.json', df, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});