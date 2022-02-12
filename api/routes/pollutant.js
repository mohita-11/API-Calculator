var express = require('express');
var router = express.Router();

const pollutantModel = require('../models/pollutant');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
