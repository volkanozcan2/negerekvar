var express = require('express');
var router = express.Router();
var isprime = require("../bin/isprime");
/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var num = parseInt(req.body.num);
    res.send(num + ' is prime ' + isprime.isPrime(num) + "\n");
    console.log(num);
});
module.exports = router;