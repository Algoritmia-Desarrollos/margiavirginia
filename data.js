// data.js

const articulos = [
    {
        slug: "nutrir-tu-mente",
        titulo: "El Arte de Nutrir tu Mente",
        categoria: "Nutrición",
        foto: "1.png",
        descripcion: "Descubre los alimentos que aportan Prana y Ojas para tener claridad mental y paz interior."
    },
    // Agrega más artículos aquí...
];

const contenedor = document.getElementById('blog-feed');

articulos.forEach(art => {
    const tarjeta = `
    <article class="article-card">
        <a href="articulos/${art.slug}/"> 
            <div class="card-img-container">
                <img 
                    src="articulos/${art.slug}/${art.foto}" 
                    alt="${art.titulo}" 
                    class="card-img"
                    loading="lazy" 
                    width="400" 
                    height="400"
                > 
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