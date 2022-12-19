const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('#signupBtn');
function signUp() {
    axios.post(`${url}signup`, {
        "email": email.value,
        "password": password.value
    })
        .then(res => {
            alert('註冊成功');
            email.value = '';
            password.value = '';
            document.location.href = `https://chenrouchen.github.io/vue----/index.html`;
        })
        .catch(err => console.log(err))
}
btn.addEventListener('click', signUp)