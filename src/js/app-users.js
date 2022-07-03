appUsers = [
    {
        email: 'art@gmail.com',
        password: '123456'
    },
    {
        email: 'avstore@gmail.com',
        password: '123456'
    }
];

if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify(appUsers))
}
