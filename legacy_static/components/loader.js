document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML components
    async function loadComponent(id, url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Could not load ${url}`);
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
            
            // After loading navbar, initialize its logic
            if (id === 'navbar-placeholder') {
                initNavbarLogic();
                highlightActiveLink();
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Load Navbar and Footer
    // We use absolute paths assuming the server root is correct.
    loadComponent('navbar-placeholder', '/components/navbar.html');
    loadComponent('footer-placeholder', '/components/footer.html');

    function initNavbarLogic() {
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
    }

    function highlightActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

        navLinks.forEach(link => {
            // Remove active class first
            link.classList.remove('active');
            
            // Check if link href matches current path
            // We need to handle cases like "/" vs "/index.html"
            const linkPath = new URL(link.href).pathname;
            
            if (linkPath === currentPath || (linkPath === '/index.html' && currentPath === '/') || (linkPath === '/' && currentPath === '/index.html')) {
                link.classList.add('active');
            }
        });
    }
});
