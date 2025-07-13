// Mobile navigation functionality
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

// Toggle mobile menu when burger is clicked
burger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event bubbling
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (navList.classList.contains('v-class-resp')) {
        if (!navbar.contains(event.target)) {
            navList.classList.remove('v-class-resp');
            navbar.classList.remove('h-nav-resp');
        }
    }
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1140) {
            navList.classList.remove('v-class-resp');
            navbar.classList.remove('h-nav-resp');
        }
    });
});

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});