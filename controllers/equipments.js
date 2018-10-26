const User = require('../models/User')
const Equipment = require('../models/Equipment')

const equipmentController = {
    index: (req, res) => {
        const userId = req.params.usersId
        User.findById(userId).populate(`equipments`)
            .then(user => {
                console.log("USER", user)
                const equipments = user.equipments
                res.send(equipments)
            })
    },
    show: (req, res) =>{
        const equipmentId = req.params.equipmentsId
        Item.findById(equipmentId)
        .then(equipment =>{
            res.render('equipments/show', {equipment: equipment})
        })
    }
}

module.exports = equipmentController