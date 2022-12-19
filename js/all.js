const url = "https://vue-json.onrender.com/";
const token = localStorage.getItem('accessToken');
const userId = Number(localStorage.getItem('id'));
const form = document.querySelector('form');
function userForm() {
    if (token !== "" & userId !== 2) {
        form.innerHTML = ` <a href="user.html?id=${userId}" class="mx-2">收藏</a>
       <a href="#" class="mx-2" >登出</a>`
    } else if (token !== "" & userId === 2) {
        form.innerHTML = ` 
        <a class="btn btn-outline-primary mx-2" href="admin.html">回到後台</a>
        <a class="btn btn-outline-primary mx-2" href="index.html">回到首頁</a>
        <a class="btn btn-outline-primary mx-2" href="add.html">新增景點</a>
        <a class="btn btn-primary" href="#">登出</a>
   `
    }
}
userForm();
form.addEventListener('click', function (e) {
    if (e.target.textContent === '登出') {
        localStorage.setItem('accessToken', "");
        localStorage.setItem('id', "");
        alert('已登出');
        location.reload();
    }
})