// src/app/(marketing)/page.tsx
"use client"; // Indique à Next.js qu'il s'agit d'un composant client interactif

import { useState } from "react"; // Importation manquante à ajouter
import { HeroSection } from "@/components/marketing/hero-section";
import { PitchSection } from "@/components/marketing/pitch-section";
import { ActionsSection } from "@/components/marketing/actions-section";
import { VideoSection } from "@/components/marketing/video-section";
import { ForumSection } from "@/components/marketing/forum-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FormModal } from "@/components/marketing/form-modal";
import { BetaBadge } from "@/components/marketing/beta-badge";

export default function LandingPage() {
  const [modalConfig, setModalConfig] = useState<{isOpen: boolean, type: "audit" | "commencer", title: string}>({
    isOpen: false,
    type: "audit",
    title: ""
  });

  const openModal = (type: "audit" | "commencer", title: string) => {
    setModalConfig({ isOpen: true, type, title });
  };

  return (
    <div className="flex flex-col items-center gap-24 md:gap-32 relative">
      <BetaBadge />
      
      <HeroSection onStart={() => openModal("commencer", "Démarrer mon projet")} />
      <PitchSection />
      <ActionsSection onAudit={() => openModal("audit", "Mon Audit Gratuit")} />

      <FormModal 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        formType={modalConfig.type}
      />
      <VideoSection />
      <ForumSection />
      <TestimonialsSection />
    </div>
  );
}