// data.js

const articulos = [
    {
        slug: "nutrir-tu-mente",
        titulo: "El Arte de Nutrir tu Mente",
        categoria: "Nutrición", // Asegúrate de usar mayúsculas/minúsculas consistentemente
        foto: "1.jpeg",
        descripcion: "Descubre los alimentos que aportan Prana y Ojas para tener claridad mental y paz interior."
    },
    {
        slug: "guia-blends-ayurvedicos",
        titulo: "Guía de Blends Ayurvédicos",
        categoria: "Ayurveda",
        foto: "blends.png",
        descripcion: "El arte de la alquimia emocional: elige tus hierbas para nutrir el alma y equilibrar tus emociones."
    },
    {
        slug: "tofu",
        titulo: "TOFU: El secreto de la 'Proteína de Naturaleza Serena'",
        categoria: "Ayurveda & Nutrición",
        foto: "tofu-dorado.png",
        descripcion: "Descubre cómo preparar el tofu según el Ayurveda para potenciar su energía y digestibilidad."
    },
    {
        slug: "rutina-5-pasos",
        titulo: "Rutina de 5 pasos “Comienza tu día a pleno”",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "Para equilibrar tu sistema nervioso, nutrir tu Agni y vivir con Naturaleza Serena."
    },
    {
        slug: "queso-caju-calabaza",
        titulo: "Castañas de Cajú & Semillas de Calabaza",
        categoria: "Ayurveda & Nutrición",
        foto: "queso-caju.jpeg",
        descripcion: "Equilibrio perfecto que no inflama y satisface el alma. Aliado del sistema nervioso y rico en minerales."
    }
];

// Elementos del DOM
const contenedor = document.getElementById('blog-feed');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

// 1. Función para Renderizar Artículos
function mostrarArticulos(lista) {
    contenedor.innerHTML = ''; // Limpiar contenido actual

    if (lista.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; grid-column: 1/-1; opacity: 0.7;">No se encontraron artículos con esos criterios.</p>';
        return;
    }

    lista.forEach(art => {
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
}

// 2. Función para llenar el Select de Categorías dinámicamente
function cargarCategorias() {
    if(!categoryFilter) return; // Si no existe el filtro (ej. en una página interna), no hacemos nada

    // Obtener categorías únicas usando Set
    const categoriasUnicas = [...new Set(articulos.map(a => a.categoria))];

    categoriasUnicas.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

// 3. Función de Filtrado
function filtrarArticulos() {
    const textoBusqueda = searchInput.value.toLowerCase();
    const categoriaSeleccionada = categoryFilter.value;

    const articulosFiltrados = articulos.filter(art => {
        // Coincidencia de texto (en título o descripción)
        const coincideTexto = art.titulo.toLowerCase().includes(textoBusqueda) || 
                              art.descripcion.toLowerCase().includes(textoBusqueda);
        
        // Coincidencia de categoría
        const coincideCategoria = categoriaSeleccionada === 'all' || 
                                  art.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;
    });

    mostrarArticulos(articulosFiltrados);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Solo ejecutamos si estamos en la home (donde existe el contenedor)
    if (contenedor) {
        mostrarArticulos(articulos); // Mostrar todos al inicio
        
        if (searchInput && categoryFilter) {
            cargarCategorias();
            
            // Event Listeners para filtrar en tiempo real
            searchInput.addEventListener('input', filtrarArticulos);
            categoryFilter.addEventListener('change', filtrarArticulos);
        }
    }
});