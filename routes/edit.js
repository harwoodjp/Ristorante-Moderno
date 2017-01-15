var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("edit");
});


router.get('/:id/:field/:value', function(req, res, next) {
  fs.readFile('public/data/menu.json', function(err,data) {
    var menu = JSON.parse(data);
    var item = menu.filter(function( obj ) {
      return obj.id == req.params.id;
    });
    if (item.length) item[0][req.params.field] = req.params.value;
    var menuJSON = JSON.stringify(menu);
    fs.writeFile('./public/data/menu.json', menuJSON, function(err) {
      if (err) console.log(err);
      else res.redirect(302,'/');
    }); 
  });
});

module.exports = router;
