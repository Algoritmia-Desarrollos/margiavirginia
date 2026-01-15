'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function PostsList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching posts:', JSON.stringify(error, null, 2))
      alert('Error cargando posts: ' + (error.message || error.details || 'Error desconocido'))
    } else {
      setPosts(data)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Estás segura de que quieres borrar esto? Se borrará para siempre.')) return

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Hubo un error al borrar.')
    } else {
      fetchPosts()
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9] text-[#6B7F68]">
        <div className="text-2xl font-serif">Cargando tus publicaciones...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans text-[#4A4A4A] pb-20">
      {/* Navbar Simple */}
      <nav className="bg-white border-b border-[#E8E6E1] sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2 text-[#6B7F68] hover:text-[#2C2C2C] font-medium">
            &larr; Volver al Inicio
          </Link>
          <span className="font-serif text-xl text-[#2C2C2C]">
            Mis Publicaciones
          </span>
          <div className="w-24"></div> {/* Spacer para centrar el título */}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-serif text-3xl text-[#2C2C2C]">Todo lo publicado</h1>
          <Link 
            href="/admin/posts/new" 
            className="px-6 py-3 bg-[#BFA06D] text-white rounded-full font-medium hover:bg-[#A88B5D] transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Escribir Nuevo
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8E6E1] hover:border-[#BFA06D] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    post.type === 'recipe' ? 'bg-[#E8F5E9] text-[#2E7D32]' : 'bg-[#FFF3E0] text-[#EF6C00]'
                  }`}>
                    {post.type === 'recipe' ? 'Receta' : 'Artículo'}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(post.date).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-[#2C2C2C] mb-1">
                  {post.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-3 self-end sm:self-center">
                <a 
                    href={post.type === 'recipe' ? `/recetas/${post.slug}` : `/articulos/${post.slug}`}
                    target="_blank"
                    className="px-4 py-2 text-[#6B7F68] bg-[#F4F6F4] rounded-lg hover:bg-[#E8F5E9] transition-colors text-sm font-medium"
                >
                    Ver en la web
                </a>
                <button 
                    onClick={() => handleDelete(post.id)}
                    className="px-4 py-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                >
                    Borrar
                </button>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-[#E8E6E1]">
                <p className="text-xl text-gray-400 mb-4">Aún no has publicado nada.</p>
                <Link href="/admin/posts/new" className="text-[#BFA06D] font-medium hover:underline text-lg">
                    ¡Escribe tu primera publicación aquí!
                </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
