// data.js

const articulos = [
    {
        slug: "reset-metabolismo",
        titulo: "¿Te sientes inflamada y pesada?",
        categoria: "Ayurveda & Bienestar",
        foto: "reset-metabolismo.png",
        descripcion: "Si sientes que tu metabolismo está lento, es una señal de que tu fuego digestivo necesita un respiro. Aprende a resetearlo en 4 pasos.",
        fecha: "2026-01-28"
    },
    {
        slug: "ritual-piel-radiante",
        titulo: "El Ritual Ayurvédico para una Piel Radiante",
        categoria: "Ayurveda & Bienestar",
        foto: "ritual-piel.jpg",
        descripcion: "Belleza que nace desde tu interior. Descubre cómo tener una piel radiante según el Ayurveda.",
        fecha: "2026-01-19"
    },
    {
        slug: "segundo-despertar",
        titulo: "El Segundo Despertar",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "Una etapa donde el fuego de la juventud se transforma en la luz de la sabiduría. Abrazando la perimenopausia desde el Ayurveda.",
        fecha: "2026-01-17"
    },
    {
        slug: "del-estado-de-alerta-al-equilibrio",
        titulo: "Del Estado de Alerta al Equilibrio",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "El cortisol alto no es tu enemigo, es tu cuerpo intentando protegerte. Descubre cómo devolverle la calma con Ayurveda.",
        fecha: "2026-01-15"
    },
    {
        slug: "rutina-5-pasos",
        titulo: "Rutina de 5 pasos “Comienza tu día a pleno”",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "Para equilibrar tu sistema nervioso, nutrir tu Agni y vivir con Naturaleza Serena.",
        fecha: "2026-01-12"
    },
    {
        slug: "nutrir-tu-mente",
        titulo: "El Arte de Nutrir tu Mente",
        categoria: "Nutrición",
        foto: "1.jpeg",
        descripcion: "Descubre los alimentos que aportan Prana y Ojas para tener claridad mental y paz interior.",
        fecha: "2026-01-10"
    },
    {
        slug: "guia-blends-ayurvedicos",
        titulo: "Guía de Blends Ayurvédicos",
        categoria: "Ayurveda",
        foto: "blends.png",
        descripcion: "El arte de la alquimia emocional: elige tus hierbas para nutrir el alma y equilibrar tus emociones.",
        fecha: "2026-01-06"
    },
    {
        slug: "especias-farmacia-natural",
        titulo: "Las Especias, Tu Farmacia Natural",
        categoria: "Ayurveda & Nutrición",
        foto: "especias-farmacia-natural.png",
        descripcion: "Descubre cómo las especias activan la digestión, equilibran los doshas y fortalecen el metabolismo.",
        fecha: "2026-01-23"
    }
];

const recetas = [
    {
        slug: "budin-resplandor-vital",
        titulo: "Budín \"Resplandor Vital\"",
        categoria: "Ayurveda & Nutrición",
        foto: "budin-resplandor-vital.png",
        descripcion: "Este budín es una caricia para el sistema digestivo y un combustible de belleza para tu piel.",
        fecha: "2026-02-03"
    },
    {
        slug: "barritas-rejuvenecedoras",
        titulo: "Barritas Rejuvenecedoras de Damascos y Coco",
        categoria: "Ayurveda & Nutrición",
        foto: "barritas-rejuvenecedoras.png",
        descripcion: "Un snack antiinflamatorio, nutritivo y equilibrante. En Ayurveda las consideramos un Rasayana.",
        fecha: "2026-01-27"
    },
    {
        slug: "snacks-piel-radiante",
        titulo: "5 Días de Snacks para una Piel Radiante",
        categoria: "Ayurveda & Belleza",
        foto: "snacks-piel-radiante.png",
        descripcion: "La piel es el espejo de nuestra salud digestiva: el mejor cosmético es el que se come.",
        fecha: "2026-01-27"
    },
    {
        slug: "kitchari-purificante",
        titulo: "Kitchari Purificante con Vegetales",
        categoria: "Almuerzo / Cena",
        foto: "kitchari-purificante.png",
        descripcion: "El Reset Total, alimento medicina por excelencia del Ayurveda. Resetea tu sistema digestivo.",
        fecha: "2026-01-21"
    },
    {
        slug: "budin-coco-almendras",
        titulo: "Budín Coco Almendras y Manzana",
        categoria: "Desayuno / Merienda",
        foto: "budin-coco.jpg",
        descripcion: "Budín nutritivo, ligero y saciante. Sin gluten y antiinflamatorio.",
        fecha: "2026-01-19"
    },
    {
        slug: "hummus-remolacha",
        titulo: "Hummus de Remolacha y Lentejas",
        categoria: "Ayurveda & Nutrición",
        foto: "hummus-remolacha.jpg",
        descripcion: "Alquimia de Belleza y Nutrición Celular. Una receta que es pura medicina estética ingerida.",
        fecha: "2026-01-19"
    },
    {
        slug: "albondigas-arvejas",
        titulo: "Albóndigas de Arvejas",
        categoria: "Almuerzo / Cena",
        foto: "cover.png",
        descripcion: "Proteína vegetal y claridad mental. Un equilibrio perfecto de vegetales y especias para tu bienestar.",
        fecha: "2026-01-14"
    },
    {
        slug: "medallon-quinoa",
        titulo: "Medallón de Quinoa y Vegetales",
        categoria: "Almuerzo / Cena",
        foto: "medallon-quinoa.jpg",
        descripcion: "Una receta tridóshica, ligera y nutritiva. Ideal para equilibrar Vata, Pitta y Kapha sin generar toxinas.",
        fecha: "2026-01-12"
    },
    {
        slug: "tofu",
        titulo: "TOFU: Proteína Serena",
        categoria: "Ayurveda & Nutrición",
        foto: "tofu-dorado.png",
        descripcion: "Descubre cómo preparar el tofu según el Ayurveda para potenciar su energía y digestibilidad.",
        fecha: "2026-01-10"
    },
    {
        slug: "queso-caju-calabaza",
        titulo: "Castañas de Cajú & Calabaza",
        categoria: "Ayurveda & Nutrición",
        foto: "queso-caju.png",
        descripcion: "Equilibrio perfecto que no inflama y satisface el alma. Aliado del sistema nervioso.",
        fecha: "2026-01-08"
    },
    {
        slug: "bolitas-vitalidad",
        titulo: "Bolitas de Vitalidad",
        categoria: "Ayurveda & Nutrición",
        foto: "bolitas-vitalidad.png",
        descripcion: "Una Dulce Medicina. Snack perfecto para calmar el sistema nervioso y nutrir los tejidos profundos.",
        fecha: "2026-01-23"
    },
    {
        slug: "pesto-albahaca",
        titulo: "Pesto de Albahaca y Pistachos",
        categoria: "Ayurveda & Nutrición",
        foto: "pesto-albahaca.png",
        descripcion: "Nutrición y Sabor Antiinflamatorio. Una mezcla diseñada para nutrir tus tejidos y calmar tu sistema nervioso.",
        fecha: "2026-01-23"
    }
];

