import { isFormFilled, isInputFieldValid, isUserExist } from './index.js'

let signUpForm = document.forms['sign-up'];
let newUserEmail = signUpForm.elements['new-user-email'];
let newUserPassword = signUpForm.elements['new-user-password'];
let newUserConfirmPassword = signUpForm.elements['confirm-password']
let signUpButton = signUpForm.elements['sign-up-button']

signUpForm.addEventListener('input', function () {
    isFormFilled(this, signUpButton)
});

newUserEmail.addEventListener('change', function () {
    isInputFieldValid(this, '.input-email')
})

newUserPassword.addEventListener('change', function () {
    isInputFieldValid(this, '.input-password')
})

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let warning = document.querySelector('.text-warning');
    let passwordsDoNotMuch= document.querySelector('.confirm-password')
    let registerMessage = document.querySelector('.registered')
    registerMessage.classList.remove('show');
    registerMessage.innerHTML = ''
    if (isUserExist(newUserEmail) === true) {
        warning.innerHTML = 'A user with the same email already exists. Try to Sign In';
        warning.classList.add('show');
    } else {
        warning.innerHTML = 'The email address is incorrect. Please retry...'
        warning.classList.remove('show');
        if (newUserConfirmPassword.value === newUserPassword.value) {
            registerMessage.classList.add('show');
            passwordsDoNotMuch.classList.remove('show');
            window.appUsers.push({email: newUserEmail.value, password: newUserPassword.value})
            registerMessage.innerHTML = 'You are successfully Signed Up!'
            window.location.replace('./home.html');
        } else {
            passwordsDoNotMuch.classList.add('show');
        }
    }
})




