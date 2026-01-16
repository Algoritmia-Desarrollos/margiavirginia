import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeClient from '@/components/HomeClient'
import { getAllPosts } from '@/lib/content'

export const revalidate = 60 // Revalidate every minute

export default async function Home() {
  const articles = await getAllPosts()
  
  return (
    <>
      <Navbar />
      <main className="pt-[0px]">
        <HomeClient initialArticles={articles} />
      </main>
      <Footer />
    </>
  )
}
