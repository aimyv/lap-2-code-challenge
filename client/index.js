const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin);

async function handleLogin(e) {
    e.preventDefault()
    const username = e.target.lusername.value
    const password = e.target.lpassword.value
    fetchUser(username, password)
}

const fetchUser = async (username, password) => {
    try {
        const data = await fetch(`http://localhost:3000/users/${username}`)
        if (data.status == 500) {throw new Error('user does not exist')}
        const user = await data.json()
        if (user.data.password == password) {location.href = './feed.html'}
        else {throw new Error('Incorrect password')}
        localStorage.setItem('username', username)
    } catch (err) {
        alert(err)
    }
}
