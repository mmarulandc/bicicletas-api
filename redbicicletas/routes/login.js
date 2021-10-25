var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  const token = req.body.token;
  res.send("success");
});

module.exports = router;
