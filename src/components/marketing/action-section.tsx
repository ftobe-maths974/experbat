// src/components/marketing/actions-section.tsx
import { Home, Briefcase, Handshake } from "lucide-react"; // Icônes d'exemple

export function ActionsSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Bloc Gauche (Porteur de Projet) */}
        <div className="flex flex-col items-start gap-6 rounded-xl bg-gray-50 p-8">
          <h3 className="text-2xl font-bold text-projectHolder">Pour les Porteurs de Projet</h3>
          {/* Remplacez par votre image de chantier */}
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070..." alt="Chantier" className="w-full rounded-xl object-cover aspect-video" />
          <p className="text-gray-600">
            De l'idée à la livraison, trouvez les artisans qualifiés et les outils pour piloter votre projet de construction ou de rénovation en toute sérénité.
          </p>
          <div className="flex flex-col gap-3 w-full">
             <button className="w-full rounded-xl bg-projectHolder px-6 py-3 font-semibold text-white transition hover:bg-projectHolder-hover">Mon audit gratuit</button>
             <button className="w-full rounded-xl bg-gray-200 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-300">Trouvez un expert !</button>
          </div>
          {/* L'accordéon serait un composant UI séparé */}
          <p className="text-sm text-gray-500 cursor-pointer hover:underline">Des questions avant de vous lancer ?</p>
        </div>

        {/* Bloc Droite (Professionnel) */}
        <div className="flex flex-col items-start gap-6 rounded-xl bg-gray-50 p-8">
          <h3 className="text-2xl font-bold text-professional">Pour les Professionnels du BTP</h3>
           {/* Remplacez par votre image de bureau */}
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070..." alt="Bureau d'études" className="w-full rounded-xl object-cover aspect-video" />
          <p className="text-gray-600">
            Accédez à des chantiers qualifiés, gérez vos devis et factures, et développez votre activité grâce à une plateforme pensée pour vous.
          </p>
          <div className="flex flex-col gap-3 w-full">
             <button className="w-full rounded-xl bg-professional px-6 py-3 font-semibold text-white transition hover:bg-professional-hover">Inscrivez-vous</button>
             <button className="w-full rounded-xl bg-gray-200 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-300">Regarder la démo</button>
          </div>
           {/* L'accordéon serait un composant UI séparé */}
          <p className="text-sm text-gray-500 cursor-pointer hover:underline">Découvrez les outils PRO</p>
        </div>
      </div>
    </section>
  );
}
