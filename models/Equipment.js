const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Equipment = new Schema({
    name: String,
    available: Number,
    image: String
})

module.exports = mongoose.model('Equipment', Equipment)