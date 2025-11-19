import { useState } from "react";
import { Link, useNavigate } from "react-router";
import supabase from "../supabase/supabase-client";
import {
  ConfirmSchema,
  getFieldError,
  getErrors,
} from "../lib/validationForm";
import Swal from "sweetalert2";

export default function Registrati() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formSubmitted) {
      const fieldError = getFieldError(name, value);
      setFormErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const result = ConfirmSchema.safeParse(formState);

    if (!result.success) {
      const errors = getErrors(result.error);
      setFormErrors(errors);
      return;
    }

    const data = result.data;

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
          username: data.username,
        },
      },
    });
    setLoading(false);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Errore nella registrazione",
        text: error.message || "Qualcosa è andato storto",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Registrazione completata!",
        text: "Controlla la tua email per confermare l'account.",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/login"), 1800);
    }
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
              <label className="text-xs font-medium text-slate-600">Nome</label>
              <input
                name="firstName"
                type="text"
                placeholder="Nome"
                value={formState.firstName}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              {formErrors.firstName && (
                <p className="text-[11px] text-red-500 mt-1">
                  {formErrors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Cognome
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Cognome"
                value={formState.lastName}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              {formErrors.lastName && (
                <p className="text-[11px] text-red-500 mt-1">
                  {formErrors.lastName}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Username
              </label>
              <input
                name="username"
                type="text"
                placeholder="username"
                value={formState.username}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              {formErrors.username && (
                <p className="text-[11px] text-red-500 mt-1">
                  {formErrors.username}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">Email</label>
              <input
                name="email"
                type="email"
                placeholder="tu@email.it"
                value={formState.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              {formErrors.email && (
                <p className="text-[11px] text-red-500 mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Minimo 8 caratteri, includi una lettera maiuscola e un numero.
              </p>
              {formErrors.password && (
                <p className="text-[11px] text-red-500 mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 disabled:opacity-70 text-white text-sm font-medium py-2.5 transition"
            >
              {loading ? "Creazione in corso..." : "Crea account"}
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
