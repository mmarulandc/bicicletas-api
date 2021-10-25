var express = require('express');
var router = express.Router();
require("dotenv").config()
/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("agregarView");
  res.render('agregar');
});

module.exports = router;
