import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    console.log('[NotFound] Component mounted')
    return () => {
      console.log('[NotFound] Component unmounted')
    }
  }, [])

  console.log('[NotFound] Rendering component')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
      <p className="text-muted-foreground mb-8">
        La page que vous recherchez n'existe pas.
      </p>
      <Link
        to="/"
        className="text-primary hover:underline"
        onClick={() => console.log('[NotFound] Clicking return to home')}
      >
        Retourner à l'accueil
      </Link>
    </div>
  )
}
