const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  email: String, 
  username: String,
  password: String,
  image: String,
  events: [
    {
      type: String
  
    }
  ]
})

module.exports = mongoose.model('User', User)