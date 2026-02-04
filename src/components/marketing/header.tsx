import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-800">
          experbat
        </Link>
        
        <nav className="hidden space-x-8 text-sm font-bold uppercase md:flex">
          <Link href="/" className="text-gray-900 hover:text-blue-800">Accueil</Link>
          <Link href="/decouvrir" className="text-gray-900 hover:text-blue-800">Découvrir</Link>
          <Link href="/forum" className="text-gray-900 hover:text-blue-800">Forum</Link>
          <Link href="/compte" className="text-gray-900 hover:text-blue-800">Mon Compte ▼</Link>
          <Link href="/contact" className="text-gray-900 hover:text-blue-800">Contact</Link>
        </nav>
      </div>
    </header>
  );
}