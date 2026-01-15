import fs from 'fs'
import path from 'path'

export async function getPostContent(slug, type) {
  // Determine folder based on type or try both
  let filePath
  if (type === 'recipe') {
    // Try recipes folder first
    filePath = path.join(process.cwd(), 'public', 'recetas', slug, 'index.html')
    if (!fs.existsSync(filePath)) {
      // Fallback to articulos if not found (some recipes are in articulos)
      filePath = path.join(process.cwd(), 'public', 'articulos', slug, 'index.html')
    }
  } else {
    filePath = path.join(process.cwd(), 'public', 'articulos', slug, 'index.html')
  }

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  // Extract content inside <article class="blog-post">...</article>
  // We use a simple regex for now. 
  // Note: This assumes the HTML structure is consistent.
  const match = fileContent.match(/<article class="(?:blog-post|recipe-post)">([\s\S]*?)<\/article>/)
  
  if (match && match[1]) {
    // Fix image paths: src="cover.png" -> src="/articulos/slug/cover.png"
    // or src="../../..." -> fix relative paths
    let content = match[1]
    
    // Replace relative image paths
    // If src="cover.png", it should be "/folder/slug/cover.png"
    // If src="../../styles.css", we don't care about styles as we use globals.
    
    const folder = filePath.includes('public\\recetas') || filePath.includes('public/recetas') ? 'recetas' : 'articulos'
    
    content = content.replace(/src="([^"]+)"/g, (match, src) => {
      if (src.startsWith('http') || src.startsWith('/')) return match
      // If relative path like "cover.png" or "./cover.png"
      const cleanSrc = src.replace(/^\.\//, '')
      return `src="/${folder}/${slug}/${cleanSrc}"`
    })

    return content
  }
  
  return null
}
