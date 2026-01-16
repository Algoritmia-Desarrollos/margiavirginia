// data.js

const articulos = [
    {
        slug: "segundo-despertar",
        titulo: "El Segundo Despertar",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "Abrazando la Perimenopausia desde el Ayurveda. Una etapa donde el fuego de la juventud se transforma en la luz de la sabiduría.",
        fecha: "2026-01-16"
    },
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
const sortOrder = document.getElementById('sortOrder'); // Nuevo elemento

// 1. Función para Renderizar Artículos
function mostrarArticulos(lista) {
    contenedor.innerHTML = ''; // Limpiar contenido actual

    if (lista.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; grid-column: 1/-1; opacity: 0.7;">No se encontraron artículos con esos criterios.</p>';
        return;
    }

    lista.forEach(art => {
        // Formatear fecha
        const fechaFormateada = new Date(art.fecha).toLocaleDateString('es-AR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Animación fade-in para los resultados filtrados
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

// 2. Función para llenar el Select de Categorías dinámicamente
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

// 3. Función de Filtrado y Ordenamiento
function filtrarYOrdenarArticulos() {
    // Función auxiliar para normalizar texto (quitar tildes y minúsculas)
    const normalizar = (texto) => {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const textoBusqueda = normalizar(searchInput.value);
    const categoriaSeleccionada = categoryFilter.value;
    const orden = sortOrder ? sortOrder.value : 'newest';

    // 1. Filtrar
    let articulosFiltrados = articulos.filter(art => {
        const tituloNormalizado = normalizar(art.titulo);
        const descripcionNormalizada = normalizar(art.descripcion);
        
        const coincideTexto = tituloNormalizado.includes(textoBusqueda) || 
                              descripcionNormalizada.includes(textoBusqueda);
        
        const coincideCategoria = categoriaSeleccionada === 'all' || 
                                  art.categoria === categoriaSeleccionada;
        return coincideTexto && coincideCategoria;
    });

    // 2. Ordenar
    articulosFiltrados.sort((a, b) => {
        const fechaA = new Date(a.fecha);
        const fechaB = new Date(b.fecha);
        
        if (orden === 'newest') {
            return fechaB - fechaA; // Más reciente primero
        } else {
            return fechaA - fechaB; // Más antiguo primero
        }
    });

    mostrarArticulos(articulosFiltrados);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    if (contenedor) {
        // Cargar categorías
        if (categoryFilter) cargarCategorias();

        // Mostrar inicial (ordenado por defecto)
        filtrarYOrdenarArticulos();
        
        // Event Listeners
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