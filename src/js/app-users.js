import {
    getUsersFromLocalStorage,
    setUsersToLocalStorage,
} from './auth/auth'

let appUsers = [
    {
        email: 'art@gmail.com',
        password: '123456'
    },
    {
        email: 'avstore@gmail.com',
        password: '123456'
    }
];

if (!getUsersFromLocalStorage()) {
    setUsersToLocalStorage(appUsers);
}
