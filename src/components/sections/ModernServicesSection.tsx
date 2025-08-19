'use client';

import { ChefHat, Home, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    id: 'cuisines',
    title: 'Cuisines sur mesure',
    description: 'Conception et réalisation de cuisines entièrement personnalisées avec des matériaux de qualité. Plans 3D inclus.',
    icon: ChefHat,
    image: '/images/services/cuisine.jpg',
    price: 'À partir de 8 000€'
  },
  {
    id: 'escaliers',
    title: 'Escaliers en bois',
    description: 'Escaliers droits, quart tournant ou hélicoïdaux. Bois massif avec finitions impeccables.',
    icon: Home,
    image: '/images/services/escalier.jpg',
    price: 'À partir de 3 500€'
  },
  {
    id: 'amenagements',
    title: 'Aménagements intérieurs',
    description: 'Dressings, bibliothèques, bureaux sur mesure. Optimisation de chaque espace de votre maison.',
    icon: Wrench,
    image: '/images/services/amenagement.jpg',
    price: 'À partir de 1 200€'
  }
];

export function ModernServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto section-spacing">
          <h2 className="heading-lg mb-6">Nos spécialités</h2>
          <p className="text-large">
            Plus de 30 ans d&apos;expertise au service de vos projets. 
            Nous créons des pièces uniques adaptées à vos besoins et à votre style.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-3 gap-8 section-spacing">
          {services.map((service) => (
            <Card key={service.id} className="card-simple p-0 overflow-hidden group">
              <div className="aspect-[4/3] bg-gray-200 relative">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center space-y-3">
                    <service.icon className="w-12 h-12 mx-auto" />
                    <div className="text-sm font-medium">{service.title}</div>
                    <div className="text-xs">Image HD - {service.id}</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="heading-md">{service.title}</h3>
                    <p className="text-body">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-semibold text-wood-600">{service.price}</span>
                    <Button variant="outline" size="sm" className="group-hover:bg-sage-500 group-hover:text-white group-hover:border-sage-500 transition-colors">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild className="btn-accent">
            <Link href="/realisations">
              Découvrir toutes nos réalisations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}