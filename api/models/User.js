const { init } = require('../initdb');


class User {
    constructor(data) {
        this.id = data._id
        this.username = data.username
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

    static findByName(name){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const dbData = await db.collection('users').find({}).toArray()
                const user = dbData.filter((user) => user.name == name)[0];
                if (!user) { throw new Error('No User here!') }
                resolve(new User(user));
            } catch (err) {
                reject(`Error retrieving user: ${err.message}`)
            }
        })
    }

    static create(user){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const newUser = new User({
                    ...user
                })
                const dbData = await db.collection('users').insertOne(newUser)
                resolve(dbData);
            } catch (err) {
                reject(`Error adding user: ${err.message}`)
            }
        })
    }
}

module.exports = User
