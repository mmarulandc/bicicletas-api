var express = require('express');
var router = express.Router();
const axios = require('axios').default
require("dotenv").config()
/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  const id = req.params.id
  res.render('mostrar', {
    id: id
  })
});

module.exports = router;
