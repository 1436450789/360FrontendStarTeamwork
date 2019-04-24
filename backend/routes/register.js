const express = require("express");
let router = express.Router();

/**
 * 登录
 */
router.get("/", (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
  res.send("register success");
});

module.exports = router;
