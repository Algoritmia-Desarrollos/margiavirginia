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

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }
});