import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import TopBanner from '@/components/TopBanner'
import SocialProofToast from '@/components/SocialProofToast'

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
        <script src="//embed.typeform.com/next/embed.js" async></script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <TopBanner />
        <div 
          data-tf-live="01JMSSF0NQQJNXEA92SRN8FT14"
          className="w-full h-screen"
        />
        <SocialProofToast duration={15000} />
      </div>
    </>
  )
}