// Lógica de renderizado
const blogContainer = document.getElementById('blog-feed');
const recipeContainer = document.getElementById('recipe-feed');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortOrder = document.getElementById('sortOrder');

// Determinar qué datos y contenedor usar
let currentData = [];
let currentContainer = null;
let pathPrefix = "";

    if (blogContainer) {
        currentData = articulos;
        currentContainer = blogContainer;
        pathPrefix = "articulos/";
    } else if (recipeContainer) {
        currentData = recetas;
        currentContainer = recipeContainer;
        // Check if we are in the root directory (homepage) or in a subdirectory
        if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
             // Simple check: if we are at root level, we need to prepend 'recetas/'
             // But wait, if we are at /recetas/index.html, we also end with / or index.html
             // Let's check if 'recetas' is in the path.
             if (window.location.pathname.includes('/recetas/')) {
                 pathPrefix = ""; 
             } else {
                 pathPrefix = "recetas/";
             }
        } else {
             // Fallback
             pathPrefix = "recetas/";
        }
    }

function mostrarItems(lista) {
    if (!currentContainer) return;
    currentContainer.innerHTML = ''; 

    if (lista.length === 0) {
        currentContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1; opacity: 0.7;">No se encontraron resultados con esos criterios.</p>';
        return;
    }

    lista.forEach(item => {
        let fechaFormateada = "";
        if (item.fecha) {
            fechaFormateada = new Date(item.fecha).toLocaleDateString('es-AR', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
        }

        // Construir rutas
        const linkPath = `${pathPrefix}${item.slug}/`;
        const imgPath = `${pathPrefix}${item.slug}/${item.foto}`;

        const tarjeta = `
        <article class="article-card fade-in visible">
            <a href="${linkPath}"> 
                <div class="card-img-container">
                    <img 
                        src="${imgPath}" 
                        alt="${item.titulo}" 
                        class="card-img"
                        loading="lazy" 
                        width="400" 
                        height="400"
                        onerror="this.src='../favicon.jpeg'"
                    > 
                </div>
                <div class="card-content">
                    <div class="card-meta">
                        <span class="card-category">${item.categoria}</span>
                        <span class="card-date">${fechaFormateada}</span>
                    </div>
                    <h3 class="card-title">${item.titulo}</h3>
                    <p class="card-excerpt">${item.descripcion}</p>
                    <span class="read-more">Ver más &rarr;</span>
                </div>
            </a>
        </article>
        `;
        currentContainer.innerHTML += tarjeta;
    });
}

function cargarCategorias() {
    if(!categoryFilter) return;
    const categoriasUnicas = [...new Set(currentData.map(a => a.categoria))];
    categoriasUnicas.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

function filtrarYOrdenar() {
    if (!currentContainer) return;
    
    const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const textoBusqueda = searchInput ? normalizar(searchInput.value) : "";
    const categoriaSeleccionada = categoryFilter ? categoryFilter.value : "all";
    const orden = sortOrder ? sortOrder.value : 'newest';

    let itemsFiltrados = currentData.filter(item => {
        const tituloNormalizado = normalizar(item.titulo);
        const descripcionNormalizada = normalizar(item.descripcion);
        const coincideTexto = tituloNormalizado.includes(textoBusqueda) || descripcionNormalizada.includes(textoBusqueda);
        const coincideCategoria = categoriaSeleccionada === 'all' || item.categoria === categoriaSeleccionada;
        return coincideTexto && coincideCategoria;
    });

    itemsFiltrados.sort((a, b) => {
        const fechaA = new Date(a.fecha);
        const fechaB = new Date(b.fecha);
        // Safety check for invalid dates
        if (isNaN(fechaA) || isNaN(fechaB)) return 0;
        return orden === 'newest' ? fechaB - fechaA : fechaA - fechaB;
    });

    mostrarItems(itemsFiltrados);
}

document.addEventListener('DOMContentLoaded', () => {
    if (currentContainer) {
        if (categoryFilter) cargarCategorias();
        filtrarYOrdenar();
        
        let debounceTimer;
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(filtrarYOrdenar, 300);
            });
        }
        if (categoryFilter) categoryFilter.addEventListener('change', filtrarYOrdenar);
        if (sortOrder) sortOrder.addEventListener('change', filtrarYOrdenar);
    }
});