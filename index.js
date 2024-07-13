const background = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    background.style.backgroundPosition = `${x}% ${y}%`;
});
