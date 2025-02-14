import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Home from '@/pages/Home'
import Diagnostic from '@/pages/Diagnostic'
import NotFound from '@/pages/NotFound'
import Registration from '@/pages/Registration'

// Ajout de la déclaration pour import.meta.env
declare global {
  interface ImportMeta {
    env: {
      MODE: string;
      [key: string]: string | undefined;
    };
  }
}

function App() {
  const location = useLocation()

  useEffect(() => {
    console.log('[App] Component mounted')
    console.log('[App] Environment:', import.meta.env.MODE)
    console.log('[App] Current pathname:', location.pathname)
    return () => {
      console.log('[App] Component unmounted')
    }
  }, [])

  useEffect(() => {
    console.log('[App] Route changed to:', location.pathname)
    window.scrollTo(0, 0)
  }, [location.pathname])

  console.log('[App] Rendering component')

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
        <Route path="/inscription" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
