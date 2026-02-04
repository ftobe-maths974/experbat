// src/app/(marketing)/page.tsx
import { HeroSection } from "@/components/marketing/hero-section";
import { PitchSection } from "@/components/marketing/pitch-section";
import { ActionsSection } from "@/components/marketing/actions-section";
import { VideoSection } from "@/components/marketing/video-section";
import { ForumSection } from "@/components/marketing/forum-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";

export default function LandingPage() {
  return (
    // L'utilisation de flex-col et gap assure un espacement aéré et cohérent
    <div className="flex flex-col items-center gap-24 md:gap-32">
      <HeroSection />
      <PitchSection />
      <ActionsSection />
      <VideoSection />
      <ForumSection />
      <TestimonialsSection />
    </div>
  );
}
