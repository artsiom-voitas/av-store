import {
    logout,
    unauthorizedUserCheck,
} from './utils.js'
logout()

const welcomeMessage = document.querySelector('.welcome__message')
let userAgentInfo = navigator.userAgent;
let currentUser = localStorage.getItem('active-user')
welcomeMessage.innerHTML = `Hello, Dear <b>${currentUser}</b>. </br> You are logged from ${userAgentInfo}`;

unauthorizedUserCheck()


