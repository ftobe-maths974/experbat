export function ForumSection() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col items-stretch rounded-2xl border border-gray-200 bg-gray-50 shadow-sm md:flex-row">
        <div className="flex-1 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-projectHolder mb-6">
            experbat <span className="text-gray-800">Forum</span>
          </h2>
          <p className="font-bold text-gray-900 mb-4">Le forum est ouvert à tous.</p>
          <p className="text-blue-700 italic mb-6">Échangez, partagez et dialoguez librement sur vos projets.</p>
          <button className="rounded-lg bg-professional px-8 py-3 font-bold text-white transition hover:bg-professional-hover shadow-lg">
            Accédez gratuitement
          </button>
        </div>
        
        {/* IMAGE FORUM EN BACKGROUND */}
        <div 
          className="h-64 flex-1 bg-cover bg-center md:h-auto"
          style={{ backgroundImage: "url('./image-forum.png')" }}
        />
      </div>
    </section>
  );
}