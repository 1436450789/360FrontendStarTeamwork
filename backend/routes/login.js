const express = require("express");
let router = express.Router();
const pool = require("../dao/mysql");
/**
 * 登录
 */
router.get("/", (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
  pool.query("select * from upload.upload limit 10", function(
    err,
    results,
    fields
  ) {
    if (err) console.log(err);
    console.log(results);
  });
  res.send("login success");
});

module.exports = router;
