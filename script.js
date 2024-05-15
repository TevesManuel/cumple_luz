document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts-container');
    const numHearts = 300; // Número de corazones

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posiciones aleatorias
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        // Rotación aleatoria
        const rotation = Math.random() * 360;

        // Asignar estilos en línea
        heart.style.left = `${posX}%`;
        heart.style.top = `${posY}%`;
        heart.style.transform = `rotate(${rotation}deg)`;

        heartsContainer.appendChild(heart);
    }
});

document.getElementById("main-message-next-button").addEventListener("click", () => {
    document.getElementById("main-message").style.display = "none";
    document.getElementsByClassName("hearts-container")[0].style.display = "none";
    document.getElementById("image-galery").style.display = "flex";
});

document.getElementById("gift-button").addEventListener("click", () => {
    document.getElementById("image-container").style.display = "none";
    document.getElementById("secret-gift").style.display = "grid";
});