'use client';

import { useState } from 'react';

interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  projet: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    projet: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case 'nom':
      case 'prenom':
        return value.trim().length < 2 ? 'Minimum 2 caractères requis' : undefined;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Email invalide' : undefined;
      case 'message':
        return value.trim().length < 10 ? 'Minimum 10 caractères requis' : undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (name: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validation en temps réel
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation complète
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof ContactFormData>).forEach(key => {
      if (['nom', 'prenom', 'email', 'message'].includes(key)) {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simuler l'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Message envoyé avec succès !');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        projet: '',
        message: ''
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            value={formData.nom}
            onChange={(e) => handleInputChange('nom', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors ${
              errors.nom ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
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
            value={formData.prenom}
            onChange={(e) => handleInputChange('prenom', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors ${
              errors.prenom ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
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
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={(e) => handleInputChange('telephone', e.target.value)}
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
          value={formData.projet}
          onChange={(e) => handleInputChange('projet', e.target.value)}
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
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
}