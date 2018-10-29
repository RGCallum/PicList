const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Event = new Schema({
    name: String,
    date: Date,
    time: String,
    location: String,
    type: String,
    equipment: [
        {
          type: String,
          // type: Schema.Types.ObjectId,
          ref: "Equipment"
          
        }
      ]
})

module.exports = mongoose.model('Event', Event)