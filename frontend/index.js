// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('mc-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('mc-email').value;
    if (email) {
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
        document.getElementById('mc-success').style.display = 'block';
        document.getElementById('mc-error').style.display = 'none';
    } else {
        document.getElementById('mc-error').style.display = 'block';
        document.getElementById('mc-success').style.display = 'none';
    }
});

// Contact form handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const antispam = document.getElementById('contact-antispam').value;

    if (name && email && message && antispam === '12') {
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', { name, email, message });
        document.querySelector('.contact-form-success').style.display = 'block';
    } else {
        alert('Please fill all fields correctly.');
    }
});

// Modal functionality
const modal = document.getElementById('contact-modal');
const btn = document.querySelector('.btn-modal');
const span = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Basic animation for hero image
const heroImg = document.querySelector('.hero-img');
heroImg.style.opacity = '0';
heroImg.style.transform = 'translateY(20px)';

window.addEventListener('load', () => {
    setTimeout(() => {
        heroImg.style.transition = 'opacity 0.5s, transform 0.5s';
        heroImg.style.opacity = '1';
        heroImg.style.transform = 'translateY(0)';
    }, 500);
});
