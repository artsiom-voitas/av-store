import {
    logout,
    unauthorizedUserCheck,
    formatDate,
    getMaxOfArray,
    createSpecifiedDomElement,
    createConfirmationModal,
    notification
} from './utils.js'
logout()

const goToTopButton = document.querySelector('.go__up');
goToTopButton.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

let usersData = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json'

async function fetchUsers() {
    const res = await fetch(usersData, {
        method: 'GET',
        headers: {
            'Accept-Language': 'en-US,ge',
        }
    })
    console.log('Response Headers', res.headers.get('expires'), res.headers.get('content-type'))
    const users = await res.json()
    return Promise.resolve(users)
}

fetchUsers().then((users) => {
    let tableBody = document.querySelector('tbody');
    let maleUsersCounter = 0;
    let femaleUsersCounter = 0;
    let usersBalances = [];
    for (const user of users) {
        let tableRow = document.createElement('tr');
        tableRow.classList.add('table__row');
        tableBody.append(tableRow)
        let userDate = new Date((user['registered']).substr(0, 10));

        let deleteRowButton = createSpecifiedDomElement('button', 'btn', 'Delete');
        deleteRowButton.classList.add('btn-danger');

        let userName = createSpecifiedDomElement('td', 'user__name', user['name'] );
        let userCompany = createSpecifiedDomElement('td', 'user__company', user['company']);
        let userEmail = createSpecifiedDomElement('td', 'user__email', user['email']);
        let userPhoneNumber = createSpecifiedDomElement('td', 'user__phone', user['phone']);
        let userBalance = createSpecifiedDomElement('td', 'user__balance', user['balance']);
        let userRegistrationDate = createSpecifiedDomElement('td', 'user__registration-date', formatDate(userDate));

        tableRow.append(userName);
        tableRow.append(userCompany);
        tableRow.append(userEmail);
        tableRow.append(userPhoneNumber);
        tableRow.append(userBalance);
        tableRow.append(userRegistrationDate);
        tableRow.append(deleteRowButton)

        deleteRowButton.addEventListener('click', function () {
            createConfirmationModal();
            let modal = document.querySelector('.modal');
            modal.classList.add('show');

            let deleteClientButton = document.querySelector('.btn__delete');
            let cancelDeletionButton = document.querySelector('.btn__cancel');
            deleteClientButton.addEventListener('click', function () {
                modal.classList.remove('show')
                modal.remove()
                deleteRowButton.parentElement.remove();
                const body = document.querySelector('body');
                notification('Client successfully deleted!');
            })
            cancelDeletionButton.addEventListener('click', function () {
                modal.remove()
                modal.classList.remove('show')
            })
        })


        if(!user['isActive']) {
            tableRow.style.background = 'gray';
        }
        if(user['gender'] === 'male') {
            maleUsersCounter += 1;
        } else if (user['gender'] === 'female') {
            femaleUsersCounter += 1;
        }
        let convertBalanceFromString = parseFloat(user['balance'].substring(1).replace(',',''));
        usersBalances.push(convertBalanceFromString)
    }
    let maleUsers = document.querySelector('.male__users');
    maleUsers.innerHTML = String(maleUsersCounter);
    let femaleUsers = document.querySelector('.female__users');
    femaleUsers.innerHTML = String(femaleUsersCounter);

    let largestBalance = document.querySelector('.largest__balance');
    largestBalance.innerHTML = `The largest amount on the client's account is $${getMaxOfArray(usersBalances)}!`
})

unauthorizedUserCheck()
