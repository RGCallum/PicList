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
        res.send('im working')
    },
    show: (req, res) =>{
        const eventId = req.params.eventsId
        Event.findById(eventId)
        .then(event =>{
            res.render('events/show', {event: event})
        })
    }
}

module.exports = eventsController