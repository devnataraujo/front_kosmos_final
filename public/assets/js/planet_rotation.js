document.querySelector('.planet-container').addEventListener('click', function () {
    const texture = document.querySelector('.texture');
    if (texture.style.animationPlayState === 'running') {
        texture.style.animationPlayState = 'paused';
    } else {
        texture.style.animationPlayState = 'running';
    }
});

document.addEventListener('mousemove', function (e) {
    const movable = document.querySelector('.movable');
    const mouseX = e.clientX; // Posição X do mouse
    const mouseY = e.clientY; // Posição Y do mouse

    movable.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px)`;
});

