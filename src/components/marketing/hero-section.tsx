export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-gray-900">
      {/* IMAGE ORIGINALE EN BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }} // Remplacez par votre nom de fichier
      />
      {/* Overlay pour la lisibilité du texte */}
      <div className="absolute inset-0 z-10 bg-black/40" /> 

      <div className="container relative z-20 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl drop-shadow-lg">
            Concevoir, rénover, bâtir,<br />
            <span className="text-blue-400">votre projet mérite</span><br />
            expertise et maîtrise
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-projectHolder px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:bg-projectHolder-hover">
              🚀 Démarrer mon projet
            </button>
            <button className="rounded-lg border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
              🔍 Découvrir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}