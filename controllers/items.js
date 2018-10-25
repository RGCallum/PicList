const User = require('../models/User')
const Item = require('../models/Item')

const itemController = {
    index: (req, res) => {
        const userId = req.params.usersId
        User.findById(userId).populate(`items`)
            .then(user => {
                console.log("USER", user)
                const items = user.items
                res.send(items)
            })
    },
    show: (req, res) =>{
        const itemId = req.params.itemsId
        Item.findById(itemId)
        .then(item =>{
            res.render('items/show', {item: item})
        })
    }
}

module.exports = itemController