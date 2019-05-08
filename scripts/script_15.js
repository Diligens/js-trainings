
console.log("============ SCRIPT 15 LOGS START ============");

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    // prevent the browser from submitting the form
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];

    console.log(user.value, avatarFile.value);
    event.preventDefault();
});