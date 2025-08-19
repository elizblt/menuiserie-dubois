import { Realisation } from '@/types';

export const realisations: Realisation[] = [
  {
    id: 'cuisine-moderne-montauban',
    titre: 'Cuisine Moderne - Montauban',
    description: 'Rénovation complète d\'une cuisine de 15m² avec îlot central, plan de travail en quartz et façades en chêne massif. Électroménager haut de gamme intégré.',
    categorie: 'cuisine',
    images: {
      avant: '/images/realisations/cuisine-1-avant.jpg',
      apres: '/images/realisations/cuisine-1-apres.jpg',
      galerie: [
        '/images/realisations/cuisine-1-detail-1.jpg',
        '/images/realisations/cuisine-1-detail-2.jpg',
        '/images/realisations/cuisine-1-detail-3.jpg'
      ]
    },
    prix: { min: 18000, max: 22000 },
    duree: '3 semaines',
    materiau: 'Chêne massif + Quartz',
    lieu: 'Montauban (82)',
    dateRealisation: '2024-03-15',
    tags: ['moderne', 'îlot', 'quartz', 'électroménager-intégré']
  },
  {
    id: 'escalier-chene-toulouse',
    titre: 'Escalier 1/4 Tournant - Toulouse',
    description: 'Fabrication et pose d\'un escalier quart tournant en chêne massif avec rampe coordonnée. 15 marches, contremarches pleines.',
    categorie: 'escalier',
    images: {
      apres: '/images/realisations/escalier-1-apres.jpg',
      galerie: [
        '/images/realisations/escalier-1-detail-1.jpg',
        '/images/realisations/escalier-1-detail-2.jpg'
      ]
    },
    prix: { min: 6500, max: 7500 },
    duree: '2 semaines',
    materiau: 'Chêne massif',
    lieu: 'Toulouse (31)',
    dateRealisation: '2024-02-28',
    tags: ['chêne', '1/4-tournant', 'rampe-bois', 'moderne']
  },
  {
    id: 'dressing-sur-mesure-caussade',
    titre: 'Dressing Sur Mesure - Caussade',
    description: 'Aménagement d\'une chambre parentale avec dressing intégré de 8m². Portes coulissantes, éclairage LED, nombreux rangements.',
    categorie: 'amenagement',
    images: {
      avant: '/images/realisations/dressing-1-avant.jpg',
      apres: '/images/realisations/dressing-1-apres.jpg',
      galerie: [
        '/images/realisations/dressing-1-detail-1.jpg',
        '/images/realisations/dressing-1-detail-2.jpg'
      ]
    },
    prix: { min: 4200, max: 5000 },
    duree: '1 semaine',
    materiau: 'Mélaminé blanc + Chêne',
    lieu: 'Caussade (82)',
    dateRealisation: '2024-04-10',
    tags: ['dressing', 'portes-coulissantes', 'LED', 'optimisation-espace']
  },
  {
    id: 'cuisine-rustique-moissac',
    titre: 'Cuisine Rustique - Moissac',
    description: 'Cuisine traditionnelle en noyer massif avec poutres apparentes conservées. Plan de travail en bois massif, évier en grès.',
    categorie: 'cuisine',
    images: {
      apres: '/images/realisations/cuisine-2-apres.jpg',
      galerie: [
        '/images/realisations/cuisine-2-detail-1.jpg',
        '/images/realisations/cuisine-2-detail-2.jpg'
      ]
    },
    prix: { min: 12000, max: 15000 },
    duree: '4 semaines',
    materiau: 'Noyer massif',
    lieu: 'Moissac (82)',
    dateRealisation: '2024-01-20',
    tags: ['rustique', 'traditionnel', 'noyer', 'massif', 'authentique']
  },
  {
    id: 'escalier-metal-bois-agen',
    titre: 'Escalier Métal-Bois - Agen',
    description: 'Escalier contemporain alliant structure métallique et marches en chêne. Design épuré avec garde-corps en acier laqué.',
    categorie: 'escalier',
    images: {
      apres: '/images/realisations/escalier-2-apres.jpg',
      galerie: ['/images/realisations/escalier-2-detail-1.jpg']
    },
    prix: { min: 8500, max: 10000 },
    duree: '3 semaines',
    materiau: 'Chêne + Acier',
    lieu: 'Agen (47)',
    dateRealisation: '2024-05-15',
    tags: ['contemporain', 'métal-bois', 'design', 'garde-corps-acier']
  },
  {
    id: 'bibliotheque-sur-mesure-cahors',
    titre: 'Bibliothèque Sur Mesure - Cahors',
    description: 'Bibliothèque murale de 4m de large avec bureau intégré. Finition laquée blanche, éclairage LED indirect.',
    categorie: 'amenagement',
    images: {
      apres: '/images/realisations/bibliotheque-1-apres.jpg',
      galerie: [
        '/images/realisations/bibliotheque-1-detail-1.jpg',
        '/images/realisations/bibliotheque-1-detail-2.jpg'
      ]
    },
    prix: { min: 2800, max: 3500 },
    duree: '1 semaine',
    materiau: 'MDF laqué blanc',
    lieu: 'Cahors (46)',
    dateRealisation: '2024-06-01',
    tags: ['bibliothèque', 'bureau-intégré', 'laqué', 'LED', 'sur-mesure']
  },
  {
    id: 'cuisine-contemporaine-castelsarrasin',
    titre: 'Cuisine Contemporaine - Castelsarrasin',
    description: 'Cuisine ouverte avec îlot bar, façades sans poignées, plan de travail Dekton. Intégration parfaite des électroménagers.',
    categorie: 'cuisine',
    images: {
      avant: '/images/realisations/cuisine-3-avant.jpg',
      apres: '/images/realisations/cuisine-3-apres.jpg',
      galerie: [
        '/images/realisations/cuisine-3-detail-1.jpg',
        '/images/realisations/cuisine-3-detail-2.jpg'
      ]
    },
    prix: { min: 20000, max: 25000 },
    duree: '3 semaines',
    materiau: 'Laqué mat + Dekton',
    lieu: 'Castelsarrasin (82)',
    dateRealisation: '2024-07-10',
    tags: ['contemporain', 'sans-poignées', 'dekton', 'îlot-bar', 'haut-de-gamme']
  },
  {
    id: 'escalier-renove-grisolles',
    titre: 'Escalier Rénové - Grisolles',
    description: 'Rénovation complète d\'un escalier béton avec habillage chêne massif. Contremarches peintes, main courante moderne.',
    categorie: 'escalier',
    images: {
      avant: '/images/realisations/escalier-3-avant.jpg',
      apres: '/images/realisations/escalier-3-apres.jpg',
      galerie: ['/images/realisations/escalier-3-detail-1.jpg']
    },
    prix: { min: 4500, max: 5500 },
    duree: '1.5 semaine',
    materiau: 'Chêne massif',
    lieu: 'Grisolles (82)',
    dateRealisation: '2024-08-05',
    tags: ['rénovation', 'habillage-béton', 'chêne-massif', 'moderne']
  },
  {
    id: 'dressing-walk-in-negrepelisse',
    titre: 'Walk-in Dressing - Nègrepelisse',
    description: 'Dressing walk-in de 12m² avec îlot central, miroirs sur mesure, système d\'éclairage automatique.',
    categorie: 'amenagement',
    images: {
      apres: '/images/realisations/dressing-2-apres.jpg',
      galerie: [
        '/images/realisations/dressing-2-detail-1.jpg',
        '/images/realisations/dressing-2-detail-2.jpg',
        '/images/realisations/dressing-2-detail-3.jpg'
      ]
    },
    prix: { min: 7500, max: 9000 },
    duree: '2 semaines',
    materiau: 'Noyer + Laqué blanc',
    lieu: 'Nègrepelisse (82)',
    dateRealisation: '2024-09-12',
    tags: ['walk-in', 'îlot-central', 'miroirs', 'éclairage-auto', 'luxe']
  },
  {
    id: 'meuble-tv-sur-mesure-villemur',
    titre: 'Meuble TV Sur Mesure - Villemur',
    description: 'Meuble TV suspendu avec rangements cachés, passage câbles intégré, finition chêne naturel.',
    categorie: 'amenagement',
    images: {
      apres: '/images/realisations/meuble-tv-1-apres.jpg',
      galerie: ['/images/realisations/meuble-tv-1-detail-1.jpg']
    },
    prix: { min: 1200, max: 1800 },
    duree: '5 jours',
    materiau: 'Chêne naturel',
    lieu: 'Villemur-sur-Tarn (31)',
    dateRealisation: '2024-10-01',
    tags: ['meuble-tv', 'suspendu', 'rangements', 'câbles-intégrés', 'chêne']
  }
];