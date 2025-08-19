'use client';

import { ArrowRight, Play, Award, Shield, Clock, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export function PremiumHeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Background Hero Image avec Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-primary-900/70 z-10"></div>
        <div className="w-full h-full bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-transparent relative">
          {/* Image placeholder premium */}
          <div className="absolute inset-0 wood-grain">
            <div className="w-full h-full flex items-center justify-center text-primary-200">
              <div className="text-center space-y-4 opacity-20">
                <div className="w-32 h-32 mx-auto bg-primary-200/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold">🪵</div>
                </div>
                <div className="text-2xl font-semibold">Atelier menuiserie premium</div>
                <div className="text-sm">Image d&apos;illustration - Qualité HD attendue</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-20 container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 text-white"
          >
            {/* Badges de crédibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <Badge className="bg-accent-500/20 text-accent-300 border-accent-500/30 px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                30 ans d&apos;expérience
              </Badge>
              <Badge className="bg-accent-500/20 text-accent-300 border-accent-500/30 px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                500+ projets
              </Badge>
              <Badge className="bg-accent-500/20 text-accent-300 border-accent-500/30 px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Garantie 10 ans
              </Badge>
            </motion.div>

            {/* Titre principal premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none">
                <span className="block text-white">Menuiserie</span>
                <span className="block bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 bg-clip-text text-transparent font-crimson">
                  d&apos;exception
                </span>
                <span className="block text-white text-4xl sm:text-5xl lg:text-6xl font-light">
                  depuis 30 ans
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"></div>

              <p className="text-xl sm:text-2xl text-primary-100 leading-relaxed max-w-2xl font-light">
                Cuisines sur mesure, escaliers nobles, aménagements d&apos;exception. 
                <span className="font-semibold text-accent-300"> Transformons vos rêves en chef-d&apos;œuvre.</span>
              </p>
            </motion.div>

            {/* Points de différenciation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {[
                "Conception 3D personnalisée",
                "Essences nobles sélectionnées", 
                "Fabrication 100% française",
                "Pose par nos artisans"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 text-primary-100"
                >
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-lg">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Actions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="group bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <Link href="/devis" className="flex items-center">
                  Demander un devis gratuit
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="group border-2 border-white/30 text-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm">
                <Link href="/realisations" className="flex items-center">
                  <Play className="mr-3 h-5 w-5" />
                  Voir nos réalisations
                </Link>
              </Button>
            </motion.div>

            {/* Urgence douce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center space-x-4 pt-4"
            >
              <div className="flex items-center space-x-2 text-accent-300">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Réponse sous 24h garantie</span>
              </div>
              <div className="w-1 h-1 bg-accent-400 rounded-full"></div>
              <div className="flex items-center space-x-2 text-accent-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Conseil gratuit</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visuel de droite - Stats et social proof */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 space-y-8 backdrop-blur-md bg-white/10 border border-white/20">
              {/* Stats impressionnantes */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Projets réalisés" },
                  { number: "30", label: "Années d'expertise" },
                  { number: "98%", label: "Clients satisfaits" },
                  { number: "10", label: "Ans de garantie" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                    className="text-center space-y-2"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-accent-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primary-200 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certification visuelle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="border-t border-white/20 pt-6 space-y-4"
              >
                <div className="text-center">
                  <div className="text-accent-400 font-semibold mb-2">Certifications</div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-white text-sm font-medium">Qualibat RGE</div>
                      <div className="text-primary-200 text-xs">Garantie qualité</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact rapide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="bg-accent-500/20 rounded-2xl p-4 text-center border border-accent-500/30"
              >
                <div className="text-accent-300 text-sm mb-2">Appelez maintenant</div>
                <Link 
                  href="tel:0563914258" 
                  className="text-xl font-bold text-white hover:text-accent-400 transition-colors"
                >
                  05 63 91 42 58
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm mb-2">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-accent-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}