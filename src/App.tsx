import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'
import { Toaster } from './components/ui/sonner'

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
  }, [location])

  console.log('[App] Rendering component')

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
