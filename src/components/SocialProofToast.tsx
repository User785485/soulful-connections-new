import { useEffect, useState, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

type Gender = 'f' | 'm'

interface Person {
  name: string
  gender: Gender
}

// Noms arabes/musulmans
const names: Person[] = [
  // Femmes
  { name: 'Sarah', gender: 'f' },
  { name: 'Fatima', gender: 'f' },
  { name: 'Amina', gender: 'f' },
  { name: 'Khadija', gender: 'f' },
  { name: 'Aisha', gender: 'f' },
  { name: 'Maryam', gender: 'f' },
  { name: 'Nadia', gender: 'f' },
  { name: 'Leila', gender: 'f' },
  { name: 'Yasmine', gender: 'f' },
  { name: 'Samira', gender: 'f' },
  { name: 'Safiya', gender: 'f' },
  { name: 'Zainab', gender: 'f' },
  { name: 'Noor', gender: 'f' },
  { name: 'Rania', gender: 'f' },
  { name: 'Layla', gender: 'f' },
  // Hommes
  { name: 'Ahmed', gender: 'm' },
  { name: 'Mohamed', gender: 'm' },
  { name: 'Ali', gender: 'm' },
  { name: 'Omar', gender: 'm' },
  { name: 'Youssef', gender: 'm' },
  { name: 'Ibrahim', gender: 'm' },
  { name: 'Karim', gender: 'm' },
  { name: 'Amine', gender: 'm' },
  { name: 'Bilal', gender: 'm' },
  { name: 'Hamza', gender: 'm' },
  { name: 'Ismail', gender: 'm' },
  { name: 'Mehdi', gender: 'm' },
  { name: 'Zayd', gender: 'm' },
  { name: 'Rayane', gender: 'm' },
  { name: 'Adam', gender: 'm' }
]

const cities = [
  'Paris', 'Lyon', 'Marseille', 'Lille', 'Toulouse', 'Bordeaux', 'Nice',
  'Strasbourg', 'Montpellier', 'Rennes', 'Nantes', 'Grenoble', 'Tours',
  'Orléans', 'Angers', 'Mulhouse', 'Reims', 'Avignon', 'Metz', 'Perpignan'
]

const messages: Record<Gender, string[]> = {
  f: [
    'vient de commencer son diagnostic',
    'a rempli son formulaire',
    'rejoint la liste d\'attente',
    'démarre son parcours',
    'commence sa recherche',
    's\'est inscrite à My Muqabala'
  ],
  m: [
    'vient de commencer son diagnostic',
    'a rempli son formulaire',
    'rejoint la liste d\'attente',
    'démarre son parcours',
    'commence sa recherche',
    's\'est inscrit à My Muqabala'
  ]
}

interface ToastMessage {
  name: string
  gender: Gender
  city: string
  message: string
  time: string
}

interface SocialProofToastProps {
  duration?: number // Durée en millisecondes
}

export default function SocialProofToast({ duration = 60000 }: SocialProofToastProps) {
  console.log('🎨 [START] SocialProofToast Component Render');
  console.log('📌 Props received:', { duration });

  const [mounted, setMounted] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(true)
  const [currentMessage, setCurrentMessage] = useState<ToastMessage>({
    name: '',
    gender: 'f',
    city: '',
    message: '',
    time: 'à l\'instant'
  })

  // Réinitialiser l'état actif quand le composant est monté
  useEffect(() => {
    if (mounted) {
      console.log('🔄 Resetting active state on mount');
      setActive(true);
    }
  }, [mounted]);

  // Vérifier que document.body existe avant de créer le portail
  useLayoutEffect(() => {
    console.log('🏗️ [Layout Effect] Checking DOM availability');
    try {
      if (typeof document !== 'undefined') {
        console.log('✅ document is defined');
        if (document.body) {
          console.log('✅ document.body exists');
          setPortalContainer(document.body);
          setMounted(true);
        } else {
          console.error('❌ document.body is null');
        }
      } else {
        console.error('❌ document is undefined');
      }
    } catch (error) {
      console.error('❌ Error in Layout Effect:', error);
    }
  }, []);

  useEffect(() => {
    console.log('🔄 [Effect 1] Main effect starting');
    console.log('📊 Current state:', { mounted, visible, active, currentMessage });
    
    if (!mounted) {
      console.log('⏳ Component not yet mounted, waiting...');
      return;
    }

    if (!active) {
      console.log('❌ Component not active, returning');
      return;
    }

    try {
      // Fonction pour générer un nouveau message
      const generateMessage = () => {
        console.log('📝 Generating new message...');
        try {
          const person = names[Math.floor(Math.random() * names.length)]
          const city = cities[Math.floor(Math.random() * cities.length)]
          const message = messages[person.gender][Math.floor(Math.random() * messages[person.gender].length)]
          
          console.log('✨ Generated content:', { person, city, message });
          
          setCurrentMessage(prev => {
            console.log('🔄 Updating message from:', prev);
            const next = {
              name: person.name,
              gender: person.gender,
              city,
              message,
              time: 'à l\'instant'
            };
            console.log('🔄 Updating message to:', next);
            return next;
          });

          setVisible(true);
          console.log('👁️ Visibility set to:', true);
        } catch (error) {
          console.error('❌ Error generating message:', error);
        }
      }

      console.log('⏰ Setting up intervals and timeouts');

      // Générer le premier message immédiatement
      console.log('1️⃣ Generating first message');
      generateMessage();

      // Configurer l'intervalle pour les messages suivants (toutes les 10 secondes)
      const interval = setInterval(() => {
        console.log('⏰ Interval triggered');
        generateMessage();
        
        // Cacher après 6 secondes
        setTimeout(() => {
          console.log('🔄 Hide timeout triggered');
          setVisible(false);
        }, 6000);
      }, 10000);

      // Si une durée est spécifiée, arrêter les notifications après cette durée
      let durationTimeout: NodeJS.Timeout | undefined;
      if (duration) {
        console.log('⏱️ Setting duration timeout for:', duration, 'ms');
        durationTimeout = setTimeout(() => {
          console.log('⌛ Duration reached, deactivating');
          setActive(false);
        }, duration);
      }

      return () => {
        console.log('🧹 Cleaning up effect');
        clearInterval(interval);
        if (durationTimeout) {
          clearTimeout(durationTimeout);
        }
      }
    } catch (error) {
      console.error('❌ Error in main effect:', error);
    }
  }, [mounted, active, duration]);

  // Log avant chaque rendu
  console.log('📊 Pre-render state:', {
    mounted,
    portalContainer: !!portalContainer,
    visible,
    active,
    currentMessage
  });

  if (!mounted || !portalContainer) {
    console.log('⏳ Waiting for mount and portal container');
    return null;
  }

  if (!active) {
    console.log('❌ Component not active, not rendering');
    return null;
  }

  const toastContent = (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm z-[9999] border border-pink-100 transform hover:scale-105 transition-transform duration-200"
          style={{ position: 'fixed', zIndex: 9999 }}
        >
          <div className="flex items-start gap-3">
            <div 
              className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                currentMessage.gender === 'f' ? 'bg-pink-500' : 'bg-blue-500'
              }`} 
            />
            <div>
              <p className="text-gray-800">
                <span className="font-semibold">{currentMessage.name}</span>{' '}
                de <span className="font-semibold">{currentMessage.city}</span>{' '}
                {currentMessage.message}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {currentMessage.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  console.log('🎨 [END] Rendering toast with portal');
  return createPortal(toastContent, portalContainer);
}
