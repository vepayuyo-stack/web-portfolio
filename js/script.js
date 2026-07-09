document.addEventListener('DOMContentLoaded', () => {
    
    /* === FEATURE 1: Mobile Navigation Toggle === */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu')?.querySelector('ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    /* === FEATURE 2: Dynamic Time-based Greeting === */
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let customGreeting = "Good Evening!";
        
        if (hour < 12) {
            customGreeting = "Good Morning!";
        } else if (hour < 18) {
            customGreeting = "Good Afternoon!";
        }
        greetingElement.textContent = `${customGreeting} Welcome to DevNexus`;
    }

    /* === FEATURE 3: Contact Form Client-side Validation === */
    const contactForm = document.getElementById('contactForm');
    const errorBox = document.getElementById('error-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let errors = [];

            // Simple validations
            if (username === "") {
                errors.push("Name field cannot be left blank.");
            }
            if (email === "") {
                errors.push("Email address field cannot be left blank.");
            } else if (!document.getElementById('email').checkValidity()) {
                errors.push("Please provide a valid email format.");
            }
            if (message === "") {
                errors.push("Please provide a text entry message before submission.");
            }

            // Evaluate if validation failed
            if (errors.length > 0) {
                event.preventDefault(); // Stop form submission
                errorBox.innerHTML = errors.join('<br>');
                errorBox.style.display = 'block';
            } else {
                errorBox.style.display = 'none';
                alert("Form submitted successfully!");
            }
        });
    }
});