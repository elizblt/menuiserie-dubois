'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Home, 
  Wrench, 
  ArrowRight,
  Clock,
  Shield,
  Euro
} from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import Link from 'next/link';

const iconMap = {
  ChefHat,
  Home,
  Wrench,
  Clock,
  Shield,
  Euro
};

export function ServicesSection() {
  const principauxServices = services.slice(0, 3);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="text-wood-600 border-wood-600">
            Nos Spécialités
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Services de <span className="text-wood-600 font-serif">Menuiserie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Du concept à la réalisation, nous vous accompagnons dans tous vos projets 
            d&apos;aménagement et de menuiserie sur mesure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {principauxServices.map((service, index) => {
            const IconComponent = iconMap[service.icone as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-wood-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wood-600 transition-colors duration-300">
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 text-wood-600 group-hover:text-white transition-colors duration-300" />
                      )}
                    </div>
                    <CardTitle className="text-xl">{service.nom}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Prix */}
                    <div className="flex items-center justify-between p-3 bg-wood-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Euro className="h-4 w-4 text-wood-600" />
                        <span className="text-sm font-medium">
                          {service.tarifs.prixMin.toLocaleString()}€ - {service.tarifs.prixMax.toLocaleString()}€
                        </span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.tarifs.unite}
                      </Badge>
                    </div>

                    {/* Infos pratiques */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Durée: {service.dureeEstimee}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Shield className="h-4 w-4" />
                        <span>Garantie: {service.garantie}</span>
                      </div>
                    </div>

                    {/* Caractéristiques */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Points forts:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.caracteristiques.slice(0, 3).map((carac, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-wood-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{carac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild className="group">
            <Link href="/realisations">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Services additionnels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Également disponibles</h3>
            <p className="text-muted-foreground">
              Découvrez notre gamme complète de services menuiserie
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-medium text-wood-800 mb-2">
                  {service.nom}
                </div>
                <div className="text-xs text-muted-foreground">
                  À partir de {service.tarifs.prixMin}€
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}