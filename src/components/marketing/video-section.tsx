export function VideoSection() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-2xl border-2 border-blue-400 p-8 md:p-12">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          experbat en 90 secondes : Comment ça marche vraiment ?
        </h2>
        
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="relative aspect-video w-full md:w-1/2 overflow-hidden rounded-xl bg-gray-200 shadow-lg">
             <div className="flex h-full items-center justify-center bg-blue-600 text-white">
                <span className="text-5xl">▶️</span>
                <div className="absolute bottom-4 left-4 bg-blue-700/80 px-4 py-2 text-sm font-bold">Tout savoir sur experbat</div>
             </div>
          </div>
          
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <p className="text-gray-700 mb-6">
              <span className="font-bold">Axel RYMASZ</span>, Architecte de métier et co-fondateur, vous explique comment Experbat transforme la gestion de projets : <span className="font-bold italic text-blue-600">"Un objectif sans plan n'est qu'un souhait."</span>
            </p>
            
            <div className="mt-6 border-l-4 border-blue-400 pl-6 italic text-blue-600">
              <p className="text-lg">« Pour ce qui est de l'avenir, il ne s'agit pas de le prévoir, mais de le rendre possible. »</p>
              <footer className="mt-2 text-sm text-gray-500">— Antoine de Saint-Exupéry, Citadelle (1948) 😎</footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}