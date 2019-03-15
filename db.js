const {Client} = require('pg');

// const connectionString = '';

let data = [];

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'companies',
    password: 'postgres',
    port: '5432'
})

// const client = new Client({
//     connectionString: connectionString
// })
//
// client.connect((err) => {
//     console.log('hello');
//     if (err) {
//         console.error('connection error', err.stack);
//     } else {
//         console.log('connected');
//     }
// });

client.connect();
client.query('SELECT * FROM companies', null, (err, res) => {
    if(err) {
        console.log(err);
    }else{
        data.push(res.rows);

        // console.log(data[0]);
        // module.exports = data;
        module.exports.data = data[0];
    }
    client.end()
});

