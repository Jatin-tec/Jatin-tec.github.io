// Code for toggling dark mode
const body = document.body;
const darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.addEventListener('change', () => {
    console.log("clicked");
    body.classList.toggle('dark-mode');
});

// Code for the navigation bar scroll behavior
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log("clicked");
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
