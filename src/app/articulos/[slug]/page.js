import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { articles } from '@/lib/data'
import { getPostContent } from '@/lib/content'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return articles
    .filter(a => a.type === 'article')
    .map((post) => ({
      slug: post.slug,
    }))
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const post = articles.find(a => a.slug === slug)
  
  if (!post) {
    notFound()
  }

  const content = await getPostContent(slug, 'article')

  if (!content) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '90px' }}>
        <article className="blog-post" dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      <Footer />
    </>
  )
}
