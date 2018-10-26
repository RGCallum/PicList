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
const eventsController = require('../controllers/events.js')

//homepage
 router.get('/', applicationController.index)

 router.get('/users', usersController.index)
 router.get('/users/new', usersController.new)
 router.get('/users/:id', usersController.show)
//  router.post('/users', userController.create) 

router.get ('/events', eventsController.index)
// router.get ('/events/new', eventsController.new)
// router.get ('/events/:id', eventsController.show)
// router.patch('/events/:id', eventsController.update)
// router.put('/events/:id', eventsController.update)
// router.post ('/events/:id', eventsController.update)



module.exports = router;
