const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin);

async function handleLogin(e) {
    e.preventDefault()
    const username = e.target.lusername.value
    const password = e.target.lpassword.value
    fetchUser(username, password)
}

const fetchUser = async (username, password) => {
    const data = await fetch(`http://localhost:3000/users/${username}`)
    const user = await data.json()
    if (user.data.password == password) {location.href = './feed.html'}
    else {console.log('Incorrect password')}
}
