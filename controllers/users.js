const User = require('../models/User')
const Item = require('../models/Item')

const usersController = {
    index: (req, res) => {
        User.find({}).populate('items')
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
        User.findById(userId).populate('items')
        .then(user => {
            res.render('users/show', {user: user})
        })
    }
}

module.exports = usersController