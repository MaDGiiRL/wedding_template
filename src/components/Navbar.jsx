import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import supabase from "../supabase/supabase-client";
import Swal from "sweetalert2";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);   // 🟩 UTENTE LOGGATO
  const navigate = useNavigate();

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-rose-500" : "text-slate-700 hover:text-rose-500"
    }`;

  // 🔐 Recupero utente + ascolto cambi autenticazione
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    };

    getCurrentUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 🔴 LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);

    Swal.fire({
      icon: "success",
      title: "Logout effettuato!",
      timer: 1500,
      showConfirmButton: false,
    });

    navigate("/"); // oppure "/login"
  };

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <div className="w-10 rounded-full flex items-center justify-center">
              <img src="https://i.imgur.com/wDJcqWi.png" alt="Logo" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-slate-900">Mio</span>
              <span className="text-rose-500">Matrimonio</span>
            </span>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/dashboard" className={navLinkClasses}>
              Dashboard
            </NavLink>
            <NavLink to="/fornitori" className={navLinkClasses}>
              Fornitori
            </NavLink>
            <NavLink to="/ispirazioni" className={navLinkClasses}>
              Ispirazioni
            </NavLink>
            <NavLink to="/idee" className={navLinkClasses}>
              Idee & consigli
            </NavLink>
            <NavLink to="/community" className={navLinkClasses}>
              Community
            </NavLink>
          </nav>

          {/* Auth desktop */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {/* 🟩 Se loggata → mostra nome + logout */}
                <span className="text-sm text-slate-600">
                  Ciao{" "}
                  <strong>
                    {user.user_metadata?.username ||
                      user.user_metadata?.first_name ||
                      user.email}
                  </strong>
                </span>

                <button
                  onClick={handleLogout}
                  className="text-sm font-medium border border-slate-300 px-4 py-2 rounded-full hover:bg-slate-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* 🔵 Se NON loggata → mostra Accedi / Registrati */}
                <Link
                  to="/login"
                  className="text-sm font-medium text-slate-700 hover:text-rose-500"
                >
                  Accedi
                </Link>
                <Link
                  to="/registrati"
                  className="text-sm font-medium border border-rose-500 text-rose-500 px-4 py-2 rounded-full hover:bg-rose-50"
                >
                  Registrati
                </Link>
              </>
            )}

            <Link
              to="/fornitori/registrazione"
              className="hidden lg:inline-flex text-xs font-medium px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800"
            >
              Sei un fornitore?
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-full border border-slate-300 p-2"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-5 bg-slate-900 mb-1"></span>
            <span className="block h-0.5 w-5 bg-slate-900"></span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-4">
            <nav className="flex flex-col gap-3">
              <NavLink onClick={() => setOpen(false)} to="/dashboard" className={navLinkClasses}>Dashboard</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/fornitori" className={navLinkClasses}>Fornitori</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/ispirazioni" className={navLinkClasses}>Ispirazioni</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/idee" className={navLinkClasses}>Idee & consigli</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/community" className={navLinkClasses}>Community</NavLink>
            </nav>

            <div className="flex flex-col gap-2">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="w-full text-sm border border-slate-300 py-2 rounded-full hover:bg-slate-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link onClick={() => setOpen(false)} to="/login" className="w-full text-sm border border-slate-300 py-2 rounded-full text-center">
                    Accedi
                  </Link>
                  <Link onClick={() => setOpen(false)} to="/registrati" className="w-full text-sm bg-rose-500 text-white py-2 rounded-full text-center hover:bg-rose-600">
                    Registrati
                  </Link>
                </>
              )}

              <Link
                onClick={() => setOpen(false)}
                to="/fornitori/registrazione"
                className="w-full text-xs bg-slate-900 text-white py-2 rounded-full text-center hover:bg-slate-800"
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
