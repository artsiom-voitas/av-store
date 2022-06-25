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

let isUserExist = function (email) {
    let userEmail = email.value;
    return Boolean(window.appUsers.find(user => user.email === userEmail));
}

let loginToAccount = function (email, password) {
    if (isUserExist(email) === true) {
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword));
    }
}

export {
    isFormFilled,
    isInputFieldValid,
    isUserExist,
    loginToAccount
}
