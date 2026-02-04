// src/components/marketing/header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-projectHolder">
          Experbat
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/" className="text-gray-700 hover:text-projectHolder">Accueil</Link>
          <Link href="/discover" className="text-gray-700 hover:text-projectHolder">Découvrir</Link>
          <Link href="/forum" className="text-gray-700 hover:text-projectHolder">Forum</Link>
          <Link href="/account" className="text-gray-700 hover:text-projectHolder">Mon Compte</Link>
          <Link href="/contact" className="text-gray-700 hover:text-projectHolder">Contact</Link>
        </nav>
        {/* Menu burger pour mobile (non implémenté ici pour la concision) */}
      </div>
    </header>
  );
}
