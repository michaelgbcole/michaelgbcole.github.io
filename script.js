document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-logo a, .selector a, .nav a, .contacts a');
    let currentIndex = 0;

    links[currentIndex].classList.add('focused');
    links[currentIndex].focus();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            links[currentIndex].classList.remove('focused');
            currentIndex = (currentIndex + 1) % links.length;
            links[currentIndex].classList.add('focused');
            links[currentIndex].focus();
        } 
        else if (event.key === 'ArrowUp') {
            links[currentIndex].classList.remove('focused');
            currentIndex = (currentIndex - 1 + links.length) % links.length;
            links[currentIndex].classList.add('focused');
            links[currentIndex].focus();
        }
    });
});
