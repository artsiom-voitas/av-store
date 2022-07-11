import { fetchUsers } from './api/users'
import {
    createConfirmationModal,
    createSpecifiedDomElement,
    extractRegistrationDateFromUser,
    createDeleteRowButton,
    getMaxOfArray,
    onCancel,
    onConfirm,
} from './utils.js'

const goToTopButton = document.querySelector('.go__up');
goToTopButton.addEventListener('click', function () {
    window.scrollTo(0, 0)
});

let maleUsersAmount = 0;
let femaleUsersAmount = 0;
let usersBalances = [];

const highlightInactiveUsers = function (userStatus, tableRow) {
    if (!userStatus) {
        tableRow.style.background = 'gray';
    }
}

const maleUsersCounter = function (userGender) {
    if (userGender === 'male') {
        maleUsersAmount += 1;
        return maleUsersAmount
    }
}

const displayInfoAboutAmountOfMaleUsers = function () {
    const maleUsers = document.querySelector('.male__users');
    maleUsers.innerHTML = String(maleUsersAmount);
}

const femaleUsersCounter = function (userGender) {
     if (userGender === 'female') {
         femaleUsersAmount += 1;
         return femaleUsersAmount
    }
}

const displayInfoAboutAmountOfFemaleUsers = function () {
    const femaleUsers = document.querySelector('.female__users');
    femaleUsers.innerHTML = String(femaleUsersAmount);
}

const convertBalanceFromString = function (balanceInString) {
    return parseFloat(balanceInString.substring(1).replace(',', ''))
}

const displayInfoAboutLargestUserBalance = function () {
    let largestBalance = document.querySelector('.largest__balance');
    largestBalance.innerHTML = `The largest amount on the client's account is $${getMaxOfArray(usersBalances)}!`
}


document.addEventListener('DOMContentLoaded', function () {
    fetchUsers().then((users) => {
        let tableBody = document.querySelector('tbody');
        for (const user of users) {
            let tableRow = document.createElement('tr');
            tableRow.classList.add('table__row');
            const userDate = extractRegistrationDateFromUser(user['registered'], 10)
            const deleteRowButton = createDeleteRowButton()

            let userName             = createSpecifiedDomElement('td', 'user__name', user['name']);
            let userCompany          = createSpecifiedDomElement('td', 'user__company', user['company']);
            let userEmail            = createSpecifiedDomElement('td', 'user__email', user['email']);
            let userPhoneNumber      = createSpecifiedDomElement('td', 'user__phone', user['phone']);
            let userBalance          = createSpecifiedDomElement('td', 'user__balance', user['balance']);
            let userRegistrationDate = createSpecifiedDomElement('td', 'user__registration-date', userDate.toLocaleDateString());
            let userGender = user['gender'];
            let userStatus = user['isActive'];

            tableBody.append(tableRow)
            tableRow.append(userName);
            tableRow.append(userCompany);
            tableRow.append(userEmail);
            tableRow.append(userPhoneNumber);
            tableRow.append(userBalance);
            tableRow.append(userRegistrationDate);
            tableRow.append(deleteRowButton)

            deleteRowButton.addEventListener('click', function () {
                createConfirmationModal({ onCancel, onConfirm });
            });

            highlightInactiveUsers(userStatus, tableRow)
            maleUsersCounter(userGender);
            femaleUsersCounter(userGender);
            usersBalances.push(convertBalanceFromString(user['balance']))
        }

        displayInfoAboutAmountOfMaleUsers()
        displayInfoAboutAmountOfFemaleUsers()
        displayInfoAboutLargestUserBalance()
    })
})
