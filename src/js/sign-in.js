import {
    checkUserData,
    getExistingUser,
    setActiveStatusToUser,
} from './auth/auth'
import {
    disableFormButton,
    toggleInputWarning,
    redirectToHome,

} from './utils.js'

let signInForm = document.forms['sign-in'];
let userEmail = signInForm.elements['user-email'];
let userPassword = signInForm.elements['user-password'];
let loginButton = signInForm.elements['authorization-button'];

signInForm.addEventListener('input', function () {
    disableFormButton(this, loginButton)
});

userEmail.addEventListener('change', function () {
    toggleInputWarning(this, '.input-email')
})

userPassword.addEventListener('change', function () {
    toggleInputWarning(this, '.input-password')
})

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let loginMessage = document.querySelector('.log-in')
    loginMessage.classList.remove('show');
    loginMessage.innerHTML = ''
    let userEmailValue = userEmail.value;
    let userPasswordValue = userPassword.value;
    if (!getExistingUser(userEmailValue)) {
        let warning = document.querySelector('.text-warning');
        warning.innerHTML = "A user with such email address does not exist";
        warning.classList.add('show')
    } else  {
        if (checkUserData(userEmailValue, userPasswordValue)) {
            loginMessage.classList.remove('text-warning')
            loginMessage.innerHTML = 'You are successfully logged in!'
            loginMessage.classList.add('show');
            setActiveStatusToUser(userEmailValue);
            setTimeout(() => {
               redirectToHome()
            }, 1000);
        } else {
            loginMessage.innerHTML = 'Oops, something wrong with yours email or password!'
            loginMessage.classList.add('text-warning');
            loginMessage.classList.add('show');
        }
    }
})
