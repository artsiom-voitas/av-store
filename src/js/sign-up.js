import {
    getExistingUser,
    getParsedUserList,
    setUsersToLocalStorage,
} from './auth/auth'
import {
    disableFormButton,
    toggleInputWarning,

} from './utils.js'

let signUpForm = document.forms['sign-up'];
let newUserEmail = signUpForm.elements['new-user-email'];
let newUserPassword = signUpForm.elements['new-user-password'];
let newUserConfirmPassword = signUpForm.elements['confirm-password'];
let signUpButton = signUpForm.elements['sign-up-button'];

signUpForm.addEventListener('input', function () {
    disableFormButton(this, signUpButton)
});

newUserEmail.addEventListener('change', function () {
    toggleInputWarning(this, '.input-email')
})

newUserPassword.addEventListener('change', function () {
    toggleInputWarning(this, '.input-password')
})

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let warning = document.querySelector('.text-warning');
    let confirmPasswordField = document.querySelector('.confirm-password')
    let registerMessage = document.querySelector('.registered')
    registerMessage.classList.remove('show');
    registerMessage.innerHTML = '';
    let newUserEmailValue = newUserEmail.value;
    let newUserPasswordValue = newUserPassword.value;
    let newUserConfirmPasswordValue = newUserConfirmPassword.value;
    if (getExistingUser(newUserEmailValue)) {
        warning.innerHTML = 'A user with the same email already exists. Try to Sign In';
        warning.classList.add('show');
    } else {
        warning.innerHTML = 'The email address is incorrect. Please retry...'
        warning.classList.remove('show');
        if (newUserConfirmPasswordValue === newUserPasswordValue) {
            registerMessage.classList.add('show');
            confirmPasswordField.classList.remove('show');
            addNewUserToLocalStorage(newUserEmail, newUserPassword)
            registerMessage.innerHTML = 'You are successfully Signed Up!'
            setTimeout(() => {
                window.location.replace('./index.html')
            }, 2000);
        } else {
            confirmPasswordField.classList.add('show');
        }
    }
})

const addNewUserToLocalStorage = function (userEmail, userPassword) {
    let usersList = getParsedUserList();
    usersList.push(
        {
            'email': userEmail.value,
            'password': userPassword.value,
        })
    return setUsersToLocalStorage(usersList);
}




