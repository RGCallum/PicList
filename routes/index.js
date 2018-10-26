var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app/index', { title: 'PicList' });
});

router.get('/users', function(req, res, next) {
  res.render('users/index', { title: 'Users' });
});





module.exports = router;
