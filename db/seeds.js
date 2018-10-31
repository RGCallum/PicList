

const User = require('../models/User.js')
const Event = require('../models/Event.js')
const Equipment = require('../models/Equipment.js')

const mongoose = require('./connection')

const Cameras = new Equipment({
    name: "Cameras",
    available: 4,
    image: "/images/camera.png"
})

const LightKits = new Equipment({
    name: "Light Kits",
    available: 5,
    image: "/images/lightKit.png"


})

const Tripods = new Equipment({
    name: "Tripods",
    available: 4,
    image: "/images/tripod.png"
    
})

const Lenses = new Equipment({
    name: "Lenses",
    available: 14,
    image: "/images/lenses.png"


})

const Reflectors = new Equipment({
    name: "Reflectors",
    available: 15,
    image: "/images/reflectors.png"


})

const Printers = new Equipment({
    name: "Printers",
    available: 4,
    image: "/images/printer.png"

})

const ExtensionCords = new Equipment({
    name: "Extension Cords",
    available: 24,
    image: "/images/extensionCord.png"


})
const Sandbags = new Equipment({
    name: "Sandbags",
    available: 30,
    image: "/images/sandbags.png"


})
const Backdrops = new Equipment({
    name: "Backdrops",
    available: 10,
    image: "/images/backdrops.png"

})

const Computers = new Equipment({
    name: "Computers",
    available: 10,
    image: "/images/macs.png"

})

const Gels = new Equipment({
    name: "Gels",
    available: 30,
    image: "/images/gels.png"

})


const wedding = new Event({
    name: "Johnson Wedding",
    date: "12-2-18",
    time: "6pm",
    location: "Wakanda",
    type: "wedding",
    equipment: [Cameras, LightKits, Backdrops, Computers, Printers, Lenses]
})

const reunion = new Event({
    name: "Brown Reunion",
    date: "06-21-19",
    time: "10am",
    location: "Sokovia",
    type: "reunion",
    equipment: [Cameras, Reflectors, Computers]

})

const anniversary = new Event({
    name: "Garrick Anniversary",
    date: "04-20-19",
    time: "8pm",
    location: "Earth2",
    type: "reunion",
    equipment: [Cameras, Gels, Printers, Backdrops, Tripods, Computers]

})

const formal = new Event({
    name: "Wallace Sweet 16",
    date: "05-20-19",
    time: "8pm",
    location: "Brooklyn",
    type: "Formal Party",
    equipment: [Cameras, Lenses, Backdrops, Tripods, Printers, Computers]

})

const casual = new Event({
    name: "Allen 30th Birthday",
    date: "08-20-19",
    time: "8pm",
    location: "Central City",
    type: "Casual Party",
    equipment: [Cameras, Reflectors, Lenses, Tripods]

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
    .then(() => Event.remove({}))
    .then(() => Equipment.remove({}))
    .then(() => Event.insertMany([wedding, reunion, anniversary, casual, formal]))
    .then(() => Equipment.insertMany([Cameras, LightKits, Tripods, Lenses, Reflectors, Printers, ExtensionCords, Sandbags, Backdrops, Computers, Gels]))
    .then(() => user1.save())
    .then(() => user2.save())
    .then(() => user3.save())
    .then(() => user4.save())    
    .then(() => user5.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 