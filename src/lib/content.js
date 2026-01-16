import { supabase } from './supabaseClient'

export async function getAllPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('date', { ascending: false })
  
  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }
  return data
}

export async function getPostBySlug(slug) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    return null
  }
  return data
}

export async function getLatestPosts(limit = 3) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('date', { ascending: false })
    .limit(limit)
  
  if (error) {
    return []
  }
  return data
}

// Legacy function kept for compatibility if needed, but should be replaced
export async function getPostContent(slug, type) {
  const post = await getPostBySlug(slug)
  return post ? post.content : null
}
