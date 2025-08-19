export default function RealisationsPage() {
  const realisations = [
    {
      id: 1,
      titre: "Cuisine moderne en chêne massif",
      description: "Cuisine contemporaine entièrement réalisée en chêne massif avec îlot central et finitions haut de gamme.",
      categorie: "Cuisine",
      image: "CUISINE",
      details: ["Chêne massif", "Îlot central", "Électroménager intégré", "Plan de travail en granit"]
    },
    {
      id: 2,
      titre: "Dressing sur mesure",
      description: "Aménagement complet d'un dressing avec penderies, tiroirs et étagères modulables.",
      categorie: "Aménagement",
      image: "DRESSING",
      details: ["Mélaminé blanc", "Tiroirs à fermeture douce", "Éclairage LED", "Dimensions optimisées"]
    },
    {
      id: 3,
      titre: "Escalier quart tournant",
      description: "Escalier en bois massif avec rampe moderne et contremarches personnalisées.",
      categorie: "Escalier",
      image: "ESCALIER",
      details: ["Hêtre massif", "Rampe inox", "Marches antidérapantes", "Finition vernie"]
    },
    {
      id: 4,
      titre: "Fenêtres à l'ancienne",
      description: "Rénovation complète de fenêtres anciennes avec double vitrage et respect du style d'époque.",
      categorie: "Menuiserie extérieure",
      image: "FENÊTRES",
      details: ["Pin douglas", "Double vitrage", "Petits bois", "Peinture traditionnelle"]
    },
    {
      id: 5,
      titre: "Bibliothèque murale",
      description: "Bibliothèque sur mesure intégrée du sol au plafond avec échelle coulissante.",
      categorie: "Aménagement",
      image: "BIBLIO",
      details: ["Chêne teinté", "Étagères réglables", "Échelle sur rail", "Éclairage intégré"]
    },
    {
      id: 6,
      titre: "Porte d'entrée contemporaine",
      description: "Porte d'entrée design avec isolation renforcée et serrure multipoints.",
      categorie: "Menuiserie extérieure",
      image: "PORTE",
      details: ["Aluminium et bois", "Isolation thermique", "Serrure 3 points", "Vitrage sécurisé"]
    }
  ];

  const categories = ["Toutes", "Cuisine", "Aménagement", "Escalier", "Menuiserie extérieure"];

  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="heading-xl mb-8 text-center">Nos Réalisations</h1>
          <p className="text-large mb-16 text-center max-w-3xl mx-auto">
            Découvrez nos projets récents et laissez-vous inspirer par notre savoir-faire artisanal
          </p>
          
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((categorie) => (
              <button
                key={categorie}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-accent hover:text-white transition-colors"
              >
                {categorie}
              </button>
            ))}
          </div>
          
          {/* Grille des réalisations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {realisations.map((realisation) => (
              <div key={realisation.id} className="card-simple overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">{realisation.image.slice(0,2)}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-600">{realisation.image}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {realisation.categorie}
                    </span>
                  </div>
                  <h3 className="heading-md mb-3">{realisation.titre}</h3>
                  <p className="text-body mb-4">{realisation.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900">Caractéristiques :</h4>
                    <ul className="space-y-1">
                      {realisation.details.map((detail, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-accent mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn-secondary w-full text-sm">
                    Voir plus de détails
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="heading-lg mb-6">Votre projet vous tient à cœur ?</h2>
            <p className="text-large mb-8">
              Partagez-nous votre vision, nous la concrétiserons avec notre expertise artisanale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Demander un devis gratuit
              </button>
              <button className="btn-secondary">
                Voir notre processus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}