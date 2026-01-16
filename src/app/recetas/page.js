import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RecipesClient from '@/components/RecipesClient'
import { articles } from '@/lib/data'

export default function Recipes() {
  return (
    <>
      <Navbar />
      <main className="pt-[0px]">
        <RecipesClient initialArticles={articles} />
      </main>
      <Footer />
    </>
  )
}
