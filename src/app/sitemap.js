import { articles } from '@/lib/data'

export default function sitemap() {
  const baseUrl = 'https://www.virginia-bienestar.site'

  // Static routes
  const routes = [
    '',
    '/sobre-mi',
    '/recetas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }))

  // Dynamic routes (Articles and Recipes)
  const posts = articles.map((post) => ({
    url: `${baseUrl}/${post.type.includes('recipe') ? 'recetas' : 'articulos'}/${post.slug}`,
    lastModified: new Date(post.fecha),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...routes, ...posts]
}
