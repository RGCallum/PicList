const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  username: String,
  password: String,
  image: String,
  items: Number 
//   [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Item'
//     }
//   ]
})

module.exports = mongoose.model('User', User)