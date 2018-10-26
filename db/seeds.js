

const User = require('../models/User.js')
const Event = require('../models/Event.js')
const Equipment = require('../models/Equipment.js')

const mongoose = require('./connection')

const camera = new Equipment({
    name: "Camera",
    image: "http://pngimg.com/uploads/photo_camera/photo_camera_PNG7843.png"
})

const lights = new Equipment({
    name: "Lights",
    image: "https://mbtskoudsalg.com/images/circle-light-png.png"
})

const tripod = new Equipment({
    name: "Tripod",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const wedding = new Event({
    name: "Johnson Wedding",
    date: "12-2-18",
    time: "6pm",
    type: "wedding",
    equipment: [camera, lights]
})

const reunion = new Event({
    name: "Brown Reunion",
    date: "06-21-19",
    time: "10am",
    type: "reunion",
    equipment: [camera, tripod]

})


const user1 = new User({
    email: "john@pics.com",
    username: "Jpics",
    password: "pass1",
    events: [wedding, reunion]  
})
const user2 = new User({
    email: "tim@wtf.com",
    username: "kidT",
    password: "pass2",
    events: [reunion, wedding]
})


User.remove({})
    .then(() => Event.insertMany([wedding, reunion]))
    .then(() => Equipment.insertMany([camera, lights, tripod]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) //automatically closes mongooseshow 