import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Header() {
  useEffect(() => {
    console.log('[Header] Component mounted')
    return () => {
      console.log('[Header] Component unmounted')
    }
  }, [])

  console.log('[Header] Rendering component')

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mr-4"
        >
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Soulful Connections</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-1 items-center justify-end space-x-4"
        >
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/">Accueil</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about">À propos</Link>
            </Button>
            <Button variant="default" className="bg-pink-600 hover:bg-pink-700">
              Commencer Maintenant
            </Button>
          </nav>
        </motion.div>
      </div>
    </header>
  )
}
