const html_index = require('./main.html');

function index() {

    let theBody = document.getElementsByTagName('body')[0];
    console.log(html_index);

    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", html_index);

}

window.onload = index;
