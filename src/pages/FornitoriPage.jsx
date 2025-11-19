// src/pages/FornitoriPage.jsx
export default function FornitoriPage() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Trova i tuoi fornitori
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Scopri professionisti per ogni aspetto del tuo matrimonio:
              location, foto, fiori, musica e molto altro.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600">
            Inizia la ricerca
          </button>
        </section>

        {/* Filtri rapidi */}
        <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-800">
              Filtra per categoria e zona
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="Città o zona"
                className="w-full sm:w-48 rounded-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
              />
              <select
                className="w-full sm:w-48 rounded-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Seleziona categoria
                </option>
                <option>Location</option>
                <option>Fotografia &amp; Video</option>
                <option>Fiori &amp; decor</option>
                <option>Musica &amp; intrattenimento</option>
                <option>Abiti &amp; accessori</option>
              </select>
            </div>
          </div>
        </section>

        {/* Card categorie */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Location",
              desc: "Ville, ristoranti, agriturismi e spazi unici dove celebrare il vostro sì.",
            },
            {
              title: "Fotografi &amp; Videomaker",
              desc: "Professionisti che racconteranno ogni emozione del vostro giorno.",
            },
            {
              title: "Fioristi &amp; Decor",
              desc: "Allestimenti floreali, decorazioni e styling della location.",
            },
            {
              title: "Musica &amp; DJ",
              desc: "DJ, band live e musicisti per cerimonia e ricevimento.",
            },
            {
              title: "Wedding planner",
              desc: "Esperti che ti accompagnano in tutta l’organizzazione.",
            },
            {
              title: "Altri servizi",
              desc: "Torte nuziali, animazione, auto, grafica, bomboniere e altro.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <button className="mt-4 inline-flex items-center text-xs font-medium text-rose-500 hover:text-rose-600">
                Esplora {item.title.toLowerCase()} →
              </button>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
