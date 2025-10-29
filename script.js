// [!] هام: استبدل 'YOUR_USER_ID' بمعرفك من EmailJS
emailjs.init('YOUR_USER_ID');

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Adjust for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!validateForm(name, email, message)) {
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '...جار الإرسال';
            submitBtn.disabled = true;
            
            sendEmail(name, email, message)
                .then(() => {
                    showFormMessage('شكراً لك! تم إرسال رسالتك بنجاح.', 'success');
                    this.reset();
                    clearAllFieldErrors();
                })
                .catch(error => {
                    console.error('Error sending email:', error);
                    showFormMessage('عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقاً.', 'error');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });

        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        if(nameInput) nameInput.addEventListener('input', () => validateName(nameInput));
        if(emailInput) emailInput.addEventListener('input', () => validateEmail(emailInput));
        if(messageInput) messageInput.addEventListener('input', () => validateMessage(messageInput));
    }

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Form validation functions
function validateForm(name, email, message) {
    let isValid = true;
    isValid = validateName(document.getElementById('name')) && isValid;
    isValid = validateEmail(document.getElementById('email')) && isValid;
    isValid = validateMessage(document.getElementById('message')) && isValid;
    return isValid;
}

function validateName(input) {
    const value = input.value.trim();
    if (!value) {
        showFieldError('name', 'الاسم مطلوب');
        return false;
    } else if (!/^[A-Za-z\s\u0600-\u06FF]+$/.test(value)) { // Added Arabic characters
        showFieldError('name', 'يجب أن يحتوي الاسم على أحرف ومسافات فقط');
        return false;
    } else {
        clearFieldError('name');
        return true;
    }
}

function validateEmail(input) {
    const value = input.value.trim();
    if (!value) {
        showFieldError('email', 'البريد الإلكتروني مطلوب');
        return false;
    } else if (!isValidEmail(value)) {
        showFieldError('email', 'الرجاء إدخال بريد إلكتروني صالح');
        return false;
    } else {
        clearFieldError('email');
        return true;
    }
}

function validateMessage(input) {
    const value = input.value.trim();
    if (!value) {
        showFieldError('message', 'الرسالة مطلوبة');
        return false;
    } else if (value.length < 10) {
        showFieldError('message', 'يجب أن تكون الرسالة 10 أحرف على الأقل');
        return false;
    } else {
        clearFieldError('message');
        return true;
    }
}

function isValidEmail(email) {
    // [!] تم الإصلاح: هذا الـ Regex يقبل جميع الإيميلات الاحترافية
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    if (!field) return;
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    clearFieldError(fieldName);
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

function clearFieldError(fieldName) {
    const field = document.getElementById(fieldName);
    if (!field) return;
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    field.classList.remove('error');
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function clearAllFieldErrors() {
    clearFieldError('name');
    clearFieldError('email');
    clearFieldError('message');
}

function showFormMessage(message, type) {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    contactForm.appendChild(messageDiv);
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

function sendEmail(name, email, message) {
    // [!] هام: استبدل هذه بالقيم الحقيقية من حسابك على EmailJS
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Mostafa Mhialden',
        message: message,
        reply_to: email,
    };
    
    return emailjs.send(serviceID, templateID, templateParams);
}