var express = require('express');
var router = express.Router();
const axios = require('axios').default
require("dotenv").config()
/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.render('index')
});

module.exports = router;
