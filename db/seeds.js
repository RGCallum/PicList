

const User = require('../models/User.js')
const Event = require('../models/Event.js')
const Equipment = require('../models/Equipment.js')

const mongoose = require('./connection')

const camera = new Equipment({
    name: "Camera",
    // image: "/Images/dramaticCloset1light.png)"
})

const lights = new Equipment({
    name: "Lights",
    // image: "https://mbtskoudsalg.com/images/circle-light-png.png"
})

const tripod = new Equipment({
    name: "Tripod",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const lenses = new Equipment({
    name: "lenses",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const reflector = new Equipment({
    name: "reflector",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const printer = new Equipment({
    name: "printer",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const cords = new Equipment({
    name: "cords",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})
const sandbags = new Equipment({
    name: "sandbags",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})
const backdrop = new Equipment({
    name: "backdrop",
    image: "/Images/backdrops.png)"
})

const gels = new Equipment({
    name: "gels",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const computer = new Equipment({
    name: "computer",
    // image: "https://png.pngtree.com/element_pic/16/10/24/050bc0ed97fbf7c104037ea3a833b209.jpg"
})

const wedding = new Event({
    name: "Johnson Wedding",
    date: "12-2-18",
    time: "6pm",
    location: "Wakanda",
    type: "wedding",
    equipment: [camera, lights, backdrop, computer, printer, lenses]
})

const reunion = new Event({
    name: "Brown Reunion",
    date: "06-21-19",
    time: "10am",
    location: "Sokovia",
    type: "reunion",
    equipment: [camera, reflector, computer]

})

const anniversary = new Event({
    name: "Garrick Anniversary",
    date: "04-20-19",
    time: "8pm",
    location: "Earth2",
    type: "reunion",
    equipment: [camera, gels, printer, backdrop, tripod, computer]

})

const formal = new Event({
    name: "Wallace Sweet16",
    date: "05-20-19",
    time: "8pm",
    location: "Brooklyn",
    type: "Formal Party",
    equipment: [camera, lenses, backdrop, tripod, printer, computer]

})

const casual = new Event({
    name: "Allen 30th Birthday",
    date: "08-20-19",
    time: "8pm",
    location: "Central City",
    type: "Casual Party",
    equipment: [camera, reflector, lenses, tripod]

})

const user1 = new User({
    email: "john@gtfoh.com",
    name: "John Connor",
    password: "1234",
    events: [wedding, casual, reunion] 
})
const user2 = new User({
    email: "tim@wtf.com",
    name: "Tim Turner",
    password: "1234",
    events: [reunion, wedding, formal]
})
const user3 = new User({
    email: "Kyle@barker.com",
    name: "Kyle Barker",
    password: "1234",
    events: [anniversary, casual, reunion]
})
const user4 = new User({
    email: "Dana@Queen.com",
    name: "Dana Owens",
    password: "1234",
    events: [reunion, casual, wedding]
})
const user5 = new User({
    email: "Jay@Roc.com",
    name: "Shawn Carter",
    password: "1234",
    events: [formal, casual, anniversary]
})


User.remove({})
    .then(() => Event.insertMany([wedding, reunion, anniversary, casual, formal]))
    .then(() => Equipment.insertMany([camera, lights, tripod, lenses, reflector, printer, cords, sandbags, backdrop, gels, computer]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => user4.save())    
    .then(() => user5.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) //automatically closes mongooseshow 