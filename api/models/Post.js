// const { init } = require('../initdb');
const postsData = require('../../db/posts')

class Post {
    constructor(data) {
        // this.id = data.id
        this.title = data.title
        this.pseudonym = data.pseudonym
        this.body = data.body
    }

    static get all () {
        const posts = postsData.map(d => new Post(d))
        return posts
        // return new Promise (async (res, rej) => {
        //     try {
        //         const db = await init()
        //         const postData = await db.collection('posts').find({}).toArray()
        //         const posts = postData.map(d => new Post(d))
        //         if (!posts.length) {throw new Error ('No Posts to display')}
        //     } catch (err) {
        //         rej(`Error retrieving posts: ${err.message}` )
        //     }
        // })
    }

    static findByName (name) {
        const post = postsData.filter(d => d.pseudonym == name).map(d => new Post(d))
        return post
    }

    static create(title, pseudonym, body){
        return new Promise (async (resolve, reject) => {
            try {
                let newPost = new Post({title: title, pseudonym: pseudonym, body: body});
                resolve (newPost);
            } catch (err) {
                reject('Error creating post');
            }
        });
    }
}

module.exports = Post
