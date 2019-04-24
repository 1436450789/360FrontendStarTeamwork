const mysql = require("mysql");
const pool = mysql.createPool({
  host: "brightasdream.cn",
  port: 3306,
  user: "root",
  password: "Q0bYGmRgmwlE"
});

module.exports = pool;
