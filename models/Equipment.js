const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Equipment = new Schema({
    name: String,
    available: Number
})

module.exports = mongoose.model('Equipment', Equipment)