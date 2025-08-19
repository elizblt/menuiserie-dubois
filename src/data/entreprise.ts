import { InfosEntreprise } from '@/types';

export const infosEntreprise: InfosEntreprise = {
  nom: 'Menuiserie Dubois',
  adresse: '45 Avenue des Artisans',
  ville: 'Montauban',
  codePostal: '82000',
  telephone: '05 63 91 42 58',
  email: 'contact@menuiserie-dubois.fr',
  siret: '123 456 789 00012',
  horaires: {
    lundi: { ouvert: true, matin: '8h00-12h00', apresMidi: '14h00-18h00' },
    mardi: { ouvert: true, matin: '8h00-12h00', apresMidi: '14h00-18h00' },
    mercredi: { ouvert: true, matin: '8h00-12h00', apresMidi: '14h00-18h00' },
    jeudi: { ouvert: true, matin: '8h00-12h00', apresMidi: '14h00-18h00' },
    vendredi: { ouvert: true, matin: '8h00-12h00', apresMidi: '14h00-17h00' },
    samedi: { ouvert: true, matin: '9h00-12h00', apresMidi: '' },
    dimanche: { ouvert: false }
  },
  zoneIntervention: [
    'Montauban',
    'Toulouse',
    'Cahors',
    'Agen',
    'Castelsarrasin',
    'Moissac',
    'Caussade',
    'Negrepelisse',
    'Villemur-sur-Tarn',
    'Grisolles',
    'Tarn-et-Garonne',
    'Haute-Garonne Sud',
    'Lot Est',
    'Gers Nord'
  ],
  certifications: [
    'Qualibat 1142 - Menuiserie bois',
    'RGE Quali\'Bois',
    'Artisan de confiance',
    'Garantie décennale Allianz'
  ],
  assurance: 'Allianz Pro - Police n° MP123456789'
};