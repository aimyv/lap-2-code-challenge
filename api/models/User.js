const { init } = require('../initdb');


class User {
    constructor(data) {
        this.id = data._id
        this.name = data.name
        this.email = data.email
    }

    static get all () {
        return new Promise (async (res, rej) => {
            try {
                const db = await init()
                const userData = await db.collection('users').find({}).toArray()
                const users = userData.map(d => new User(d))
                if (!users.length) {throw new Error ('No Users to display')}
                res(users)
            } catch (err) {
                rej(`Error retrieving posts: ${err.message}` )
            }
        })
    }
}

module.exports = User
