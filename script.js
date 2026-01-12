// script.js
// Detectar scroll para animaciones
document.addEventListener("DOMContentLoaded", function() {
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in, .article-card, .food-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in'); // Asegurar que tengan la clase base
        observer.observe(el);
    });
});