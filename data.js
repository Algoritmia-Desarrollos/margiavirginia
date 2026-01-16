// data.js

const articulos = [
    {
        slug: "del-estado-de-alerta-al-equilibrio",
        titulo: "Del Estado de Alerta al Equilibrio",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "El cortisol alto no es tu enemigo, es tu cuerpo intentando protegerte. Descubre cómo devolverle la calma con Ayurveda.",
        fecha: "2025-01-15"
    },
    {
        slug: "rutina-5-pasos",
        titulo: "Rutina de 5 pasos “Comienza tu día a pleno”",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "Para equilibrar tu sistema nervioso, nutrir tu Agni y vivir con Naturaleza Serena.",
        fecha: "2025-01-14"
    },
    {
        slug: "nutrir-tu-mente",
        titulo: "El Arte de Nutrir tu Mente",
        categoria: "Nutrición",
        foto: "1.jpeg",
        descripcion: "Descubre los alimentos que aportan Prana y Ojas para tener claridad mental y paz interior.",
        fecha: "2024-12-10"
    },
    {
        slug: "guia-blends-ayurvedicos",
        titulo: "Guía de Blends Ayurvédicos",
        categoria: "Ayurveda",
        foto: "blends.png",
        descripcion: "El arte de la alquimia emocional: elige tus hierbas para nutrir el alma y equilibrar tus emociones.",
        fecha: "2024-11-25"
    }
];

// Elementos del DOM
const contenedor = document.getElementById('blog-feed');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortOrder = document.getElementById('sortOrder');

// 1. Función para Renderizar Artículos
function mostrarArticulos(lista) {
    contenedor.innerHTML = ''; 

    if (lista.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; grid-column: 1/-1; opacity: 0.7;">No se encontraron artículos con esos criterios.</p>';
        return;
    }

    lista.forEach(art => {
        const fechaFormateada = new Date(art.fecha).toLocaleDateString('es-AR', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        // Construcción de la ruta de imagen segura
        const tarjeta = `
        <article class="article-card fade-in visible">
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
                    <div class="card-meta">
                        <span class="card-category">${art.categoria}</span>
                        <span class="card-date">${fechaFormateada}</span>
                    </div>
                    <h3 class="card-title">${art.titulo}</h3>
                    <p class="card-excerpt">${art.descripcion}</p>
                    <span class="read-more">Leer artículo completo &rarr;</span>
                </div>
            </a>
        </article>
        `;
        contenedor.innerHTML += tarjeta;
    });
}

function cargarCategorias() {
    if(!categoryFilter) return;
    const categoriasUnicas = [...new Set(articulos.map(a => a.categoria))];
    categoriasUnicas.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

function filtrarYOrdenarArticulos() {
    const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const textoBusqueda = normalizar(searchInput.value);
    const categoriaSeleccionada = categoryFilter.value;
    const orden = sortOrder ? sortOrder.value : 'newest';

    let articulosFiltrados = articulos.filter(art => {
        const tituloNormalizado = normalizar(art.titulo);
        const descripcionNormalizada = normalizar(art.descripcion);
        const coincideTexto = tituloNormalizado.includes(textoBusqueda) || descripcionNormalizada.includes(textoBusqueda);
        const coincideCategoria = categoriaSeleccionada === 'all' || art.categoria === categoriaSeleccionada;
        return coincideTexto && coincideCategoria;
    });

    articulosFiltrados.sort((a, b) => {
        const fechaA = new Date(a.fecha);
        const fechaB = new Date(b.fecha);
        return orden === 'newest' ? fechaB - fechaA : fechaA - fechaB;
    });

    mostrarArticulos(articulosFiltrados);
}

document.addEventListener('DOMContentLoaded', () => {
    if (contenedor) {
        if (categoryFilter) cargarCategorias();
        filtrarYOrdenarArticulos();
        
        let debounceTimer;
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(filtrarYOrdenarArticulos, 300);
            });
        }
        if (categoryFilter) categoryFilter.addEventListener('change', filtrarYOrdenarArticulos);
        if (sortOrder) sortOrder.addEventListener('change', filtrarYOrdenarArticulos);
    }
});