// script.js (Versión Corregida "A prueba de fallos")
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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // CORRECCIÓN AQUÍ:
    // Ahora seleccionamos TAMBIÉN cualquier cosa que ya tenga la clase .fade-in
    // para asegurarnos de que nada se quede invisible por error.
    const elementsToAnimate = document.querySelectorAll('.fade-in, .hero-section, .site-footer, .article-card, .food-item');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in'); 
        observer.observe(el);
    });
});