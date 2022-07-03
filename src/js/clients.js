import {
    logout,
    unauthorizedUserCheck,
    formatDate
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
    let tableBody = document.querySelector('tbody');
    let maleUsersCounter = 0;
    let femaleUsersCounter = 0;
    for (const user of users) {
        let tableRow = document.createElement('tr');
        tableRow.classList.add('table-row');
        tableBody.append(tableRow)
        let userName = document.createElement('td');
        let userCompany = document.createElement('td');
        let userEmail = document.createElement('td');
        let userPhoneNumber = document.createElement('td');
        let userBalance = document.createElement('td');
        let userRegistrationDate = document.createElement('td');
        let userDate = new Date((user['registered']).substr(0, 10));
        userName.innerHTML = user['name'];
        userCompany.innerHTML = user['company'];
        userEmail.innerHTML = user['email'];
        userPhoneNumber.innerHTML = user['phone'];
        userBalance.innerHTML = user['balance'];
        userRegistrationDate.innerHTML = formatDate(userDate);
        tableRow.append(userName);
        tableRow.append(userCompany);
        tableRow.append(userEmail);
        tableRow.append(userPhoneNumber);
        tableRow.append(userBalance);
        tableRow.append(userRegistrationDate);
        if(!user['isActive']) {
            tableRow.style.background = 'gray';
        }
        if(user['gender'] === 'male') {
            maleUsersCounter += 1;
        } else if (user['gender'] === 'female') {
            femaleUsersCounter += 1;
        }
    }
    let maleUsers = document.querySelector('.male__users');
    maleUsers.innerHTML = String(maleUsersCounter);
    let femaleUsers = document.querySelector('.female__users');
    femaleUsers.innerHTML = String(femaleUsersCounter);

})




unauthorizedUserCheck()

