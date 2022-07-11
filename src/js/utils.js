const body = document.querySelector('body');
let modal = document.querySelector('.modal');

const disableFormButton = function (form, buttonInForm) {
    buttonInForm.disabled = !form.checkValidity();
}

const toggleInputWarning = function (inputField, selector) {
    let findInput = document.querySelector(selector)
    let warning = findInput.querySelector('.text-warning');
    if (!inputField.checkValidity()) {
        warning.classList.add('show')
    } else {
        warning.classList.remove('show')
    }
}

let redirectToHome = function () {
    return window.location.replace('./home.html')
}

let redirectToLogin = function () {
    return window.location.replace('./index.html')
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function createSpecifiedDomElement(tagName, className, innerHTML) {
    let domElement = document.createElement(tagName);
    domElement.classList.add(className);
    domElement.innerHTML = innerHTML;
    return domElement
}

const createDeleteRowButton = () => {
    const deleteRowButton = createSpecifiedDomElement('button', 'btn', 'Delete');
    deleteRowButton.classList.add('btn-danger');
    return deleteRowButton;
}

const onConfirm = () => {
    let modal = document.querySelector('.modal');
    let rowDeleteButton = document.querySelector('.btn-danger')
    modal.classList.remove('show')
    modal.remove()
    rowDeleteButton.parentElement.remove();
    showNotification('Client successfully deleted!');
}

const onCancel = () => {
    let modal = document.querySelector('.modal');
    modal.remove();
}

function createConfirmationModal({ onConfirm, onCancel }) {
    let modal = createSpecifiedDomElement('div', 'modal', '');
    modal.classList.add('show')
    let modalHeader = createSpecifiedDomElement('h4', 'modal-header', 'Confirmation', '');
    let modalBody = createSpecifiedDomElement('p', 'modal-body', 'Are you sure you want to delete?')
    let modalFooter = createSpecifiedDomElement('div', 'modal-footer', '');
    let deleteButton = createSpecifiedDomElement('button', 'btn', 'Delete');
    deleteButton.classList.add('btn-danger', 'btn__delete')
    deleteButton.addEventListener('click', function () {
        onConfirm()
    })
    let cancelButton = createSpecifiedDomElement('button', 'btn', 'Cancel');
    cancelButton.classList.add('btn-secondary', 'btn__cancel');
    cancelButton.addEventListener('click', function () {
        onCancel()
    })
    modal.append(modalHeader);
    modal.append(modalBody);
    modal.append(modalFooter);
    modalFooter.append(deleteButton);
    modalFooter.append(cancelButton)
    body.append(modal)
}

function showNotification(text) {
    let windowNotification = document.createElement('div');
    windowNotification.classList.add('badge');
    let notificationHeader = createSpecifiedDomElement('h4', 'notification__header', text);
    windowNotification.append(notificationHeader);
    let closeNotification = document.createElement('button');
    windowNotification.append(closeNotification)
    closeNotification.classList.add('btn', 'btn-close');
    closeNotification.addEventListener('click', function () {
        windowNotification.remove();
    })
    body.append(windowNotification)
    setTimeout(() =>
        windowNotification.remove()
        , 5000);
    let allNotifications = document.querySelectorAll('.badge')
    if (allNotifications.length > 1) {
        document.querySelector('.badge').remove();
    }
}

const extractRegistrationDateFromUser = function (registrationDate, numberOfCharactersToProcess) {
    return new Date(registrationDate.substring(0, numberOfCharactersToProcess));
}

export {
    disableFormButton,
    toggleInputWarning,
    redirectToHome,
    redirectToLogin,
    extractRegistrationDateFromUser,
    getMaxOfArray,
    createSpecifiedDomElement,
    createConfirmationModal,
    createDeleteRowButton,
    showNotification,
    onCancel,
    onConfirm,
}
