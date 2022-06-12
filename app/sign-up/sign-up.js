let signUpForm = document.forms['sign-up'];
let newUserEmail = signUpForm.elements['new-user-email'];
let newUserPassword = signUpForm.elements['new-user-password'];
let signUpButton = signUpForm.elements['sign-up-button']

signUpForm.addEventListener('input', function () {
    isUserDataValid(this, signUpButton)
});

newUserEmail.addEventListener('change', function () {
    isInputFieldValid(this, '.input-email')
})

newUserPassword.addEventListener('change', function () {
    isInputFieldValid(this, '.input-password')
})

window.appUsers = [
    {
        email: 'art@gmail.com',
        password: '123456'
    }
];

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let warning = document.querySelector('.text-warning');
    let registerMessage = document.querySelector('.registered')
    registerMessage.classList.remove('show');
    registerMessage.innerHTML = ''
    if (isUserExist(newUserEmail) == true) {
        warning.innerHTML = 'A user with the same email already exists. Try to Sign In';
        warning.classList.add('show');
    } else {
        warning.innerHTML = 'The email address is incorrect. Please retry...'
        warning.classList.remove('show');
        window.appUsers.push({email: newUserEmail.value, password: newUserPassword.value})
        registerMessage.classList.add('show');
        registerMessage.innerHTML = 'You are successfully Signed Up!'
    }
})




