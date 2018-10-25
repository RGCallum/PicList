const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    image: String,
    content: String
})

module.exports = mongoose.model('Item', Item)