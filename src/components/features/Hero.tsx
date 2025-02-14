import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  useEffect(() => {
    console.log('[Hero] Component mounted')
    return () => {
      console.log('[Hero] Component unmounted')
    }
  }, [])

  console.log('[Hero] Rendering component')

  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Trouvez l'Amour{" "}
            <span className="text-primary">
              Selon Vos Valeurs
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-muted-foreground sm:text-lg"
          >
            Soulful Connections vous accompagne dans votre recherche d'un partenaire
            de vie compatible, dans le respect des valeurs islamiques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link to="/inscription">
                Commencer Gratuitement
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                En Savoir Plus
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Déjà plus de 1000 membres nous font confiance
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}
