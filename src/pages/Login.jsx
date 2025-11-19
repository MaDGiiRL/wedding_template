import { useState } from "react";
import { Link, useNavigate } from "react-router";
import supabase from "../supabase/supabase-client";
import {
  ConfirmSchemaLogin,
  getFieldError,
  getErrors,
} from "../lib/validationForm";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
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

    const result = ConfirmSchemaLogin.safeParse(formState);

    if (!result.success) {
      const errors = getErrors(result.error);
      setFormErrors(errors);
      return;
    }

    const data = result.data;

    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    setLoading(false);

    if (authError) {
      Swal.fire({
        icon: "error",
        title: "Errore di accesso",
        text: "Email o password errati",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Accesso effettuato!",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/dashboard"), 1500);
    }
  };

  return (
    <div className="min-h-[calc(100dvh-4rem-200px)] flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-8">
          <div className="mb-6 text-center space-y-2">
            <h1 className="text-2xl font-semibold text-slate-900">
              Bentornato su <span className="text-rose-500">MioMatrimonio</span>
            </h1>
            <p className="text-sm text-slate-500">
              Accedi per continuare a organizzare il tuo matrimonio.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">
                Email
              </label>
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
              {loading ? "Accesso in corso..." : "Accedi"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-slate-500">
            Non hai ancora un account?{" "}
            <Link
              to="/registrati"
              className="text-rose-500 font-medium hover:text-rose-600"
            >
              Registrati
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
