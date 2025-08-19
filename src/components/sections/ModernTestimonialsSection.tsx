'use client';

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: '1',
    name: 'Marie Laurent',
    location: 'Montauban',
    rating: 5,
    text: 'Excellent travail sur notre cuisine. L&apos;équipe est professionnelle et respecte les délais. Nous recommandons vivement !',
    project: 'Cuisine moderne'
  },
  {
    id: '2',
    name: 'Jean Martin',
    location: 'Toulouse',
    rating: 5,
    text: 'Notre escalier est magnifique. La qualité du chêne et la finition sont impeccables. Très satisfait du résultat.',
    project: 'Escalier en chêne'
  },
  {
    id: '3',
    name: 'Sophie Dubois',
    location: 'Cahors',
    rating: 5,
    text: 'Dressing parfaitement optimisé. Chaque centimètre est utilisé intelligemment. Travail soigné et propre.',
    project: 'Dressing sur mesure'
  }
];

export function ModernTestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto section-spacing">
          <h2 className="heading-lg mb-6">Ce que disent nos clients</h2>
          <p className="text-large">
            La satisfaction de nos clients est notre priorité. 
            Découvrez leurs retours sur nos réalisations.
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-3 gap-6 section-spacing">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-simple relative">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-gray-300" />
                  
                  {/* Étoiles */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Témoignage */}
                  <p className="text-body leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  {/* Auteur */}
                  <div className="pt-4 border-t">
                    <div className="space-y-1">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Note moyenne</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}