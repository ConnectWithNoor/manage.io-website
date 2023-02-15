import CTA from './{section}/cta';
import FeaturesSection from './{section}/featuresSection';
import HeroSection from './{section}/heroSection';
import TestimonialSection from './{section}/testimonialSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTA />
    </>
  );
}
