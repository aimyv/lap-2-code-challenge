const express = require("express");
const cors = require("cors");

const server = express()
server.use(cors());
server.use(express.json())

const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')

server.get('/', (req, res) => res.send('Hello Sean and Aimy'))
server.use('/posts', postRoutes)

module.exports = server;
