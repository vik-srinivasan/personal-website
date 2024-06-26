// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            event.preventDefault();
        }
    });

    // Image modal
    const images = document.querySelectorAll('.project img');
    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.appendChild(modal);

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('open');
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            while (modal.firstChild) {
                modal.removeChild(modal.firstChild);
            }
            modal.appendChild(modalImg);
        });
    });

    modal.addEventListener('click', function() {
        modal.classList.remove('open');
    });
});
