import $ from 'jquery';

$.get("https://api.github.com/gists/9fcb08812900eef58ea8e454ba600229",
    data => console.log('data: ', data.files['user.json'].content)
);

let promise = $.get("https://api.github.com/repos/Diligens/test-data/contents/user.json");
    
promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
)

console.log("============ SCRIPT 14 LOGS START ============");
