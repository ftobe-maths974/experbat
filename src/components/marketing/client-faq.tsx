"use client";
import { useState } from "react";

export function ClientFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      title: "🔍 Comment ça marche ?",
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <p className="font-bold text-blue-700">Un accompagnement sur mesure en 4 étapes simples :</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><span className="font-bold">Complétez</span> la fiche de votre projet</li>
            <li><span className="font-bold">Sélectionnez un expert</span> en fonction de ses qualifications et tarifs</li>
            <li><span className="font-bold">Programmez</span> votre RDV et payez en ligne</li>
            <li><span className="font-bold">Accédez</span> à votre espace personnel (documents, visio, suivi)</li>
          </ol>
          <p className="italic text-teal-600 font-medium">🚀 C'est parti ! Votre expert vous conseillera sur les étapes clefs et les options de suivi les mieux adaptées.</p>
        </div>
      )
    },
    {
      title: "👥 Pour qui ?",
      content: (
        <div className="space-y-4 text-sm text-gray-700 text-right md:text-left">
          <p className="font-bold">Pour tous les porteurs de projet, novices ou expérimentés :</p>
          <p className="italic">🏗️ Particuliers, investisseurs, entreprises, futurs propriétaires...</p>
          <ul className="space-y-1 inline-block text-left">
            <li>✅ Construction neuve</li>
            <li>✅ Rénovation énergétique</li>
            <li>✅ Réhabilitations et agrandissements</li>
            <li>✅ Locaux professionnels ou habitation</li>
          </ul>
        </div>
      )
    },
    {
      title: "💰 Combien ça coûte ?",
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <p className="font-bold text-blue-800">Bonne nouvelle, utiliser experbat ne vous coûte rien !</p>
          <p>▶️ La plateforme est financée par les professionnels, vous accédez gratuitement aux experts.</p>
          <p>▶️ Vous ne réglez que les prestations des pros aux tarifs convenus avec eux.</p>
          <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
            <p className="text-xs italic">💡 experbat se rémunère via l'abonnement des experts (architectes, BET, AMO) pour leur offrir visibilité et outils de gestion.</p>
          </div>
          <p className="font-bold text-teal-700">✅ Résultat : Accès aux pros qualifiés sans surcoût.</p>
        </div>
      )
    },
    {
      title: "🗺️ Où intervenons-nous ?",
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <p className="font-bold text-blue-600">experbat accompagne vos projets partout en France (Métropole et Outre-mer).</p>
          <p>Nos experts certifiés interviennent en ligne, garantissant disponibilité rapide et absence de contrainte géographique.</p>
          <p className="italic font-medium text-teal-600">💡 Que vous soyez en ville ou en zone rurale, votre expert est à portée de clic.</p>
        </div>
      )
    },
    {
      title: "👥 Communauté",
      content: (
        <div className="space-y-4 text-sm text-gray-700">
          <p className="font-bold">La communauté experbat, ce sont tous ceux qui font vivre le bâtiment :</p>
          <ul className="list-disc pl-5">
            <li><span className="font-bold">Porteurs de projet :</span> concrétisent leurs ambitions</li>
            <li><span className="font-bold">Experts certifiés :</span> apportent leur savoir-faire</li>
            <li><span className="font-bold">Partenaires :</span> fournisseurs et acteurs de la transition</li>
          </ul>
          <p className="text-teal-600 font-bold border-t pt-4">Notre ambition : Créer le premier écosystème transparent et collaboratif du bâtiment en France.</p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full space-y-3 mt-8">
      <div className="bg-projectHolder text-white px-4 py-3 rounded-t-xl font-bold flex justify-between items-center text-sm md:text-base">
        <span>💬 Des questions avant de vous lancer ?</span>
        <span className="text-xs uppercase bg-white/20 px-2 py-1 rounded">(accordéon exclusif)</span>
      </div>
      
      <div className="border border-gray-200 rounded-b-xl overflow-hidden bg-white shadow-inner">
        {faqData.map((item, index) => (
          <div key={index} className="border-b last:border-0 border-gray-100">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition font-bold text-blue-900 bg-gray-50/50"
            >
              <span>{item.title}</span>
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-6 bg-white border-t border-gray-50 animate-in fade-in slide-in-from-top-1">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer de l'accordéon "Encore des questions" */}
      <div className="bg-gray-100 p-4 rounded-xl mt-6 flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-200">
        <p className="text-xs text-gray-600 italic">C'est naturel, se lancer dans un projet soulève des interrogations.</p>
        <button className="bg-blue-400/50 hover:bg-blue-400 text-blue-900 px-6 py-2 rounded-lg font-bold transition">
          Contactez nous
        </button>
      </div>
    </div>
  );
}