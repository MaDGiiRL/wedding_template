import { useState, useEffect } from "react";

/* ─────────────────────────── */
/*         WP CONFIG           */
/* ─────────────────────────── */

// 👉 Meglio usare le env di Vite (puoi anche lasciare stringhe hardcoded per test)
const WP_BASE_URL = import.meta.env.VITE_WP_BASE_URL || "https://TUO-SITO-WP.com";
const WP_PAGE_ID = import.meta.env.VITE_WP_PAGE_ID || 7945;
const WP_USERNAME = import.meta.env.VITE_WP_USERNAME || "il-tuo-utente-wp";
const WP_APP_PASSWORD =
  import.meta.env.VITE_WP_APP_PASSWORD || "LA_APP_PASSWORD_GENERATA";

// helper per Authorization header (Basic Auth)
const WP_AUTH_HEADER =
  "Basic " + btoa(`${WP_USERNAME}:${WP_APP_PASSWORD}`);

/* ─────────────────────────── */
/*           HELPERS           */
/* ─────────────────────────── */

function formatDateForHero(dateStr) {
  if (!dateStr) return "Data da definire";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "Data da definire";

  const formatter = new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return formatter.format(date);
}

/* ─────────────────────────── */
/*         PREVIEW SIDE        */
/* ─────────────────────────── */

function WeddingWebsitePreview({ form }) {
  const {
    headerTitle,
    weddingDate,
    location,
    headerImageUrl,
    aboutHeading,
    aboutText,
    storyText,
    rsvpHeading,
    rsvpText,
    ceremonyPlace,
    ceremonyTime,
    receptionPlace,
    receptionTime,
  } = form;

  const daysDiff = (() => {
    if (!weddingDate) return null;
    const target = new Date(weddingDate);
    if (isNaN(target.getTime())) return null;
    const now = new Date();
    const diffMs = target.getTime() - now.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    return diffDays;
  })();

  return (
    <div className="bg-slate-900/5 rounded-3xl border border-slate-200 shadow-inner p-3 sm:p-4">
      <div className="text-[10px] uppercase tracking-wide text-slate-500 mb-2 flex items-center justify-between">
        <span>Live preview</span>
        <span className="rounded-full bg-slate-800 text-white px-2 py-0.5">
          Landing simulata
        </span>
      </div>

      <div className="bg-white rounded-[1.75rem] shadow-md overflow-hidden border border-slate-100">
        {/* HERO */}
        <div className="relative h-56 sm:h-64">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url("${
                headerImageUrl || "https://via.placeholder.com/1200x600"
              }")`,
            }}
          />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
            <p className="text-xs tracking-[0.2em] uppercase text-rose-100">
              We are getting married
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
              {headerTitle || "Your Names Here"}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-rose-50">
              {formatDateForHero(weddingDate)}
              {location ? ` · ${location}` : ""}
            </p>

            {typeof daysDiff === "number" && (
              <div className="mt-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] backdrop-blur">
                <span>⏳</span>
                {daysDiff > 0 && (
                  <span>
                    Mancano <strong>{daysDiff}</strong> giorni al matrimonio
                  </span>
                )}
                {daysDiff === 0 && <span>Oggi è il grande giorno! 🎉</span>}
                {daysDiff < 0 && (
                  <span>
                    Sposi da <strong>{Math.abs(daysDiff)}</strong> giorni 💍
                  </span>
                )}
              </div>
            )}

            <button className="mt-4 rounded-full bg-rose-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-rose-400">
              RSVP Now
            </button>
          </div>
        </div>

        {/* CONTENUTO */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* About */}
          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-900">
              {aboutHeading || "About Us"}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {aboutText || "Scrivi una breve descrizione di coppia..."}
            </p>
          </section>

          {/* Our Story */}
          <section className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
              Our Story
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {storyText ||
                "Qui puoi raccontare come vi siete conosciuti, la proposta e i momenti più belli."}
            </p>
          </section>

          {/* RSVP + Info evento */}
          <section className="grid gap-4 sm:grid-cols-[1.3fr,1.1fr]">
            <div className="rounded-2xl bg-rose-50 px-4 py-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">💌</span>
                <div>
                  <h3 className="text-xs font-semibold text-slate-900">
                    {rsvpHeading || "RSVP"}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Conferma la tua presenza
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                {rsvpText ||
                  "Scrivi un messaggio per chiedere gentilmente agli invitati di confermare la presenza."}
              </p>
              <button className="mt-1 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white hover:bg-slate-700">
                Compila RSVP
              </button>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-xs space-y-3">
              <div>
                <p className="text-[11px] font-semibold text-slate-700">
                  Cerimonia
                </p>
                <p className="text-[11px] text-slate-600">
                  {ceremonyPlace || "Luogo cerimonia"}
                </p>
                <p className="text-[11px] text-slate-500">
                  {ceremonyTime || "Orario da definire"}
                </p>
              </div>
              <div className="border-t border-dashed border-slate-200 pt-2">
                <p className="text-[11px] font-semibold text-slate-700">
                  Ricevimento
                </p>
                <p className="text-[11px] text-slate-600">
                  {receptionPlace || "Luogo ricevimento"}
                </p>
                <p className="text-[11px] text-slate-500">
                  {receptionTime || "Orario da definire"}
                </p>
              </div>
            </div>
          </section>

          {/* Footer mini */}
          <section className="border-t border-slate-100 pt-3">
            <p className="text-[10px] text-slate-400 text-center">
              Questo è solo un{" "}
              <span className="font-semibold">preview frontend</span> del tuo
              template · MaCasatoresc.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── */
