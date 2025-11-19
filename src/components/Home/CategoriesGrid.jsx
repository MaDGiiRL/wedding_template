import { Link } from "react-router-dom";



function CategoriesGrid() {
    const categories = [
        { label: "Location", desc: "Ville, cascine, rooftop", emoji: "🏰" },
        { label: "Fotografia", desc: "Reportage, video, drone", emoji: "📷" },
        { label: "Catering", desc: "Banqueting, torte, aperitivi", emoji: "🍽️" },
        { label: "Musica & DJ", desc: "Live band, DJ set", emoji: "🎧" },
        { label: "Abiti sposi", desc: "Sposa, sposo, accessori", emoji: "👗" },
        { label: "Wedding planner", desc: "Organizzazione completa", emoji: "📋" },
    ];

    return (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Esplora le categorie principali
                </h2>
                <button className="text-xs sm:text-sm font-medium text-rose-500 hover:text-rose-600">
                    Vedi tutte &rarr;
                </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((cat) => (
                    <button
                        key={cat.label}
                        className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 hover:border-rose-200 hover:shadow-sm transition text-left"
                    >
                        <span className="text-xl">{cat.emoji}</span>
                        <div>
                            <p className="font-medium text-sm text-slate-900">
                                {cat.label}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{cat.desc}</p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default CategoriesGrid;