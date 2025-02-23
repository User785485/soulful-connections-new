import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

export default function SocialProofToast({ duration }: SocialProofToastProps) {
  console.log('🎨 Rendering SocialProofToast, duration:', duration);
  
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(true)
  const [currentMessage, setCurrentMessage] = useState<ToastMessage>({
    name: '',
    gender: 'f',
    city: '',
    message: '',
    time: 'à l\'instant'
  })

  useEffect(() => {
    console.log('🔄 SocialProofToast mounted, active:', active);
    
    if (!active) {
      console.log('❌ Component not active, returning');
      return;
    }

    // Fonction pour générer un nouveau message
    const generateMessage = () => {
      const person = names[Math.floor(Math.random() * names.length)]
      const city = cities[Math.floor(Math.random() * cities.length)]
      const message = messages[person.gender][Math.floor(Math.random() * messages[person.gender].length)]
      
      console.log('📝 Generating new message:', { person, city, message });
      
      setCurrentMessage({
        name: person.name,
        gender: person.gender,
        city,
        message,
        time: 'à l\'instant'
      })
      setVisible(true)
    }

    // Afficher un message toutes les 6-12 secondes
    const interval = setInterval(() => {
      generateMessage()
      
      // Cacher le message après 4 secondes
      setTimeout(() => {
        setVisible(false)
      }, 4000)
    }, Math.random() * (12000 - 6000) + 6000)

    // Afficher le premier message après 2 secondes
    const initialTimeout = setTimeout(() => {
      generateMessage()
      setTimeout(() => setVisible(false), 4000)
    }, 2000)

    // Si une durée est spécifiée, arrêter les notifications après cette durée
    let durationTimeout: NodeJS.Timeout | undefined
    if (duration) {
      durationTimeout = setTimeout(() => {
        setActive(false)
      }, duration)
    }

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimeout)
      if (durationTimeout) {
        clearTimeout(durationTimeout)
      }
    }
  }, [active, duration])

  if (!active) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm z-50 border border-pink-100 transform hover:scale-105 transition-transform duration-200"
        >
          <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${currentMessage.gender === 'f' ? 'bg-pink-500' : 'bg-blue-500'}`} />
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
  )
}
