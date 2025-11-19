import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white mt-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="md:col-span-2 space-y-3">
                        <div className="flex h-16 items-center justify-between">
                            {/* Logo */}
                            <Link to="/" className="flex items-center gap-1">
                                <div className="w-10 rounded-full  flex items-center justify-center text-white text-lg font-semibold">
                                    <img src="/src/assets/logo.png" alt="" />
                                </div>
                                <span className="font-semibold text-lg tracking-tight">
                                    <span className="text-slate-900">Mio</span>
                                    <span className="text-rose-500">Matrimonio</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-3">
                                Per le coppie
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>Checklist nozze</li>
                                <li>Gestione budget</li>
                                <li>Lista invitati</li>
                                <li>Ispirazioni</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-3">
                                Per i fornitori
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>Entra nella piattaforma</li>
                                <li>Soluzioni per il tuo business</li>
                                <li>Pubblicità</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                        <p className="text-xs text-slate-400">
                            © {new Date().getFullYear()} MioMatrimonio. Tutti i diritti riservati. Developer with ❤️ by MaDGiiRL.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                            <button>Termini e condizioni</button>
                            <button>Privacy</button>
                            <button>Cookie</button>
                        </div>
                    </div>
                </div>
        </footer>
    );
}
