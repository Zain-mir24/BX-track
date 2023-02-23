var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("we hit the api ")
  res.render('index', { title: 'Express' });
});

module.exports = router;
