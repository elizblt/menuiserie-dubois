'use client';

import { ArrowRight, Phone, ShieldCheck, Timer, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function ModernHeroSection() {
  const phone = '05 63 91 42 58';

  return (
    <section className="relative min-h-[78svh] sm:min-h-svh flex items-center">
      {/* Fond */}
      <Image
        src="/wood-hero.jpg"
        alt="Atelier de menuiserie, outils et bois"
        fill
        priority
        className="object-cover"
      />
      {/* Contraste léger */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 container-custom pt-24 pb-10 sm:py-28">
        <span className="inline-block mb-3 sm:mb-5 rounded-full bg-white/90 px-3 py-1 text-[11px] sm:text-xs font-medium text-[#111] ring-1 ring-black/10">
          Menuiserie à Montauban
        </span>

        {/* Bloc papier compact */}
        <div className="max-w-xl sm:max-w-3xl rounded-2xl sm:rounded-3xl bg-white/95 p-4 sm:p-8 md:p-10 shadow-lg ring-1 ring-black/10">
          {/* H1 plus court en mobile */}
          <h1 className="text-[#111] font-bold leading-tight tracking-tight">
            <span className="block text-3xl xs:text-[34px] sm:text-5xl lg:text-6xl">
              <span className="sm:hidden">Menuiserie sur&nbsp;mesure, durable</span>
              <span className="hidden sm:inline">Menuiserie artisanale, sur&nbsp;mesure et durable</span>
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-[15px] sm:text-lg text-[#666] leading-relaxed">
            Cuisines, escaliers et aménagements intérieurs réalisés avec soin depuis 30&nbsp;ans.
            Qualité française, service local, finitions impeccables.
          </p>

          {/* CTAs : full-width en mobile, côte à côte dès sm */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-xl px-5 py-3 text-[15px] sm:text-base bg-[#111] text-white hover:opacity-95"
            >
              <Link href="/devis">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-xl px-5 py-3 text-[15px] sm:text-base border-black/15 bg-white hover:bg-black/5 text-[#111]"
            >
              <Link href={`tel:${phone.replace(/\s/g, '')}`}>
                <Phone className="mr-2 h-5 w-5" />
                {phone}
              </Link>
            </Button>
          </div>

          {/* Preuves resserrées */}
          <ul className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-[13px] sm:text-sm text-[#333]">
            <li className="flex items-center gap-2"><Timer className="h-4 w-4" /> Devis sous 48h</li>
            <li className="flex items-center gap-2"><Truck className="h-4 w-4" /> Déplacement gratuit</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Garantie 10&nbsp;ans</li>
          </ul>
        </div>
      </div>
    </section>
  );

}