/*        MAIN COMPONENT       */
/* ─────────────────────────── */

export default function WeddingWebsitePanel() {
  const [form, setForm] = useState({
    headerTitle: "Magda & Alex",
    weddingDate: "1999-03-30",
    location: "București, România",
    headerImageUrl:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    aboutHeading: "The Couple",
    aboutText:
      "Ci sposiamo! Questo spazio è perfetto per raccontare qualcosa in più su di noi, su come ci siamo conosciuti e su cosa significa per noi questo giorno.",
    storyText:
      "Ci siamo incontrati per caso, una sera d’estate del 2015. Da allora non ci siamo più lasciati...",
    rsvpHeading: "RSVP",
    rsvpText:
      "Ti chiediamo gentilmente di confermare la tua presenza il prima possibile.",
    ceremonyPlace: "Biserica Sf. Nicolae",
    ceremonyTime: "15:00",
    receptionPlace: "Salonul Imperial",
    receptionTime: "19:30",
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  /* 🔽 Carica dati da WordPress all'avvio */
  useEffect(() => {
    async function loadFromWP() {
      try {
        setLoading(true);

        const res = await fetch(
          `${WP_BASE_URL}/wp-json/wp/v2/pages/${WP_PAGE_ID}`
        );

        if (!res.ok) {
          console.error("Errore caricamento WP:", res.status);
          return;
        }

        const page = await res.json();
        const stored =
          page.meta && page.meta.wedding_data
            ? JSON.parse(page.meta.wedding_data)
            : null;

        if (stored && typeof stored === "object") {
          setForm((prev) => ({
            ...prev,
            ...stored, // merge: quello salvato su WP sovrascrive il default
          }));
        }
      } catch (err) {
        console.error("Errore fetch WordPress:", err);
      } finally {
        setLoading(false);
      }
    }

    loadFromWP();
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* 💾 Salva su WordPress via REST */
  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await fetch(
        `${WP_BASE_URL}/wp-json/wp/v2/pages/${WP_PAGE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: WP_AUTH_HEADER,
          },
          body: JSON.stringify({
            meta: {
              // chiave meta "wedding_data" sul tuo WP
              wedding_data: JSON.stringify(form),
            },
          }),
        }
      );

      if (!res.ok) {
        console.error("Errore salvataggio WP:", res.status);
        alert("Errore nel salvataggio su WordPress 😢");
        return;
      }

      alert("Dati salvati su WordPress ✅");
    } catch (err) {
      console.error("Errore salvataggio WordPress:", err);
      alert("Errore nel salvataggio su WordPress 😢");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="space-y-5">
      {/* TITOLO SEZIONE */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            Wedding Website
          </h1>
          <p className="text-xs text-slate-500">
            Modifica i contenuti e guarda in tempo reale l’anteprima del tuo
            sito di matrimonio.
          </p>
          {loading && (
            <p className="mt-1 text-[11px] text-slate-400">
              Carico i dati da WordPress...
            </p>
          )}
        </div>
        <a
          href="https://macasatoresc.com/website/madgiirl99/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
        >
          <span>👀</span>
          <span>Sito reale MaCasatoresc.com</span>
        </a>
      </div>

      {/* LAYOUT FORM + PREVIEW */}
      <div className="grid gap-5 lg:grid-cols-[1.05fr,1.2fr]">
        {/* COLONNA SINISTRA – FORM */}
        <div className="space-y-4">
          {/* Card: Header */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5">
            <div className="mb-3">
              <h2 className="text-sm font-semibold text-slate-900">
                Header & Hero
              </h2>
              <p className="text-xs text-slate-500">
                Nomi, data, location e immagine principale.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <label className="block">
                <span className="text-slate-700">Titolo</span>
                <input
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  value={form.headerTitle}
                  onChange={(e) => handleChange("headerTitle", e.target.value)}
                  placeholder="Magda & Alex"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-slate-700">Data del matrimonio</span>
                  <input
                    type="date"
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    value={form.weddingDate}
                    onChange={(e) =>
                      handleChange("weddingDate", e.target.value)
                    }
                  />
                </label>

                <label className="block">
                  <span className="text-slate-700">Location</span>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    value={form.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="Città, luogo..."
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-slate-700">Header image URL</span>
                <input
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  value={form.headerImageUrl}
                  onChange={(e) =>
                    handleChange("headerImageUrl", e.target.value)
                  }
                  placeholder="https://..."
                />
                <p className="mt-1 text-[11px] text-slate-400">
                  Puoi incollare l’URL di un’immagine (anche presa da
                  MaCasatoresc) per vedere subito la preview.
                </p>
              </label>
            </div>
          </div>

          {/* Card: About & Story */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5">
            <div className="mb-3">
              <h2 className="text-sm font-semibold text-slate-900">
                About & Story
              </h2>
              <p className="text-xs text-slate-500">
                Piccola presentazione e la vostra storia.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <label className="block">
                <span className="text-slate-700">Titolo sezione</span>
                <input
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  value={form.aboutHeading}
                  onChange={(e) => handleChange("aboutHeading", e.target.value)}
                  placeholder="The Couple"
                />
              </label>

              <label className="block">
                <span className="text-slate-700">Testo About</span>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  value={form.aboutText}
                  onChange={(e) => handleChange("aboutText", e.target.value)}
                  placeholder="Scrivi qualcosa su di voi..."
                />
              </label>

              <label className="block">
                <span className="text-slate-700">La vostra storia</span>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  value={form.storyText}
                  onChange={(e) => handleChange("storyText", e.target.value)}
                  placeholder="Come vi siete conosciuti, la proposta, momenti speciali..."
                />
              </label>
            </div>
          </div>

          {/* Card: RSVP & Info evento */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-5">
            <div className="mb-3">
              <h2 className="text-sm font-semibold text-slate-900">
                RSVP & Dettagli evento
              </h2>
              <p className="text-xs text-slate-500">
                Testo per la sezione RSVP e info pratiche su cerimonia e
                ricevimento.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <label className="block">
                <span className="text-slate-700">Titolo RSVP</span>
                <input
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  value={form.rsvpHeading}
                  onChange={(e) => handleChange("rsvpHeading", e.target.value)}
                  placeholder="RSVP"
                />
              </label>

              <label className="block">
                <span className="text-slate-700">Testo RSVP</span>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  value={form.rsvpText}
                  onChange={(e) => handleChange("rsvpText", e.target.value)}
                  placeholder="Messaggio per gli invitati sulla conferma di presenza..."
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-slate-700">Cerimonia – luogo</span>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    value={form.ceremonyPlace}
                    onChange={(e) =>
                      handleChange("ceremonyPlace", e.target.value)
                    }
                    placeholder="Nome / indirizzo"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-700">Cerimonia – orario</span>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    value={form.ceremonyTime}
                    onChange={(e) =>
                      handleChange("ceremonyTime", e.target.value)
                    }
                    placeholder="15:00"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-700">Ricevimento – luogo</span>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    value={form.receptionPlace}
                    onChange={(e) =>
                      handleChange("receptionPlace", e.target.value)
                    }
                    placeholder="Nome / indirizzo"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-700">Ricevimento – orario</span>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    value={form.receptionTime}
                    onChange={(e) =>
                      handleChange("receptionTime", e.target.value)
                    }
                    placeholder="19:30"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* BOTTONI */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="rounded-full bg-rose-500 px-5 py-2 text-xs font-semibold text-white hover:bg-rose-600 disabled:opacity-60"
            >
              {saving ? "Salvataggio..." : "Save su WordPress"}
            </button>
          </div>
        </div>

        {/* COLONNA DESTRA – PREVIEW */}
        <WeddingWebsitePreview form={form} />
      </div>
    </section>
  );
}
