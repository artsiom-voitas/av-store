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

const userList = function () {
    return JSON.parse(localStorage.getItem('users'));
}

const userFinder = function (emailValue) {
    let users = userList();
    let user = users.findIndex(user => user.email === emailValue);
    if (user === -1) {
        return -1
    } else {
        return users[user];
    }
}

let checkUserData = function (emailValue, passwordValue) {
    let user = userFinder(emailValue);
    if (user !== -1) {
        return user['password'] === passwordValue;
    }
}

let logout = function () {
    let logoutButton = document.querySelector('.btn-logout');
    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('active-user');
        redirectToLogin()
    })
}

let unauthorizedUserCheck = function () {
    setTimeout(function () {
        let status = localStorage.getItem('active-user')
        if (status === null) {
            redirectToLogin()
        }
    }, 1)
}

let authorizedUserCheck = function () {
    setTimeout(function () {
        let status = localStorage.getItem('active-user')
        if (status !== null) {
            redirectToHome()
        }
    }, 1)
}

let redirectToHome = function () {
    window.location.replace('./home.html')
}

let redirectToLogin = function () {
    window.location.replace('./index.html')
}

function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

export {
    disableFormButton,
    toggleInputWarning,
    checkUserData,
    userFinder,
    logout,
    unauthorizedUserCheck,
    authorizedUserCheck,
    redirectToHome,
    formatDate
}
