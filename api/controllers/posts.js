const Post = require('../models/Post')

async function index (req, res) {
    try {
        const post = await Post.all;
        console.log(post)
        res.status(200).json({data: post});
    } catch (err) {
        res.status(500).json({err})
    }
}
async function findByName (req, res) {
    try {
        const post =  Post.findByName(req.body.pseudonym);
        res.status(200).json({data: post});
    } catch (err) {
        res.status(500).json({err})
    }
}

async function create (req, res) {
    try {
        const post = await Post.create(req.body.title, req.body.pseudonym, req.body.body);
        res.status(200).json({data: post});
    } catch (err) {
        res.status(500).json({err})
    }
}


module.exports = {index, findByName, create}
