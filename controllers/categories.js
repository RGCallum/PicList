const User = require('../models/User')
const Category = require('../models/Category')

const categoryController = {
    index: (req, res) => {
        const userId = req.params.usersId
        User.findById(userId).populate(`categories`)
            .then(user => {
                console.log("USER", user)
                const categories = user.categories
                res.send(categories)
            })
    },
    show: (req, res) =>{
        const categoryId = req.params.categoriesId
        Item.findById(categoryId)
        .then(category =>{
            res.render('categories/show', {category: category})
        })
    }
}

module.exports = categoryController