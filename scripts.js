// Handle the contact form submission
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate sending form data
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form
    event.target.reset();

    // Notify the user
    alert("Thank you for contacting us! We will get back to you soon.");
});

// Function to apply fade-in animation to sections when they become visible
function applyFadeInAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}

// Create an instance of the Intersection Observer API
const observer = new IntersectionObserver(applyFadeInAnimation, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

// Apply the observer to all sections on the page
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Function to toggle visibility of different sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Event listeners for section headers to toggle visibility
document.addEventListener('DOMContentLoaded', () => {
    // Get all headers with class 'section-header'
    const headers = document.querySelectorAll('.section-header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Get the corresponding section to toggle
            const sectionId = header.getAttribute('data-section');
            toggleSection(sectionId);
        });
    });
});
