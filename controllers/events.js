const User = require('../models/User')
const Event = require('../models/Event')

const eventsController = {
    index: (req, res) => {
        const userId = req.params.usersId
        User.findById(userId).populate(`events`)
            .then(user => {
                console.log("USER", user)
                const events = user.events
                res.send(events)
            })
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