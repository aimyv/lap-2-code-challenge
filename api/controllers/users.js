const Post = require('../models/User')

async function index (req, res) {
    try {
        const user = await User.all;
        res.status(200).json({data: user});
    } catch (err) {
        res.status(500).json({err})
    }
}

module.exports = {index}
