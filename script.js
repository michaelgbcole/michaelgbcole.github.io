// Initialize navigation functionality when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links from specified classes
    const links = document.querySelectorAll('.nav-logo a, .selector a, .nav a, .contacts a');
    // Keep track of currently focused link
    let currentIndex = 0;

    // Set initial focus on first link
    links[currentIndex].classList.add('focused');
    links[currentIndex].focus();

    // Handle keyboard navigation
    document.addEventListener('keydown', (event) => {
        // Navigate down through links using arrow down key
        if (event.key === 'ArrowDown') {
            links[currentIndex].classList.remove('focused');
            currentIndex = (currentIndex + 1) % links.length;
            links[currentIndex].classList.add('focused');
            links[currentIndex].focus();
        } 
        // Navigate up through links using arrow up key
        else if (event.key === 'ArrowUp') {
            links[currentIndex].classList.remove('focused');
            currentIndex = (currentIndex - 1 + links.length) % links.length;
            links[currentIndex].classList.add('focused');
            links[currentIndex].focus();
        }
    });
});
