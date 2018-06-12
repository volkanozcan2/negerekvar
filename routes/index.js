var express = require('express');
var router = express.Router();
var isprime = require("../bin/isprime");
var fs = require("fs");
/* GET home page. */
var file = fs.createWriteStream("./comments", { flags: 'a' });
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Jovanni' });
});
router.post('/', function(req, res, next) {
    var num = parseInt(req.body.num);
    console.log(req.body);
    file.write(JSON.stringify(req.body) + "\n");
    res.send(isprime.isPrime(num));

});
module.exports = router;