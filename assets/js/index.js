let isUserDataValid = function (form, buttonInForm) {
    if (form.checkValidity() == true) {
        buttonInForm.disabled = false
    } else {
        buttonInForm.disabled = true
    }
}

let isInputFieldValid = function (inputField, classOfInput) {
    let findInput = document.querySelector(classOfInput)
    let warning = findInput.querySelector('.text-warning');
    if (inputField.checkValidity() == false) {
        warning.classList.add('show')
    } else {
        warning.classList.remove('show')
    }
}

window.appUsers = [
    {
        email: 'art@gmail.com',
        password: '123456'
    }
];

let isUserExist = function (email) {
    let userEmail = email.value;
    if (Boolean(window.appUsers.find(user => user.email === userEmail))) {
        return true
    } else {
        return false
    }
}

let loginToAccount = function (email, password) {
    if (isUserExist(email) === true) {
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword));
    }
}
