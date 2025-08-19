import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'cuisines-sur-mesure',
    nom: 'Cuisines sur Mesure',
    description: 'Conception et réalisation de cuisines entièrement personnalisées, du plan à la pose. Optimisation de l\'espace et choix des matériaux selon vos besoins.',
    icone: 'ChefHat',
    tarifs: {
      unite: 'cuisine complète',
      prixMin: 8000,
      prixMax: 25000,
      details: 'Prix selon surface, équipements et finitions. Devis gratuit sur mesure.'
    },
    dureeEstimee: '2 à 4 semaines',
    garantie: '10 ans sur la structure, 2 ans sur les finitions',
    caracteristiques: [
      'Plan 3D personnalisé inclus',
      'Large choix d\'essences (chêne, hêtre, noyer...)',
      'Quincaillerie haut de gamme Blum',
      'Électroménager partenaire au choix',
      'Plans de travail sur mesure',
      'Installation complète incluse'
    ]
  },
  {
    id: 'escaliers-bois',
    nom: 'Escaliers en Bois',
    description: 'Fabrication d\'escaliers droits, quart tournant, colimaçon. Renovation complète ou habillage d\'escaliers existants.',
    icone: 'Stairs',
    tarifs: {
      unite: 'escalier',
      prixMin: 3500,
      prixMax: 12000,
      details: 'Selon type, nombre de marches et essence. Pose comprise.'
    },
    dureeEstimee: '1 à 3 semaines',
    garantie: '10 ans',
    caracteristiques: [
      'Étude technique et plan inclus',
      'Escaliers droits, 1/4 ou 1/2 tournant',
      'Rampes et garde-corps assortis',
      'Habillage d\'escaliers béton',
      'Rénovation complète possible',
      'Respect des normes de sécurité'
    ]
  },
  {
    id: 'amenagements-interieurs',
    nom: 'Aménagements Intérieurs',
    description: 'Dressing, bibliothèques, bureaux, meubles TV... Tous vos projets d\'aménagement sur mesure pour optimiser votre espace.',
    icone: 'Home',
    tarifs: {
      unite: 'm²',
      prixMin: 400,
      prixMax: 800,
      details: 'Prix au m² selon complexité et finitions. Minimum 2m².'
    },
    dureeEstimee: '1 à 2 semaines',
    garantie: '5 ans',
    caracteristiques: [
      'Optimisation maximale de l\'espace',
      'Portes coulissantes ou battantes',
      'Éclairage LED intégré possible',
      'Tiroirs à fermeture douce',
      'Finitions laquées ou cirées',
      'Installation sans poussière'
    ]
  },
  {
    id: 'renovation-menuiserie',
    nom: 'Rénovation Menuiserie',
    description: 'Rénovation de vos menuiseries existantes : ponçage, traitement, vernissage, remplacement de pièces usées.',
    icone: 'Wrench',
    tarifs: {
      unite: 'intervention',
      prixMin: 150,
      prixMax: 1500,
      details: 'Selon état et ampleur des travaux. Devis après diagnostic.'
    },
    dureeEstimee: '1 jour à 1 semaine',
    garantie: '2 ans',
    caracteristiques: [
      'Diagnostic gratuit à domicile',
      'Ponçage et décapage écologique',
      'Traitement anti-insectes',
      'Vernissage haute qualité',
      'Remplacement de pièces défectueuses',
      'Conseils d\'entretien inclus'
    ]
  },
  {
    id: 'portes-interieures',
    nom: 'Portes Intérieures',
    description: 'Fabrication et pose de portes intérieures sur mesure. Large gamme de styles : classique, contemporain, coulissant.',
    icone: 'Door',
    tarifs: {
      unite: 'porte',
      prixMin: 280,
      prixMax: 800,
      details: 'Pose comprise. Prix selon dimensions et finitions.'
    },
    dureeEstimee: '2 à 5 jours',
    garantie: '3 ans',
    caracteristiques: [
      'Portes pleines ou vitrées',
      'Systèmes coulissants disponibles',
      'Large choix de poignées',
      'Adaptation aux cloisons existantes',
      'Isolation phonique renforcée',
      'Finitions personnalisées'
    ]
  },
  {
    id: 'parquets-sols',
    nom: 'Parquets et Sols Bois',
    description: 'Pose de parquets massifs, contrecollés, stratifiés. Ponçage et vitrification de parquets anciens.',
    icone: 'Layers',
    tarifs: {
      unite: 'm²',
      prixMin: 35,
      prixMax: 120,
      details: 'Pose comprise. Prix selon type de parquet et surface.'
    },
    dureeEstimee: '2 à 7 jours',
    garantie: '5 ans sur la pose',
    caracteristiques: [
      'Parquets massifs haute qualité',
      'Pose clouée, collée ou flottante',
      'Ponçage avec machines sans poussière',
      'Vitrification 3 couches',
      'Plinthes assorties',
      'Conseils d\'entretien personnalisés'
    ]
  }
];