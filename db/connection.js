const mongoose = require('mongoose');
mongoose.connect('process.env.mongodb://localhost/PicList').then(() => {
console.log('Connected to MongoDB')
})

var something = require('dotenv').config();


module.exports = mongoose