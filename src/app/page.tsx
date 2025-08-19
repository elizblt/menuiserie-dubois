import { ModernHeroSection } from '@/components/sections/ModernHeroSection';
import { ModernServicesSection } from '@/components/sections/ModernServicesSection';
import { ModernRealisationsSection } from '@/components/sections/ModernRealisationsSection';
import { ModernTestimonialsSection } from '@/components/sections/ModernTestimonialsSection';
import { ModernCTASection } from '@/components/sections/ModernCTASection';

export default function Home() {
  return (
    <>
      <ModernHeroSection />
      <ModernServicesSection />
      <ModernRealisationsSection />
      <ModernTestimonialsSection />
      <ModernCTASection />
    </>
  );
}
