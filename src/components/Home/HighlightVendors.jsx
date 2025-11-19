import { Link } from "react-router-dom";



function HighlightVendors() {
    const vendors = [
        {
            name: "Villa dei Sogni",
            type: "Location matrimonio",
            city: "Lago di Como",
            badge: "Top location 2025",
            image:
                "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            name: "Luce & Momenti",
            type: "Fotografo",
            city: "Milano",
            badge: "Stile reportage",
            image:
                "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            name: "Dolci Promesse",
            type: "Catering & torte",
            city: "Roma",
            badge: "Menù personalizzati",
            image:
                "https://images.pexels.com/photos/265940/pexels-photo-265940.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ];

    return (
        <section className="bg-slate-50/70">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                        Fornitori in evidenza
                    </h2>
                    <button className="text-xs sm:text-sm font-medium text-rose-500 hover:text-rose-600">
                        Scopri tutti i fornitori
                    </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {vendors.map((v) => (
                        <article
                            key={v.name}
                            className="overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-rose-200 hover:shadow-md transition flex flex-col"
                        >
                            <div
                                className="h-40 bg-cover bg-center"
                                style={{ backgroundImage: `url(${v.image})` }}
                            />
                            <div className="p-4 space-y-2 flex-1 flex flex-col">
                                <span className="inline-flex rounded-full bg-rose-50 px-2 py-1 text-[10px] font-medium text-rose-500 self-start">
                                    {v.badge}
                                </span>
                                <h3 className="text-sm font-semibold text-slate-900">
                                    {v.name}
                                </h3>
                                <p className="text-xs text-slate-500">
                                    {v.type} · {v.city}
                                </p>
                                <div className="mt-auto pt-2 flex items-center justify-between text-xs text-slate-500">
                                    <span>⭐️ 4,9 · 35 recensioni</span>
                                    <button className="font-medium text-rose-500 hover:text-rose-600">
                                        Vedi profilo
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default HighlightVendors;