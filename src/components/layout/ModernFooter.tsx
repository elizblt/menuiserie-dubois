import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { infosEntreprise } from '@/data/entreprise';

export function ModernFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Entreprise */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-sage-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MD</span>
                </div>
                <div className="font-bold text-lg text-gray-900">
                  Menuiserie Dubois
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Artisan menuisier depuis 30 ans. Spécialiste en cuisines sur mesure, 
                escaliers et aménagements intérieurs.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/services/cuisines" className="hover:text-gray-900">Cuisines sur mesure</Link></li>
                <li><Link href="/services/escaliers" className="hover:text-gray-900">Escaliers</Link></li>
                <li><Link href="/services/amenagements" className="hover:text-gray-900">Aménagements</Link></li>
                <li><Link href="/services/renovation" className="hover:text-gray-900">Rénovation</Link></li>
              </ul>
            </div>

            {/* Entreprise */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Entreprise</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/a-propos" className="hover:text-gray-900">À propos</Link></li>
                <li><Link href="/realisations" className="hover:text-gray-900">Nos réalisations</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
                <li><Link href="/devis" className="hover:text-gray-900">Devis gratuit</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    {infosEntreprise.adresse}<br />
                    {infosEntreprise.codePostal} {infosEntreprise.ville}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <Link
                    href={`tel:${infosEntreprise.telephone.replace(/\s/g, '')}`}
                    className="hover:text-gray-900"
                  >
                    {infosEntreprise.telephone}
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <Link
                    href={`mailto:${infosEntreprise.email}`}
                    className="hover:text-gray-900"
                  >
                    {infosEntreprise.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <div>
              © {currentYear} {infosEntreprise.nom}. Tous droits réservés.
            </div>
            <div className="mt-2 sm:mt-0 flex space-x-6">
              <Link href="/mentions-legales" className="hover:text-gray-700">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-gray-700">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}