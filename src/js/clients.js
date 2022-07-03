import {
    logout,
    unauthorizedUserCheck,
} from './utils.js'
logout()

let usersData = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json'

async function fetchUsers() {
    const res = await fetch(usersData, {
        method: 'GET',
        headers: {
            'Accept-Language': 'en-US,ge',
        }
    })
    console.log('Response Headers', res.headers.get('expires'), res.headers.get('content-type'))
    console.log(res.ok)

    const users = await res.json()

    return Promise.resolve(users)
}

fetchUsers().then((users) => {
    console.log('Users', users)
})

unauthorizedUserCheck()

