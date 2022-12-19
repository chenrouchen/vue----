if (userId !== 2) {
    alert('您沒有權限進入');
    document.location.href = `https://chenrouchen.github.io/vue----/index.html`;
}
let data;
function getData() {
    axios.get(`${url}posts`)
        .then((res) => {
            data = res.data;
            render();
        })
        .catch((err) => {
            console.log(err)
        })
}
getData();
const tBody = document.querySelector('tbody');
function render() {
    let str = '';
    data.forEach(i => {
        str += `<tr>
        <th scope="row">${i.id}</th>
        <td>${i.title}</td>
        <td>${i.description}</td>
        <td>   <a  href="word.html?id=${i.id}">編輯</a>
        <a  data-id="${i.id}" href="#">刪除</a> </td>
    </tr>`
    });
    tBody.innerHTML = str;
}
tBody.addEventListener('click', function (e) {
    let postId = Number(e.target.dataset.id);
    if (e.target.textContent === '刪除') {
        e.preventDefault();
        deletePost(postId);
    }
})
function deletePost(postId) {
    axios.delete(`${url}posts/${postId}`)
        .then(res => {
            alert('已刪除')
        })
        .catch(err => console.log(err))
}