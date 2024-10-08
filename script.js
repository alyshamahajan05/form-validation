document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#create-account-form');
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm-password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        resetValidation();

        // USERNAME
        if (usernameInput.value.trim() === '') {
            setError(usernameInput, 'Name cannot be empty');
        } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
            setError(usernameInput, 'Name must be between 5 and 15 characters');
        } else {
            setSuccess(usernameInput);
        }

        // EMAIL
        if (emailInput.value.trim() === '') {
            setError(emailInput, 'Email cannot be empty');
        } else if (!isEmailValid(emailInput.value.trim())) {
            setError(emailInput, 'Enter a valid email address');
        } else {
            setSuccess(emailInput);
        }

        // PASSWORD
        if (passwordInput.value.trim() === '') {
            setError(passwordInput, 'Password cannot be empty');
        } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
            setError(passwordInput, 'Password must be between 6 and 20 characters');
        } else {
            setSuccess(passwordInput);
        }

        // CONFIRM PASSWORD
        if (confirmPasswordInput.value.trim() === '') {
            setError(confirmPasswordInput, 'Confirm Password cannot be empty');
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            setError(confirmPasswordInput, 'Passwords do not match');
        } else {
            setSuccess(confirmPasswordInput);
        }

        // If all fields are valid, submit the form
        if (isFormValid()) {
            form.submit();
        }
    }

    function setError(element, errorMessage) {
        const parent = element.parentElement;
        parent.classList.add('error');
        const errorIcon = parent.querySelector('.fa-exclamation-circle');
        errorIcon.style.visibility = 'visible';
        const errorMessageElement = parent.querySelector('.error-message');
        errorMessageElement.textContent = errorMessage;
        errorMessageElement.style.visibility = 'visible';
    }

    function setSuccess(element) {
        const parent = element.parentElement;
        parent.classList.remove('error');
        parent.classList.add('success');
        const errorIcon = parent.querySelector('.fa-exclamation-circle');
        errorIcon.style.visibility = 'hidden';
        const successIcon = parent.querySelector('.fa-check-circle');
        successIcon.style.visibility = 'visible';
        const errorMessageElement = parent.querySelector('.error-message');
        errorMessageElement.style.visibility = 'hidden';
    }

    function resetValidation() {
        const errorInputs = document.querySelectorAll('.error');
        errorInputs.forEach(function(element) {
            element.classList.remove('error');
        });
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(element) {
            element.textContent = 'Error Message';
            element.style.visibility = 'hidden';
        });
        const inputIcons = document.querySelectorAll('.fa-check-circle, .fa-exclamation-circle');
        inputIcons.forEach(function(icon) {
            icon.style.visibility = 'hidden';
        });
    }

    function isEmailValid(email) {
        const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regEx.test(email);
    }

    function isFormValid() {
        const errorMessages = document.querySelectorAll('.error-message');
        for (let errorMessage of errorMessages) {
            if (errorMessage.style.visibility !== 'hidden') {
                return false;
            }
        }
        return true;
    }
});
