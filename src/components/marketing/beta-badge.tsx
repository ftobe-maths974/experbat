// src/components/marketing/beta-badge.tsx

export function BetaBadge() {
  return (
    <div className="fixed right-[-35px] top-[100px] z-[100] rotate-45 pointer-events-none">
      <div className="bg-red-600 text-white px-10 py-1 shadow-lg border-2 border-white font-bold text-xs uppercase tracking-widest text-center">
        Bêta Publique - La Réunion
      </div>
    </div>
  );
}