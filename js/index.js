
const render = document.querySelector('#render');
let data;
function getData() {
    axios.get(`${url}posts`)
        .then(res => {
            data = res.data;
            init();
        })
        .catch(err => console.log(err))

}
getData();
function init() {
    let str = '';
    data.forEach((i) => {
        str += `  <div class="col">
        <div class="card" style="height: 18rem;">
            <a href="post.html?id=${i.id}" class="card-link align-self-end p-2">延伸閱讀</a>
            <div class="card-body">
                <h3 class="card-title" id="text">${i.title}</h3>
                <p class="card-text"  id="text">${i.description}</p>
            </div>
        </div>
    </div>`
    });
    render.innerHTML = str;
}

