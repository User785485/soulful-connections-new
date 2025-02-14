import { useEffect } from 'react'
import OnboardingForm from '@/components/OnboardingForm'

export default function Registration() {
  useEffect(() => {
    console.log('[Registration] Component mounted')
    console.log('[Registration] Environment:', import.meta.env.MODE)
    return () => {
      console.log('[Registration] Component unmounted')
    }
  }, [])

  console.log('[Registration] Rendering component')

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Commencez Votre Voyage
        </h1>
        <div className="max-w-md mx-auto">
          <OnboardingForm />
        </div>
      </div>
    </div>
  )
}
