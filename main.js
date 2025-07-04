// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Get form elements
    const contactForm = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');
    
    // Error display elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    // Submit button elements
    const btnText = document.querySelector('.btn-text');
    const btnLoading = document.querySelector('.btn-loading');
    
    // Validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: /^[a-zA-Z\s]+$/
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        subject: {
            required: true,
            minLength: 5,
            maxLength: 100
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000
        }
    };
    
    // Initialize contact form
    function initContactForm() {
        if (!contactForm) return;
        
        setupFormValidation();
        setupFormSubmission();
        setupFieldAnimations();
    }
    
    // Setup form validation
    function setupFormValidation() {
        // Real-time validation
        nameField?.addEventListener('blur', () => validateField('name', nameField.value));
        emailField?.addEventListener('blur', () => validateField('email', emailField.value));
        subjectField?.addEventListener('blur', () => validateField('subject', subjectField.value));
        messageField?.addEventListener('blur', () => validateField('message', messageField.value));
        
        // Clear errors on input
        nameField?.addEventListener('input', () => clearError('name'));
        emailField?.addEventListener('input', () => clearError('email'));
        subjectField?.addEventListener('input', () => clearError('subject'));
        messageField?.addEventListener('input', () => clearError('message'));
    }
    
    // Validate individual field
    function validateField(fieldName, value) {
        const rules = validationRules[fieldName];
        const errors = [];
        
        // Required validation
        if (rules.required && (!value || value.trim() === '')) {
            errors.push(`${capitalizeFirst(fieldName)} is required`);
        }
        
        // Length validation
        if (value && rules.minLength && value.length < rules.minLength) {
            errors.push(`${capitalizeFirst(fieldName)} must be at least ${rules.minLength} characters`);
        }
        
        if (value && rules.maxLength && value.length > rules.maxLength) {
            errors.push(`${capitalizeFirst(fieldName)} must not exceed ${rules.maxLength} characters`);
        }
        
        // Pattern validation
        if (value && rules.pattern && !rules.pattern.test(value)) {
            if (fieldName === 'email') {
                errors.push('Please enter a valid email address');
            } else if (fieldName === 'name') {
                errors.push('Name should only contain letters and spaces');
            }
        }
        
        // Display errors
        displayError(fieldName, errors);
        
        return errors.length === 0;
    }
    
    // Display error message
    function displayError(fieldName, errors) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const fieldElement = document.getElementById(fieldName);
        
        if (errorElement && fieldElement) {
            if (errors.length > 0) {
                errorElement.textContent = errors[0];
                errorElement.style.display = 'block';
                fieldElement.style.borderColor = '#e74c3c';
                fieldElement.classList.add('error');
            } else {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
                fieldElement.style.borderColor = '#28a745';
                fieldElement.classList.remove('error');
                fieldElement.classList.add('success');
            }
        }
    }
    
    // Clear error message
    function clearError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const fieldElement = document.getElementById(fieldName);
        
        if (errorElement && fieldElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            fieldElement.style.borderColor = '#eee';
            fieldElement.classList.remove('error', 'success');
        }
    }
    
    // Validate entire form
    function validateForm() {
        const fields = ['name', 'email', 'subject', 'message'];
        let isValid = true;
        
        fields.forEach(field => {
            const fieldElement = document.getElementById(field);
            if (fieldElement) {
                const fieldValid = validateField(field, fieldElement.value);
                if (!fieldValid) {
                    isValid = false;
                }
            }
        });
        
        return isValid;
    }
    
    // Setup form submission
    function setupFormSubmission() {
        contactForm?.addEventListener('submit', handleFormSubmit);
    }
    
    // Handle form submission
    async function handleFormSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            showNotification('Please fix the errors above', 'error');
            return;
        }
        
        // Show loading state
        setLoadingState(true);
        
        // Collect form data
        const formData = {
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            subject: subjectField.value.trim(),
            message: messageField.value.trim(),
            timestamp: new Date().toISOString()
        };
        
        try {
            // Simulate form submission (replace with actual API call)
            await simulateFormSubmission(formData);
            
            // Success handling
            handleSubmissionSuccess();
            
        } catch (error) {
            // Error handling
            handleSubmissionError(error);
        } finally {
            // Reset loading state
            setLoadingState(false);
        }
    }
    
    // Simulate form submission (replace with actual API)
    function simulateFormSubmission(formData) {
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                // Simulate random success/failure for demo
                const success = Math.random() > 0.2; // 80% success rate
                
                if (success) {
                    console.log('Form submitted:', formData);
                    resolve(formData);
                } else {
                    reject(new Error('Failed to send message. Please try again.'));
                }
            }, 2000);
        });
    }
    
    // Handle successful submission
    function handleSubmissionSuccess() {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        resetForm();
        
        // Optional: Send confirmation email or analytics event
        trackFormSubmission('success');
    }
    
    // Handle submission error
    function handleSubmissionError(error) {
        console.error('Form submission error:', error);
        showNotification(error.message || 'Failed to send message. Please try again.', 'error');
        
        trackFormSubmission('error', error.message);
    }
    
    // Set loading state
    function setLoadingState(isLoading) {
        if (btnText && btnLoading) {
            if (isLoading) {
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline-block';
                contactForm.style.pointerEvents = 'none';
            } else {
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
                contactForm.style.pointerEvents = 'auto';
            }
        }
    }
    
    // Reset form
    function resetForm() {
        contactForm?.reset();
        
        // Clear all errors and styles
        ['name', 'email', 'subject', 'message'].forEach(field => {
            clearError(field);
        });
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-size: 14px;
            line-height: 1.4;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 16px; cursor: pointer; margin-left: auto;">×</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Setup field animations
    function setupFieldAnimations() {
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            
            if (input) {
                // Focus animations
                input.addEventListener('focus', function() {
                    this.style.transform = 'scale(1.02)';
                    this.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                });
                
                input.addEventListener('blur', function() {
                    this.style.transform = 'scale(1)';
                    if (!this.classList.contains('error')) {
                        this.style.boxShadow = 'none';
                    }
                });
            }
        });
    }
    
    // Track form submission for analytics
    function trackFormSubmission(status, error = null) {
        // Replace with actual analytics tracking
        console.log('Form submission tracked:', {
            status,
            error,
            timestamp: new Date().toISOString()
        });
        
        // Example: Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'contact',
                'event_label': status,
                'value': status === 'success' ? 1 : 0
            });
        }
    }
    
    // Utility functions
    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    // Auto-save form data to localStorage
    function setupAutoSave() {
        const fields = ['name', 'email', 'subject', 'message'];
        
        fields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                // Load saved data
                const savedValue = localStorage.getItem(`contact_${fieldName}`);
                if (savedValue) {
                    field.value = savedValue;
                }
                
                // Save on input
                field.addEventListener('input', function() {
                    localStorage.setItem(`contact_${fieldName}`, this.value);
                });
            }
        });
        
        // Clear saved data on successful submission
        contactForm?.addEventListener('submit', function() {
            setTimeout(() => {
                fields.forEach(fieldName => {
                    localStorage.removeItem(`contact_${fieldName}`);
                });
            }, 3000); // Clear after successful submission
        });
    }
    
    // Character count for textarea
    function setupCharacterCount() {
        if (messageField) {
            const maxLength = validationRules.message.maxLength;
            const counter = document.createElement('div');
            counter.style.cssText = `
                text-align: right;
                font-size: 12px;
                color: #666;
                margin-top: 5px;
            `;
            
            messageField.parentElement.appendChild(counter);
            
            function updateCounter() {
                const remaining = maxLength - messageField.value.length;
                counter.textContent = `${remaining} characters remaining`;
                counter.style.color = remaining < 50 ? '#e74c3c' : '#666';
            }
            
            messageField.addEventListener('input', updateCounter);
            updateCounter(); // Initial count
        }
    }
    
    // Initialize everything
    initContactForm();
    setupAutoSave();
    setupCharacterCount();
    
    // Add custom styles for form enhancements
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.success,
        .form-group textarea.success {
            border-color: #28a745 !important;
            box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1) !important;
        }
        
        .form-group input.error,
        .form-group textarea.error {
            border-color: #dc3545 !important;
            box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
        }
        
        .form-group input,
        .form-group textarea {
            transition: all 0.3s ease;
        }
        
        .notification {
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @media (max-width: 768px) {
            .notification {
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(style);
});

// Export contact utilities
window.ContactUtils = {
    // Validate email format
    isValidEmail: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    // Sanitize input
    sanitizeInput: function(input) {
        return input.trim().replace(/[<>]/g, '');
    },
    
    // Format phone number (if needed)
    formatPhone: function(phone) {
        return phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
};
