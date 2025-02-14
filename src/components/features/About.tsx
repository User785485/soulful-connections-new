import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    title: "Notre Vision",
    description: "Créer des connexions authentiques basées sur les valeurs islamiques et le respect mutuel."
  },
  {
    title: "Notre Mission",
    description: "Accompagner les musulmans dans leur recherche d'un partenaire de vie compatible, en respectant les principes de l'Islam."
  },
  {
    title: "Nos Valeurs",
    description: "Intégrité, respect, confidentialité et engagement envers la communauté musulmane."
  }
]

export default function About() {
  useEffect(() => {
    console.log('[About] Component mounted')
    return () => {
      console.log('[About] Component unmounted')
    }
  }, [])

  console.log('[About] Rendering component')

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            À Propos de Soulful Connections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre approche unique pour créer des connexions significatives
            au sein de la communauté musulmane.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Notre Engagement
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nous nous engageons à fournir un service de qualité, respectueux des valeurs
            islamiques et adapté aux besoins de notre communauté. Notre équipe travaille
            sans relâche pour créer un environnement sûr et bienveillant pour votre
            recherche de partenaire.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
