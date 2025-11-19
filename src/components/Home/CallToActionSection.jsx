import { Link } from "react-router-dom";



function CallToActionSection() {
    return (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="rounded-3xl bg-gradient-to-r from-rose-500 to-rose-400 px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-white">
                        Sei un fornitore di matrimoni?
                    </h2>
                    <p className="text-sm text-rose-50 max-w-md">
                        Raggiungi migliaia di coppie ogni mese, mostra i tuoi lavori migliori
                        e ricevi richieste di preventivo direttamente nella tua area riservata.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        to="/fornitori/registrazione"
                        className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50 transition"
                    >
                        Crea il profilo fornitore
                    </Link>
                    <button className="inline-flex items-center justify-center rounded-full border border-rose-100 bg-rose-500/20 px-4 py-2.5 text-sm font-medium text-white hover:bg-rose-500/30 transition">
                        Scopri le soluzioni business
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CallToActionSection;