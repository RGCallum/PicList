const User = require('../models/User')
const Event = require('../models/Event')

const eventsController = {
    index: (req, res) => {
        Event.find({}).populate('events')
        .then((events) => {
            res.render('events/index', {
                events: events
            })
        })
    },

    new: (req, res) =>{
        res.render('events/new')

      },
    show: (req, res) =>{
        Event.findById(req.params.id)
        .then(event =>{
            res.render('events/show', {event: event})
        })
    },

    create: (req, res) => {
        Event.create(req.body).then((newEvent) => {
          res.redirect(`/events/${newEvent._id}`)
        })
      },
    

      edit: (req, res) => {
        Event.findById(req.params.id).then(event => {
          res.render('events/edit', { event: event })
        })
      },

      update: (req, res) => {
        Event.findByIdAndUpdate(req.params.id, req.body).then((updatedEvent) => {
          res.redirect(`/events/${updatedEvent._id}`)
        })
      },

      delete: (req, res) => {
        Event.findByIdAndRemove(req.params.id).then(() => {
          res.redirect('/')
        })
      }
    
}

module.exports = eventsController