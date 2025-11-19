// src/pages/CommunityPage.jsx
export default function CommunityPage() {
  const threads = [
    {
      title: "Chi si sposa nel 2026? Organizziamo un gruppo!",
      replies: 42,
      tag: "Planning 2026",
    },
    {
      title: "Hai speso troppo o troppo poco per il fotografo?",
      replies: 18,
      tag: "Budget & fornitori",
    },
    {
      title: "Idee per intrattenere gli ospiti durante l’aperitivo",
      replies: 27,
      tag: "Intrattenimento",
    },
  ];

  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Community
            </h1>
            <p className="text-sm text-slate-500 max-w-xl">
              Fai domande, condividi dubbi e racconta i tuoi progressi ad altre
              coppie che stanno vivendo la stessa avventura.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            Crea un nuovo post
          </button>
        </section>

        {/* Thread list + side box */}
        <section className="grid gap-4 md:grid-cols-[2fr,1.1fr]">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-slate-900">
                Discussioni recenti
              </p>
              <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
                Vedi tutte
              </button>
            </div>

            <div className="space-y-2">
              {threads.map((t) => (
                <article
                  key={t.title}
                  className="rounded-2xl border border-slate-100 px-3 py-3 flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-slate-900">
                      {t.title}
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-600">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {t.replies} risposte · Ultima attività pochi minuti fa
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5">
              <p className="text-sm font-semibold text-slate-900">
                Come funziona la community
              </p>
              <ul className="mt-3 text-xs text-slate-500 space-y-1.5">
                <li>• Fai domande in modo gentile e chiaro.</li>
                <li>• Condividi la tua esperienza per aiutare gli altri.</li>
                <li>• Nessun giudizio: ognuno ha il suo matrimonio ideale.</li>
              </ul>
            </div>

            <div className="bg-rose-500 rounded-3xl text-white p-4 sm:p-5">
              <p className="text-sm font-semibold">
                Vuoi raccontare il tuo Real Wedding?
              </p>
              <p className="mt-2 text-xs text-rose-50">
                Una volta sposata, potrai condividere foto, fornitori e consigli
                per ispirare altre coppie.
              </p>
              <button className="mt-3 text-[11px] font-semibold bg-white/10 rounded-full px-3 py-1.5 hover:bg-white/20">
                Invia il tuo Real Wedding →
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
