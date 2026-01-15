'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminDashboard() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
      if (!session) {
        router.push('/admin/login')
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (!session) {
        router.push('/admin/login')
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9] text-[#6B7F68]">
        <div className="text-2xl font-serif">Cargando...</div>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans text-[#4A4A4A]">
      {/* Navbar Simple */}
      <nav className="bg-white border-b border-[#E8E6E1] sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-2xl text-[#2C2C2C] tracking-tight">
            Panel de Virginia
          </span>
          <button
            onClick={() => supabase.auth.signOut()}
            className="text-[#6B7F68] hover:text-[#2C2C2C] font-medium underline decoration-1 underline-offset-4"
          >
            Salir
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-[#2C2C2C] mb-6">
            ¡Hola, Virginia!
          </h1>
          <p className="text-lg text-[#6B7F68]">
            ¿Qué te gustaría hacer hoy?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Botón Gigante: Escribir */}
          <Link href="/admin/posts/new" className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#BFA06D] text-center flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#BFA06D] group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#2C2C2C] mb-2 group-hover:text-[#BFA06D] transition-colors">
                Escribir Nuevo
              </h2>
              <p className="text-gray-500">
                Publicar un artículo o receta nueva.
              </p>
            </div>
          </Link>

          {/* Botón Gigante: Ver Todo */}
          <Link href="/admin/posts" className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border-2 border-transparent hover:border-[#6B7F68] text-center flex flex-col items-center gap-6">
             <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#6B7F68] group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#2C2C2C] mb-2 group-hover:text-[#6B7F68] transition-colors">
                Ver Mis Publicaciones
              </h2>
              <p className="text-gray-500">
                Revisar, editar o borrar lo que ya subiste.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
