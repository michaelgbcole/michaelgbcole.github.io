document.addEventListener('DOMContentLoaded', () => {
    const waveField = document.getElementById('wave-field');
    if (!waveField) {
        return;
    }

    let lastWaveTime = 0;
    const throttle = 40; // milliseconds between ripples

    const createWave = (x, y) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        const hue = Math.floor((x + y) % 360);
        ripple.style.setProperty('--accent', `hsla(${hue}, 80%, 60%, 0.6)`);

        waveField.appendChild(ripple);
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    };

    document.addEventListener('pointermove', (event) => {
        const now = Date.now();
        if (now - lastWaveTime < throttle) {
            return;
        }
        lastWaveTime = now;
        createWave(event.clientX, event.clientY);
    });

    document.addEventListener('click', (event) => {
        createWave(event.clientX, event.clientY);
    });
});
