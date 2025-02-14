import { useEffect } from 'react';

const TypeformEmbed = () => {
  useEffect(() => {
    // Charger le script Typeform
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      data-tf-live="01JKRM7WQYBPKGV1BPC0JC1CT6"
      style={{ 
        width: '100%',
        height: '600px', // Vous pouvez ajuster la hauteur selon vos besoins
        border: 'none'
      }}
    />
  );
};

export default TypeformEmbed;
