import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticlesClient from '@/components/ArticlesClient'
import { getAllPosts } from '@/lib/content'

export const revalidate = 60 // Revalidate every minute

export default async function Articles() {
  const articles = await getAllPosts()

  return (
    <>
      <Navbar />
      <main className="pt-[0px]">
        <ArticlesClient initialArticles={articles} />
      </main>
      <Footer />
    </>
  )
}
