import { Link } from "react-router";

export default function Registrati() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // qui poi chiamerai la tua API / servizio auth
    console.log("Registrazione submit");
  };

  return (
    <div className="min-h-[calc(100dvh-4rem-200px)] flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-8">
          <div className="mb-6 text-center space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900">
              Crea il tuo account
            </h1>
            <p className="text-sm text-slate-500">
              Salva fornitori, idee e tieni tutto sotto controllo.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Nome
              </label>
              <input
                type="text"
                required
                placeholder="Nome"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Cognome
              </label>
              <input
                type="text"
                required
                placeholder="Cognome"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="tu@email.it"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Minimo 8 caratteri, includi una lettera maiuscola e un numero.
              </p>
            </div>

            <div className="flex items-start gap-2 text-[11px] text-slate-500">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300"
              />
              <span>
                Accetto i{" "}
                <button
                  type="button"
                  className="text-rose-500 hover:text-rose-600 font-medium"
                >
                  Termini e condizioni
                </button>{" "}
                e l&apos;informativa sulla privacy.
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium py-2.5 transition"
            >
              Crea account
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-slate-500">
            Hai già un account?{" "}
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
  );
}
