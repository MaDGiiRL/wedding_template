function SearchBar() {
    return (
        <div className="mt-2 rounded-2xl bg-white shadow-sm shadow-rose-100/60 border border-rose-100 p-3 sm:p-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex-1 grid gap-2 sm:grid-cols-3">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-500">
                        Cosa stai cercando?
                    </label>
                    <select className="text-sm rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200">
                        <option>Seleziona categoria</option>
                        <option>Location matrimonio</option>
                        <option>Fotografo</option>
                        <option>Catering</option>
                        <option>Musica &amp; DJ</option>
                        <option>Wedding planner</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-500">
                        Città o zona
                    </label>
                    <input
                        type="text"
                        placeholder="Es. Milano, Roma..."
                        className="text-sm rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-500">
                        Data indicativa
                    </label>
                    <input
                        type="date"
                        className="text-sm rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    />
                </div>
            </div>
            <button className="w-full sm:w-auto mt-1 sm:mt-0 rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-rose-600 transition">
                Cerca fornitori
            </button>
        </div>
    );
}
export default SearchBar;