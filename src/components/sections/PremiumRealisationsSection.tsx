'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Eye, Calendar, MapPin, Euro, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { realisations } from '@/data/realisations';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

export function PremiumRealisationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const featuredRealisations = realisations.slice(0, 6);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 wood-texture opacity-20"></div>
      
      <div className="container-premium relative z-10">
        {/* Header de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6 mb-16"
        >
          <Badge className="bg-accent-100 text-accent-800 border-accent-300 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Portfolio d&apos;Exception
          </Badge>
          
          <h2 className="heading-premium">
            Nos <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-crimson">Créations</span> Premium
          </h2>
          
          <p className="text-premium max-w-3xl mx-auto">
            Chaque réalisation raconte une histoire unique. Découvrez nos projets d&apos;exception 
            qui allient savoir-faire traditionnel et innovation contemporaine.
          </p>
        </motion.div>

        {/* Carrousel premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="w-12 h-12 rounded-full border-primary-300 hover:bg-primary-600 hover:text-white disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="w-12 h-12 rounded-full border-primary-300 hover:bg-primary-600 hover:text-white disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Indicateurs de slides */}
            <div className="flex space-x-2">
              {featuredRealisations.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex % featuredRealisations.length
                      ? 'bg-accent-600 w-8'
                      : 'bg-primary-300'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>

          {/* Carrousel */}
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {featuredRealisations.map((realisation, index) => (
                <div key={realisation.id} className="flex-none w-full">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image principale */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="w-full h-full bg-gradient-to-br from-primary-200 via-primary-300 to-accent-300 flex items-center justify-center text-white relative">
                          {/* Image placeholder premium */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-primary-900/80"></div>
                          <div className="relative z-10 text-center space-y-4">
                            <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Eye className="h-10 w-10" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold mb-2">{realisation.titre}</div>
                              <div className="text-sm opacity-90">Image HD - {realisation.categorie}</div>
                            </div>
                          </div>
                          
                          {/* Overlay hover */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                              <Eye className="h-4 w-4 mr-2" />
                              Voir les détails
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Badge catégorie */}
                      <div className="absolute top-4 right-4">
                        <Badge className={`${
                          realisation.categorie === 'cuisine' ? 'bg-accent-500' :
                          realisation.categorie === 'escalier' ? 'bg-primary-600' :
                          'bg-primary-500'
                        } text-white border-0`}>
                          {realisation.categorie}
                        </Badge>
                      </div>

                      {/* Prix si disponible */}
                      {realisation.prix && (
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-black/60 text-white border-0 backdrop-blur-sm">
                            <Euro className="w-3 h-3 mr-1" />
                            {realisation.prix.min.toLocaleString()}€ - {realisation.prix.max.toLocaleString()}€
                          </Badge>
                        </div>
                      )}
                    </motion.div>

                    {/* Contenu */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-primary-900">
                          {realisation.titre}
                        </h3>
                        
                        <p className="text-lg text-primary-700 leading-relaxed">
                          {realisation.description}
                        </p>
                      </div>

                      {/* Détails techniques */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-primary-600">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">Durée: {realisation.duree}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-primary-600">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">{realisation.lieu}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-primary-800">Matériau principal</div>
                          <div className="text-sm text-primary-600">{realisation.materiau}</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {realisation.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary-100 text-primary-700 hover:bg-primary-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white">
                          <Eye className="h-4 w-4 mr-2" />
                          Voir ce projet
                        </Button>
                        <Button variant="outline" className="flex-1 border-accent-500 text-accent-600 hover:bg-accent-50">
                          Projet similaire
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats et CTA global */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="card-premium p-12 text-center bg-gradient-to-r from-primary-900 via-primary-800 to-accent-800 text-white border-0">
            <CardContent className="space-y-8 p-0">
              {/* Stats impressionnantes */}
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent-400">500+</div>
                  <div className="text-primary-200">Réalisations uniques</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent-400">98%</div>
                  <div className="text-primary-200">Clients ravis</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent-400">30</div>
                  <div className="text-primary-200">Années de passion</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold">
                  Découvrez toutes nos créations d&apos;exception
                </h3>
                <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                  Chaque projet est unique, chaque réalisation raconte une histoire. 
                  Laissez-vous inspirer par notre portfolio complet.
                </p>
              </div>

              <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-12 py-4 text-lg">
                <Link href="/realisations" className="flex items-center">
                  Voir tout notre portfolio
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}