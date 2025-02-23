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
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(true);
  const [currentMessage, setCurrentMessage] = useState<ToastMessage>({
    name: '',
    gender: 'f',
    city: '',
    message: '',
    time: 'à l\'instant'
  });

  // Créer et gérer l'élément du portail
  useLayoutEffect(() => {
    // Créer un nouvel élément pour le portail
    const portalElement = document.createElement('div');
    portalElement.id = 'social-proof-portal';
    portalElement.style.position = 'fixed';
    portalElement.style.bottom = '0';
    portalElement.style.right = '0';
    portalElement.style.zIndex = '9999';
    portalElement.style.pointerEvents = 'none';
    
    // Ajouter au body
    document.body.appendChild(portalElement);
    setPortalRoot(portalElement);

    return () => {
      document.body.removeChild(portalElement);
    };
  }, []);

  // Gérer les messages et l'état
  useEffect(() => {
    if (!active || !portalRoot) return;

    const generateMessage = () => {
      const person = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const message = messages[person.gender][Math.floor(Math.random() * messages[person.gender].length)];
      
      setCurrentMessage({
        name: person.name,
        gender: person.gender,
        city,
        message,
        time: 'à l\'instant'
      });
      setVisible(true);
    };

    // Premier message après 2 secondes
    const initialTimeout = setTimeout(generateMessage, 2000);

    // Messages suivants toutes les 10 secondes
    const interval = setInterval(() => {
      generateMessage();
      // Cacher après 6 secondes
      setTimeout(() => setVisible(false), 6000);
    }, 10000);

    // Désactiver après la durée spécifiée
    const durationTimeout = setTimeout(() => {
      setActive(false);
    }, duration);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      clearTimeout(durationTimeout);
    };
  }, [active, portalRoot, duration]);

  // Ne rien rendre si pas de portail ou composant inactif
  if (!portalRoot || !active) return null;

  const toastContent = (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
            padding: '1rem',
            maxWidth: '24rem',
            border: '1px solid #FDF2F8',
            pointerEvents: 'auto',
            transform: 'translate3d(0,0,0)',
            zIndex: 9999,
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '9999px',
                marginTop: '0.5rem',
                backgroundColor: currentMessage.gender === 'f' ? '#EC4899' : '#3B82F6',
                flexShrink: 0,
              }}
            />
            <div>
              <p style={{ color: '#1F2937', margin: 0 }}>
                <span style={{ fontWeight: 600 }}>{currentMessage.name}</span>{' '}
                de <span style={{ fontWeight: 600 }}>{currentMessage.city}</span>{' '}
                {currentMessage.message}
              </p>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', marginTop: '0.25rem', margin: 0 }}>
                {currentMessage.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(toastContent, portalRoot);
}
