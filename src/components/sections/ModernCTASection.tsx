'use client';

import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export function ModernCTASection() {
  return (
    <section className="section-padding bg-sage-500">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8">
            {/* Titre principal */}
            <div className="space-y-4">
              <h2 className="heading-lg text-white">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="text-large text-sage-100">
                Contactez-nous dès aujourd&apos;hui pour un devis personnalisé et gratuit. 
                Notre équipe vous accompagne de la conception à la réalisation.
              </p>
            </div>

            {/* Avantages */}
            <div className="grid sm:grid-cols-3 gap-6 py-8">
              {[
                'Devis gratuit sous 48h',
                'Déplacement gratuit',
                'Garantie décennale'
              ].map((advantage) => (
                <div key={advantage} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-sage-200" />
                  <span className="text-sage-100">{advantage}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sage-600 hover:bg-gray-100" asChild>
                <Link href="/devis">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-600" asChild>
                <Link href="tel:0563914258">
                  <Phone className="mr-2 h-5 w-5" />
                  05 63 91 42 58
                </Link>
              </Button>
            </div>

            {/* Contact alternatif */}
            <div className="pt-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="text-left">
                      <div className="font-semibold text-white mb-1">Besoin de conseils ?</div>
                      <div className="text-sage-200 text-sm">Notre équipe est à votre disposition pour répondre à vos questions</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10" asChild>
                        <Link href="mailto:contact@menuiserie-dubois.fr">
                          <Mail className="mr-2 h-4 w-4" />
                          Email
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10" asChild>
                        <Link href="/contact">
                          Formulaire de contact
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}