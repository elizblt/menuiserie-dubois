export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-8">À propos de Menuiserie Dubois</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="heading-lg mb-6">Notre Histoire</h2>
                <p className="text-body mb-6">
                  Depuis plus de 20 ans, Menuiserie Dubois allie tradition et innovation 
                  pour créer des menuiseries d'exception. Notre savoir-faire artisanal 
                  se transmet de génération en génération, garantissant une qualité 
                  irréprochable dans chacune de nos réalisations.
                </p>
                <p className="text-body">
                  Spécialisés dans les menuiseries intérieures et extérieures, nous 
                  intervenons aussi bien pour les particuliers que pour les professionnels, 
                  toujours avec le même souci du détail et de la finition parfaite.
                </p>
              </div>
              
              <div className="card-simple p-8">
                <h3 className="heading-md mb-4">Nos Valeurs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="text-body">Qualité artisanale française</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="text-body">Matériaux nobles et durables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="text-body">Service personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">✓</span>
                    <span className="text-body">Respect des délais</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="heading-lg mb-8 text-center">Notre Équipe</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-accent/20">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">JD</span>
                    </div>
                  </div>
                  <h3 className="heading-md mb-2">Jean Dubois</h3>
                  <p className="text-body">Fondateur & Maître Menuisier</p>
                  <p className="text-sm text-gray-500 mt-1">30 ans d'expérience</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-accent/20">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">MD</span>
                    </div>
                  </div>
                  <h3 className="heading-md mb-2">Marie Dubois</h3>
                  <p className="text-body">Responsable Administrative</p>
                  <p className="text-sm text-gray-500 mt-1">Gestion & Relations clients</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-accent/20">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">PM</span>
                    </div>
                  </div>
                  <h3 className="heading-md mb-2">Paul Martin</h3>
                  <p className="text-body">Compagnon Menuisier</p>
                  <p className="text-sm text-gray-500 mt-1">Spécialiste escaliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}