'use client'
import { useState, useRef, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function NewPost() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Bienestar',
    description: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    type: ['article'],
    image_url: ''
  })
  const [categories, setCategories] = useState(['Bienestar', 'Alimentación', 'Rutinas', 'Mindfulness'])
  const [isNewCategory, setIsNewCategory] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [editorMode, setEditorMode] = useState('code') // 'code' | 'visual'

  const [aiLoading, setAiLoading] = useState(false)
  const [rewriteLoading, setRewriteLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    // Fetch unique categories from DB
    const { data } = await supabase.from('posts').select('category')
    if (data) {
        const uniqueCats = [...new Set(data.map(item => item.category))]
        // Merge with defaults and remove duplicates
        const allCats = [...new Set([...categories, ...uniqueCats])]
        setCategories(allCats)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      slug: name === 'title' && !prev.slug ? value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') : prev.slug
    }))
  }

  const handleTypeChange = (type) => {
    setFormData(prev => {
      const types = prev.type.includes(type)
        ? prev.type.filter(t => t !== type)
        : [...prev.type, type]
      return { ...prev, type: types }
    })
  }

  const handleGenerateImage = async () => {
    if (!formData.description) {
      alert('Primero escribe una pequeña descripción de la imagen que quieres.')
      return
    }
    setAiLoading(true)
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: formData.description })
      })
      const data = await res.json()
      if (data.url) {
        setGeneratedImage(data.url)
        setFormData(prev => ({ ...prev, image_url: data.url })) 
      } else {
        alert('Ups, no se pudo crear la imagen. Intenta de nuevo.')
      }
    } catch (error) {
      console.error(error)
      alert('Error de conexión.')
    } finally {
      setAiLoading(false)
    }
  }

  const handleRewriteContent = async () => {
    if (!formData.content) {
      alert('Escribe algo en el contenido primero para que la IA lo mejore.')
      return
    }
    setRewriteLoading(true)
    try {
      const res = await fetch('/api/rewrite-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: formData.content })
      })
      const data = await res.json()
      if (data.rewritten) {
        setFormData(prev => ({ ...prev, content: data.rewritten }))
      } else {
        alert('No se pudo mejorar el texto.')
      }
    } catch (error) {
      console.error(error)
      alert('Error al conectar con la IA.')
    } finally {
      setRewriteLoading(false)
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploading(true)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data } = supabase.storage.from('images').getPublicUrl(filePath)
      
      setGeneratedImage(data.publicUrl)
      setFormData(prev => ({ ...prev, image_url: data.publicUrl }))
    } catch (error) {
      alert('Error subiendo imagen: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  const insertTag = (tag, endTag = '') => {
    const textarea = contentRef.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = textarea.value
    const before = text.substring(0, start)
    const selection = text.substring(start, end)
    const after = text.substring(end)

    const newText = before + tag + selection + endTag + after
    setFormData(prev => ({ ...prev, content: newText }))
    
    setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(start + tag.length, end + tag.length)
    }, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const dbData = {
        ...formData,
        type: formData.type.join(',')
    }

    const { error } = await supabase
      .from('posts')
      .insert([dbData])

    if (error) {
      alert('Error al guardar: ' + error.message)
      setLoading(false)
    } else {
      alert('¡Publicado con éxito!')
      router.push('/admin/posts')
    }
  }

  // --- PREVIEW COMPONENT ---
  const PreviewModal = () => (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-[#FAFAF9] px-6 py-4 border-b border-[#E8E6E1] flex justify-between items-center">
                <h3 className="font-serif text-xl text-[#2C2C2C]">Vista Previa en Vivo</h3>
                <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-red-500 font-bold text-xl">&times;</button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-[#FAFAF9]">
                <div className="max-w-[800px] mx-auto bg-white p-10 shadow-sm rounded-lg">
                    {/* Simulated Article Header */}
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#6B7F68] mb-2 block">{formData.category}</span>
                        <h1 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] leading-tight mb-4">{formData.title}</h1>
                        <div className="w-[60px] h-[1px] bg-[#BFA06D] mx-auto my-6"></div>
                    </div>

                    {/* Simulated Featured Image */}
                    {formData.image_url && (
                        <div className="mb-10 rounded-lg overflow-hidden shadow-sm">
                            <img src={formData.image_url} alt={formData.title} className="w-full h-auto object-cover" />
                        </div>
                    )}

                    {/* Content */}
                    <div 
                        className="prose prose-lg max-w-none font-sans text-[#4A4A4A] leading-loose"
                        dangerouslySetInnerHTML={{ __html: formData.content }} 
                    />
                </div>
            </div>
            <div className="bg-white px-6 py-4 border-t border-[#E8E6E1] flex justify-end gap-4">
                <button onClick={() => setShowPreview(false)} className="px-6 py-2 text-gray-500 hover:text-[#2C2C2C]">Seguir Editando</button>
                <button onClick={handleSubmit} className="px-8 py-2 bg-[#2C2C2C] text-white rounded-full font-serif hover:bg-[#BFA06D] transition-colors">
                    Publicar Ahora
                </button>
            </div>
        </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans text-[#4A4A4A] pb-20">
      {showPreview && <PreviewModal />}
      
      {/* Navbar Simple */}
      <nav className="bg-white border-b border-[#E8E6E1] sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2 text-[#6B7F68] hover:text-[#2C2C2C] font-medium">
            &larr; Cancelar
          </Link>
          <span className="font-serif text-xl text-[#2C2C2C]">
            Nueva Publicación
          </span>
          <button 
            type="button"
            onClick={() => setShowPreview(true)}
            className="px-5 py-2 bg-white border border-[#2C2C2C] text-[#2C2C2C] rounded-full text-sm font-bold hover:bg-[#2C2C2C] hover:text-white transition-all"
          >
            👁️ Ver cómo queda
          </button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto py-12 px-6">
        
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* 1. Título y Tipo */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-[#E8E6E1]">
            <div className="mb-6">
                <label className="block text-lg font-serif text-[#2C2C2C] mb-3">¿Qué tipo de publicación es?</label>
                <div className="flex gap-4">
                    <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 text-center transition-all ${formData.type.includes('article') ? 'border-[#BFA06D] bg-[#FFF8E1] text-[#BFA06D] font-bold shadow-sm' : 'border-[#E8E6E1] hover:border-gray-300'}`}>
                        <input type="checkbox" checked={formData.type.includes('article')} onChange={() => handleTypeChange('article')} className="hidden" />
                        Artículo
                    </label>
                    <label className={`flex-1 cursor-pointer border-2 rounded-xl p-4 text-center transition-all ${formData.type.includes('recipe') ? 'border-[#6B7F68] bg-[#E8F5E9] text-[#6B7F68] font-bold shadow-sm' : 'border-[#E8E6E1] hover:border-gray-300'}`}>
                        <input type="checkbox" checked={formData.type.includes('recipe')} onChange={() => handleTypeChange('recipe')} className="hidden" />
                        Receta
                    </label>
                </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-serif text-[#2C2C2C] mb-3">Título Principal</label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Ej: Jugo verde para la mañana..."
                className="w-full px-5 py-4 rounded-xl border border-[#E8E6E1] focus:border-[#BFA06D] focus:ring-2 focus:ring-[#BFA06D]/20 outline-none transition-all text-xl font-serif placeholder-gray-300"
              />
            </div>

            <div>
                <label className="block text-lg font-serif text-[#2C2C2C] mb-3">Categoría</label>
                {!isNewCategory ? (
                    <div className="flex gap-2">
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-5 py-3 rounded-xl border border-[#E8E6E1] focus:border-[#BFA06D] outline-none bg-white appearance-none cursor-pointer"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <button 
                            type="button" 
                            onClick={() => setIsNewCategory(true)}
                            className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 text-gray-600 font-medium whitespace-nowrap"
                        >
                            + Nueva
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Escribe la nueva categoría..."
                            className="w-full px-5 py-3 rounded-xl border border-[#E8E6E1] focus:border-[#BFA06D] outline-none"
                            autoFocus
                        />
                        <button 
                            type="button" 
                            onClick={() => setIsNewCategory(false)}
                            className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 text-gray-600 font-medium whitespace-nowrap"
                        >
                            Cancelar
                        </button>
                    </div>
                )}
            </div>
            
            <input type="hidden" name="slug" value={formData.slug} />
          </section>

          {/* 2. Imagen */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-[#E8E6E1]">
            <h2 className="font-serif text-2xl text-[#2C2C2C] mb-4">Imagen de Portada</h2>
            
            <div className="flex flex-col gap-6">
                {/* Tabs / Options */}
                <div className="flex p-1 bg-gray-100 rounded-xl w-fit">
                    <button 
                        type="button" 
                        onClick={() => {
                            // Logic to switch tab if needed, currently just visual or handled by UI state if implemented
                            // Since the original code didn't have state for this, I'll keep it simple but styled
                        }}
                        className="px-6 py-2 rounded-lg bg-white shadow-sm text-[#BFA06D] font-bold transition-all"
                    >
                        Crear con IA
                    </button>
                    <button 
                        type="button" 
                        onClick={() => fileInputRef.current.click()} 
                        className="px-6 py-2 rounded-lg text-gray-500 hover:text-gray-700 font-medium transition-all"
                    >
                        Subir mi propia foto
                    </button>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1 w-full">
                        <textarea
                            name="description"
                            rows={3}
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe la imagen para la IA..."
                            className="w-full px-5 py-3 rounded-xl border border-[#E8E6E1] focus:border-[#BFA06D] outline-none mb-4 resize-none"
                        />
                        <button
                            type="button"
                            onClick={handleGenerateImage}
                            disabled={aiLoading || uploading}
                            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 ${
                                aiLoading || uploading
                                ? 'bg-gray-300 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-[#BFA06D] to-[#A88B5D] hover:shadow-lg hover:-translate-y-1'
                            }`}
                        >
                            {aiLoading ? '✨ Creando magia...' : uploading ? 'Subiendo...' : '✨ Crear Imagen Mágica'}
                        </button>
                    </div>

                    <div className="w-full md:w-48 h-48 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden relative shadow-inner">
                        {generatedImage ? (
                            <Image src={generatedImage} alt="Generada" fill className="object-cover" />
                        ) : (
                            <span className="text-gray-300 text-sm text-center px-4">Aquí aparecerá tu imagen</span>
                        )}
                    </div>
                </div>
            </div>
          </section>

          {/* 3. Contenido */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-[#E8E6E1]">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
                <h2 className="font-serif text-2xl text-[#2C2C2C]">Contenido</h2>
                <div className="flex gap-2">
                     <button
                        type="button"
                        onClick={() => setEditorMode('code')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${editorMode === 'code' ? 'bg-[#2C2C2C] text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        ✏️ Código
                    </button>
                    <button
                        type="button"
                        onClick={() => setEditorMode('visual')}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${editorMode === 'visual' ? 'bg-[#BFA06D] text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        👁️ Visual
                    </button>
                </div>
            </div>

            {/* AI Button moved here for better layout */}
            <div className="mb-4 flex justify-end">
                <button
                    type="button"
                    onClick={handleRewriteContent}
                    disabled={rewriteLoading}
                    className="text-sm px-5 py-2 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] text-[#2E7D32] rounded-full hover:shadow-md transition-all flex items-center gap-2 font-medium"
                >
                    {rewriteLoading ? 'Mejorando...' : '✨ Mejorar redacción con IA'}
                </button>
            </div>

            {editorMode === 'code' ? (
                <>
                    {/* Toolbar */}
                    <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
                        <button type="button" onClick={() => insertTag('<b>', '</b>')} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 font-bold text-gray-700">B</button>
                        <button type="button" onClick={() => insertTag('<i>', '</i>')} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 italic text-gray-700">I</button>
                        <button type="button" onClick={() => insertTag('<h3>', '</h3>')} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 font-serif text-gray-700">Título</button>
                        <button type="button" onClick={() => insertTag('<p>', '</p>')} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 text-gray-700">Párrafo</button>
                        <button type="button" onClick={() => insertTag('<ul>\n<li>', '</li>\n</ul>')} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 text-gray-700">Lista</button>
                    </div>

                    <textarea
                    ref={contentRef}
                    name="content"
                    rows={15}
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-[#E8E6E1] focus:border-[#BFA06D] outline-none font-mono text-sm leading-relaxed"
                    placeholder="Escribe aquí todo el texto..."
                    />
                </>
            ) : (
                <div className="w-full px-8 py-8 rounded-xl border border-[#E8E6E1] bg-white min-h-[400px]">
                    {formData.content ? (
                        <div 
                            className="prose prose-lg max-w-none font-sans text-[#4A4A4A] leading-loose"
                            dangerouslySetInnerHTML={{ __html: formData.content }} 
                        />
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 italic">
                            Escribe algo en modo código para verlo aquí...
                        </div>
                    )}
                </div>
            )}
          </section>

          <div className="flex justify-center pt-4 pb-10">
            <button
              type="submit"
              disabled={loading}
              className="px-12 py-5 bg-[#2C2C2C] text-white rounded-full text-xl font-serif hover:bg-[#BFA06D] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full md:w-auto"
            >
              {loading ? 'Publicando...' : 'Publicar Ahora'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
