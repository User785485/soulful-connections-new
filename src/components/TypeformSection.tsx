import { useEffect } from 'react'
import TypeformEmbed from './TypeformEmbed'

export default function TypeformSection() {
  useEffect(() => {
    console.log('[TypeformSection] Component mounted')
    return () => {
      console.log('[TypeformSection] Component unmounted')
    }
  }, [])

  console.log('[TypeformSection] Rendering component')

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <TypeformEmbed />
        </div>
      </div>
    </section>
  )
}
