import { Link } from "react-router-dom";

export default function RegistrazioneFornitori() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registrazione fornitore submit");
  };

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900">
            Diventa un fornitore su{" "}
            <span className="text-rose-500">MioMatrimonio</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Raggiungi migliaia di coppie ogni mese, mostra i tuoi lavori,
            ricevi richieste di preventivo e fai crescere la tua attività.
          </p>
        </div>

        {/* GRID: left text + right form */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* INFO BOX */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">
                Perché entrare nella piattaforma?
              </h2>
              <ul className="text-sm text-slate-600 space-y-3">
                <li>• Visibilità garantita a coppie realmente interessate</li>
                <li>• Profilo dedicato con foto, descrizione e recensioni</li>
                <li>• Ricevi richieste di preventivo in modo diretto</li>
                <li>• Gestisci tutto in un’unica dashboard</li>
                <li>• Supporto dedicato per migliorare il tuo profilo</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-rose-500 p-6 text-white space-y-3 shadow-lg">
              <h3 className="text-lg font-semibold">Offerta speciale</h3>
              <p className="text-sm text-rose-50">
                Registrati oggi e ottieni **30 giorni gratuiti**
                con profilo Premium.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl bg-white p-8 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Crea il profilo del tuo business
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome azienda */}
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Nome dell’attività
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:ring-2 focus:ring-rose-200 focus:outline-none"
                  placeholder="Es. Villa dei Sogni"
                />
              </div>

              {/* Categoria */}
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Categoria
                </label>
                <select
                  required
                  className="w-full mt-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:ring-2 focus:ring-rose-200 focus:outline-none"
                >
                  <option value="">Seleziona categoria</option>
                  <option>Location</option>
                  <option>Fotografo / Videomaker</option>
                  <option>Catering</option>
                  <option>Musica & DJ</option>
                  <option>Fiori</option>
                  <option>Abiti sposa / sposo</option>
                  <option>Wedding planner</option>
                  <option>Animazione</option>
                  <option>Auto matrimonio</option>
                  <option>Makeup & Hair</option>
                </select>
              </div>

              {/* Città */}
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Città
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:ring-2 focus:ring-rose-200 focus:outline-none"
                  placeholder="Es. Milano, Roma..."
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Email aziendale
                </label>
                <input
                  type="email"
                  required
                  className="w-full mt-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:ring-2 focus:ring-rose-200 focus:outline-none"
                  placeholder="azienda@email.it"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full mt-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:ring-2 focus:ring-rose-200 focus:outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Minimo 8 caratteri.
                </p>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 text-[11px] text-slate-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-3.5 w-3.5 rounded border-slate-300"
                />
                <p>
                  Accetto i{" "}
                  <button className="text-rose-500 font-medium">
                    Termini e condizioni
                  </button>{" "}
                  e l’informativa sulla privacy.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2.5 transition"
              >
                Crea profilo fornitore
              </button>
            </form>

            <p className="text-xs text-center text-slate-500 mt-5">
              Sei già registrato?{" "}
              <Link
                to="/login"
                className="text-rose-500 font-medium hover:text-rose-600"
              >
                Accedi
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
