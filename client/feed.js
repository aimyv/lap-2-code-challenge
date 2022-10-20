const makePost = document.getElementById('makePost');
makePost.addEventListener('submit', handlePost);

const feed = document.getElementById('allPosts')

async function handlePost(e) {
    e.preventDefault()
    const title = e.target.title.value
    const content = e.target.content.value
    const toggle = e.target.toggle.checked
    console.log(title, content, toggle)
    post(title, content, toggle)
}

async function getFeed() {
    let rawData = await fetch(`http://localhost:3000/posts`)
    const data = await rawData.json()
    const length = data.data.length
    data.data.reverse().forEach(p => {
        let div = document.createElement('div')
        div.classList.add('post')

        let title = document.createElement('h1')
        let anon = document.createElement('em')
        let content = document.createElement('p')
        anon.classList.add('author')

        title.textContent = p.title
        content.textContent = p.body
        anon.textContent = p.pseudonym

        div.appendChild(title)
        div.appendChild(anon)
        div.appendChild(content)

        feed.appendChild(div)
    })
}

getFeed()

const post = async (title, content, toggle) => {
    let author;
    if(toggle) {
        author = 'anonymous'
    } else {
        author = localStorage.getItem('username')
    }
    await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": title,
            "pseudonym": author,
            "body": content,
        })
    })
    console.log('posted!')
}
