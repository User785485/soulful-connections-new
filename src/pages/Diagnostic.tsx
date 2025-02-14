import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import TopBanner from '@/components/TopBanner'

export default function Diagnostic() {
  useEffect(() => {
    console.log('🔄 Diagnostic component mounted');
    
    // Sauvegarder le style overflow original
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      console.log('🔚 Cleaning up Diagnostic component');
      document.body.style.overflow = originalStyle;
    }
  }, []);

  console.log('🎨 Rendering Diagnostic component');

  return (
    <>
      <Helmet>
        <title>Diagnostic - My Muqabala</title>
        <meta
          name="description"
          content="Commencez votre diagnostic gratuit avec My Muqabala et trouvez l'amour selon vos valeurs."
        />
        <script src="https://embed.typeform.com/next/embed.js" async></script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <div className="flex-none">
          <TopBanner />
        </div>

        <div className="flex-grow relative min-h-[600px]">
          <div 
            data-tf-live="01JKRM7WQYBPKGV1BPC0JC1CT6"
            data-tf-opacity="100"
            data-tf-inline-on-mobile="true"
            data-tf-hide-headers="true"
            data-tf-hide-footer="true"
            className="absolute inset-0 z-10"
            style={{ 
              width: '100%',
              height: '100%',
              minHeight: '600px'
            }}
          />
        </div>
      </div>
    </>
  )
}
