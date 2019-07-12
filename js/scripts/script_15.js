import $ from 'jquery';

console.log("============ SCRIPT 15 LOGS START ============");

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    // prevent the browser from submitting the form
    let userName = form.elements['user-name'];
    let userNameError = document.getElementById('user-error');
    let avatarSrc = form.elements['avatar-file'];

    let posting = {
        name: userName.value,
        avatar: avatarSrc.value,
        date: new Date() 
    }

    let promise = $.post(
        "http://5cd2f17a7cd95e0014044619.mockapi.io/api/v1/users",
        posting
    )

    promise.then(
        data => console.log('success', data),
        error => console.log('error', error)
    )

    if (userName.value.length < 4) {
        userNameError.textContent = 'Invalid entry';
        userNameError.style.color = 'red';
        userName.style.borderColor = 'red';
        userName.focus();
    } 
    if (userName.value.length >= 4) {
        userNameError.textContent = '';
        userName.style.border = 'none';
        userName.focus();
    }

    
    console.log(userName.value, avatarFile.value);
});