'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeClient({ initialArticles }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')

  const categories = useMemo(() => {
    return ['all', ...new Set(initialArticles.map(a => a.category).filter(Boolean))]
  }, [initialArticles])

  const filteredArticles = useMemo(() => {
    const normalize = (text) => text ? text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : ""
    const term = normalize(searchTerm)

    let filtered = initialArticles.filter(art => {
      // Only show articles, exclude recipes
      if (!art.type || !art.type.includes('article') || art.type.includes('recipe')) return false
      
      const title = normalize(art.title)
      const desc = normalize(art.description)
      const matchesText = title.includes(term) || desc.includes(term)
      const matchesCategory = category === 'all' || art.category === category
      return matchesText && matchesCategory
    })

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
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
                    <article key={art.id || art.slug} className="article-card fade-in visible">
                        <Link href={art.type.includes('recipe') ? `/recetas/${art.slug}` : `/articulos/${art.slug}`}>
                            <div className="card-img-container">
                                <Image 
                                    src={art.image_url || '/hero.webp'}
                                    alt={art.title || 'Article image'} 
                                    width={400} 
                                    height={400}
                                    className="card-img"
                                />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-category">{art.category}</span>
                                    <span className="card-date">
                                        {new Date(art.date).toLocaleDateString('es-AR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <h3 className="card-title">{art.title}</h3>
                                <p className="card-excerpt">{art.description}</p>
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
