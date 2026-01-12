// script.js optimizado
document.addEventListener("DOMContentLoaded", function() {
    
    // Configuración del observador
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

    // Seleccionamos elementos
    const elementsToAnimate = document.querySelectorAll('.hero-section, .site-footer, .article-card, .food-item');
    
    elementsToAnimate.forEach(el => {
        // OPTIMIZACIÓN: Solo agregamos la clase 'fade-in' (que oculta el elemento)
        // si Javascript está funcionando. Esto evita que la página sea invisible si JS falla.
        el.classList.add('fade-in'); 
        observer.observe(el);
    });
});