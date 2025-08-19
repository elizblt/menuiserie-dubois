'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Palette, Users, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const whyChooseUsReasons = [
  {
    id: 'expertise',
    title: 'Expertise Artisanale',
    description: '30 années de maîtrise parfaite des techniques traditionnelles et modernes. Nos artisans passionnés transforment le bois en œuvres d&apos;art.',
    icon: Award,
    gradient: 'from-primary-500 to-primary-600',
    stats: '500+ projets',
    features: ['Savoir-faire ancestral', 'Formation continue', 'Certifications qualité']
  },
  {
    id: 'qualite',
    title: 'Qualité Premium',
    description: 'Sélection rigoureuse des essences nobles, finitions irréprochables et contrôle qualité à chaque étape. L&apos;excellence n&apos;est pas une option.',
    icon: Shield,
    gradient: 'from-accent-500 to-accent-600', 
    stats: '10 ans garantie',
    features: ['Essences certifiées', 'Finitions parfaites', 'Contrôles rigoureux']
  },
  {
    id: 'sur-mesure',
    title: 'Conception Sur-Mesure',
    description: 'Chaque projet est unique. Nous concevons avec vous des créations qui reflètent parfaitement votre personnalité et optimisent votre espace.',
    icon: Palette,
    gradient: 'from-primary-600 to-accent-500',
    stats: '100% personnalisé',
    features: ['Design 3D immersif', 'Conseils déco', 'Solutions innovantes']
  },
  {
    id: 'garantie',
    title: 'Garantie Sérénité',
    description: 'Service après-vente exemplaire, garantie décennale et suivi personnalisé. Votre satisfaction est notre engagement de longue durée.',
    icon: Heart,
    gradient: 'from-accent-600 to-primary-500',
    stats: 'SAV premium',
    features: ['Garantie 10 ans', 'Suivi personnalisé', 'Maintenance incluse']
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-primary-50 relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 wood-grain opacity-40"></div>
      
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
            L&apos;Excellence à votre service
          </Badge>
          
          <h2 className="heading-premium">
            Pourquoi choisir <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent font-crimson">Menuiserie Dubois</span>
          </h2>
          
          <p className="text-premium max-w-3xl mx-auto">
            Plus qu&apos;un simple menuisier, nous sommes vos partenaires créatifs pour donner vie 
            à vos projets les plus ambitieux avec l&apos;excellence française.
          </p>
        </motion.div>

        {/* Grille des raisons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {whyChooseUsReasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="card-premium h-full p-8 text-center relative overflow-hidden">
                <CardContent className="space-y-6 p-0">
                  {/* Icône animée */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 bg-gradient-to-r ${reason.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <reason.icon className="h-10 w-10 text-white" />
                  </motion.div>

                  {/* Stats */}
                  <Badge className={`bg-gradient-to-r ${reason.gradient} text-white border-0`}>
                    {reason.stats}
                  </Badge>

                  {/* Titre et description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-primary-700 leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>

                  {/* Caractéristiques */}
                  <ul className="space-y-2">
                    {reason.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-primary-600">
                        <CheckCircle className="h-3 w-3 text-accent-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Effet brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section témoignage premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="glass-effect border-primary-200/30 p-12 bg-white/60 backdrop-blur-md">
            <CardContent className="text-center space-y-8 p-0">
              <div className="flex justify-center">
                <Users className="h-16 w-16 text-accent-500" />
              </div>

              <blockquote className="text-2xl sm:text-3xl font-light text-primary-900 leading-relaxed italic max-w-4xl mx-auto">
                &ldquo; Menuiserie Dubois n&apos;a pas simplement créé notre cuisine, ils ont transformé 
                notre maison en un lieu de vie exceptionnel. Chaque détail respire la qualité 
                et la passion du travail bien fait. &rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-primary-900">Marie & Claude Dupont</div>
                    <div className="text-primary-600 text-sm">Propriétaires à Montauban</div>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 text-accent-500">⭐</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats finales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Créations uniques' },
            { number: '98%', label: 'Clients satisfaits' },
            { number: '30', label: 'Années d&apos;expérience' },
            { number: '10', label: 'Ans de garantie' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-primary-700 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}