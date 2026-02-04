import { ClientFAQ } from "./client-faq";
import { ProFAQ } from "./pro-faq";

interface ActionsSectionProps {
  onAudit: () => void;
}

export function ActionsSection({ onAudit }: ActionsSectionProps) {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-24 space-y-32">
      {/* BLOC PORTEUR */}
      <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl md:flex-row">
        <div 
          className="h-80 w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{ backgroundImage: "url('image-porteur.jpg')" }}
        />
        <div className="flex w-full flex-col justify-center p-10 md:w-1/2 lg:p-16">
          <h2 className="text-4xl font-black text-projectHolder mb-6 leading-tight">Vous êtes porteur de projet</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Trouvez l'expert qu'il vous faut pour concrétiser votre projet. Tout est réuni pour avancer sereinement.
          </p>
          
          <ClientFAQ />
          
          <div className="mt-12 flex flex-col gap-4">
            <button 
              onClick={onAudit}
              className="rounded-xl bg-projectHolder py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] active:scale-95"
            >
              ✅ Mon audit gratuit
            </button>
            <button className="rounded-xl bg-projectHolder py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] active:scale-95">
              🔍 Trouvez un expert !
            </button>
          </div>
        </div>
      </div>

      {/* BLOC PROFESSIONNEL */}
      <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl md:flex-row-reverse">
        <div 
          className="h-80 w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{ backgroundImage: "url('image-pro.jpg')" }}
        />
        <div className="flex w-full flex-col justify-center p-10 md:w-1/2 lg:p-16">
          <h2 className="text-4xl font-black text-professional mb-6 leading-tight">Vous êtes professionnel</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Optimisez et sécurisez votre activité depuis une plateforme métier complète.
          </p>
          
          <ProFAQ />
          
          <div className="mt-12 flex flex-col gap-4">
            <button className="rounded-xl bg-professional py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] active:scale-95">
              👷 Inscrivez-vous
            </button>
            <button className="rounded-xl bg-professional py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] active:scale-95">
              🔑 Mon compte PRO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}