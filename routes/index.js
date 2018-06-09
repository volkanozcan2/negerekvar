var express = require('express');
var router = express.Router();
var isprime = require("../bin/isprime");
/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
    var num = parseInt(req.body.num);
    var str = num + " is";
    str += (isprime.isPrime(num) == true) ? " a prime \n" : " not a prime \n";
    res.send(str);
});
module.exports = router;