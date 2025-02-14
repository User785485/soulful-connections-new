import Hero from '@/components/Hero'
import TopBanner from '@/components/TopBanner'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Hero />
      <FAQ />
    </main>
  )
}
