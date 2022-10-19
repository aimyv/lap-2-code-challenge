const Post = require('../models/Post')

async function index (req, res) {
    try {
        const post = await Post.all;
        res.status(200).json({data: post});
    } catch (err) {
        res.status(500).json({err})
    }
}

module.exports = {index}
