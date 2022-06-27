import { logout } from './index.js';
logout()

const welcomeMessage = document.querySelector('.welcome__message')
let userAgentInfo = navigator.userAgent;
let currentUser = window.localStorage.getItem('email');
welcomeMessage.innerHTML = `Hello, <b>${currentUser}</b>. </br> You are logged from ${userAgentInfo}`;


