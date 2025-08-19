// Types pour les réalisations
export interface Realisation {
  id: string;
  titre: string;
  description: string;
  categorie: 'cuisine' | 'escalier' | 'amenagement';
  images: {
    avant?: string;
    apres: string;
    galerie?: string[];
  };
  prix?: {
    min: number;
    max: number;
  };
  duree: string;
  materiau: string;
  lieu: string;
  dateRealisation: string;
  tags: string[];
}

// Types pour les témoignages
export interface Témoignage {
  id: string;
  nom: string;
  prenom: string;
  ville: string;
  note: number;
  commentaire: string;
  date: string;
  projet: string;
  avatar?: string;
}

// Types pour les services
export interface Service {
  id: string;
  nom: string;
  description: string;
  icone: string;
  tarifs: {
    unite: string;
    prixMin: number;
    prixMax: number;
    details: string;
  };
  dureeEstimee: string;
  garantie: string;
  caracteristiques: string[];
}

// Types pour les formulaires
export interface DemandeDevis {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  ville: string;
  codePostal: string;
  typeProjet: 'cuisine' | 'escalier' | 'amenagement' | 'autre';
  description: string;
  budget?: number;
  delaiSouhaite: string;
  fichiers?: File[];
  accepteNewsletter: boolean;
  accepteConditions: boolean;
}

export interface DemandeRdv {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  typeVisite: 'devis' | 'conseil' | 'suivi';
  datesSouhaitees: string[];
  creneauxPreferes: 'matin' | 'apres-midi' | 'soir';
  description: string;
}

// Types pour l'entreprise
export interface InfosEntreprise {
  nom: string;
  adresse: string;
  ville: string;
  codePostal: string;
  telephone: string;
  email: string;
  siret: string;
  horaires: {
    [key: string]: {
      ouvert: boolean;
      matin?: string;
      apresMidi?: string;
    };
  };
  zoneIntervention: string[];
  certifications: string[];
  assurance: string;
}