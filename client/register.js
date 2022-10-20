const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', handleRegister);

async function handleRegister(e) {
    e.preventDefault()
    const email = e.target.remail.value
    const username = e.target.rusername.value
    const password = e.target.rpassword.value
    console.log(email, password, username)
}
