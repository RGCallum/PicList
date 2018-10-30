var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/application.js')
const usersController = require('../controllers/users.js')
const eventsController = require('../controllers/events.js')
const equipmentsController = require('../controllers/equipments.js')

//homepage
 router.get('/', applicationController.index)

 router.get('/users', usersController.index)
 router.get('/users/new', usersController.new)
 router.get('/users/:id', usersController.show)
 router.get('/users/:id/edit', usersController.edit)
 router.post('/users', usersController.create) 
 router.delete('/users/:id', usersController.delete)
 router.patch('/users/:id', usersController.update)

router.get ('/events', eventsController.index)
router.get ('/events/new', eventsController.new)
router.get ('/events/:id', eventsController.show)
router.get('/events/:id/edit', eventsController.edit) 
router.post('/events', eventsController.create) 
router.patch('/events/:id', eventsController.update)
router.delete('/events/:id', eventsController.delete)


router.get('/equipments', equipmentsController.index)
router.get ('/equipments/new', equipmentsController.new)
router.get ('/equipments/:id', equipmentsController.show)
router.post('/equipments', equipmentsController.create) 
router.get('/equipments/:id/edit', equipmentsController.edit) 
router.patch('/equipments/:id', equipmentsController.update)





module.exports = router;
