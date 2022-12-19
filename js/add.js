if (userId !== 2) {
    alert('您沒有權限進入');
    document.location.href = `https://chenrouchen.github.io/vue----/index.html`;
}
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('#btn');
function addPost() {
    let title = inputs[0].value;
    let description = inputs[1].value;
    axios.post(`${url}posts`, {
        title,
        description
    })
        .then((res) => {
            alert('新增成功');
        }).catch((err) => {
            console.log(err)
        });
}
btn.addEventListener('click', addPost)