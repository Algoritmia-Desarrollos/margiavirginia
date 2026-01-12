// data.js

const articulos = [
    // --- ARTÍCULO NUEVO (Copia desde aquí) ---
    {
        slug: "nutrir-tu-mente",       // El nombre de la carpeta
        titulo: "El Arte de Nutrir tu Mente",
        categoria: "Nutrición",
        foto: "1.png",                 // El nombre de la foto dentro de esa carpeta
        descripcion: "Descubre los alimentos que aportan Prana y Ojas para tener claridad mental y paz interior."
    },
    // --- HASTA AQUÍ (Pega encima para nuevos posts) ---
];

// Lógica para generar las tarjetas automáticamente
const contenedor = document.getElementById('blog-feed');

articulos.forEach(art => {
    const tarjeta = `
    <article class="article-card">
        <a href="articulos/${art.slug}/"> 
            <div class="card-img-container">
                <img src="articulos/${art.slug}/${art.foto}" alt="${art.titulo}" class="card-img">
            </div>
            <div class="card-content">
                <span class="card-category">${art.categoria}</span>
                <h3 class="card-title">${art.titulo}</h3>
                <p class="card-excerpt">${art.descripcion}</p>
                <span class="read-more">Leer artículo completo &rarr;</span>
            </div>
        </a>
    </article>
    `;
    contenedor.innerHTML += tarjeta;
});