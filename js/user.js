
let data;
function getComments() {
    axios.get(`${url}600/collects?userId=${userId}&_expand=post`, { "headers": { "authorization": `Bearer ${token}` } })
        .then((res) => {
            data = res.data;
            init();
        }).catch((err) => {
            console.log(err)
        });
}
getComments();
const render = document.querySelector('#render')
function init() {
    let str = '';
    data.forEach((i) => {
        str += `  <div class="col">
        <div class="card" style="height: 18rem;">
            <a data-id="${i.id}" class="card-link align-self-end p-2">已收藏</a>
            <div class="card-body">
                <h3 class="card-title" id="text">${i.post.title}</h3>
                <p class="card-text"  id="text">${i.post.description}</p>
            </div>
        </div>
    </div>`
    });
    render.innerHTML = str;
}
render.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.nodeName === 'A') {
        let collectId = e.target.dataset.id;
        deleteCollect(collectId);
    }
})
function deleteCollect(id) {
    axios.delete(`${url}600/collects/${id}`, { "headers": { "authorization": `Bearer ${token}` } })
        .then(res => alert(`已刪除`))
        .catch(err => console.log(err))
}