

const User = require('../models/User.js')
const Item = require('../models/Item.js')
const mongoose = require('./connection')

const camera = new Item({
    name: "Camera",
    image: "https://www.mgraves.org/wp-content/uploads/2015/07/Microsoft-LifeCam-Studio-300px.png"
})

const reflector = new Item({
    name: "Reflector",
    image: "https://www.mgraves.org/wp-content/uploads/2015/07/Microsoft-LifeCam-Studio-300px.png"
})


const user1 = new User({
    email: "K@roger.com",
    username: "kidk",
    password: "pass1",
    items: [camera, reflector]
    
})
const user2 = new User({
    email: "T@roger.com",
    username: "kidT",
    password: "pass2",
    items: [camera, reflector]
})


User.remove({})
    .then(() => Item.insertMany([camera, reflector]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close()) //automatically closes mongoose