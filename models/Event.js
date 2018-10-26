const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Event = new Schema({
    name: String,
    image: String
})

module.exports = mongoose.model('Event', Event)