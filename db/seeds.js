

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

const lenses = new Equipment({
    name: "lenses",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const reflector = new Equipment({
    name: "reflector",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const printer = new Equipment({
    name: "printer",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const cords = new Equipment({
    name: "cords",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})
const sandbags = new Equipment({
    name: "sandbags",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})
const backdrop = new Equipment({
    name: "backdrop",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const gels = new Equipment({
    name: "gels",
    image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})


const wedding = new Event({
    name: "Johnson Wedding",
    date: "12-2-18",
    time: "6pm",
    type: "wedding",
    equipment: camera, lights
})

const reunion = new Event({
    name: "Brown Reunion",
    date: "06-21-19",
    time: "10am",
    type: "reunion",
    equipment: camera, reflector, tripod

})

const anniversary = new Event({
    name: "Turner Anniversary",
    date: "04-20-19",
    time: "8pm",
    type: "reunion",
    equipment: camera, tripod

})

const formalParty = new Event({
    name: "Wallace Sweet16",
    date: "05-20-19",
    time: "8pm",
    type: "formalParty",
    equipment: camera, lenses

})

const casualParty = new Event({
    name: "Taylor 30th Birthday",
    date: "08-20-19",
    time: "8pm",
    type: "casualParty",
    equipment: camera, tripod

})

const user1 = new User({
    email: "john@pics.com",
    username: "Jpics",
    password: "pass1",
    events: wedding, reunion  
})
const user2 = new User({
    email: "tim@wtf.com",
    username: "kidT",
    password: "pass2",
    events: reunion, wedding
})


User.remove({})
    .then(() => Event.insertMany([wedding, reunion, anniversary, casualParty, formalParty]))
    .then(() => Equipment.insertMany([camera, lights, tripod, lenses, reflector, printer, cords, sandbags, backdrop, gels]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) //automatically closes mongooseshow 