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
            const whatsapp = document.getElementById('whatsapp').value.trim();
            const country = document.getElementById('country').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!validateForm(name, email, whatsapp, country, message)) {
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // تحقق من اللغة الحالية لرسالة "جار الإرسال"
            const currentLang = localStorage.getItem('language') || 'en';
            submitBtn.textContent = (currentLang === 'ar') ? '...جار الإرسال' : '...Sending';
            submitBtn.disabled = true;
            
            sendEmail(name, email, whatsapp, country, message)
                .then(() => {
                    const successMsg = (currentLang === 'ar') ? 'شكراً لك! تم إرسال رسالتك بنجاح.' : 'Thank you! Your message has been sent successfully.';
                    showFormMessage(successMsg, 'success');
                    this.reset();
                    clearAllFieldErrors();
                })
                .catch(error => {
                    console.error('Error sending email:', error);
                    const errorMsg = (currentLang === 'ar') ? 'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقاً.' : 'Sorry, an error occurred while sending your message. Please try again later.';
                    showFormMessage(errorMsg, 'error');
                })
                .finally(() => {
                    submitBtn.textContent = originalText; // النص الأصلي (الذي تمت ترجمته مسبقاً)
                    submitBtn.disabled = false;
                });
        });

        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const whatsappInput = document.getElementById('whatsapp');
        const countryInput = document.getElementById('country');
        const messageInput = document.getElementById('message');
        if(nameInput) nameInput.addEventListener('input', () => validateName(nameInput));
        if(emailInput) emailInput.addEventListener('input', () => validateEmail(emailInput));
        if(whatsappInput) whatsappInput.addEventListener('input', () => validateWhatsapp(whatsappInput));
        if(countryInput) countryInput.addEventListener('input', () => validateCountry(countryInput));
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
function validateForm(name, email, whatsapp, country, message) {
    let isValid = true;
    isValid = validateName(document.getElementById('name')) && isValid;
    isValid = validateEmail(document.getElementById('email')) && isValid;
    isValid = validateWhatsapp(document.getElementById('whatsapp')) && isValid;
    isValid = validateCountry(document.getElementById('country')) && isValid;
    isValid = validateMessage(document.getElementById('message')) && isValid;
    return isValid;
}

function validateName(input) {
    const value = input.value.trim();
    const currentLang = localStorage.getItem('language') || 'en';
    if (!value) {
        showFieldError('name', (currentLang === 'ar') ? 'الاسم مطلوب' : 'Name is required');
        return false;
    } else if (!/^[A-Za-z\s\u0600-\u06FF]+$/.test(value)) {
        showFieldError('name', (currentLang === 'ar') ? 'يجب أن يحتوي الاسم على أحرف ومسافات فقط' : 'Name must contain only letters and spaces');
        return false;
    } else {
        clearFieldError('name');
        return true;
    }
}

function validateEmail(input) {
    const value = input.value.trim();
    const currentLang = localStorage.getItem('language') || 'en';
    if (!value) {
        showFieldError('email', (currentLang === 'ar') ? 'البريد الإلكتروني مطلوب' : 'Email is required');
        return false;
    } else if (!isValidEmail(value)) {
        showFieldError('email', (currentLang === 'ar') ? 'الرجاء إدخال بريد إلكتروني صالح' : 'Please enter a valid email address');
        return false;
    } else {
        clearFieldError('email');
        return true;
    }
}

function validateWhatsapp(input) {
    const value = input.value.trim();
    const currentLang = localStorage.getItem('language') || 'en';
    const phoneRegex = /^\+?[0-9\s-]{7,}$/; 
    if (!value) {
        showFieldError('whatsapp', (currentLang === 'ar') ? 'رقم الواتساب مطلوب' : 'WhatsApp number is required');
        return false;
    } else if (!phoneRegex.test(value)) {
        showFieldError('whatsapp', (currentLang === 'ar') ? 'الرجاء إدخال رقم هاتف صالح (مع رمز الدولة)' : 'Please enter a valid phone number (with country code)');
        return false;
    } else {
        clearFieldError('whatsapp');
        return true;
    }
}

function validateCountry(input) {
    const value = input.value.trim();
    const currentLang = localStorage.getItem('language') || 'en';
    if (!value) {
        showFieldError('country', (currentLang === 'ar') ? 'الدولة مطلوبة' : 'Country is required');
        return false;
    } else {
        clearFieldError('country');
        return true;
    }
}


function validateMessage(input) {
    const value = input.value.trim();
    const currentLang = localStorage.getItem('language') || 'en';
    if (!value) {
        showFieldError('message', (currentLang === 'ar') ? 'الرسالة مطلوبة' : 'Message is required');
        return false;
    } else if (value.length < 10) {
        showFieldError('message', (currentLang === 'ar') ? 'يجب أن تكون الرسالة 10 أحرف على الأقل' : 'Message must be at least 10 characters long');
        return false;
    } else {
        clearFieldError('message');
        return true;
    }
}

function isValidEmail(email) {
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
    clearFieldError('whatsapp');
    clearFieldError('country');
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

function sendEmail(name, email, whatsapp, country, message) {
    // [!] هام: استبدل هذه بالقيم الحقيقية من حسابك على EmailJS
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Mostafa Mhialden',
        message: message,
        reply_to: email,
        
        // --- الإضافات الجديدة هنا ---
        from_whatsapp: whatsapp,
        from_country: country
    };
    
    return emailjs.send(serviceID, templateID, templateParams);
}