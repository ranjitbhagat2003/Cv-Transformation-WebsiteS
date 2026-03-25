// script.js - Fixed version for CV Transformation website

// Initialize AOS
AOS.init({
    once: true,
    offset: 60,
    duration: 800
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('show');
}

function closeMenu() {
    navMenu.classList.remove('show');
}

if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
}

// Close menu when link clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && !e.target.closest('.nav-container') && navMenu.classList.contains('show')) {
        closeMenu();
    }
});

// Prevent closing when clicking inside menu
if (navMenu) {
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Active link highlight on scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + 100; // offset for fixed header
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            let currentId = section.getAttribute('id');
            document.querySelectorAll('.nav-menu a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === '#' + currentId) {
                    a.classList.add('active');
                }
            });
        }
    });

    // Scroll to top button visibility
    const scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
});

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Refresh AOS after page load
window.addEventListener("load", () => {
    AOS.refresh();
});

// BMI Calculator
const calcBtn = document.getElementById('calculateBmi');
if (calcBtn) {
    calcBtn.addEventListener('click', () => {
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const resultSpan = document.querySelector('#bmiResult span');

        if (height > 0 && weight > 0) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
            resultSpan.textContent = bmi;
        } else {
            alert('Please enter valid height and weight');
            resultSpan.textContent = '--';
        }
    });
}

// Contact form submission (fixed: removed trainingPlan check)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Get form values (optional)
        const name = contactForm.querySelector('input[placeholder="Full Name"]')?.value || '';
        const email = contactForm.querySelector('input[placeholder="Email Address"]')?.value || '';
        const phone = contactForm.querySelector('input[placeholder="Phone Number"]')?.value || '';
        const message = contactForm.querySelector('textarea')?.value || '';
        
        if (!name || !email) {
            alert('Please fill in your name and email address.');
            return;
        }
        
        alert(`Thank you ${name}! Our coach will contact you soon. (Demo)`);
        contactForm.reset(); // optional reset
    });
}
