export function ActionsSection() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-12 space-y-16">
      {/* BLOC PORTEUR (BLEU) */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl md:flex-row">
        <div 
          className="h-64 w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{ backgroundImage: "url('./image-porteur.png')" }}
        />
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12">
          <h2 className="text-3xl font-extrabold text-projectHolder mb-6">Vous êtes porteur de projet</h2>
          <p className="text-gray-800 font-medium leading-relaxed mb-8">
            Trouvez l'expert qu'il vous faut pour concrétiser votre projet. Conseils personnalisés et suivi 100% en ligne.
          </p>
          <div className="flex flex-col gap-4">
            <button className="rounded-lg bg-projectHolder py-3 font-bold text-white shadow-md transition hover:brightness-110">✅ Mon audit gratuit</button>
            <button className="rounded-lg bg-projectHolder py-3 font-bold text-white shadow-md transition hover:brightness-110">🔍 Trouvez un expert !</button>
            <button className="rounded-lg bg-projectHolder py-3 font-bold text-white shadow-md transition hover:brightness-110">👤 Mon compte Client</button>
          </div>
        </div>
      </div>

      {/* BLOC PROFESSIONNEL (VERT) */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl md:flex-row-reverse">
        <div 
          className="h-64 w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{ backgroundImage: "url('/.image-pro.png')" }}
        />
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12">
          <h2 className="text-3xl font-extrabold text-professional mb-6">Vous êtes professionnel</h2>
          <p className="text-gray-800 font-medium leading-relaxed mb-8">
            Optimisez votre activité AMO/MOE. Centralisez vos projets et développez votre visibilité.
          </p>
          <div className="flex flex-col gap-4">
            <button className="rounded-lg bg-professional py-3 font-bold text-white shadow-md transition hover:brightness-110">👷 Inscrivez-vous</button>
            <button className="rounded-lg bg-professional py-3 font-bold text-white shadow-md transition hover:brightness-110">🔑 Mon compte PRO</button>
            <button className="rounded-lg bg-professional py-3 font-bold text-white shadow-md transition hover:brightness-110">▶️ Regarder la démo</button>
          </div>
        </div>
      </div>
    </section>
  );
}