const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root'
});

module.exports = pool;