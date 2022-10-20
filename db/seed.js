db = connect(`mongodb://localhost:27017/posts`)

db.post.drop()

db.post.insertMany([
    { title: "Hello", pseudonym: "charlie brown", body: "I love my doggy snoopy" },
    { title: "Bye", pseudonym: "chicken little", body: "The sky is falling" }
])

db.users.drop()

 db.users.insertMany([
    {username: "Sean", email: "cheese@wer.com", password: "killingtonswiss"},
    {username: "Will", email: "will@w123.com", password: "123321gogogo"}
])
