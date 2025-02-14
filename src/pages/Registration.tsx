import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import OnboardingForm from '@/components/OnboardingForm'

// Ajout de la déclaration pour import.meta.env
declare global {
  interface ImportMeta {
    env: {
      MODE: string;
      [key: string]: string | undefined;
    };
  }
}

export default function Registration() {
  useEffect(() => {
    console.log('[Registration] Component mounted');
    console.log('[Registration] Environment:', import.meta.env.MODE);

    return () => {
      console.log('[Registration] Component unmounted');
    };
  }, []);

  console.log('[Registration] Rendering component')

  return (
    <>
      <Helmet>
        <title>Inscription - My Muqabala</title>
        <meta
          name="description"
          content="Inscrivez-vous sur My Muqabala et commencez votre recherche d'âme sœur selon vos valeurs."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10">
              Commencez Votre Voyage
            </h1>
            <div className="max-w-md mx-auto">
              <OnboardingForm />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
