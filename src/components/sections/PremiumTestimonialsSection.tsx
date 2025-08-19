'use client';

import { motion } from 'framer-motion';
import { Quote, Star, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { témoignages } from '@/data/temoignages';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

export function PremiumTestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
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

  const featuredTestimonials = témoignages.slice(0, 8);

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 wood-texture opacity-30"></div>
      
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
            <Quote className="w-4 h-4 mr-2" />
            Témoignages Clients
          </Badge>
          
          <h2 className="heading-premium">
            Ils nous font <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-crimson">Confiance</span>
          </h2>
          
          <p className="text-premium max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense. 
            Découvrez leurs retours authentiques sur nos réalisations d&apos;exception.
          </p>
        </motion.div>

        {/* Contrôles du carrousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-4 mb-12"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="w-12 h-12 rounded-full border-primary-300 hover:bg-primary-600 hover:text-white hover:border-primary-600 disabled:opacity-30 transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(featuredTestimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === Math.floor(selectedIndex / 3)
                    ? 'bg-accent-600 w-8'
                    : 'bg-primary-300'
                }`}
                onClick={() => emblaApi?.scrollTo(index * 3)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="w-12 h-12 rounded-full border-primary-300 hover:bg-primary-600 hover:text-white hover:border-primary-600 disabled:opacity-30 transition-all duration-300"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Carrousel de témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {Array.from({ length: Math.ceil(featuredTestimonials.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex-none w-full">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredTestimonials
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((temoignage, index) => (
                      <motion.div
                        key={temoignage.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Card className="card-premium h-full p-8 text-center relative overflow-hidden">
                          <CardContent className="space-y-6 p-0">
                            {/* Photo du client */}
                            <div className="relative">
                              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                                {temoignage.prenom.charAt(0)}{temoignage.nom.charAt(0)}
                              </div>
                              
                              {/* Badge note */}
                              <div className="absolute -top-2 -right-2 bg-accent-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                {temoignage.note}
                              </div>
                            </div>

                            {/* Étoiles */}
                            <div className="flex justify-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <Star
                                    className={`h-5 w-5 ${
                                      i < temoignage.note
                                        ? 'text-accent-500 fill-current'
                                        : 'text-primary-300'
                                    }`}
                                  />
                                </motion.div>
                              ))}
                            </div>

                            {/* Témoignage */}
                            <div className="relative">
                              <Quote className="h-8 w-8 text-accent-200 absolute -top-2 -left-2" />
                              <blockquote className="text-primary-700 leading-relaxed italic pl-6">
                                {temoignage.commentaire}
                              </blockquote>
                            </div>

                            {/* Projet */}
                            <Badge className="bg-primary-100 text-primary-800 border-primary-300">
                              {temoignage.projet}
                            </Badge>

                            {/* Informations client */}
                            <div className="space-y-3 pt-4 border-t border-primary-200">
                              <div className="font-semibold text-primary-900">
                                {temoignage.prenom} {temoignage.nom}
                              </div>
                              
                              <div className="flex items-center justify-center space-x-4 text-sm text-primary-600">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{temoignage.ville}</span>
                                </div>
                                <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>
                                    {new Date(temoignage.date).toLocaleDateString('fr-FR', { 
                                      month: 'long', 
                                      year: 'numeric' 
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>

                          {/* Effet hover brillance */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats de satisfaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="glass-effect border-accent-200/30 p-12 bg-gradient-to-r from-accent-50 to-primary-50 backdrop-blur-sm">
            <CardContent className="space-y-8 p-0">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary-900">
                  Une satisfaction client exceptionnelle
                </h3>
                <p className="text-lg text-primary-700 max-w-2xl mx-auto">
                  Nos clients sont notre meilleure publicité. Leur confiance renouvelée 
                  et leurs recommandations font notre fierté depuis 30 ans.
                </p>
              </div>

              <div className="grid sm:grid-cols-4 gap-8">
                {[
                  { value: '4.9/5', label: 'Note moyenne' },
                  { value: '98%', label: 'Clients satisfaits' },
                  { value: '85%', label: 'Recommandent' },
                  { value: '92%', label: 'Clients fidèles' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-primary-700 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}