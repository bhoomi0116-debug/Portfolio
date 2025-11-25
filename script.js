/**
 * Simulates a form submission and displays a confirmation message.
 * Note: For a real website, this would involve a server-side endpoint.
 */
function handleContactSubmit(event) {
    event.preventDefault(); // Stop the default form submission

    const messageDiv = document.getElementById('contact-message');
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');

    // Disable button and show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('opacity-70');

    // Simulate API call delay
    setTimeout(() => {
        // Success message
        messageDiv.textContent = 'Thank you for your message, Alex will get back to you soon!';
        messageDiv.classList.remove('hidden', 'text-red-400');
        messageDiv.classList.add('text-green-400');

        // Clear the form
        form.reset();

        // Reset button state
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-70');
    }, 1500);
}

// Simple smooth scrolling for navigation (Tailwind handles the links, but this ensures a smooth transition if browser default is off)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if the target is a section on the same page
            if (this.hash.length > 0 && document.querySelector(this.hash)) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Attach the handleContactSubmit function to the form's submit event
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});