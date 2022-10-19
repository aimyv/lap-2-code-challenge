// const express = require("express");
// const mongoose = require('mongoose')
// const cors = require("cors");
// require('dotenv').config();
// const mongoString = process.env.DATABASE_URL
// mongoose.connect(mongoString)
// const database = mongoose.connection

// const server = express()

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })

// server.use(cors());
// server.use(express.json());



// const postRoutes = require('./routes/posts')

// server.use('/posts', postRoutes)

// server.get('/', (req, res) => res.send('Hello World'))

// module.exports = server;
const express = require("express");
const cors = require("cors");

const server = express()
server.use(cors());
server.use(express.json())

const postRoutes = require('./routes/posts')

server.use('/posts', postRoutes)

// const port = process.env.PORT || 3000;

server.get('/', (req, res) => res.send('Hello Sean and Aimy'))

module.exports = server;
