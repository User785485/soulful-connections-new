import { motion } from "framer-motion";
import TypeformButton from "./TypeformButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="https://cdn.muzz.com/website-v4/vid/hero-video.webm" type="video/webm" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        {/* Overlay avec gradient subtil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col">
        {/* Ajustement de l'espacement pour éviter le chevauchement avec le header */}
        <div className="flex-grow flex flex-col justify-center mt-20">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* Logo et titre */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mb-8"
            >
              <img 
                src="https://i.postimg.cc/pLDv3V2L/Logo-def.png" 
                alt="My Muqabala Logo" 
                className="w-24 h-24 mb-6"
              />
              <h1 className="text-5xl md:text-6xl font-serif">
                My Muqabala
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            >
              Enfin une agence musulmane qui accompagne 
              <span className="font-medium"> la rencontre amoureuse </span> 
              de A à Z.
            </motion.p>

            {/* Séparateur raffiné */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-32 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-12"
            />

            {/* Bouton CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center"
            >
              <TypeformButton
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:opacity-90"
              >
                Je commence mon diagnostic gratuit →
              </TypeformButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
