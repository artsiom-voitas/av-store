window.appUsers = [
    {
        email: 'art@gmail.com',
        password: '123456'
    }
];

let isFormFilled = function (form, buttonInForm) {
    buttonInForm.disabled = !form.checkValidity();
}

let isInputFieldValid = function (inputField, classOfInput) {
    let findInput = document.querySelector(classOfInput)
    let warning = findInput.querySelector('.text-warning');
    if (!inputField.checkValidity()) {
        warning.classList.add('show')
    } else {
        warning.classList.remove('show')
    }
}

let isEmailExistInLocalStorage = function () {
    return window.localStorage.getItem('email');
}

let isPasswordExistInLocalStorage = function () {
    return window.localStorage.getItem('password');
}

let isUserExist = function (email) {
    let userEmail = email.value;
    if (isEmailExistInLocalStorage() === userEmail) {
        return true
    }
}

let loginToAccount = function (email, password) {
    if (isUserExist(email) === true) {
        let userPassword = password.value;
        if (isPasswordExistInLocalStorage() === userPassword) {
            return true
        }
    }
}

let logout = function () {
    let logoutButton = document.querySelector('.btn-logout');
    logoutButton.addEventListener('click', function () {
        window.localStorage.clear();
        window.location.replace('./index.html');
    })
}

let isUserLoggedIn = function () {
    setTimeout(function () {
        if (isEmailExistInLocalStorage() && isPasswordExistInLocalStorage() != null) {
            window.location.replace('./home.html');
        }
    })
}

export {
    isFormFilled,
    isInputFieldValid,
    isUserExist,
    loginToAccount,
    logout,
    isUserLoggedIn,
}
