// src/components/marketing/hero-section.tsx
interface HeroSectionProps {
  onStart: () => void;
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('hero-bg.png')" }}
      />
      
      {/* Overlay pour la lisibilité */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-black/30" /> 

      <div className="container relative z-20 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-7xl drop-shadow-2xl">
            Concevoir, rénover, bâtir,<br />
            <span className="text-blue-400">votre projet mérite</span><br />
            expertise et maîtrise
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl max-w-xl">
            La plateforme SaaS qui connecte porteurs de projets et experts du BTP à La Réunion.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <button 
              onClick={onStart}
              className="rounded-xl bg-projectHolder px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:bg-opacity-90 hover:shadow-projectHolder/20 active:scale-95"
            >
              🚀 Démarrer mon projet
            </button>
            <button className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition hover:bg-white/20">
              🔍 Découvrir l'offre PRO
            </button>
          </div>
        </div>
      </div>

      {/* --- LE LOGO RESPONSIVE (Bas à Droite) --- */}
      <div className="absolute bottom-8 right-8 z-30 animate-bounce-slow">
        <div className="relative group">
          {/* Effet de lueur derrière le logo */}
          <div className="absolute -inset-1 rounded-full bg-blue-400/20 blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          <img 
            src="logo-experbat.png" 
            alt="Logo Experbat" 
            className="relative h-16 w-auto object-contain md:h-24 lg:h-32 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      
      {/* Dégradé de transition vers le bas */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}