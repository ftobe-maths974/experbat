export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Experbat. De l'idée à la réalisation, sans perdre de temps.</p>
      </div>
    </footer>
  );
}