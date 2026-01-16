'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9] px-6">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-3xl shadow-sm border border-[#E8E6E1]">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-serif text-[#2C2C2C]">
            Bienvenida, Virginia
          </h2>
          <p className="mt-2 text-sm text-[#6B7F68]">
            Ingresa tus credenciales para administrar el blog.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-5 py-4 border border-[#E8E6E1] placeholder-gray-400 text-[#2C2C2C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BFA06D]/20 focus:border-[#BFA06D] transition-all sm:text-sm"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-5 py-4 border border-[#E8E6E1] placeholder-gray-400 text-[#2C2C2C] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BFA06D]/20 focus:border-[#BFA06D] transition-all sm:text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-[#2C2C2C] hover:bg-[#BFA06D] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BFA06D]"
            >
              {loading ? 'Entrando...' : 'Ingresar al Panel'}
            </button>
          </div>
          
          <div className="text-center mt-4">
             <Link href="/" className="text-sm text-[#6B7F68] hover:text-[#2C2C2C] transition-colors underline decoration-1 underline-offset-4">
                &larr; Volver al sitio web
             </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
