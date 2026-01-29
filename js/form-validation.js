// Form validation functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        return; // Exit if contact form doesn't exist on this page
    }

    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageTypeSelect = document.getElementById('messageType');
    const messageTextarea = document.getElementById('message');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageTypeError = document.getElementById('messageTypeError');
    const messageError = document.getElementById('messageError');

    // Validation functions
    function validateName(value) {
        if (!value || value.trim() === '') {
            return 'This field is required';
        }
        return '';
    }

    function validateEmail(value) {
        if (!value || value.trim() === '') {
            return 'This field is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address';
        }
        return '';
    }

    function validatePhone(value) {
        // Phone is optional, but if provided, should be valid
        if (value && value.trim() !== '') {
            const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,5}[)]?[-\s\.]?[0-9]{4,6}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                return 'Please enter a valid phone number';
            }
        }
        return '';
    }

    function validateMessageType(value) {
        if (!value || value === '') {
            return 'This field is required';
        }
        return '';
    }

    function validateMessage(value) {
        if (!value || value.trim() === '') {
            return 'This field is required';
        }
        if (value.trim().length < 10) {
            return 'Message must be at least 10 characters';
        }
        return '';
    }

    // Display error message
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.classList.add('error');
    }

    // Clear error message
    function clearError(input, errorElement) {
        errorElement.textContent = '';
        input.classList.remove('error');
    }

    // Validate field on blur
    function validateField(input, errorElement, validationFn) {
        const errorMessage = validationFn(input.value);
        if (errorMessage) {
            showError(input, errorElement, errorMessage);
            return false;
        } else {
            clearError(input, errorElement);
            return true;
        }
    }

    // Add blur event listeners
    nameInput.addEventListener('blur', function() {
        validateField(nameInput, nameError, validateName);
    });

    emailInput.addEventListener('blur', function() {
        validateField(emailInput, emailError, validateEmail);
    });

    phoneInput.addEventListener('blur', function() {
        validateField(phoneInput, phoneError, validatePhone);
    });

    messageTypeSelect.addEventListener('blur', function() {
        validateField(messageTypeSelect, messageTypeError, validateMessageType);
    });

    messageTextarea.addEventListener('blur', function() {
        validateField(messageTextarea, messageError, validateMessage);
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateField(nameInput, nameError, validateName);
        const isEmailValid = validateField(emailInput, emailError, validateEmail);
        const isPhoneValid = validateField(phoneInput, phoneError, validatePhone);
        const isMessageTypeValid = validateField(messageTypeSelect, messageTypeError, validateMessageType);
        const isMessageValid = validateField(messageTextarea, messageError, validateMessage);

        // Check if all validations passed
        if (isNameValid && isEmailValid && isPhoneValid && isMessageTypeValid && isMessageValid) {
            // Form is valid - in a real application, this would submit to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            
            // Clear any remaining error states
            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(phoneInput, phoneError);
            clearError(messageTypeSelect, messageTypeError);
            clearError(messageTextarea, messageError);
        } else {
            // Scroll to first error
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
});
