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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projet" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet
                    </label>
                    <select
                      id="projet"
                      name="projet"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="menuiserie-interieure">Menuiserie intérieure</option>
                      <option value="menuiserie-exterieure">Menuiserie extérieure</option>
                      <option value="renovation">Rénovation</option>
                      <option value="amenagement">Aménagement sur mesure</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Décrivez votre projet en détail..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
              
              {/* Informations de contact */}
              <div>
                <h2 className="heading-lg mb-8">Nos coordonnées</h2>
                
                <div className="space-y-8">
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">📍 Adresse</h3>
                    <p className="text-body">
                      123 Rue de la Menuiserie<br />
                      69000 Lyon<br />
                      France
                    </p>
                  </div>
                  
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">📞 Téléphone</h3>
                    <p className="text-body">
                      <a href="tel:+33123456789" className="hover:text-accent transition-colors">
                        04 12 34 56 78
                      </a>
                    </p>
                  </div>
                  
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">✉️ Email</h3>
                    <p className="text-body">
                      <a href="mailto:contact@menuiserie-dubois.fr" className="hover:text-accent transition-colors">
                        contact@menuiserie-dubois.fr
                      </a>
                    </p>
                  </div>
                  
                  <div className="card-simple p-6">
                    <h3 className="heading-md mb-4">🕒 Horaires d'ouverture</h3>
                    <div className="text-body space-y-1">
                      <p>Lundi - Vendredi : 8h00 - 18h00</p>
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