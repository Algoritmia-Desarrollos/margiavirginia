'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ArticlesClient({ initialArticles }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')

  const categories = useMemo(() => {
    // Filter only articles for categories
    const articles = initialArticles.filter(a => a.type && a.type.includes('article'))
    return ['all', ...new Set(articles.map(a => a.category).filter(Boolean))]
  }, [initialArticles])

  const filteredArticles = useMemo(() => {
    const normalize = (text) => text ? text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : ""
    const term = normalize(searchTerm)

    let filtered = initialArticles.filter(art => {
      // Check if type includes 'article' AND does NOT include 'recipe'
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
            <span className="hero-tag">Bienestar Integral</span>
            <h1 className="hero-title">Artículos y Reflexiones</h1>
            <p className="hero-subtitle">Contenido para nutrir tu mente y expandir tu consciencia.</p>
            
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
                        <Link href={`/articulos/${art.slug}`}>
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
                                <span className="read-more">Leer artículo &rarr;</span>
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
