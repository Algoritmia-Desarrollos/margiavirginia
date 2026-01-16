import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllPosts } from '@/lib/content'
import { notFound } from 'next/navigation'
import '@/styles/blog-post.css'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts
    .filter(p => p.type.includes('recipe'))
    .map((post) => ({
      slug: post.slug,
    }))
}

export default async function RecipePage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="container pt-20 ">
        <article className="blog-post" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
      <Footer />
    </>
  )
}
