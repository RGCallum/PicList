var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app/index', { title: 'PicList' });
});

router.get('/users', function(req, res, next) {
  res.render('users/index', { title: 'Users' });
});

// const applicationController = require('../controllers/application.js')
// const userController = require('../controllers/users.js')
// const itemsController = require('../controllers/items.js')

// //homepage
//  router.get('/', applicationController.index)

//  router.get('/users/new', userController.new)
//  router.get('/users/:id', userController.show)
//  router.post('/users', userController.create) 

// router.get ('/items/new', itemsController.new)
// router.get ('/items/:id', itemsController.show)
// router.patch('/items/:id', itemsController.update)
// router.put('/items/:id', itemsController.update)
// router.post ('/items/:id', itemsController.update)



module.exports = router;
