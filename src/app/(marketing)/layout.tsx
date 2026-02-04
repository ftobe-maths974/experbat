// src/app/(marketing)/layout.tsx
import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function BetaBadge() {
  return (
    <div className="fixed right-[-35px] top-[100px] z-[100] rotate-45">
      <div className="bg-red-600 text-white px-10 py-1 shadow-lg border-2 border-white font-bold text-xs uppercase tracking-widest">
        Bêta Publique - La Réunion
      </div>
    </div>
  );
}