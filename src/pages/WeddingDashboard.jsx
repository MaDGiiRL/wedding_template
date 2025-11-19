import { useState } from "react";
import ChecklistPanel from "../components/Dashboard/ChecklistPanel";
import BudgetCalculatorPanel from "../components/Dashboard/BudgetCalculatorPanel";
import ProfilePanel from "../components/Dashboard/ProfilePanel";
import RealWeddingPanel from "../components/Dashboard/RealWeddingPanel";
import GuestManagementPanel from "../components/Dashboard/GuestManagementPanel";
import MyReview from "../components/Dashboard/MyReview";
import MyReviews from "../components/Dashboard/UserReviewsWidget";
import WeddingWebsitePanel from "../components/Dashboard/WeddingWebsitePanel";
const SIDEBAR_ITEMS = [
  "Dashboard",
  "My Profile",
  "Vendor Manager",
  "Checklist",
  "Budget Calculator",
  "Real Wedding",
  "Guest Management",
  "My Reviews",
  "Wedding Website",
];

const CHECKLIST_SECTIONS = [
  {
    month: "iulie 1998",
    tasks: [
      "Create your wedding website",
      "Find and book your florist",
      "Find and book your photographer",
      "Find and book your venue",
      "Find and book your videographer",
      "Find and book your wedding planner",
      "Find and order your wedding dress, suit, or tux",
      "Plan your engagement party",
      "Schedule an engagement photo shoot",
    ],
  },
  {
    month: "septembrie 1998",
    tasks: [
      "Finalize your guest list",
      "Find and book your DJ",
      "Find and book your band",
      "Find and book your ceremony musician",
      "Find and book your officiant",
      "Find and order your event rentals",
      "Find and order your wedding cake",
      "Find and order your wedding invitations",
      "Order attire for your wedding party",
      "Research songs",
      "Update your vendor team",
    ],
  },
  {
    month: "noiembrie 1998",
    tasks: [
      "Book accommodations for your wedding night",
      "Find and book your hair and makeup vendor",
      "Find and book your transportation vendor",
      "Find and order your partner's attire",
      "Plan and book your honeymoon",
      "Purchase your wedding accessories",
      "Schedule your ceremony rehearsal",
    ],
  },
  {
    month: "ianuarie 1999",
    tasks: [
      "Order alcohol for your wedding",
      "Plan your wedding ceremony",
      "Purchase guest book",
      "Purchase your wedding rings",
      "Write your vows",
    ],
  },
  {
    month: "martie 1999",
    tasks: [
      "Call guests who have not RSVP'd",
      "Finalize your vendor team",
      "Write a sweet note to your partner",
      "Assign duties to wedding party",
      "Confirm final details with all of your vendors",
      "Confirm all final deposits",
      "Pack for your honeymoon",
      "Prepare toasts",
      "Pull together last-minute essentials",
      "Drop off decor to reception venue",
      "Congratulations! You're married!",
      "Change your last name",
      "Review your vendor team",
      "Send thank-you notes",
      "Store your wedding attire",
    ],
  },
  {
    month: "aprilie 1999",
    tasks: ["Submit your Real Wedding to be featured on MaCasatoresc.com"],
  },
];

const CHECKLIST_DONE = 0;
const CHECKLIST_TOTAL = 48;

export default function WeddingDashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <div className="min-h-[calc(100dvh-4rem)] bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex gap-6">
          {/* SIDEBAR SINISTRA */}
          <aside className="w-56 shrink-0 bg-white border border-slate-100 rounded-3xl shadow-sm p-4 flex flex-col gap-4">
            <div className="px-2">
              <p className="text-xs font-medium text-slate-500">Welcome</p>
              <p className="text-base font-semibold text-slate-900 truncate">
                Madgiirl99
              </p>
            </div>

            <nav className="space-y-1 text-sm">
              {SIDEBAR_ITEMS.map((item) => (
                <SidebarItem
                  key={item}
                  label={item}
                  active={activeSection === item}
                  onClick={() => setActiveSection(item)}
                />
              ))}
            </nav>

            <button className="mt-2 text-sm font-medium text-rose-500 hover:text-rose-600 px-2 py-2 rounded-xl bg-rose-50/70">
              Logout
            </button>
          </aside>

          {/* PANNELLO DINAMICO DESTRA */}
          <main className="flex-1 space-y-6">
            {activeSection === "Dashboard" && <DashboardOverview />}
            {activeSection === "My Profile" && <ProfilePanel />}
            {activeSection === "Checklist" && <ChecklistPanel />}
            {activeSection === "Budget Calculator" && <BudgetCalculatorPanel />}
            {activeSection === "Real Wedding" && <RealWeddingPanel />}
            {activeSection === "Guest Management" && <GuestManagementPanel />}
            {activeSection === "My Review" && <MyReview />}
            {activeSection === "My Reviews" && <MyReviews />}
            {activeSection === "Wedding Website" && <WeddingWebsitePanel />}
          </main>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── */
