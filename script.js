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

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close menu when link clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navMenu.classList.contains('show')) {
        closeMenu();
    }
});

// Prevent closing when clicking inside menu
navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

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
    if (window.scrollY > 500) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// Scroll to top
document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Refresh AOS after page load
window.addEventListener("load", () => {
    AOS.refresh();
});

// BMI Calculator
document.getElementById('calculateBmi').addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value) / 100; // cm to m
    const weight = parseFloat(document.getElementById('weight').value);
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        document.querySelector('#bmiResult span').textContent = bmi;
    } else {
        alert('Please enter valid height and weight');
    }
});

// Contact form demo with training plan validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="trainingPlan"]:checked');
    if (!selected) {
        alert('Please select a training plan.');
        return;
    }
    alert(`Thank you! You selected ${selected.value}. A coach will contact you soon. (demo)`);
});
