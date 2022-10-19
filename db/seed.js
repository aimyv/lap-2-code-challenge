db = connect("mongodb://localhost:27017/posts")

db.posts.drop()

db.posts.insertMany([
    { title: "Hello", pseudonym: "charlie brown", body: "I love my doggy snoopy" },
    { title: "Bye", pseudonym: "chicken little", body: "The sky is falling" }
])
