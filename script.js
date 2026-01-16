// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Forzamos visibilidad en elementos críticos por si la animación falla
    const elementsToAnimate = document.querySelectorAll('.fade-in, .hero-section, .site-footer, .article-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('visible');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
});