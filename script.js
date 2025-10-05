// Minimalist landing page interactions
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initWaitlistModal();
});

// Smooth scroll for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Waitlist Modal
function initWaitlistModal() {
    const waitlistBtn = document.getElementById('waitlistBtn');
    const modal = document.getElementById('waitlistModal');
    const closeBtn = document.getElementById('closeModal');
    const form = document.getElementById('waitlistForm');

    // Open modal
    if (waitlistBtn) {
        waitlistBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Handle form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('.email-input').value;
            console.log('Email submitted:', email);
            // Add your waitlist integration here
            alert('Thanks for joining the waitlist!');
            modal.classList.remove('active');
            form.reset();
        });
    }
}
