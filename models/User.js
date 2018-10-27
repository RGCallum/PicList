const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  email: {
    type: String,
    required: false
  },
  username: String,
  password: String,
  image: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
})

module.exports = mongoose.model('User', User)