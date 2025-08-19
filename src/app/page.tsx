import { PremiumHeroSection } from '@/components/sections/PremiumHeroSection';
import { PremiumServicesSection } from '@/components/sections/PremiumServicesSection';
import { PremiumRealisationsSection } from '@/components/sections/PremiumRealisationsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { PremiumTestimonialsSection } from '@/components/sections/PremiumTestimonialsSection';
import { InterventionZoneSection } from '@/components/sections/InterventionZoneSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <PremiumHeroSection />
      <PremiumServicesSection />
      <PremiumRealisationsSection />
      <WhyChooseUsSection />
      <PremiumTestimonialsSection />
      <InterventionZoneSection />
      <FinalCTASection />
    </>
  );
}
