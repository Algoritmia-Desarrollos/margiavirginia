import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import { articles } from '@/lib/data'
import { getPostContent } from '@/lib/content'

export async function GET() {
  const results = []
  
  try {
    for (const article of articles) {
      // 1. Get Content
      const content = await getPostContent(article.slug, article.type.includes('recipe') ? 'recipe' : 'article')
      
      if (!content) {
        results.push({ slug: article.slug, status: 'skipped', reason: 'No content found' })
        continue
      }

      // 2. Prepare Data
      const postData = {
        title: article.titulo,
        slug: article.slug,
        category: article.categoria,
        description: article.descripcion,
        content: content,
        date: article.fecha,
        type: article.type, // 'article', 'recipe', or 'article,recipe'
        image_url: article.foto.startsWith('http') ? article.foto : `/articulos/${article.slug}/${article.foto}` // Basic fix, might need refinement based on actual paths
      }

      // 3. Insert into Supabase
      // Check if exists first to avoid duplicates (optional, but good for re-running)
      const { data: existing } = await supabase.from('posts').select('id').eq('slug', article.slug).single()
      
      if (existing) {
        // Update
        const { error } = await supabase.from('posts').update(postData).eq('slug', article.slug)
        if (error) throw error
        results.push({ slug: article.slug, status: 'updated' })
      } else {
        // Insert
        const { error } = await supabase.from('posts').insert([postData])
        if (error) throw error
        results.push({ slug: article.slug, status: 'inserted' })
      }
    }

    return NextResponse.json({ success: true, results })
  } catch (error) {
    console.error('Migration Error:', error)
    return NextResponse.json({ success: false, error: error.message, results }, { status: 500 })
  }
}
