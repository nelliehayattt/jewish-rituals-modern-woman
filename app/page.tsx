import { AboutSection } from "@/components/site/about-section";
import { EventsSection } from "@/components/site/events-section";
import { HeroSection } from "@/components/site/hero-section";
import { OfferingsSection } from "@/components/site/offerings-section";
import { PillarsSection } from "@/components/site/pillars-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TeachingSection } from "@/components/site/teaching-section";
import { VisionSection } from "@/components/site/vision-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-copy)]">
      <SiteHeader />
      <HeroSection />
      <VisionSection />
      <PillarsSection />
      <TeachingSection />
      <OfferingsSection />
      <AboutSection />
      <EventsSection />
      <SiteFooter />
    </main>
  );
}
