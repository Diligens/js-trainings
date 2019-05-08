
console.log("============ SCRIPT 15 LOGS START ============");

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    // prevent the browser from submitting the form
    let user = form.elements['user'];
    let userError = document.getElementById('user-error');
    
    let avatarFile = form.elements['avatar-file'];

    if (user.value.length < 4) {
        userError.textContent = 'Invalid entry';
        userError.style.color = 'red';
        user.style.borderColor = 'red';
        user.focus();
    }

    event.preventDefault();
    console.log(user.value, avatarFile.value);
});