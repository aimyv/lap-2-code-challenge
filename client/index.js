const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin);

async function handleLogin(e) {
    e.preventDefault()
    const email = e.target.lemail.value
    const password = e.target.lpassword.value
    console.log(email, password)
}