/* COMPONENTI DI SUPPORTO      */
/* ─────────────────────────── */

function SidebarItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-xl text-sm transition ${
        active
          ? "bg-slate-900 text-white font-medium"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

/* DASHBOARD PRINCIPALE (SEZIONE "Dashboard") */
function DashboardOverview() {
  return (
    <>
      {/* FELICEMENTE SPOSATI + INFO MATRIMONIO */}
      <section className="grid gap-4 md:grid-cols-[2fr,1.3fr]">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-slate-500">Bentornata,</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Madgiirl99
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Ecco una panoramica del tuo percorso di organizzazione del
                matrimonio.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3 text-xs">
            <div className="rounded-2xl bg-slate-50 px-3 py-3">
              <p className="text-slate-500">Data del matrimonio</p>
              <p className="mt-1 font-semibold text-slate-900">30 marzo 1999</p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-3 py-3">
              <p className="text-slate-500">Stato</p>
              <p className="mt-1 font-semibold text-slate-900">
                Hai appena detto di sì? 🎉
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-3 py-3">
              <p className="text-slate-500">Fase di pianificazione</p>
              <p className="mt-1 font-semibold text-slate-900">Iniziamo!</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-rose-400 rounded-3xl text-white p-5 flex flex-col justify-between shadow-lg">
          <div className="space-y-1">
            <p className="text-sm font-medium">Felicemente sposati 🎉</p>
            <p className="text-3xl font-semibold leading-tight">
              9731
              <span className="block text-sm font-normal text-rose-50 mt-1">
                Giorni
              </span>
            </p>
          </div>
          <div className="mt-4 text-xs text-rose-50 space-y-1">
            <p>e</p>
            <p className="font-semibold">30 marzo 1999</p>
          </div>
        </div>
      </section>

      {/* STATO + TEAM FORNITORI */}
      <section className="grid gap-4 md:grid-cols-[2fr,1.3fr]">
        {/* STATO */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Stato</h2>
              <p className="text-xs text-slate-500">
                Hai appena detto di sì? Iniziamo!
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 text-xs">
            <StatusMetric label="Servizi assunti" value="0" total="0" />
            <StatusMetric
              label="Compiti completati"
              value={CHECKLIST_DONE}
              total={CHECKLIST_TOTAL}
            />
            <StatusMetric label="Ospiti presenti" value="0" total="0" />
          </div>

          <p className="mt-4 text-xs text-slate-500">
            0 di 0 categorie assunte · Inizia a creare il tuo team di fornitori
            dei sogni.
          </p>
        </div>

        {/* TEAM FORNITORI */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Il tuo team di fornitori
              </h2>
              <p className="text-xs text-slate-500">0 di 0 categorie assunte</p>
            </div>
            <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
              Visualizza tutti i miei fornitori
            </button>
          </div>

          <div className="border border-dashed border-slate-200 rounded-2xl px-3 py-4 text-center text-xs text-slate-500 flex-1 flex flex-col justify-center">
            <p className="font-medium text-slate-700 mb-1">
              Ricerca per fornitori
            </p>
            <p className="mb-3">
              In <span className="font-semibold">Posizione</span>
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-rose-500 px-4 py-2 text-xs font-medium text-white hover:bg-rose-600 transition">
              Cerca fornitori
            </button>
          </div>
        </div>
      </section>

      {/* OSPITI + DETTAGLI MATRIMONIO */}
      <section className="grid gap-4 lg:grid-cols-[1.5fr,1.2fr]">
        {/* PANORAMICA LISTA OSPITI */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Panoramica della lista degli ospiti
              </h2>
              <p className="text-xs text-slate-500">
                Tieni traccia delle presenze per ogni evento.
              </p>
            </div>
            <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
              Lista degli invitati
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <GuestRowIt label="Nozze" />
            <GuestRowIt label="Cena di prova" />
            <GuestRowIt label="Doccia" />
            <GuestRowIt label="Festa danzante" />
          </div>
        </div>

        {/* DETTAGLI MATRIMONIO */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            Dettagli del matrimonio
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Aggiungi dettagli chiave per personalizzare i tuoi strumenti di
            pianificazione.
          </p>

          <div className="space-y-3 text-xs mb-4">
            <DetailRow label="Colore" value="... coppie" />
            <DetailRow label="Stagione" value="... coppie" />
            <DetailRow label="Stile" value="... coppie" />
            <DetailRow label="Nome del designer" value="... coppie" />
            <DetailRow label="Luna di miele" value="... coppie" />
          </div>

          <div className="rounded-2xl border border-slate-100 px-3 py-3 text-xs space-y-1 mb-4">
            <p className="text-slate-600">Sito web per matrimoni</p>
            <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
              Visualizza il sito web
            </button>
            <p className="text-[11px] text-slate-500 truncate">
              https://macasatoresc.com/website/madgiirl99/
            </p>
          </div>

          <button className="w-full rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition">
            Modifica dettagli del matrimonio
          </button>
        </div>
      </section>

      {/* COMPITI + BILANCIO / LISTA OSPITI VUOTA */}
      <section className="grid gap-4 lg:grid-cols-[1.5fr,1.2fr]">
        {/* COMPITI */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-900">
              0 di 48 completati
            </h2>
            <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
              Visualizza tutte le attività
            </button>
          </div>
          <p className="text-xs text-slate-500 mb-4">Prossimi compiti</p>

          <div className="space-y-2 text-xs">
            <TaskRow label="Crea il sito web del tuo matrimonio" />
            <TaskRow label="Trova e prenota il tuo fiorista" />
          </div>
        </div>

        {/* BILANCIO + LISTA OSPITI VUOTA */}
        <div className="space-y-4">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-slate-900">Bilancio</h2>
              <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
                Visualizza il budget
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-slate-100 px-3 py-3">
                <p className="text-slate-500 mb-1">Costo stimato</p>
                <p className="text-base font-semibold text-slate-900">Ron0</p>
              </div>
              <div className="rounded-2xl border border-slate-100 px-3 py-3">
                <p className="text-slate-500 mb-1">Costo finale</p>
                <p className="text-base font-semibold text-slate-900">Ron0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 text-xs">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-slate-900">
                Vedi la lista degli ospiti
              </h2>
              <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
                Lista degli invitati
              </button>
            </div>
            <p className="text-slate-500">
              Non hai ancora aggiunto nessun ospite.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* STATUS METRIC (IT) */
function StatusMetric({ label, value, total }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-3">
      <p className="text-[11px] text-slate-500 mb-1">{label}</p>
      <p className="text-base font-semibold text-slate-900">
        {value}
        <span className="text-[11px] text-slate-400 ml-1">
          {label === "Compiti completati" ? "Su " : "Fuori da "}
          {total}
        </span>
      </p>
    </div>
  );
}

/* RIGA OSPITI (IT) */
function GuestRowIt({ label }) {
  return (
    <div className="rounded-2xl border border-slate-100 px-3 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
      <p className="font-medium text-slate-800 text-xs">{label}</p>
      <p className="text-[11px] text-slate-500">
        <span className="font-semibold">0</span> Partecipanti ·{" "}
        <span className="font-semibold">0</span> Invitati ·{" "}
        <span className="font-semibold">0</span> Rifiutati
      </p>
    </div>
  );
}

/* RIGA DETTAGLIO MATRIMONIO */
function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 px-3 py-2.5">
      <span className="text-slate-600">{label}</span>
      <span className="text-slate-400">{value}</span>
    </div>
  );
}

/* RIGA COMPITO */
function TaskRow({ label }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-100 px-3 py-2.5">
      <span className="h-3 w-3 rounded-full border border-slate-300" />
      <div className="flex-1">
        <p className="text-slate-700">{label}</p>
      </div>
    </div>
  );
}

/* PLACEHOLDER PER ALTRE SEZIONI */
function Placeholder({ title, subtitle }) {
  return (
    <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
      <h2 className="text-sm font-semibold text-slate-900 mb-1">{title}</h2>
      <p className="text-xs text-slate-500 mb-4">
        {subtitle ||
          "Questa sezione conterrà strumenti dedicati per l’organizzazione del tuo matrimonio."}
      </p>
      <div className="border border-dashed border-slate-200 rounded-2xl px-4 py-8 text-center text-xs text-slate-500">
        Contenuto in arrivo…
      </div>
    </section>
  );
}
