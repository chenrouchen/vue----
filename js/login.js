const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('#loginBtn');
function logIn() {
    axios.post(`${url}login`, {
        "email": email.value,
        "password": password.value
    })
        .then(res => {
            alert('登入成功');
            let token = res.data.accessToken;
            let id = res.data.user.id;
            localStorage.setItem('accessToken', token);
            localStorage.setItem('id', id);

            if (res.data.user.role === 'admin') {
                document.location.href = `http://127.0.0.1:5500/admin.html`;
            } else {
                document.location.href = `http://127.0.0.1:5500/index.html`;
            }
        })
        .catch(err => console.log(err))
}
btn.addEventListener('click', logIn)