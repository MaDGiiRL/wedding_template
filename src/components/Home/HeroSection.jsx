import SearchBar from "./SearchBar";

function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-rose-50 via-white to-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-rose-100 px-3 py-1 text-xs font-medium text-rose-500">
                        Organizzazione matrimonio semplificata
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                        Trova i fornitori perfetti
                        <span className="text-rose-500"> per il tuo sì</span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                        Scopri location da sogno, fotografi, catering e tutti i professionisti
                        di cui hai bisogno per il tuo grande giorno. Filtra per città, budget
                        e stile del matrimonio.
                    </p>

                    <SearchBar />

                    <div className="flex flex-wrap gap-4 items-center text-xs text-slate-500">
                        <div className="flex -space-x-2">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-rose-200 text-[10px]">
                                A
                            </span>
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-rose-300 text-[10px]">
                                L
                            </span>
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-rose-400 text-[10px]">
                                M
                            </span>
                        </div>
                        <span>+5.000 coppie stanno organizzando su MioMatrimonio</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-3xl bg-white shadow-xl shadow-rose-100/60 p-4 space-y-4">
                        <div className="h-60 rounded-2xl bg-[url('https://i.imgur.com/wDJcqWi.png')] bg-contain bg-center bg-no-repeat" />
                        <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="rounded-2xl bg-slate-50 p-3">
                                <p className="font-semibold text-slate-900">Location romantiche</p>
                                <p className="text-slate-500 mt-1">Ville, cascine, rooftop…</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-3">
                                <p className="font-semibold text-slate-900">Fotografi</p>
                                <p className="text-slate-500 mt-1">Reportage naturali</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-3">
                                <p className="font-semibold text-slate-900">Catering</p>
                                <p className="text-slate-500 mt-1">Menù personalizzati</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-3">
                                <p className="font-semibold text-slate-900">Musica & DJ</p>
                                <p className="text-slate-500 mt-1">Party indimenticabile</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white shadow-lg shadow-rose-100 px-4 py-3 text-xs">
                        ⭐️ 4,9/5 da migliaia di coppie
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;