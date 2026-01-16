import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Manually define articles to avoid import issues with aliases
const articles = [
    {
        slug: "del-estado-de-alerta-al-equilibrio",
        titulo: "Del Estado de Alerta al Equilibrio",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "El cortisol alto no es tu enemigo, es tu cuerpo intentando protegerte. Descubre cómo devolverle la calma con Ayurveda.",
        fecha: "2025-01-15",
        type: "article"
    },
    {
        slug: "rutina-5-pasos",
        titulo: "Rutina de 5 pasos “Comienza tu día a pleno”",
        categoria: "Ayurveda & Bienestar",
        foto: "cover.png",
        descripcion: "Para equilibrar tu sistema nervioso, nutrir tu Agni y vivir con Naturaleza Serena.",
        fecha: "2025-01-14",
        type: "article"
    },
    {
        slug: "nutrir-tu-mente",
        titulo: "El Arte de Nutrir tu Mente",
        categoria: "Nutrición",
        foto: "1.jpeg",
        descripcion: "Descubre los alimentos que aportan Prana y Ojas para tener claridad mental y paz interior.",
        fecha: "2024-12-10",
        type: "article"
    },
    {
        slug: "guia-blends-ayurvedicos",
        titulo: "Guía de Blends Ayurvédicos",
        categoria: "Ayurveda",
        foto: "blends.png",
        descripcion: "El arte de la alquimia emocional: elige tus hierbas para nutrir el alma y equilibrar tus emociones.",
        fecha: "2024-11-25",
        type: "article"
    },
    {
        slug: "tofu",
        titulo: "TOFU: El secreto de la 'Proteína de Naturaleza Serena'",
        categoria: "Ayurveda & Nutrición",
        foto: "tofu-dorado.png",
        descripcion: "Descubre cómo preparar el tofu según el Ayurveda para potenciar su energía y digestibilidad.",
        fecha: "2024-11-15",
        type: "article,recipe"
    },
    {
        slug: "queso-caju-calabaza",
        titulo: "Castañas de Cajú & Semillas de Calabaza",
        categoria: "Ayurveda & Nutrición",
        foto: "queso-caju.png",
        descripcion: "Equilibrio perfecto que no inflama y satisface el alma. Aliado del sistema nervioso y rico en minerales.",
        fecha: "2024-10-30",
        type: "article,recipe"
    },
    {
        slug: "albondigas-arvejas",
        titulo: "Albóndigas de Arvejas",
        categoria: "Almuerzo / Cena",
        foto: "cover.png",
        descripcion: "Proteína vegetal y claridad mental. Un equilibrio perfecto de vegetales y especias para tu bienestar.",
        fecha: "2025-01-15",
        type: "recipe"
    },
    {
        slug: "medallon-quinoa",
        titulo: "Medallón de Quinoa y Vegetales",
        categoria: "Almuerzo / Cena",
        foto: "medallon-quinoa.jpg",
        descripcion: "Una receta tridóshica, ligera y nutritiva. Ideal para equilibrar Vata, Pitta y Kapha sin generar toxinas.",
        fecha: "2024-12-20",
        type: "recipe"
    }
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

function getPostContent(slug, type) {
    let filePath;
    if (type.includes('recipe')) {
        filePath = path.join(projectRoot, 'public', 'recetas', slug, 'content.html');
        if (!fs.existsSync(filePath)) {
            filePath = path.join(projectRoot, 'public', 'articulos', slug, 'content.html');
        }
    } else {
        filePath = path.join(projectRoot, 'public', 'articulos', slug, 'content.html');
    }

    if (!fs.existsSync(filePath)) {
        console.warn(`Warning: Content not found for ${slug}`);
        return null;
    }

    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract content inside <article>
    const match = fileContent.match(/<article class="(?:blog-post|recipe-post)">([\s\S]*?)<\/article>/);
    
    if (match && match[1]) {
        let content = match[1];
        const folder = filePath.includes('recetas') ? 'recetas' : 'articulos';
        
        // Fix image paths
        content = content.replace(/src="([^"]+)"/g, (match, src) => {
            if (src.startsWith('http') || src.startsWith('/')) return match;
            const cleanSrc = src.replace(/^\.\//, '');
            return `src="/${folder}/${slug}/${cleanSrc}"`;
        });
        
        // Escape single quotes for SQL
        return content.replace(/'/g, "''");
    }
    return null;
}

let sql = `
-- Drop table if exists to ensure clean schema
DROP TABLE IF EXISTS posts;

-- Create posts table
CREATE TABLE posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT,
    description TEXT,
    content TEXT,
    date DATE,
    type TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert data
INSERT INTO posts (title, slug, category, description, content, date, type, image_url) VALUES
`;

const values = [];

for (const article of articles) {
    const content = getPostContent(article.slug, article.type);
    if (content) {
        const imageUrl = article.foto.startsWith('http') ? article.foto : `/articulos/${article.slug}/${article.foto}`; // Simplified path logic
        
        values.push(`(
    '${article.titulo.replace(/'/g, "''")}',
    '${article.slug}',
    '${article.categoria}',
    '${article.descripcion.replace(/'/g, "''")}',
    '${content}',
    '${article.fecha}',
    '${article.type}',
    '${imageUrl}'
)`);
    }
}

sql += values.join(',\n') + ';';

fs.writeFileSync(path.join(projectRoot, 'supabase_seed.sql'), sql);
console.log('SQL file generated at supabase_seed.sql');
