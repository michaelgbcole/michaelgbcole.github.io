document.addEventListener('DOMContentLoaded', () => {
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
