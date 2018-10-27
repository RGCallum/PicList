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
        // res.send('im working')
        User.create(req.body).then((newUser) => {
            res.redirect(`/users/new/${newUser._id}`)
          })
    },
    show: (req, res) =>{
        const userId = req.params.usersId
        User.findById(userId).populate('events')
        .then(user => {
            res.render('users/show', {user: user})
        })
    },
    create: (req, res) => {
        User.create(req.body).then((newUser) => {
          res.redirect(`/${newUser._id}`)
        })
      },
    

      edit: (req, res) => {
        User.findById(req.params.id).then(user => {
          res.render('users/edit', { user: user })
        })
      },

      update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
          res.redirect(`/${updatedUser._id}`)
        })
      },

      delete: (req, res) => {
        User.findByIdAndRemove(req.params.id).then(() => {
          res.redirect('/')
        })
      }
    
}

module.exports = usersController