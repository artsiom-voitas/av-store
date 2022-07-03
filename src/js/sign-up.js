import { disableFormButton, toggleInputWarning, userFinder, authorizedUserCheck} from './utils.js'

let signUpForm = document.forms['sign-up'];
let newUserEmail = signUpForm.elements['new-user-email'];
let newUserPassword = signUpForm.elements['new-user-password'];
let newUserConfirmPassword = signUpForm.elements['confirm-password'];
let signUpButton = signUpForm.elements['sign-up-button']

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
    let passwordsDoNotMuch= document.querySelector('.confirm-password')
    let registerMessage = document.querySelector('.registered')
    registerMessage.classList.remove('show');
    registerMessage.innerHTML = '';
    let newUserEmailValue = newUserEmail.value;
    let newUserPasswordValue = newUserPassword.value;
    let newUserConfirmPasswordValue = newUserConfirmPassword.value;
    if (userFinder(newUserEmailValue) !== -1) {
        warning.innerHTML = 'A user with the same email already exists. Try to Sign In';
        warning.classList.add('show');
    } else {
        warning.innerHTML = 'The email address is incorrect. Please retry...'
        warning.classList.remove('show');
        if (newUserConfirmPasswordValue === newUserPasswordValue) {
            registerMessage.classList.add('show');
            passwordsDoNotMuch.classList.remove('show');
            let usersList = JSON.parse(localStorage.getItem('users'));
            usersList.push(
                {
                    'email': newUserEmail.value,
                    'password': newUserPassword.value,
                })
            localStorage.setItem('users', JSON.stringify(usersList));
            registerMessage.innerHTML = 'You are successfully Signed Up!'
            setTimeout(() => {
                window.location.replace('./index.html')
            }, 2000);
        } else {
            passwordsDoNotMuch.classList.add('show');
        }
    }
})

authorizedUserCheck()




