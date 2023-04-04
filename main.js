const successBtn = document.getElementById('success-btn');
const infoBtn = document.getElementById('info-btn');
const warningBtn = document.getElementById('warning-btn')
const errorBtn = document.getElementById('error-btn')
const notificationContainer = document.querySelector('.notification__container');
const successMessage = document.querySelector('.toast-success');
const infoMessage = document.querySelector('.toast-info');
const warningMessage = document.querySelector('.toast-warning');
const errorMessage = document.querySelector('.toast-error');
const dismissButtons = document.querySelectorAll('.dismiss-button');



const showSuccessMessage = () => {
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 4000);
}

const showInfoMessage = () => {
    infoMessage.style.display = 'block';
    setTimeout(() => {
        infoMessage.style.display = 'none';
    }, 4000);
}

const showWarningMessage = () => {
    warningMessage.style.display = 'block';
    setTimeout(() => {
        warningMessage.style.display = 'none';
    }, 4000);
}

const showErrorMessage = () => {
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 4000);
}

dismissButtons.forEach(dismissButton => {
    dismissButton.addEventListener('click', () => {
        successMessage.style.display = 'none';
        infoMessage.style.display = 'none';
        warningMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    })
});


successBtn.addEventListener('click', showSuccessMessage);
infoBtn.addEventListener('click', showInfoMessage);
warningBtn.addEventListener('click', showWarningMessage);
errorBtn.addEventListener('click', showErrorMessage);