const Event = require('../models/Event')
const Equipment = require('../models/Equipment')

const equipmentsController = {
    index: (req, res) => {
    //     res.send('im working')
    // }
        const eventId = req.params.eventsId
        Event.findById(eventId).populate(`equipments`)
            .then(event => {
                console.log("event", event)
                const equipments = event.equipments
                res.send(equipments)
            })
    },
    show: (req, res) =>{
        const equipmentId = req.params.equipmentsId
        Equipment.findById(equipmentId)
        .then(equipment =>{
            res.render('equipments/show', {equipment: equipment})
        })
    }
}

module.exports = equipmentsController