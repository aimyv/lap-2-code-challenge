const User = require('../models/User')

async function index (req, res) {
    try {
        const user = await User.all;
        res.status(200).json({data: user});
    } catch (err) {
        res.status(500).json({err})
    }
}

async function show (req, res) {
    try {
        const name = req.params.name;
        const user = await User.findByName(name);
        res.status(200).json({data: user});
    } catch (err) {
        res.status(500).json({err})
    }
}

async function create (req, res) {
    try {
        const data = req.body;
        const newUser = User.create(data);
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).json({err})
    }
}

module.exports = { index,show,create }
