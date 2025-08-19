'use client';

import { motion } from 'framer-motion';
import { MapPin, Car, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { infosEntreprise } from '@/data/entreprise';
import Link from 'next/link';
import { useState } from 'react';

export function InterventionZoneSection() {
  const [searchCity, setSearchCity] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const mainCities = [
    'Montauban', 'Toulouse', 'Cahors', 'Agen', 'Castelsarrasin', 
    'Moissac', 'Caussade', 'Nègrepelisse'
  ];

  const handleCitySearch = () => {
    if (!searchCity.trim()) return;
    
    const cityLower = searchCity.toLowerCase();
    const isInZone = infosEntreprise.zoneIntervention.some(
      city => city.toLowerCase().includes(cityLower) || cityLower.includes(city.toLowerCase())
    );
    
    setSearchResult(isInZone ? 'covered' : 'contact');
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 wood-grain opacity-20"></div>
      
      <div className="container-premium relative z-10">
        {/* Header de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6 mb-16"
        >
          <Badge className="bg-primary-100 text-primary-800 border-primary-300 px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            Zone d&apos;Intervention
          </Badge>
          
          <h2 className="heading-premium">
            Nous intervenons dans toute <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent font-crimson">l&apos;Occitanie</span>
          </h2>
          
          <p className="text-premium max-w-3xl mx-auto">
            Artisans de proximité basés à Montauban, nous nous déplaçons dans un rayon étendu 
            pour réaliser vos projets d&apos;exception partout en région.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Carte stylisée */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="card-premium p-8 bg-gradient-to-br from-primary-50 to-accent-50">
              <CardContent className="space-y-8 p-0">
                {/* Carte illustrative */}
                <div className="relative aspect-square bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 wood-texture opacity-20"></div>
                  
                  {/* Illustration de carte stylisée */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center text-white">
                    <div className="text-center space-y-6">
                      {/* Centre - Montauban */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="w-6 h-6 bg-accent-400 rounded-full mx-auto animate-pulse"></div>
                        <div className="text-sm font-bold mt-2">Montauban</div>
                        <div className="text-xs opacity-80">Siège social</div>
                        
                        {/* Cercles d&apos;intervention */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 0.3 }}
                          transition={{ duration: 1, delay: 0.8 }}
                          viewport={{ once: true }}
                          className="absolute inset-0 w-32 h-32 border-2 border-accent-300 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        ></motion.div>
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 0.2 }}
                          transition={{ duration: 1.2, delay: 1 }}
                          viewport={{ once: true }}
                          className="absolute inset-0 w-48 h-48 border border-accent-200 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        ></motion.div>
                      </motion.div>

                      {/* Villes principales */}
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        {['Toulouse', 'Cahors', 'Agen', 'Castelsarrasin'].map((city, index) => (
                          <motion.div
                            key={city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
                            <span>{city}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="text-sm opacity-90 pt-4 border-t border-white/20">
                        Carte interactive stylisée
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations de déplacement */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-primary-900 flex items-center">
                    <Car className="h-5 w-5 mr-2 text-accent-600" />
                    Déplacements gratuits
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="font-semibold text-primary-800">Rayon 30km</div>
                      <div className="text-primary-600">Devis et conseils gratuits</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-primary-800">Rayon 80km</div>
                      <div className="text-primary-600">Selon projet (nous consulter)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informations et recherche */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Villes principales */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-900">
                Principales zones d&apos;intervention
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {mainCities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="w-full justify-center py-2 bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors cursor-pointer"
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      {city}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recherche de ville */}
            <Card className="card-premium p-6">
              <CardContent className="space-y-4 p-0">
                <h4 className="text-lg font-semibold text-primary-900">
                  Vérifiez si nous intervenons chez vous
                </h4>
                
                <div className="flex space-x-3">
                  <Input
                    placeholder="Nom de votre ville..."
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleCitySearch()}
                  />
                  <Button 
                    onClick={handleCitySearch}
                    className="bg-primary-600 hover:bg-primary-700"
                  >
                    Vérifier
                  </Button>
                </div>

                {searchResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-xl ${
                      searchResult === 'covered' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {searchResult === 'covered' ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-semibold">Parfait ! Nous intervenons dans votre secteur.</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5" />
                        <span className="font-semibold">Contactez-nous pour vérifier la faisabilité.</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </CardContent>
            </Card>

            {/* Avantages proximité */}
            <Card className="glass-effect bg-gradient-to-r from-primary-900 to-accent-800 text-white p-8">
              <CardContent className="space-y-6 p-0">
                <h4 className="text-2xl font-bold flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-accent-300" />
                  Artisan de proximité
                </h4>
                
                <div className="space-y-4">
                  {[
                    'Déplacement gratuit pour devis sous 48h',
                    'Suivi personnalisé de votre projet',
                    'Service après-vente de proximité',
                    'Connaissance parfaite de la région'
                  ].map((advantage, index) => (
                    <motion.div
                      key={advantage}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-accent-300 flex-shrink-0" />
                      <span>{advantage}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button size="lg" variant="secondary" className="w-full bg-accent-500 hover:bg-accent-600 text-white border-0">
                    <Link href="/contact" className="flex items-center justify-center">
                      Demander une visite gratuite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact rapide */}
            <div className="text-center space-y-4 pt-4">
              <div className="text-lg font-semibold text-primary-900">
                Une question sur notre zone d&apos;intervention ?
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" className="border-primary-300 text-primary-600 hover:bg-primary-50">
                  <Link href="tel:0563914258" className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    05 63 91 42 58
                  </Link>
                </Button>
                <Button className="bg-accent-600 hover:bg-accent-700">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}