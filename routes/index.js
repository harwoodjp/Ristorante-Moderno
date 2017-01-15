var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readFile('public/data/menu.json', function(err,data) {
  	 var appetizers = [], entrees = [];
  	 var menu = JSON.parse(data);
  	 menu.forEach(function(item) {
  	 	if (item.type == "Appetizer") appetizers.push(item);
  	 	else if (item.type == "Entree") entrees.push(item);
  	 });
  	 res.render('index', {appetizers:appetizers, entrees:entrees} );
  })
 
});

module.exports = router;
