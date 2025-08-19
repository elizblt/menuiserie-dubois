'use client';

import { ArrowRight, Star, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-wood-50 to-wood-100">
        <div className="absolute inset-0 wood-texture opacity-30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-wood-600/10 text-wood-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 fill-current" />
              <span>Plus de 15 ans d&apos;expérience</span>
            </div>

            {/* Titre principal */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Menuiserie
                <span className="block text-wood-600 font-serif">sur Mesure</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Artisan menuisier à Montauban, je transforme vos projets en réalisations uniques.
                Cuisines, escaliers, aménagements intérieurs.
              </p>
            </div>

            {/* Points forts */}
            <div className="space-y-3">
              {[
                'Devis gratuit et personnalisé',
                'Fabrication artisanale française',
                'Garantie décennale'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-wood-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="group">
                <Link href="/devis">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:0563914258" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>05 63 91 42 58</span>
                </Link>
              </Button>
            </motion.div>

            {/* Zone d\'intervention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 border-t"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Zone d&apos;intervention:</span> Montauban, Toulouse, 
                Tarn-et-Garonne et départements limitrophes
              </p>
            </motion.div>
          </motion.div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-wood-600 via-wood-700 to-wood-800">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                      <div className="text-3xl font-bold">MD</div>
                    </div>
                    <div className="text-xl font-semibold">Cuisine sur mesure</div>
                    <div className="text-sm opacity-90">Image de démonstration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges flottants */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-wood-600 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-white fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-wood-800">4.9</div>
                  <div className="text-xs text-muted-foreground">Note clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-wood-800">200+</div>
                <div className="text-xs text-muted-foreground">Réalisations</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}