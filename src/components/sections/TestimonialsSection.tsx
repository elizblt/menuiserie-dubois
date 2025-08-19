'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { témoignages } from '@/data/temoignages';

export function TestimonialsSection() {
  const testimoniauxAffiches = témoignages.slice(0, 6);

  return (
    <section className="py-20 bg-wood-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="text-wood-600 border-wood-600">
            Témoignages Clients
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ils nous font <span className="text-wood-600 font-serif">Confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. 
            Découvrez leurs retours sur nos réalisations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimoniauxAffiches.map((temoignage, index) => (
            <motion.div
              key={temoignage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  {/* Header avec étoiles */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < temoignage.note
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-wood-200" />
                  </div>

                  {/* Commentaire */}
                  <blockquote className="text-muted-foreground leading-relaxed">
                    &ldquo;{temoignage.commentaire}&rdquo;
                  </blockquote>

                  {/* Projet */}
                  <div className="pt-2">
                    <Badge variant="secondary" className="text-xs">
                      {temoignage.projet}
                    </Badge>
                  </div>

                  {/* Auteur */}
                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <div className="w-10 h-10 bg-wood-600 rounded-full flex items-center justify-center text-white font-medium">
                      {temoignage.prenom.charAt(0)}{temoignage.nom.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {temoignage.prenom} {temoignage.nom}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {temoignage.ville}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(temoignage.date).toLocaleDateString('fr-FR', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wood-800">4.9/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wood-800">200+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wood-800">95%</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wood-800">15+</div>
              <div className="text-sm text-muted-foreground">Années d&apos;expérience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}