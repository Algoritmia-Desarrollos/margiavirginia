import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeClient from '@/components/HomeClient'
import { articles } from '@/lib/data'

export default function Home() {
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
