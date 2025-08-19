import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h1 className="heading-xl mb-16 text-center">Contactez-nous</h1>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Formulaire de contact */}
              <div>
                <h2 className="heading-lg mb-8">Envoyez-nous un message</h2>
                <ContactForm />
              </div>
              
              {/* Informations de contact */}
              <div>
                <h2 className="heading-lg mb-8">Nos coordonnées</h2>
                
                <div className="space-y-8">
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">Adresse</h3>
                    <p className="text-body">
                      45 Avenue des Artisans<br />
                      82000 Montauban<br />
                      France
                    </p>
                  </div>
                  
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">Téléphone</h3>
                    <p className="text-body">
                      <a href="tel:+33563914258" className="hover:text-accent transition-colors">
                        05 63 91 42 58
                      </a>
                    </p>
                  </div>
                  
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">Email</h3>
                    <p className="text-body">
                      <a href="mailto:contact@menuiserie-dubois.fr" className="hover:text-accent transition-colors">
                        contact@menuiserie-dubois.fr
                      </a>
                    </p>
                  </div>
                  
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">Horaires d'ouverture</h3>
                    <div className="text-body space-y-1">
                      <p>Lundi - Jeudi : 8h00 - 12h00 / 14h00 - 18h00</p>
                      <p>Vendredi : 8h00 - 12h00 / 14h00 - 17h00</p>
                      <p>Samedi : 9h00 - 12h00</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}