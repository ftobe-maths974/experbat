// src/components/marketing/testimonials-section.tsx

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Bertrand G",
      role: "Construction de 2 villas",
      location: "La Réunion",
      text: "Merci à experbat qui m'a permis de voir beaucoup plus clair dans mes démarches.",
      avatar: "👨🏽"
    },
    {
      name: "Flo R",
      role: "Rénovation d'une villa",
      location: "Var",
      text: "La précision des conseils adaptés à mon projet m'ont enfin permis de réaliser mon projet.",
      avatar: "👩🏻"
    },
    {
      name: "Yannick F",
      role: "Bureau d'étude",
      text: "Ce qui me prenait des heures à résoudre peut désormais être réglé en quelques minutes.",
      avatar: "👱"
    }
  ];

  return (
    <section className="container mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-6 border-b pb-8 md:flex-row">
        <h2 className="text-3xl font-bold text-gray-900">Ils nous ont fait confiance</h2>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">Note moyenne :</span>
          <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
          <span className="font-bold">4.8/5</span>
          <span className="text-sm text-gray-500 ml-2">247 avis vérifiés</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
        {testimonials.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4 border-r last:border-0 border-gray-100 px-4">
            <div className="text-6xl bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-4">
              {item.avatar}
            </div>
            <p className="text-gray-600 italic leading-relaxed flex-1">
              "{item.text}"
            </p>
            <div>
              <p className="font-bold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.role}</p>
              {item.location && <p className="text-sm text-gray-500">{item.location}</p>}
            </div>
          </div>
        ))}
        
        {/* Le bouton Play / Vidéo à droite comme sur la capture */}
        <div className="flex items-center justify-center bg-gray-50 rounded-xl aspect-video md:aspect-auto">
           <button className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg transition hover:scale-110">
            ▶️
           </button>
        </div>
      </div>
    </section>
  );
}