// src/components/marketing/hero-section.tsx
export function HeroSection() {
  return (
    <section 
      className="relative h-[60vh] w-full flex items-center justify-center text-center"
      // L'image de fond est appliquée ici. Remplacez par votre image.
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070...')" }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay pour la lisibilité */}
      <div className="relative z-10 max-w-4xl px-4 text-white">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Concevoir, rénover, bâtir, votre projet mérite expertise et maîtrise
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-projectHolder px-8 py-3 font-semibold text-white transition hover:bg-projectHolder-hover">
            Démarrer mon projet
          </button>
          <button className="rounded-xl border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white/10">
            Découvrir
          </button>
        </div>
      </div>
    </section>
  );
}
