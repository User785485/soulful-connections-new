import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import TypeformButton from "@/components/TypeformButton";
import OnboardingForm from "@/components/OnboardingForm";

const Home: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>My Muqabala - Agence matrimoniale musulmane</title>
        <meta
          name="description"
          content="Trouvez l'amour selon vos valeurs avec My Muqabala, l'agence matrimoniale musulmane qui vous accompagne de A à Z."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <section className="relative min-h-screen overflow-hidden">
          {/* Vidéo en arrière-plan */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
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
                  className="flex flex-col items-center mb-6"
                >
                  <img 
                    src="https://i.postimg.cc/pLDv3V2L/Logo-def.png" 
                    alt="My Muqabala Logo" 
                    className="w-16 h-16 mb-4 sm:w-20 sm:h-20"
                  />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                    My Muqabala
                  </h1>
                </motion.div>

                {/* Tagline */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
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
                  className="w-32 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"
                />

                {/* Formulaire d'inscription */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="max-w-md mx-auto"
                >
                  <OnboardingForm />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full px-4 sm:px-8 pt-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-bold text-pink-600 mb-4">1500+ Profils Exclusifs</h3>
              <p className="text-gray-600 text-lg">
                Nous sélectionnons minutieusement chaque profil pour ne te présenter que des candidats sérieux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-bold text-pink-600 mb-4">100% Confidentialité & Sécurité</h3>
              <p className="text-gray-600 text-lg">
                Tes informations personnelles et tous tes échanges sont protégés par des protocoles de sécurité avancés.
              </p>
            </motion.div>
          </div>

          <section className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-blue-800 mb-8 text-center"
            >
              Le Constat Actuel
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Tu le vis peut-être au quotidien : aujourd'hui, ce qui est proposé à la communauté
              musulmane en matière de rencontres est malheureusement très limité. Les applications existantes
              ne répondent pas pleinement à nos valeurs ni à nos besoins profonds.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Manque de fiabilité",
                  description:
                    "Absence de plateforme fiable et respectueuse des valeurs islamiques pour trouver des profils sérieux et prêts à s'engager authentiquement.",
                },
                {
                  title: "Absence d'accompagnement",
                  description:
                    "De nombreuses femmes se sentent déstabilisées ou manquent de repères lors des rencontres, sans véritable soutien pour les guider.",
                },
                {
                  title: "Déficit de formation",
                  description:
                    "Manque crucial d'une formation complète pour mieux se connaître, comprendre la psychologie de l'autre et construire une relation durable.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-pink-50 to-white p-12 rounded-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center text-pink-600 mb-12"
            >
              Notre Approche Unique
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: CheckCircle2,
                  title: "Profil de Qualité",
                  description:
                    "Fini le temps perdu à trier des milliers de profils : nous te présentons uniquement des hommes sérieux et potentiellement compatibles.",
                },
                {
                  icon: Users,
                  title: "Accompagnement Personnalisé",
                  description:
                    "Un expert en relation t'accompagne à chaque étape, te conseillant tout en te laissant maîtresse de tes décisions.",
                },
                {
                  icon: BookOpen,
                  title: "Formation Continue",
                  description:
                    "Un programme complet de développement personnel pour maximiser tes chances, avec des outils concrets pour une relation épanouissante.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105 border-l-4 border-pink-400"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-600 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {[
                {
                  badge: "Processus Encadré",
                  title: "Rencontres en Ligne Supervisées",
                  description:
                    "Un processus étape par étape (chat, audio, visio) encadré par nos soins pour des rencontres sérieuses et respectueuses.",
                },
                {
                  badge: "Événements Exclusifs",
                  title: "Slow Dating",
                  description:
                    "Des événements exclusifs organisés plusieurs fois par an, pour rencontrer des personnes partageant vos valeurs dans un cadre bienveillant.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105 border-l-4 border-pink-400"
                >
                  <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-white p-12 rounded-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-pink-600 mb-12 text-center"
            >
              Notre Approche Globale : Comment ça marche ?
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Inscription & Diagnostic",
                  description:
                    "Inscris-toi et réponds à notre formulaire de diagnostic pour mieux cerner tes attentes.",
                },
                {
                  step: 2,
                  title: "Recherche & Profil",
                  description:
                    "Nos experts recherchent et présélectionnent des profils compatibles selon tes critères.",
                },
                {
                  step: 3,
                  title: "Rencontres en Ligne Supervisées",
                  description:
                    "Échange en toute sécurité via un processus en trois étapes : chat, audio, visio.",
                },
                {
                  step: 4,
                  title: "Événements de Slow Dating",
                  description:
                    "Participe à nos journées spéciales pour des rencontres authentiques.",
                },
                {
                  step: 5,
                  title: "Accompagnement & Formation",
                  description:
                    "Bénéficie d'un suivi personnalisé et d'une formation continue.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex gap-6 items-start bg-gradient-to-r from-pink-50 to-white p-6 rounded-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-600 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-pink-50 to-white p-12 rounded-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl font-bold text-pink-600">Offre Exclusive</h2>
              <p className="text-2xl">
                Inscription <span className="font-bold">GRATUITE</span> pour les 100 premièr(e)s candidat(e)s !
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-2xl font-bold text-pink-600 mb-6">Les Avantages de l'Offre</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-pink-600" />
                      <span>Analyse complète de ton profil offerte</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-pink-600" />
                      <span>Accompagnement initial personnalisé inclus</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-pink-600" />
                      <span>Accès prioritaire aux événements de slow dating</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-pink-600" />
                      <span>Position privilégiée sur notre liste d'attente</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-2xl font-bold text-pink-600 mb-6">Planning 2025-2026</h3>
                  <p className="text-gray-600">
                    Une fois ta candidature validée, tu intégreras notre liste d'attente privilégiée. Dès qu'un profil compatible se présentera (prévu pour fin 2025 - début 2026), nous te contacterons en priorité pour démarrer le processus de rencontre.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section className="bg-white p-12 rounded-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Ils nous font confiance
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  text: "My Muqabala m'a permis de rencontrer mon mari dans un cadre respectueux de nos valeurs. L'accompagnement a fait toute la différence.",
                  author: "Fatima, 28 ans",
                },
                {
                  text: "Enfin une approche qui comprend vraiment nos besoins et nos valeurs. Je recommande à 100% !",
                  author: "Sarah, 32 ans",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  <p className="text-gray-600 italic text-lg mb-6">{item.text}</p>
                  <p className="font-bold text-pink-600">{item.author}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <FAQ />

          <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Prête à commencer l'aventure ?
              </h2>
              <TypeformButton
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:opacity-90"
              >
                Je commence mon diagnostic gratuit →
              </TypeformButton>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
