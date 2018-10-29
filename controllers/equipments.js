const Event = require('../models/Event')
const Equipment = require('../models/Equipment')

const equipmentsController = {
    index: (req, res) => {
        Equipment.find({}).populate('equipments')
        .then((equipments) => {
            res.render('equipments/index', {
                equipments: equipments
            })
        })
        // res.render('equipments/index')
    },
    new: (req, res) =>{
        res.render('equipments/new')
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