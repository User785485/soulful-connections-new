import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  useEffect(() => {
    console.log('[Footer] Component mounted')
    return () => {
      console.log('[Footer] Component unmounted')
    }
  }, [])

  console.log('[Footer] Rendering component')

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Soulful Connections</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Votre chemin vers une connexion authentique, guidée par les valeurs islamiques.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Légal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email: contact@soulful-connections.com
              </li>
              <li className="text-muted-foreground">
                Tél: +33 (0)1 23 45 67 89
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Soulful Connections. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
