// src/pages/IspirazioniPage.jsx
export default function IspirazioniPage() {
  const mockInspirations = [
    {
      tag: "Boho chic",
      title: "Matrimonio all’aperto con lucine e pampas",
      desc: "Palette calde, materiali naturali e atmosfera rilassata.",
    },
    {
      tag: "Classico elegante",
      title: "Bianco, verde e tocchi dorati",
      desc: "Un look senza tempo per una cerimonia da favola.",
    },
    {
      tag: "Minimal moderno",
      title: "Linee pulite e palette neutra",
      desc: "Per chi ama la semplicità super curata.",
    },
  ];

  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            Ispirazioni per il tuo matrimonio
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl">
            Salva idee, palette, allestimenti e dettagli che ami. Questo spazio
            diventa il tuo moodboard personale per costruire il matrimonio dei
            tuoi sogni.
          </p>
        </section>

        {/* Filtri / categorie */}
        <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5 flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 font-medium">
              Tutto
            </span>
            <button className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100">
              Palette colori
            </button>
            <button className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100">
              Allestimenti
            </button>
            <button className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100">
              Bouquet &amp; fiori
            </button>
            <button className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100">
              Tavola &amp; mise en place
            </button>
          </div>
          <button className="text-xs font-medium text-rose-500 hover:text-rose-600 mt-2 sm:mt-0">
            Aggiungi ispirazione ✨
          </button>
        </section>

        {/* Lista ispirazioni */}
        <section className="grid gap-4 md:grid-cols-3">
          {mockInspirations.map((item, i) => (
            <article
              key={i}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="h-32 bg-slate-100" />
              <div className="p-4 space-y-2 flex-1 flex flex-col">
                <p className="text-[11px] uppercase tracking-wide text-rose-500 font-semibold">
                  {item.tag}
                </p>
                <h2 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-500 flex-1">{item.desc}</p>
                <button className="mt-3 text-[11px] font-medium text-rose-500 hover:text-rose-600 self-start">
                  Salva nel mio moodboard
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
