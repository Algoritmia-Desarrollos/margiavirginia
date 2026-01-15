'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RecipesClient({ initialArticles }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')

  const categories = useMemo(() => {
    // Filter only recipes for categories
    const recipes = initialArticles.filter(a => a.type === 'recipe')
    return ['all', ...new Set(recipes.map(a => a.categoria))]
  }, [initialArticles])

  const filteredArticles = useMemo(() => {
    const normalize = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    const term = normalize(searchTerm)

    let filtered = initialArticles.filter(art => {
      // Check if type includes 'recipe'
      if (!art.type || !art.type.includes('recipe')) return false
      
      const title = normalize(art.titulo)
      const desc = normalize(art.descripcion)
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
            <span className="hero-tag">Cocina Consciente</span>
            <h1 className="hero-title">Recetas Ayurvédicas</h1>
            <p className="hero-subtitle">Alimentos que sanan, nutren y equilibran tu energía vital.</p>
            
            <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Buscar receta..." 
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
                        <Link href={`/recetas/${art.slug}`}>
                            <div className="card-img-container">
                                <Image 
                                    src={`/recetas/${art.slug}/${art.foto}`}
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
                                <span className="read-more">Ver receta &rarr;</span>
                            </div>
                        </Link>
                    </article>
                ))
            ) : (
                <p style={{ textAlign: 'center', gridColumn: '1/-1', opacity: 0.7 }}>
                    No se encontraron recetas con esos criterios.
                </p>
            )}
        </div>
      </main>
    </>
  )
}
