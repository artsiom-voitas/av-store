import {
    redirectToHome,
    redirectToLogin,
} from '../utils'

const getUsersFromLocalStorage = function () {
    return localStorage.getItem('users')
}

const setUsersToLocalStorage = function (object) {
    return localStorage.setItem('users', JSON.stringify(object))
}

const setActiveStatusToUser = function (userEmail) {
    return localStorage.setItem('active-user', userEmail)
}

const getParsedUserList = function () {
    return JSON.parse(localStorage.getItem('users'))
}

const getExistingUser = function (emailValue) {
    let users = getParsedUserList()
    let user  = users.find(user => user.email === emailValue)
    if (user !== undefined) {
        return user
    }
}

const checkUserData = function (emailValue, passwordValue) {
    let user = getExistingUser(emailValue);
    return user['password'] === passwordValue;
}

const assignHandlerToLogoutButton = function () {
    let logoutButton = document.querySelector('.btn-logout')
    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('active-user')
        redirectToLogin()
    })
}

const isAuthorizedUser = () => { return Boolean(localStorage.getItem('active-user')) }

export {
    assignHandlerToLogoutButton,
    checkUserData,
    getExistingUser,
    getParsedUserList,
    setActiveStatusToUser,
    setUsersToLocalStorage,
    getUsersFromLocalStorage,
    isAuthorizedUser
}
