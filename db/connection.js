require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MOGODB_URI).then(() => {
console.log('Connected to MongoDB')
})



module.exports = mongoose