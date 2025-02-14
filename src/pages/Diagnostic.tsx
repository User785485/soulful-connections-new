import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import TopBanner from '@/components/TopBanner'

export default function Diagnostic() {
  useEffect(() => {
    console.log('🔄 Diagnostic component mounted');
    
    // Sauvegarder le style overflow original
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Charger le script Typeform s'il n'existe pas déjà
    let script = document.querySelector('script[src*="embed.typeform.com"]');
    console.log('📜 Script exists?', !!script);
    
    if (!script) {
      console.log('➕ Creating new script');
      script = document.createElement('script');
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      script.onload = () => {
        console.log('📥 Script loaded');
      };
      document.body.appendChild(script);
      console.log('📎 Script added to body');
    }

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
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <div className="flex-none">
          <TopBanner />
        </div>

        <div className="flex-grow relative">
          <div 
            data-tf-widget="01JKRM7WQYBPKGV1BPC0JC1CT6"
            data-tf-opacity="100"
            data-tf-inline-on-mobile
            data-tf-hide-headers
            data-tf-hide-footer
            data-tf-medium="snippet"
            className="absolute inset-0"
            style={{ 
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </>
  )
}
