

const User = require('../models/User.js')
const Event = require('../models/Event.js')
const mongoose = require('./connection')

const camera = new Event({
    name: "Camera",
    image: "https://www.mgraves.org/wp-content/uploads/2015/07/Microsoft-LifeCam-Studio-300px.png"
})

const reflector = new Event({
    name: "Reflector",
    image: "https://www.mgraves.org/wp-content/uploads/2015/07/Microsoft-LifeCam-Studio-300px.png"
})


const user1 = new User({
    email: "K@roger.com",
    username: "kidk",
    password: "pass1",
    events: [camera, reflector]
    
})
const user2 = new User({
    email: "T@roger.com",
    username: "kidT",
    password: "pass2",
    events: [camera, reflector]
})


User.remove({})
    .then(() => Event.insertMany([camera, reflector]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) //automatically closes mongoose