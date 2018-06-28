var express = require('express');
var router = express.Router();
var isprime = require("../bin/isprime");
var fs = require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Jovanni' });
});
router.post('/', function(req, res, next) {
    var num = parseInt(req.body.num);
    console.log(req.body);
    res.send(isprime.isPrime(num));

});
module.exports = router;
