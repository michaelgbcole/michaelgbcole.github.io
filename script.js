document.addEventListener('DOMContentLoaded', () => {
  const focusables = Array.from(document.querySelectorAll('.focusable'));
  if (focusables.length) {
    let currentIndex = 0;
    focusables[currentIndex].classList.add('focused');
    focusables[currentIndex].focus({ preventScroll: true });

    focusables.forEach((element) => {
      element.addEventListener('focus', () => element.classList.add('focused'));
      element.addEventListener('blur', () => element.classList.remove('focused'));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        focusables[currentIndex].classList.remove('focused');
        currentIndex = (currentIndex + 1) % focusables.length;
        focusables[currentIndex].classList.add('focused');
        focusables[currentIndex].focus({ preventScroll: true });
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        focusables[currentIndex].classList.remove('focused');
        currentIndex = (currentIndex - 1 + focusables.length) % focusables.length;
        focusables[currentIndex].classList.add('focused');
        focusables[currentIndex].focus({ preventScroll: true });
      }
    });
  }

  const root = document.documentElement;
  const updatePointer = (event) => {
    root.style.setProperty('--pointer-x', `${event.clientX}px`);
    root.style.setProperty('--pointer-y', `${event.clientY}px`);
  };

  window.addEventListener('pointermove', updatePointer);

  window.addEventListener('pointerdown', () => {
    root.classList.add('is-pressing');
  });

  window.addEventListener('pointerup', () => {
    root.classList.remove('is-pressing');
  });

  window.addEventListener('pointerleave', () => {
    root.classList.remove('is-pressing');
  });
});
