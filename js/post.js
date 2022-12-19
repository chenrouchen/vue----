let params = (new URL(document.location)).searchParams;
let id = parseInt(params.get('id'));
let data;
let collectData;
const text = document.querySelector('#data');
function getPost() {
    axios.get(`${url}posts/${id}`)
        .then(res => {
            data = res.data;
            text.innerHTML = JSON.stringify(data);
            getCollect();
        })
        .catch(err => console.log(err.data));
}
getPost();
userForm();
function getCollect() {
    axios.get(`${url}users/${userId}/collects?postId=${id}`)
        .then(res => {
            collectData = res.data;
            if (collectData.length !== 0) {
                collect.textContent = `已收藏`
            }
        })
        .catch(err => console.log(err))
}

const collect = document.querySelector('#collect');
if (token !== '') {
    collect.classList.remove('d-none');
}
collect.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.textContent === '未收藏') {
        addCollect(id, userId)
    } else {
        deleteCollect()
    }
})
function addCollect(postId, userId) {
    axios.post(`${url}collects`, {
        postId,
        userId
    })
        .then(res => {
            collect.textContent = `已收藏`
        })
        .catch(err => console.log(err))
}
function deleteCollect() {
    let collectId = collectData[0].id
    axios.delete(`${url}collects/${collectId}`,)
        .then(res => {
            collect.textContent = `未收藏`
        })
        .catch(err => console.log(err))
}