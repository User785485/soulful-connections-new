import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";

const Home: React.FC = () => {
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  const redirectToTypeform = () => {
    window.location.href = "https://form.typeform.com/to/tKsQmWPq";
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="My Muqabala - Rencontres Islamiques : Trouve l'amour authentique en respectant les valeurs islamiques grâce à une approche personnalisée, des experts et une formation continue."
        />
        <title>My Muqabala - Rencontres Islamiques</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Poppins', sans-serif;
            }
            .custom-select {
              appearance: none;
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
              background-repeat: no-repeat;
              background-position: right 1rem center;
              background-size: 1em;
            }
            .search-box {
              background: rgba(255, 255, 255, 0.95);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
          `}
        </style>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <div className="h-[calc(theme(spacing.14)+theme(spacing.6))] md:h-[calc(theme(spacing.16)+theme(spacing.6))]" />
        
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
                  transition={{ duration: 0.6, delay: index * 0.2 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="diagnostic"
            className="text-center py-16"
          >
            <h2 className="text-4xl font-bold text-pink-600 mb-8">
              Prête à commencer l'aventure ?
            </h2>
            <button
              onClick={redirectToTypeform}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              Je commence mon diagnostic gratuit →
            </button>
          </motion.div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">My Muqabala</h3>
              <p className="text-gray-400">
                Votre partenaire de confiance pour des rencontres authentiques
              </p>
            </div>
            {/* D'autres sections du footer peuvent être ajoutées ici */}
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 My Muqabala. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
