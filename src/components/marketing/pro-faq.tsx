"use client";
import { useState } from "react";

export function ProFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      title: "⚙️ Comment ça marche ?",
      content: (
        <div className="space-y-6 text-sm text-gray-700">
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-professional">
            <p className="font-bold text-professional">En résumé, experbat, c'est :</p>
            <ul className="list-none space-y-1 mt-2">
              <li>✅ Une vitrine professionnelle vérifiée</li>
              <li>💼 Un espace collaboratif moderne pour vos clients</li>
              <li>📈 Un flux régulier de nouveaux projets qualifiés</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-900">1 - Créez votre profil expert</p>
              <p className="pl-4 border-l border-gray-200 mt-1">Inscrivez-vous en quelques minutes. Votre profil devient votre <span className="text-professional underline">vitrine digitale</span> : visible, vérifié et valorisé auprès d'une clientèle sérieuse.</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">2 - Pilotez vos projets dans un espace collaboratif</p>
              <p className="pl-4 border-l border-gray-200 mt-1">Accédez à votre <span className="text-professional underline">votre espace pro</span> pour partager plans, devis et documents. Planifiez vos visios et échangez en temps réel. Tout est centralisé et sécurisé.</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">3 - Développez votre activité grâce à Experbat</p>
              <p className="pl-4 border-l border-gray-200 mt-1">Recevez automatiquement des demandes de rendez-vous qualifiées. Vous restez libre d'accepter, de planifier ou de proposer vos conditions.</p>
            </div>
          </div>
          <p className="italic font-bold text-professional text-center">🚀 C'est parti ! Testez experbat gratuitement pour vos 3 premiers projets !</p>
        </div>
      )
    },
    {
      title: "👥 Pour qui ?",
      content: (
        <p className="text-sm text-gray-700">
          Experbat est conçu pour tous les acteurs de la maîtrise d'œuvre et du conseil : <span className="font-bold">Architectes, Bureaux d'études, AMO, Maîtres d'œuvre, diagnostiqueurs et ingénieurs conseil.</span>
        </p>
      )
    },
    {
      title: "💰 Combien ça coûte ?",
      content: (
        <div className="space-y-6 text-sm text-gray-700">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Formule SOLO */}
            <div className="border border-gray-200 p-4 rounded-lg bg-white shadow-sm">
              <p className="font-bold text-gray-900 border-b pb-2 mb-2">Formule SOLO</p>
              <p className="text-xl font-black text-professional">79€<span className="text-xs font-normal">/mois HT</span></p>
              <ul className="mt-4 space-y-1 text-xs">
                <li>👤 1 utilisateur</li>
                <li>🏗️ 10 projets actifs</li>
                <li>🌐 Vitrine web</li>
                <li>📦 10 Go stockage</li>
              </ul>
            </div>
            {/* Formule PRO */}
            <div className="border-2 border-professional p-4 rounded-lg bg-teal-50 shadow-md relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-professional text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Recommandé</span>
              <p className="font-bold text-gray-900 border-b border-professional/20 pb-2 mb-2">Formule PRO</p>
              <p className="text-xl font-black text-professional">149€<span className="text-xs font-normal">/mois HT</span></p>
              <ul className="mt-4 space-y-1 text-xs">
                <li>👥 3 utilisateurs</li>
                <li>🏗️ 20 projets actifs</li>
                <li>🌐 Vitrine web</li>
                <li>📦 10 Go stockage</li>
              </ul>
            </div>
            {/* Formule AGENCE */}
            <div className="border border-gray-200 p-4 rounded-lg bg-white shadow-sm">
              <p className="font-bold text-gray-900 border-b pb-2 mb-2">Formule AGENCE</p>
              <p className="text-xl font-black text-professional">299€<span className="text-xs font-normal">/mois HT</span></p>
              <ul className="mt-4 space-y-1 text-xs">
                <li>🏢 10 utilisateurs</li>
                <li>♾️ Projets illimités</li>
                <li>🌐 Vitrine web</li>
                <li>📦 200 Go stockage</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold mb-2">Essai gratuit :</p>
            <ul className="text-xs space-y-1">
              <li>🎯 3 projets, toutes fonctionnalités</li>
              <li>💳 Sans carte bancaire</li>
              <li>🎓 Onboarding guidé inclus</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "💬 Encore des questions ?",
      content: (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 italic">C'est naturel, se lancer soulève des interrogations. Notre équipe est là pour vous accompagner.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg shrink-0">
            Contactez nous
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="w-full space-y-3 mt-8">
      <div className="bg-professional text-white px-4 py-3 rounded-t-xl font-bold flex justify-between items-center">
        <span>🛠️ L'outils pour les PRO</span>
        <span className="text-xs uppercase bg-white/20 px-2 py-1 rounded">(accordéon exclusif)</span>
      </div>
      
      <div className="border border-gray-200 rounded-b-xl overflow-hidden bg-white shadow-inner">
        {faqData.map((item, index) => (
          <div key={index} className="border-b last:border-0 border-gray-100">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition font-bold text-teal-900 bg-gray-50/30"
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
      
      <div className="mt-4 flex justify-end">
        <button className="bg-professional hover:brightness-110 text-white px-6 py-2 rounded-lg font-bold transition shadow-md flex items-center gap-2">
          <span>👷</span> Inscrivez vous
        </button>
      </div>
    </div>
  );
}