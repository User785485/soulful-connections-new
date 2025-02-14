import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const features = [
  {
    title: "Matchs Compatibles",
    description: "Notre algorithme avancé trouve des partenaires partageant vos valeurs et objectifs.",
    tooltip: "Basé sur plus de 100 critères de compatibilité"
  },
  {
    title: "Confidentialité Garantie",
    description: "Protection maximale de vos données personnelles et de votre vie privée.",
    tooltip: "Cryptage de bout en bout"
  },
  {
    title: "Accompagnement Personnalisé",
    description: "Une équipe d'experts à votre écoute pour vous guider dans votre recherche.",
    tooltip: "Disponible 7j/7"
  },
  {
    title: "Vérification des Profils",
    description: "Chaque profil est vérifié manuellement pour garantir l'authenticité.",
    tooltip: "Processus de vérification en 48h"
  },
  {
    title: "Événements Exclusifs",
    description: "Participez à nos événements pour rencontrer d'autres membres dans un cadre halal.",
    tooltip: "Organisés dans toute la France"
  },
  {
    title: "Support Communautaire",
    description: "Une communauté bienveillante et des ressources pour votre développement personnel.",
    tooltip: "Plus de 1000 membres actifs"
  }
]

export default function Features() {
  useEffect(() => {
    console.log('[Features] Component mounted')
    return () => {
      console.log('[Features] Component unmounted')
    }
  }, [])

  console.log('[Features] Rendering component')

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Nos Fonctionnalités
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les outils et services que nous mettons à votre disposition
            pour faciliter votre recherche d'un partenaire compatible.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="cursor-help transition-colors hover:bg-muted/50">
                      <CardHeader>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{feature.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
