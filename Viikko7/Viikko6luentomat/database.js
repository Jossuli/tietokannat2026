/*const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createPool(process.env.SQL_SERVER);
module.exports = connection;'*/
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Jossu',
password: 'erkki', 
  database: 'arviointi'  // <- OIKEA tietokanta, ei netdb
});

connection.connect(err => {
  if (err) console.error('Virhe:', err.message);
  else console.log('Yhteys MySQL:ään onnistui!');
});

module.exports = connection;