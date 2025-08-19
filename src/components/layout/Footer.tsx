import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { infosEntreprise } from '@/data/entreprise';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-wood-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MD</span>
              </div>
              <div>
                <div className="text-lg font-bold">{infosEntreprise.nom}</div>
                <div className="text-sm text-wood-300">Artisan menuisier</div>
              </div>
            </div>
            <p className="text-wood-300 text-sm leading-relaxed">
              Spécialiste en menuiserie sur mesure depuis plus de 15 ans. 
              Cuisines, escaliers, aménagements intérieurs dans le Tarn-et-Garonne.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-wood-400 mt-0.5 flex-shrink-0" />
                <div className="text-wood-300">
                  {infosEntreprise.adresse}<br />
                  {infosEntreprise.codePostal} {infosEntreprise.ville}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-wood-400 flex-shrink-0" />
                <Link
                  href={`tel:${infosEntreprise.telephone.replace(/\s/g, '')}`}
                  className="text-wood-300 hover:text-white transition-colors"
                >
                  {infosEntreprise.telephone}
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-wood-400 flex-shrink-0" />
                <Link
                  href={`mailto:${infosEntreprise.email}`}
                  className="text-wood-300 hover:text-white transition-colors"
                >
                  {infosEntreprise.email}
                </Link>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm">
              {Object.entries(infosEntreprise.horaires).map(([jour, horaire]) => (
                <div key={jour} className="flex justify-between">
                  <span className="text-wood-300 capitalize">{jour}</span>
                  {horaire.ouvert ? (
                    <span className="text-wood-200">
                      {horaire.matin}
                      {horaire.apresMidi && ` ${horaire.apresMidi}`}
                    </span>
                  ) : (
                    <span className="text-wood-400">Fermé</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <div className="space-y-2 text-sm">
              <Link href="/realisations" className="block text-wood-300 hover:text-white transition-colors">
                Nos réalisations
              </Link>
              <Link href="/devis" className="block text-wood-300 hover:text-white transition-colors">
                Demande de devis
              </Link>
              <Link href="/a-propos" className="block text-wood-300 hover:text-white transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="block text-wood-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="mt-6">
              <div className="text-sm text-wood-400 mb-3">Suivez-nous</div>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="p-2 bg-wood-800 rounded-lg hover:bg-wood-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-wood-800 rounded-lg hover:bg-wood-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-wood-800 rounded-lg hover:bg-wood-700 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-wood-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-wood-400">
            <div>
              © {currentYear} {infosEntreprise.nom}. Tous droits réservés.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/mentions-legales" className="hover:text-wood-300 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-wood-300 transition-colors">
                Confidentialité
              </Link>
              <div className="text-wood-500">
                SIRET: {infosEntreprise.siret}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}