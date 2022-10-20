const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin);

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleRegister);

async function handleLogin(e) {
    e.preventDefault()
    const email = e.target.lemail.value
    const password = e.target.lpassword.value
    console.log(email, password)
}

async function handleRegister(e) {
    e.preventDefault()
    // const data = e.target
    const email = e.target.remail.value
    const username = e.target.rusername.value
    const password = e.target.rpassword.value
    // console.log(data)
    console.log(email, password, username)
}
