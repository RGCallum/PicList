const User = require('../models/User')
const Event = require('../models/Event')

const usersController = {
    index: (req, res) => {
        User.find({}).populate('events')
        .then((users) => {
            res.render('users/index', {
                users: users
            })
        })
    },
    new: (req, res) =>{
        res.send('im working')
    },
    show: (req, res) =>{
        const userId = req.params.usersId
        User.findById(userId).populate('events')
        .then(user => {
            res.render('users/show', {user: user})
        })
    }
}

module.exports = usersController