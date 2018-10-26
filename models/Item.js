const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    image: String
})

module.exports = mongoose.model('Item', Item)