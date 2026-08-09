// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add a welcome message in console
    console.log('Welcome to my website!');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add current year to footer
    const year = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = 
        `&copy; ${year} My Website. All rights reserved.`;
});