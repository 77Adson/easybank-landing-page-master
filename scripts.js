// Test to check if script.js is correctly linked
console.log("script.js is successfully linked!");

// JavaScript to toggle the menu
const menuBtn = document.getElementById('js_hamburger');
const navLinks = document.getElementById('js_nav');
const body = document.body; // Reference to the body element
const main = document.querySelector('main');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    main.classList.toggle('active');
    body.classList.toggle('no-scroll');
});
