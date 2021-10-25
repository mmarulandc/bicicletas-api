var express = require('express');
var router = express.Router();
const axios = require("axios").default;

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('bicicletas');
});

module.exports = router;
