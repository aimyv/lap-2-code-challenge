const { init } = require('../initdb');


class Post {
    constructor(data) {
        this.id = data._id
        this.title = data.title
        this.pseudonym = data.pseudonym
        this.body = data.body
    }

    static get all () {
        return new Promise (async (res, rej) => {
            try {
                const db = await init()
                const postData = await db.collection('post').find({}).toArray()
                const posts = postData.map(d => new Post(d))
                if (!posts.length) {throw new Error ('No Posts to display')}
                res(posts)
            } catch (err) {
                rej(`Error retrieving posts: ${err.message}` )
            }
        })
    }

    static create (title, pseudonym, body) {
        return new Promise (async (res, rej) => {
            try {
                const db = await init()
                let newPost = {title: title, pseudonym: pseudonym, body: body}
                const postData = await db.collection('post').insertOne(newPost)
                res(newPost)
            } catch (err) {
                rej(`Error retrieving posts: ${err.message}` )
            }
        })
    }

    static findByName (name) {
        return new Promise (async (res, rej) => {
            try {
                const db = await init()
                const postData = await db.collection('post').find({'pseudonym': name}).toArray()
                const posts = postData.map(d => new Post(d))
                if (!posts.length) {throw new Error ('No Posts to display')}
                res(posts)
            } catch (err) {
                rej(`Error retrieving posts: ${err.message}` )
            }
        })
    }
}

module.exports = Post
