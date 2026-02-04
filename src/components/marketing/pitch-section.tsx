// src/components/marketing/pitch-section.tsx

export function PitchSection() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-12">
        Trouvez l'expert qu'il vous faut !
      </h2>
      
      <div className="space-y-8 text-left">
        {/* Ligne Porteur */}
        <div className="flex items-start gap-4">
          <span className="text-3xl">🏠</span>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-teal-600">Pour les porteurs de projet</span>, un accompagnement sur mesure et fiable, Accessible 100 % en ligne.
          </p>
        </div>

        {/* Ligne Pro */}
        <div className="flex items-start gap-4">
          <span className="text-3xl">👨‍💼</span>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-teal-600">Pour les professionnels</span>, une plateforme unique pour conjuguer gain de temps, maîtrise, sérénité et visibilité.
          </p>
        </div>

        {/* Ligne Solution commune */}
        <div className="flex items-start gap-4">
          <span className="text-3xl">🤝</span>
          <p className="text-xl text-blue-800 leading-relaxed">
            <span className="font-bold">Porteurs de projet</span> et <span className="font-bold text-teal-600">professionnels</span>, <br />
            <span className="font-bold text-teal-600">experbat</span> est la solution pour <br />
            planifier, piloter et sécuriser <br />
            vos projets de construction ou de rénovation !
          </p>
        </div>
      </div>
    </section>
  );
}