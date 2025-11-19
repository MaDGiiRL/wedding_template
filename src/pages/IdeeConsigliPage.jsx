// src/pages/IdeeConsigliPage.jsx
export default function IdeeConsigliPage() {
  const tips = [
    {
      category: "Organizzazione",
      title: "Da dove iniziare con la pianificazione",
      desc: "Una mini guida passo-passo per non andare in panico.",
    },
    {
      category: "Budget",
      title: "Come distribuire il budget senza sorprese",
      desc: "Percentuali indicative per location, catering, foto, fiori e altro.",
    },
    {
      category: "Ospiti",
      title: "Gestire la lista invitati senza sensi di colpa",
      desc: "Consigli pratici per prendere decisioni difficili.",
    },
  ];

  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900">
            Idee &amp; consigli
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl">
            Articoli brevi, checklist e suggerimenti pratici per aiutarti in
            ogni fase: dal “Sì” iniziale al taglio torta.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-[2fr,1.3fr]">
          {/* Lista articoli */}
          <div className="space-y-3">
            {tips.map((tip) => (
              <article
                key={tip.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5"
              >
                <p className="text-[11px] font-semibold text-rose-500 uppercase tracking-wide">
                  {tip.category}
                </p>
                <h2 className="mt-1 text-sm font-semibold text-slate-900">
                  {tip.title}
                </h2>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {tip.desc}
                </p>
                <button className="mt-3 text-[11px] font-medium text-rose-500 hover:text-rose-600">
                  Leggi l’articolo →
                </button>
              </article>
            ))}
          </div>

          {/* Box laterale */}
          <aside className="space-y-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Strumenti collegati
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Metti in pratica i consigli usando i tuoi strumenti personali.
              </p>
              <ul className="mt-3 space-y-2 text-xs text-rose-500 font-medium">
                <li>• Checklist del matrimonio</li>
                <li>• Calcolatore di budget</li>
                <li>• Gestione degli invitati</li>
                <li>• Sito web del matrimonio</li>
              </ul>
            </div>

            <div className="bg-rose-500 rounded-3xl text-white p-4 sm:p-5">
              <p className="text-sm font-semibold">
                Ti senti sopraffatta dall’organizzazione?
              </p>
              <p className="mt-2 text-xs text-rose-50">
                Crea il tuo piano in pochi minuti usando gli strumenti della
                dashboard. Piccoli step, zero panico.
              </p>
              <button className="mt-3 text-[11px] font-semibold bg-white/10 rounded-full px-3 py-1.5 hover:bg-white/20">
                Vai alla dashboard →
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
