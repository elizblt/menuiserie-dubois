export default function DevisPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-8 text-center">Demande de Devis Gratuit</h1>
            <p className="text-large mb-16 text-center">
              Obtenez un devis personnalisé pour votre projet de menuiserie en quelques minutes
            </p>
            
            <form className="space-y-8">
              {/* Informations personnelles */}
              <div className="card-simple p-8">
                <h2 className="heading-lg mb-6">Vos informations</h2>
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
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
              
              {/* Détails du projet */}
              <div className="card-simple p-8">
                <h2 className="heading-lg mb-6">Votre projet</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="type-projet" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="type-projet"
                      name="type-projet"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    >
                      <option value="">Sélectionnez le type de projet</option>
                      <option value="menuiserie-interieure">Menuiserie intérieure</option>
                      <option value="menuiserie-exterieure">Menuiserie extérieure</option>
                      <option value="fenetre-porte">Fenêtres et portes</option>
                      <option value="cuisine">Cuisine sur mesure</option>
                      <option value="dressing">Dressing et rangements</option>
                      <option value="escalier">Escalier</option>
                      <option value="autre">Autre projet</option>
                    </select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget approximatif
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      >
                        <option value="">Sélectionnez votre budget</option>
                        <option value="moins-5000">Moins de 5 000 €</option>
                        <option value="5000-10000">5 000 € - 10 000 €</option>
                        <option value="10000-20000">10 000 € - 20 000 €</option>
                        <option value="20000-50000">20 000 € - 50 000 €</option>
                        <option value="plus-50000">Plus de 50 000 €</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="delai" className="block text-sm font-medium text-gray-700 mb-2">
                        Délai souhaité
                      </label>
                      <select
                        id="delai"
                        name="delai"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      >
                        <option value="">Sélectionnez le délai</option>
                        <option value="urgent">Urgent (moins d'1 mois)</option>
                        <option value="1-3-mois">1 à 3 mois</option>
                        <option value="3-6-mois">3 à 6 mois</option>
                        <option value="plus-6-mois">Plus de 6 mois</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description détaillée du projet *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      required
                      placeholder="Décrivez votre projet : dimensions, matériaux souhaités, style, contraintes particulières..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Informations complémentaires */}
              <div className="card-simple p-8">
                <h2 className="heading-lg mb-6">Informations complémentaires</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse du chantier
                      </label>
                      <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        placeholder="Ville et code postal"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-2">
                        Surface approximative (m²)
                      </label>
                      <input
                        type="number"
                        id="surface"
                        name="surface"
                        placeholder="Ex: 25"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="visite"
                        className="w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent"
                      />
                      <span className="text-sm text-gray-700">
                        Je souhaite une visite technique gratuite
                      </span>
                    </label>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        className="w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent"
                      />
                      <span className="text-sm text-gray-700">
                        Je souhaite recevoir des informations sur vos nouveautés
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-12"
                >
                  Envoyer ma demande de devis
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Vous recevrez votre devis sous 48h ouvrées
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}