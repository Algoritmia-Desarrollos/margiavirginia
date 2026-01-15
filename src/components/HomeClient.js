'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeClient({ initialArticles }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')

  const categories = useMemo(() => {
    return ['all', ...new Set(initialArticles.map(a => a.categoria))]
  }, [initialArticles])

  const filteredArticles = useMemo(() => {
    const normalize = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    const term = normalize(searchTerm)

    let filtered = initialArticles.filter(art => {
      // Check if type includes 'article' (handles 'article', 'article,recipe', etc.)
      // Also handle legacy data where type might be undefined (assume article)
      if (art.type && !art.type.includes('article')) return false
      
      const title = normalize(art.titulo || art.title) // Handle both naming conventions
      const desc = normalize(art.descripcion || art.description)
      const matchesText = title.includes(term) || desc.includes(term)
      const matchesCategory = category === 'all' || art.categoria === category
      return matchesText && matchesCategory
    })

    return filtered.sort((a, b) => {
      const dateA = new Date(a.fecha)
      const dateB = new Date(b.fecha)
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })
  }, [initialArticles, searchTerm, category, sortOrder])

  return (
    <>
      <header className="hero-section fade-in" id="hero">
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
            <span className="hero-tag">Articulos de Bienestar</span>
            <h1 className="hero-title">Maria Virginia <br /> González Scherer</h1>
            <p className="hero-subtitle">Un espacio para reconectar con tu naturaleza, sanar desde la raíz y encontrar el equilibrio que tu cuerpo necesita.</p>
            
            <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Buscar artículo..." 
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <select 
                  className="search-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">Todas las categorías</option>
                    {categories.filter(c => c !== 'all').map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                <select 
                  className="search-select"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="newest">Más recientes</option>
                    <option value="oldest">Más antiguos</option>
                </select>
            </div>
        </div>
      </header>

      <main className="container">
        <div className="blog-grid" id="blog-feed">
            {filteredArticles.length > 0 ? (
                filteredArticles.map(art => (
                    <article key={art.slug} className="article-card fade-in visible">
                        <Link href={art.type.includes('recipe') ? `/recetas/${art.slug}` : `/articulos/${art.slug}`}>
                            <div className="card-img-container">
                                <Image 
                                    src={art.type.includes('recipe') ? `/recetas/${art.slug}/${art.foto}` : `/articulos/${art.slug}/${art.foto}`}
                                    alt={art.titulo} 
                                    width={400} 
                                    height={400}
                                    className="card-img"
                                />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-category">{art.categoria}</span>
                                    <span className="card-date">
                                        {new Date(art.fecha).toLocaleDateString('es-AR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <h3 className="card-title">{art.titulo}</h3>
                                <p className="card-excerpt">{art.descripcion}</p>
                                <span className="read-more">Leer {art.type.includes('recipe') ? 'receta' : 'artículo'} completo &rarr;</span>
                            </div>
                        </Link>
                    </article>
                ))
            ) : (
                <p style={{ textAlign: 'center', gridColumn: '1/-1', opacity: 0.7 }}>
                    No se encontraron artículos con esos criterios.
                </p>
            )}
        </div>
      </main>
    </>
  )
}
