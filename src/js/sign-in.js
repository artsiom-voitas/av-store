import { isFormFilled, isUserExist, isInputFieldValid, loginToAccount, isUserLoggedIn } from './index.js';

let signInForm = document.forms['sign-in'];
let userEmail = signInForm.elements['user-email'];
let userPassword = signInForm.elements['user-password'];
let loginButton = signInForm.elements['authorization-button']

signInForm.addEventListener('input', function () {
    isFormFilled(this, loginButton)
});

userEmail.addEventListener('change', function () {
    isInputFieldValid(this, '.input-email')
})

userPassword.addEventListener('change', function () {
    isInputFieldValid(this, '.input-password')
})

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let loginMessage = document.querySelector('.log-in')
    loginMessage.classList.remove('show');
    loginMessage.innerHTML = ''
    if (isUserExist(userEmail) === false) {
        let warning = document.querySelector('.text-warning');
        warning.innerHTML = "A user with such email address does not exist";
        warning.classList.add('show')
    } else  {
        if (loginToAccount(userEmail, userPassword) === true) {
            loginMessage.classList.remove('text-warning')
            loginMessage.innerHTML = 'You are successfully logged in!'
            loginMessage.classList.add('show');
            window.localStorage.setItem('status', 'logged-in')
            window.location.replace('./home.html');
        } else {
            loginMessage.innerHTML = 'Oops, something wrong with yours email or password!'
            loginMessage.classList.add('text-warning');
            loginMessage.classList.add('show');
        }
    }
})

isUserLoggedIn()
