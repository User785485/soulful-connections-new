import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Pourquoi limiter aux 100 premières candidatures ?",
    answer: "Pour garantir un suivi personnalisé et de qualité pour chacun d'entre vous. Notre approche nécessite un accompagnement sur-mesure, et nous préférons limiter le nombre de candidats pour maintenir l'excellence de nos services."
  },
  {
    question: "L'inscription est-elle vraiment gratuite ?",
    answer: "Oui, l'inscription initiale et le diagnostic complet sont totalement gratuits pour les 100 premiers inscrits. Seuls les services premium de mise en relation et l'accompagnement personnalisé feront l'objet de frais ultérieurs, que nous détaillerons de manière transparente."
  },
  {
    question: "Comment garantissez-vous la confidentialité ?",
    answer: "Nous utilisons des protocoles de sécurité avancés pour protéger vos données. Vos informations personnelles ne sont jamais partagées sans votre consentement explicite. Notre équipe est soumise à des accords stricts de confidentialité."
  },
  {
    question: "Combien de temps dure le processus ?",
    answer: "Le processus varie selon chaque personne, mais nous estimons une durée moyenne de 3 à 6 mois pour trouver un match compatible. Notre approche privilégie la qualité à la rapidité pour assurer des connexions authentiques."
  },
  {
    question: "Que se passe-t-il après mon inscription ?",
    answer: "Après votre inscription, vous recevrez un diagnostic personnalisé sous 48h. Nous analyserons votre profil et commencerons la recherche de candidats compatibles. Vous aurez accès à notre plateforme de formation et serez prioritaire pour nos événements de slow dating."
  },
  {
    question: "Comment sélectionnez-vous les profils ?",
    answer: "Notre processus de sélection repose sur une analyse approfondie des profils, prenant en compte les valeurs islamiques, la compatibilité des objectifs de vie, et les critères personnels. Chaque profil est vérifié manuellement par notre équipe."
  },
  {
    question: "Quel type d'accompagnement proposez-vous ?",
    answer: "Notre accompagnement inclut un suivi personnalisé par un expert en relations, des sessions de coaching individuel, des ateliers de développement personnel, et une formation continue sur la construction d'une relation durable selon les valeurs islamiques."
  }
];

const FAQ = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-3">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Trouvez les réponses à vos questions sur notre approche unique et personnalisée
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2.5">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group border-none bg-white/50 backdrop-blur-sm rounded-full transition-all duration-300"
              >
                {/* 
                  On masque le chevron par défaut du Trigger
                  en utilisant la classe [&>svg:last-of-type]:hidden
                */}
                <AccordionTrigger
                  className="flex items-center justify-between w-full px-6 py-4 text-left hover:no-underline group [&>svg:last-of-type]:hidden"
                >
                  <span className="text-base md:text-lg font-normal text-gray-800 group-data-[state=open]:text-pink-600 transition-colors pr-4">
                    {item.question}
                  </span>
                  {/* Chevron personnalisé (on garde celui-ci) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 group-data-[state=open]:text-pink-600 group-data-[state=open]:rotate-180 transition-transform duration-300"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;