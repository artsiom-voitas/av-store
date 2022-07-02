window.appUsers = [
    {
        email: 'art@gmail.com',
        password: '123456'
    }
];

let disableFormButton = function (form, buttonInForm) {
    buttonInForm.disabled = !form.checkValidity();
}

let toggleInputWarning = function (inputField, selector) {
    let findInput = document.querySelector(selector)
    let warning = findInput.querySelector('.text-warning');
    if (!inputField.checkValidity()) {
        warning.classList.add('show')
    } else {
        warning.classList.remove('show')
    }
}

let isEmailExistInLocalStorage = function () {
    return localStorage.getItem('email');
}

let isPasswordExistInLocalStorage = function () {
    return localStorage.getItem('password');
}

let isUserExist = function (emailValue) {
        return isEmailExistInLocalStorage() === emailValue;
}

let checkUserData = function (emailValue, passwordValue) {
    if (isUserExist(emailValue) === true) {
        return isPasswordExistInLocalStorage() === passwordValue;
    }
}

let logout = function () {
    let logoutButton = document.querySelector('.btn-logout');
    logoutButton.addEventListener('click', function () {
        localStorage.clear();
        window.location.replace('./index.html');
    })
}

let isUserLoggedIn = function () {
    setTimeout(function () {
        let userStatus = localStorage.getItem('status')
        if (userStatus === 'logged-in') {
            redirectToHome();
        }
    }, 0)
}

let redirectToHome = function () {
    window.location.replace('./home.html')
}

export {
    disableFormButton,
    toggleInputWarning,
    isUserExist,
    checkUserData,
    logout,
    isUserLoggedIn,
    redirectToHome
}
