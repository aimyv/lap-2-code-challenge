const server = require("express")();
const cors = require("cors");

const dogsController = require("./controllers/dogs")
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes/posts')

server.use('/posts', postRoutes)

server.get('/', (req, res) => res.send('Hello World'))

module.exports = server;
