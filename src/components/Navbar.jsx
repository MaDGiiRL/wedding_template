import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-rose-500" : "text-slate-700 hover:text-rose-500"
    }`;

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-rose-500 flex items-center justify-center text-white text-lg font-semibold">
              M
            </div>
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-slate-900">Mio</span>
              <span className="text-rose-500">Matrimonio</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/fornitori" className={navLinkClasses}>
              Fornitori
            </NavLink>
            <NavLink to="/ispirazioni" className={navLinkClasses}>
              Ispirazioni
            </NavLink>
            <NavLink to="/idee" className={navLinkClasses}>
              Idee &amp; consigli
            </NavLink>
            <NavLink to="/community" className={navLinkClasses}>
              Community
            </NavLink>
          </nav>

          {/* Auth + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-700 hover:text-rose-500"
            >
              Accedi
            </Link>
            <Link
              to="/registrati"
              className="text-sm font-medium border border-rose-500 text-rose-500 px-4 py-2 rounded-full hover:bg-rose-50 transition"
            >
              Registrati
            </Link>
            <Link
              to="/fornitori/registrazione"
              className="hidden lg:inline-flex text-xs font-medium px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Sei un fornitore?
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Apri menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-slate-900"></span>
              <span className="block h-0.5 w-5 bg-slate-900"></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-4">
            <nav className="flex flex-col gap-3">
              <NavLink
                to="/fornitori"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Fornitori
              </NavLink>
              <NavLink
                to="/ispirazioni"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Ispirazioni
              </NavLink>
              <NavLink
                to="/idee"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Idee &amp; consigli
              </NavLink>
              <NavLink
                to="/community"
                className={navLinkClasses}
                onClick={() => setOpen(false)}
              >
                Community
              </NavLink>
            </nav>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/login"
                className="w-full text-center text-sm font-medium text-slate-700 border border-slate-200 rounded-full py-2 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Accedi
              </Link>
              <Link
                to="/registrati"
                className="w-full text-center text-sm font-medium border border-rose-500 text-white bg-rose-500 px-4 py-2 rounded-full hover:bg-rose-600 transition"
                onClick={() => setOpen(false)}
              >
                Registrati
              </Link>
              <Link
                to="/fornitori/registrazione"
                className="w-full text-center text-xs font-medium px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
                onClick={() => setOpen(false)}
              >
                Sei un fornitore?
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
