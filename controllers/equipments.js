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
    },
    create: (req, res) => {
        Equipment.create(req.body).then((newEquipment) => {
            res.redirect(`/equipments/${newEquipment._id}`)
        })
    },
    new: (req, res) => {
        res.render('equipments/new')
    },
    edit: (req, res) => {
        Equipment.findById(req.params.id).then(equipment => {
            res.render('equipments/edit', { equipment: equipment })
        })
    },
    update: (req, res) => {
        Equipment.findByIdAndUpdate(req.params.id, req.body).then((updatedEquipment) => {
            res.redirect(`/equipments/${updatedEquipment._id}`)
        })
    },
    show: (req, res) => {
        Equipment.findById(req.params.id)
            .then(equipment => {
                res.render('equipments/show', { equipment: equipment })
            })
    }
}

module.exports = equipmentsController