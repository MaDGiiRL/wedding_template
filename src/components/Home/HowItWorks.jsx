import { Link } from "react-router-dom";



function HowItWorks() {
    const steps = [
        {
            title: "Crea il tuo profilo",
            desc: "Indica data, città e stile del matrimonio per ricevere suggerimenti personalizzati.",
            num: "1",
        },
        {
            title: "Scopri e confronta",
            desc: "Filtra per budget, leggi le recensioni e salva i fornitori che ti piacciono.",
            num: "2",
        },
        {
            title: "Contatta e prenota",
            desc: "Scrivi direttamente ai fornitori, chiedi preventivi e blocca la data.",
            num: "3",
        },
    ];

    return (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                        Come funziona MioMatrimonio
                    </h2>
                    <p className="text-sm text-slate-600 mb-6 max-w-md">
                        Tutto quello che ti serve per organizzare il tuo matrimonio in un’unica
                        piattaforma: dalla prima idea fino all’ultimo dettaglio.
                    </p>
                    <div className="space-y-4">
                        {steps.map((step) => (
                            <div key={step.num} className="flex gap-3">
                                <div className="mt-1 h-7 w-7 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-semibold">
                                    {step.num}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-5 space-y-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                        Strumenti per tenere tutto sotto controllo
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-600">
                        <li>• Checklist nozze con attività già pronte</li>
                        <li>• Gestione budget con spese e pagamenti</li>
                        <li>• Lista invitati con conferme di presenza</li>
                        <li>• Spazio condiviso con il partner</li>
                    </ul>
                    <button className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition">
                        Inizia gratis ora
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;