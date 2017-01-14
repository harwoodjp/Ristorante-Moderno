var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readFile('public/data/menu.json', function(err,data) {
  	 var menu = JSON.parse(data);
  	 res.render('index', {menu:menu} );
  })


 
});

module.exports = router;
