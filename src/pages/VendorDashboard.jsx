import { Link } from "react-router-dom";

const stats = [
  { label: "Visite al profilo (30 giorni)", value: "1.245" },
  { label: "Richieste di preventivo (30 giorni)", value: "32" },
  { label: "Tasso di risposta", value: "94%" },
  { label: "Valutazione media", value: "4,9 / 5" },
];

const leads = [
  {
    id: 1,
    couple: "Anna & Marco",
    date: "12/06/2025",
    weddingDate: "20/09/2025",
    status: "In attesa",
    budget: "10.000€",
  },
  {
    id: 2,
    couple: "Giulia & Luca",
    date: "10/06/2025",
    weddingDate: "05/10/2025",
    status: "Risposto",
    budget: "15.000€",
  },
  {
    id: 3,
    couple: "Sara & Davide",
    date: "08/06/2025",
    weddingDate: "30/08/2025",
    status: "Opzione inviata",
    budget: "12.000€",
  },
];

const listings = [
  {
    id: 1,
    name: "Villa dei Sogni",
    status: "Attiva",
    views: "845",
    leads: "18",
  },
  {
    id: 2,
    name: "Sala ricevimenti Panorama",
    status: "In revisione",
    views: "312",
    leads: "5",
  },
];

export default function VendorDashboard() {
  return (
    <div className="bg-slate-50 min-h-[calc(100dvh-4rem-200px)] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Dashboard fornitore
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Gestisci le tue inserzioni, rispondi alle richieste e monitora le
              performance del tuo business.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/fornitori/nuova-inserzione"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600 transition"
            >
              + Crea nuova inserzione
            </Link>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              Vai al profilo pubblico
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px,1fr]">
          {/* Sidebar */}
          <aside className="space-y-2">
            <p className="text-xs font-semibold text-slate-500 mb-2">
              Navigazione
            </p>
            <nav className="space-y-1">
              <button className="w-full text-left text-sm font-medium rounded-xl bg-slate-900 text-white px-3 py-2">
                Panoramica
              </button>
              <button className="w-full text-left text-sm text-slate-600 rounded-xl px-3 py-2 hover:bg-slate-100">
                Le mie inserzioni
              </button>
              <button className="w-full text-left text-sm text-slate-600 rounded-xl px-3 py-2 hover:bg-slate-100">
                Richieste & messaggi
              </button>
              <button className="w-full text-left text-sm text-slate-600 rounded-xl px-3 py-2 hover:bg-slate-100">
                Calendario & disponibilità
              </button>
              <button className="w-full text-left text-sm text-slate-600 rounded-xl px-3 py-2 hover:bg-slate-100">
                Fatturazione & piano
              </button>
              <button className="w-full text-left text-sm text-slate-600 rounded-xl px-3 py-2 hover:bg-slate-100">
                Impostazioni profilo
              </button>
            </nav>

            <div className="mt-6 rounded-2xl border border-rose-100 bg-rose-50 px-3 py-3 text-xs text-rose-800">
              <p className="font-semibold mb-1">Suggerimento rapido</p>
              <p>
                Completa il tuo profilo al 100% per aumentare la visibilità
                nelle ricerche delle coppie.
              </p>
            </div>
          </aside>

          {/* Main content */}
          <main className="space-y-6">
            {/* Stat cards */}
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm"
                >
                  <p className="text-[11px] font-medium text-slate-500 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xl font-semibold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </section>

            {/* Grid: leads + listings */}
            <section className="grid gap-6 lg:grid-cols-3">
              {/* Ultime richieste */}
              <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                      Ultime richieste di preventivo
                    </h2>
                    <p className="text-xs text-slate-500">
                      Rispondi rapidamente per migliorare la tua posizione.
                    </p>
                  </div>
                  <button className="text-xs font-medium text-rose-500 hover:text-rose-600">
                    Vedi tutte
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/60">
                        <th className="text-left font-medium text-slate-500 px-4 py-2">
                          Coppia
                        </th>
                        <th className="text-left font-medium text-slate-500 px-4 py-2">
                          Data richiesta
                        </th>
                        <th className="text-left font-medium text-slate-500 px-4 py-2">
                          Data nozze
                        </th>
                        <th className="text-left font-medium text-slate-500 px-4 py-2">
                          Budget
                        </th>
                        <th className="text-left font-medium text-slate-500 px-4 py-2">
                          Stato
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} className="border-b border-slate-50">
                          <td className="px-4 py-2 text-slate-700">
                            {lead.couple}
                          </td>
                          <td className="px-4 py-2 text-slate-500">
                            {lead.date}
                          </td>
                          <td className="px-4 py-2 text-slate-500">
                            {lead.weddingDate}
                          </td>
                          <td className="px-4 py-2 text-slate-500">
                            {lead.budget}
                          </td>
                          <td className="px-4 py-2">
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] font-medium ${
                                lead.status === "Risposto" ||
                                lead.status === "Opzione inviata"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Le mie inserzioni */}
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col">
                <div className="px-5 py-4 border-b border-slate-100">
                  <h2 className="text-sm font-semibold text-slate-900">
                    Le mie inserzioni
                  </h2>
                  <p className="text-xs text-slate-500">
                    Controlla lo stato delle tue schede.
                  </p>
                </div>

                <div className="p-5 space-y-4 flex-1">
                  {listings.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-slate-100 px-3 py-3 text-xs flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-slate-900">
                          {item.name}
                        </p>
                        <span
                          className={`rounded-full px-2 py-1 text-[11px] font-medium ${
                            item.status === "Attiva"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Visite: {item.views}</span>
                        <span>Richieste: {item.leads}</span>
                      </div>
                      <button className="mt-2 self-start text-[11px] font-medium text-rose-500 hover:text-rose-600">
                        Modifica inserzione
                      </button>
                    </div>
                  ))}
                </div>

                <div className="px-5 pb-4">
                  <button className="w-full text-xs font-medium rounded-xl border border-dashed border-slate-300 py-2 text-slate-500 hover:bg-slate-50">
                    + Aggiungi nuova inserzione
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
