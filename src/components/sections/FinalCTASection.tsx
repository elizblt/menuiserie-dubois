'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Calendar, CheckCircle, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactForm {
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  typeProjet: string;
  message: string;
}

export function FinalCTASection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    // Simulation d'envoi
    console.log('Formulaire soumis:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800 text-white relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 wood-grain opacity-20"></div>
      
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Badge className="bg-accent-500/20 text-accent-300 border-accent-500/30 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Concrétisez votre projet
              </Badge>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transformons votre <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent font-crimson">rêve</span> en réalité
              </h2>

              <p className="text-xl text-primary-100 leading-relaxed">
                Vous avez un projet de menuiserie ? Parlons-en ! Notre équipe d&apos;experts 
                vous accompagne de la conception à la réalisation pour créer 
                l&apos;espace de vos rêves.
              </p>
            </div>

            {/* Avantages de nous contacter */}
            <div className="space-y-4">
              {[
                'Devis personnalisé gratuit sous 24h',
                'Conception 3D de votre projet',
                'Conseils d&apos;experts sans engagement',
                'Visite technique gratuite à domicile'
              ].map((advantage, index) => (
                <motion.div
                  key={advantage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-100">{advantage}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact rapide */}
            <div className="space-y-6 pt-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Besoin d&apos;une réponse immédiate ?</h3>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="flex-1 bg-accent-500 hover:bg-accent-600 text-white border-0">
                    <Link href="tel:0563914258" className="flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      05 63 91 42 58
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10">
                    <Link href="mailto:contact@menuiserie-dubois.fr" className="flex items-center justify-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Email direct
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 bg-white/10 border border-white/20 text-center">
                <div className="flex items-center justify-center space-x-2 text-accent-300 mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">Réactivité garantie</span>
                </div>
                <p className="text-primary-200 text-sm">
                  Réponse sous 2h en journée • Devis complet sous 48h • Visite gratuite
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact premium */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect bg-white/95 border-white/30 backdrop-blur-md">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="text-center space-y-2 mb-6">
                      <h3 className="text-2xl font-bold text-primary-900">
                        Parlez-nous de votre projet
                      </h3>
                      <p className="text-primary-700">
                        Recevez votre devis personnalisé gratuitement
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary-900">Nom complet</label>
                        <Input
                          {...register('nom', { required: 'Nom requis' })}
                          placeholder="Votre nom"
                          className="bg-white/80"
                        />
                        {errors.nom && (
                          <p className="text-red-500 text-xs">{errors.nom.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary-900">Email</label>
                        <Input
                          type="email"
                          {...register('email', { required: 'Email requis' })}
                          placeholder="votre@email.com"
                          className="bg-white/80"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary-900">Téléphone</label>
                        <Input
                          {...register('telephone', { required: 'Téléphone requis' })}
                          placeholder="06 12 34 56 78"
                          className="bg-white/80"
                        />
                        {errors.telephone && (
                          <p className="text-red-500 text-xs">{errors.telephone.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary-900">Ville</label>
                        <Input
                          {...register('ville', { required: 'Ville requise' })}
                          placeholder="Votre ville"
                          className="bg-white/80"
                        />
                        {errors.ville && (
                          <p className="text-red-500 text-xs">{errors.ville.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-900">Type de projet</label>
                      <Select>
                        <SelectTrigger className="bg-white/80">
                          <SelectValue placeholder="Sélectionnez votre projet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cuisine">Cuisine sur mesure</SelectItem>
                          <SelectItem value="escalier">Escalier</SelectItem>
                          <SelectItem value="amenagement">Aménagement intérieur</SelectItem>
                          <SelectItem value="renovation">Rénovation</SelectItem>
                          <SelectItem value="autre">Autre projet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-900">Décrivez votre projet</label>
                      <Textarea
                        {...register('message', { required: 'Description requise' })}
                        placeholder="Décrivez-nous votre projet, vos souhaits, contraintes..."
                        className="bg-white/80 min-h-[100px]"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 text-lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Recevoir mon devis gratuit
                    </Button>

                    <p className="text-xs text-primary-600 text-center">
                      En soumettant ce formulaire, vous acceptez d&apos;être contacté pour votre projet.
                      Vos données sont protégées et ne seront jamais partagées.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-6 py-8"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary-900">
                        Demande envoyée avec succès !
                      </h3>
                      <p className="text-primary-700">
                        Nous vous contactons sous 24h pour étudier votre projet ensemble.
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      Réponse garantie sous 24h
                    </Badge>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Section de confiance finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">
              Rejoignez nos 500+ clients satisfaits
            </h3>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Depuis 30 ans, nous transformons les maisons avec passion. 
              Votre projet mérite notre excellence artisanale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-accent-500 hover:bg-accent-600 text-white border-0 px-12 py-4 text-lg">
              <Link href="/realisations" className="flex items-center">
                Voir nos réalisations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <div className="flex items-center space-x-4 text-primary-200">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-400 text-xl">⭐</span>
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold">4.9/5 étoiles</div>
                <div className="text-sm">98% de clients satisfaits</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}