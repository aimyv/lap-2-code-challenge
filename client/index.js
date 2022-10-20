const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin);

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleRegistration);

async function handleLogin(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
}
