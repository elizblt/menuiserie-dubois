'use client';

import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const realisations = [
  {
    id: '1',
    title: 'Cuisine contemporaine',
    location: 'Montauban',
    date: '2024',
    category: 'Cuisine',
    description: 'Rénovation complète avec îlot central et électroménager intégré.',
    image: '/images/realisations/cuisine-1.jpg',
    price: '15 000€'
  },
  {
    id: '2',
    title: 'Escalier en chêne',
    location: 'Toulouse',
    date: '2024',
    category: 'Escalier',
    description: 'Escalier quart tournant en chêne massif avec rampe moderne.',
    image: '/images/realisations/escalier-1.jpg',
    price: '6 500€'
  },
  {
    id: '3',
    title: 'Dressing sur mesure',
    location: 'Cahors',
    date: '2024',
    category: 'Aménagement',
    description: 'Dressing walk-in avec portes coulissantes et éclairage LED.',
    image: '/images/realisations/dressing-1.jpg',
    price: '4 200€'
  },
  {
    id: '4',
    title: 'Bibliothèque intégrée',
    location: 'Agen',
    date: '2023',
    category: 'Aménagement',
    description: 'Bibliothèque murale avec bureau intégré en chêne naturel.',
    image: '/images/realisations/bibliotheque-1.jpg',
    price: '2 800€'
  }
];

export function ModernRealisationsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto section-spacing">
          <h2 className="heading-lg mb-6">Nos dernières réalisations</h2>
          <p className="text-large">
            Découvrez quelques-uns de nos projets récents. 
            Chaque réalisation est unique et répond aux besoins spécifiques de nos clients.
          </p>
        </div>

        {/* Grille de réalisations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 section-spacing">
          {realisations.map((realisation) => (
            <Card key={realisation.id} className="card-simple p-0 overflow-hidden group">
              <div className="aspect-[3/4] bg-gray-200 relative">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center space-y-2">
                    <div className="text-xs font-medium">{realisation.title}</div>
                    <div className="text-xs">{realisation.category}</div>
                    <div className="text-xs opacity-70">Image HD</div>
                  </div>
                </div>
                
                {/* Badge catégorie */}
                <Badge className="absolute top-3 left-3 bg-white text-gray-900 text-xs">
                  {realisation.category}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{realisation.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{realisation.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{realisation.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{realisation.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold text-wood-600">{realisation.price}</span>
                    <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-auto">
                      Voir détails
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild className="btn-secondary">
            <Link href="/realisations">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}