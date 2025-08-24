document.body.classList.add('fade-in');

function fadeAndGo(href) {
    document.querySelectorAll('.main-content').forEach(function(el) {
        el.classList.add('fade-out');
    });
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = href;
    }, 300); // Duración igual a la animación fadeOut
}

// Navegación principal
document.querySelectorAll('.main-nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !link.hasAttribute('target')) {
            e.preventDefault();
            fadeAndGo(href);
        }
    });
});

// Social icon de mail
document.querySelectorAll('.social-buttons a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        if (href && !link.hasAttribute('target')) {
            e.preventDefault();
            fadeAndGo(href);
        }
    });
});
// Contact info links
document.querySelectorAll('.contact-item a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        if (href && !link.hasAttribute('target')) {
            e.preventDefault();
            fadeAndGo(href);
        }
    });
});
// Blog entry images (portada y blog.html)
document.querySelectorAll('.blog-entry a, .blog-card a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        if (href && !link.hasAttribute('target')) {
            e.preventDefault();
            fadeAndGo(href);
        }
    });
});
//mantener el desplegable por encima