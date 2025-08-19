'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ModernHeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <div className="text-center space-y-4 text-gray-500">
            <div className="w-24 h-24 mx-auto bg-gray-400 rounded-lg flex items-center justify-center">
              <div className="text-3xl">🔨</div>
            </div>
            <div className="text-xl font-semibold">Photo d&apos;atelier menuiserie</div>
            <div className="text-sm">Artisan au travail - Image réaliste HD</div>
          </div>
        </div>
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Menuiserie artisanale
            <br />
            <span className="text-wood-300">depuis 30 ans</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Spécialistes en cuisines sur mesure, escaliers et aménagements intérieurs. 
            Qualité artisanale française à Montauban et région.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" asChild className="btn-primary text-lg">
              <Link href="/devis">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900 text-lg">
              <Link href="tel:0563914258">
                <Phone className="mr-2 h-5 w-5" />
                05 63 91 42 58
              </Link>
            </Button>
          </div>

          {/* Informations pratiques */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-wood-300 rounded-full"></div>
              <span>Devis gratuit sous 48h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-wood-300 rounded-full"></div>
              <span>Déplacement gratuit</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-wood-300 rounded-full"></div>
              <span>Garantie décennale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}