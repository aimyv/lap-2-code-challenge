const makePost = document.getElementById('makePost');
makePost.addEventListener('submit', handlePost);

async function handlePost(e) {
    e.preventDefault()
    const title = e.target.title.value
    const content = e.target.content.value
    const toggle = e.target.toggle.checked
    console.log(title, content, toggle)
    post(title, content, toggle)
}

const post = async (title, content, toggle) => {
    let author;
    if(toggle) {
        author = 'anonymous'
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
