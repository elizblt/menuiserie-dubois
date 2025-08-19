'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Calendar, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-wood-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 wood-texture opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Prêt à donner vie à votre <span className="font-serif">projet</span> ?
            </h2>
            <p className="text-xl text-wood-200 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd&apos;hui pour un devis personnalisé et gratuit. 
              Nous étudions ensemble la faisabilité et les détails de votre projet.
            </p>
          </motion.div>

          {/* Actions principales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/devis">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-wood-300 text-wood-100 hover:bg-wood-700">
              <Link href="tel:0563914258" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>05 63 91 42 58</span>
              </Link>
            </Button>
          </motion.div>

          {/* Actions secondaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 pt-12"
          >
            {/* Prise de rendez-vous */}
            <div className="bg-wood-700/50 backdrop-blur rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 bg-wood-600 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Rendez-vous à domicile</h3>
                <p className="text-wood-200 text-sm">
                  Nous nous déplaçons gratuitement pour étudier votre projet 
                  et vous conseiller sur les meilleures solutions.
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full border-wood-400 text-wood-100 hover:bg-wood-600">
                Prendre rendez-vous
              </Button>
            </div>

            {/* Catalogue */}
            <div className="bg-wood-700/50 backdrop-blur rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 bg-wood-600 rounded-xl flex items-center justify-center">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Catalogue PDF</h3>
                <p className="text-wood-200 text-sm">
                  Téléchargez notre catalogue complet avec nos réalisations 
                  et tarifs indicatifs pour vos projets.
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full border-wood-400 text-wood-100 hover:bg-wood-600">
                Télécharger le catalogue
              </Button>
            </div>
          </motion.div>

          {/* Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-wood-700"
          >
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold mb-2">Réactivité</div>
                <div className="text-wood-300 text-sm">
                  Réponse sous 24h<br />
                  Devis sous 48h
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Transparence</div>
                <div className="text-wood-300 text-sm">
                  Prix fixes<br />
                  Sans surprise
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Proximité</div>
                <div className="text-wood-300 text-sm">
                  Artisan local<br />
                  SAV de proximité
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}