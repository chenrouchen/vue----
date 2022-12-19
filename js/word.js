if (userId !== 2) {
    alert('您沒有權限進入');
    document.location.href = `http://127.0.0.1:5500/index.html`;
}
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('#btn');
let params = (new URL(document.location)).searchParams;
let id = parseInt(params.get('id'));
let data;
function getData() {
    axios.get(`${url}posts/${id}`)
        .then(res => {
            data = res.data;
            inputs[0].value = data.title;
            inputs[1].value = data.description;
        })
        .catch(err => console.log(err))
}
getData();
function patchPost() {
    let title = inputs[0].value;
    let description = inputs[1].value;
    axios.patch(`${url}posts/${id}`, {
        title, description
    })
        .then(res => {
            alert('修改成功');
        })
        .catch(err => console.log(err))
}
btn.addEventListener('click', patchPost)