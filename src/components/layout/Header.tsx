'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

type Props = { transparentOnTop?: boolean };

export default function HeaderTransparent({ transparentOnTop = true }: Props) {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // état scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock scroll quand menu mobile ouvert
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const solid = !transparentOnTop || scrolled;
  const linkBase = solid ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white';
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-colors',
        solid
          ? 'bg-white/90 backdrop-blur-md border-b border-black/10'
          : 'bg-transparent',
      ].join(' ')}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-black text-white px-3 py-2 rounded">
        Aller au contenu
      </a>

      <div className="container-custom h-16 md:h-20 flex items-center justify-between">
        {/* Marque */}
        <Link href="/" className="flex items-center gap-3">
          <span className={['w-9 h-9 rounded bg-[#111] text-white grid place-items-center text-sm font-bold',
            solid ? 'ring-0' : 'ring-1 ring-white/30'].join(' ')}>
            MD
          </span>
          <span className={['text-base sm:text-lg font-semibold tracking-tight',
            solid ? 'text-[#111]' : 'text-white'].join(' ')}>
            Menuiserie Dubois
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={[
                'relative text-sm font-medium transition-colors',
                linkBase,
                isActive(item.href) ? (solid ? 'text-[#111]' : 'text-white') : '',
              ].join(' ')}
            >
              {item.label}
              <span
                className={[
                  'pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full rounded',
                  isActive(item.href)
                    ? (solid ? 'bg-[#111]' : 'bg-white/90')
                    : 'bg-transparent',
                ].join(' ')}
                aria-hidden
              />
            </Link>
          ))}

          {/* Tel */}
          <Link
            href="tel:0563914258"
            className={['hidden lg:inline-flex items-center gap-2 text-sm font-medium', linkBase].join(' ')}
          >
            <Phone className="h-4 w-4" />
            05&nbsp;63&nbsp;91&nbsp;42&nbsp;58
          </Link>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className={solid
              ? 'btn-accent'
              : 'rounded-xl border border-white/30 text-white hover:bg-white hover:text-[#111] bg-transparent'}
          >
            <Link href="/devis">
              Devis gratuit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>

        {/* Burger mobile */}
        <button
          aria-label="Ouvrir le menu"
          className={['md:hidden inline-flex items-center justify-center p-2', linkBase].join(' ')}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile – plein écran, clair, lisible */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative ml-auto h-full w-full bg-white shadow-xl flex flex-col">
            {/* Topbar menu (safe-area friendly) */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200"
                 style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}>
              <span className="flex items-center gap-2 font-semibold text-[#111]">
                <span className="w-7 h-7 rounded bg-[#111] text-white grid place-items-center text-xs font-bold">MD</span>
                Menuiserie Dubois
              </span>
              <button aria-label="Fermer le menu" className="p-2 text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-4 py-4 space-y-1 overflow-y-auto">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'block rounded-lg px-4 py-3 text-base font-medium',
                    isActive(item.href) ? 'bg-gray-100 text-[#111]' : 'text-gray-800 hover:bg-gray-50',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-4 pb-6 pt-2 space-y-3 border-t border-gray-200">
              <Link href="tel:0563914258" className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900" onClick={() => setOpen(false)}>
                <Phone className="h-4 w-4" />
                05&nbsp;63&nbsp;91&nbsp;42&nbsp;58
              </Link>
              <Button asChild className="w-full btn-accent">
                <Link href="/devis" onClick={() => setOpen(false)}>
                  Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
