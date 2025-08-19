'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Home, Wrench, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const premiumServices = [
  {
    id: 'cuisines-haut-gamme',
    title: 'Cuisines Haut de Gamme',
    description: 'Cuisines sur mesure d&apos;exception avec plans 3D, essences nobles et équipements premium. Chaque détail pensé pour votre style de vie.',
    icon: ChefHat,
    price: 'À partir de 15 000€',
    features: ['Design 3D immersif', 'Essences nobles', 'Électroménager premium', 'Pose impeccable'],
    gradient: 'from-primary-500 to-primary-600',
    badge: 'Premium'
  },
  {
    id: 'escaliers-nobles',
    title: 'Escaliers Nobles', 
    description: 'Escaliers d&apos;art en bois massif, métal et verre. Pièces uniques alliant tradition artisanale et design contemporain.',
    icon: Home,
    price: 'À partir de 8 500€',
    features: ['Bois massif premium', 'Design unique', 'Rampes sur-mesure', 'Finitions parfaites'],
    gradient: 'from-accent-500 to-accent-600',
    badge: 'Excellence'
  },
  {
    id: 'amenagements-luxe',
    title: 'Aménagements Luxe',
    description: 'Dressing, bibliothèques, bureaux d&apos;exception. Optimisation maximale avec matériaux d&apos;exception et finitions irréprochables.',
    icon: Home,
    price: 'À partir de 3 500€',
    features: ['Optimisation totale', 'Matériaux nobles', 'Éclairage intégré', 'Finitions luxe'],
    gradient: 'from-primary-600 to-accent-500',
    badge: 'Sur-mesure'
  }
];

export function PremiumServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decoratif */}
      <div className="absolute inset-0 wood-grain opacity-30"></div>
      
      <div className="container-premium relative z-10">
        {/* Header de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6 mb-20"
        >
          <Badge className="bg-primary-100 text-primary-800 border-primary-300 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Nos Spécialités Premium
          </Badge>
          
          <h2 className="heading-premium">
            Créations d&apos;<span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent font-crimson">Exception</span>
          </h2>
          
          <p className="text-premium max-w-3xl mx-auto">
            Chaque projet est une œuvre unique, conçue avec passion et réalisée avec l&apos;excellence 
            artisanale française. Découvrez nos créations qui transforment les espaces en lieux d&apos;exception.
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {premiumServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-premium p-8 h-full relative overflow-hidden">
                {/* Badge premium */}
                <div className="absolute top-4 right-4">
                  <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0`}>
                    <Crown className="w-3 h-3 mr-1" />
                    {service.badge}
                  </Badge>
                </div>

                {/* Icône et titre */}
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Prix */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-accent-600">
                      {service.price}
                    </span>
                  </div>

                  {/* Caractéristiques */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-primary-800 uppercase tracking-wide">
                      Points forts
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-primary-700">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                    >
                      Découvrir nos réalisations
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Effet hover brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section bonus - Services complémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl p-12 text-center text-white"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent-500/20 text-accent-300 border-accent-500/30">
                <Wrench className="w-4 h-4 mr-2" />
                Services Complémentaires
              </Badge>
              
              <h3 className="text-3xl sm:text-4xl font-bold">
                Excellence dans chaque détail
              </h3>
              
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Rénovation, restauration, conseil en aménagement... Notre savoir-faire 
                s&apos;étend à tous vos projets bois.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                'Rénovation patrimoine',
                'Conseil personnalisé', 
                'Maintenance premium',
                'Formation artisanale'
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 bg-white/10 border-white/20"
                >
                  <div className="text-accent-300 font-semibold">{service}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" variant="secondary" className="bg-accent-500 hover:bg-accent-600 text-white border-0">
                <Link href="/realisations" className="flex items-center">
                  Découvrir toutes nos créations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}