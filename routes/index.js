var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('app/index', { title: 'PicList' });
// });

// router.get('/users', function(req, res, next) {
//   res.render('users/index', { title: 'Users' });
// });

const applicationController = require('../controllers/application.js')
const usersController = require('../controllers/users.js')
const itemsController = require('../controllers/items.js')

//homepage
 router.get('/', applicationController.index)

 router.get('/users', usersController.index)
 router.get('/users/new', usersController.new)
 router.get('/users/:id', usersController.show)
//  router.post('/users', userController.create) 

router.get ('/items', itemsController.index)
// router.get ('/items/new', itemsController.new)
// router.get ('/items/:id', itemsController.show)
// router.patch('/items/:id', itemsController.update)
// router.put('/items/:id', itemsController.update)
// router.post ('/items/:id', itemsController.update)



module.exports = router;
