// script.js (Versión Sin Animaciones)
document.addEventListener("DOMContentLoaded", function() {
    
    // Animations disabled by user request
    const elementsToAnimate = document.querySelectorAll('.fade-in, .hero-section, .site-footer, .article-card, .food-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('visible');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
    });

    // Hamburger Menu Logic (handled by loader.js mostly, but keeping this for fallback or if used directly)
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