import { useState } from "react";

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
            {activeSection === "My Profile" && <Placeholder title="My Profile" />}
            {activeSection === "Vendor Manager" && (
              <Placeholder title="Vendor Manager" subtitle="0 of 0 categories hired. Start building your vendor team." />
            )}
            {activeSection === "Checklist" && (
              <Placeholder title="Checklist" subtitle="0 out of 48 tasks completed. Let’s plan your big day step by step." />
            )}
            {activeSection === "Budget Calculator" && (
              <Placeholder title="Budget Calculator" subtitle="Track your wedding expenses and stay on budget." />
            )}
            {activeSection === "Real Wedding" && (
              <Placeholder title="Real Wedding" subtitle="Save inspiration and ideas for your own wedding." />
            )}
            {activeSection === "Guest Management" && (
              <GuestManagementPanel />
            )}
            {activeSection === "My Reviews" && (
              <Placeholder title="My Reviews" subtitle="Here you’ll find all the reviews you’ve written." />
            )}
            {activeSection === "Wedding Website" && (
              <Placeholder title="Wedding Website" subtitle="Create a personalized website for your guests." />
            )}
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
      {/* HEADER + HAPPILY MARRIED */}
      <section className="grid gap-4 md:grid-cols-[2fr,1.3fr]">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-slate-500">Welcome back,</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Madgiirl99
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Here’s a quick overview of your wedding planning journey.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3 text-xs">
            <div className="rounded-2xl bg-slate-50 px-3 py-3">
              <p className="text-slate-500">Wedding Date</p>
              <p className="mt-1 font-semibold text-slate-900">30 March 1999</p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-3 py-3">
              <p className="text-slate-500">Status</p>
              <p className="mt-1 font-semibold text-slate-900">
                Just said yes? 🎉
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-3 py-3">
              <p className="text-slate-500">Planning Stage</p>
              <p className="mt-1 font-semibold text-slate-900">
                Let&apos;s get started!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-rose-400 rounded-3xl text-white p-5 flex flex-col justify-between shadow-lg">
          <div className="space-y-1">
            <p className="text-sm font-medium">Happily Married 🎉</p>
            <p className="text-3xl font-semibold leading-tight">
              9731
              <span className="block text-sm font-normal text-rose-50 mt-1">
                Days
              </span>
            </p>
          </div>
          <div className="mt-4 text-xs text-rose-50 space-y-1">
            <p>Wedding date</p>
            <p className="font-semibold">30 March 1999</p>
          </div>
        </div>
      </section>

      {/* STATUS + VENDOR TEAM */}
      <section className="grid gap-4 md:grid-cols-[2fr,1.3fr]">
        {/* STATUS CARD */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Status</h2>
              <p className="text-xs text-slate-500">
                Just said yes? Let&apos;s get started!
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 text-xs">
            <StatusMetric label="Services Hired" value="0" total="0" />
            <StatusMetric label="Tasks completed" value="0" total="48" />
            <StatusMetric label="Guests Attending" value="0" total="0" />
          </div>

          <p className="mt-4 text-xs text-slate-500">
            0 of 0 categories hired · Start booking your dream vendor team.
          </p>
        </div>

        {/* VENDOR TEAM CARD */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Your vendor team
              </h2>
              <p className="text-xs text-slate-500">
                0 of 0 categories hired
              </p>
            </div>
            <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
              View all my vendors
            </button>
          </div>

          <div className="border border-dashed border-slate-200 rounded-2xl px-3 py-4 text-center text-xs text-slate-500 flex-1 flex flex-col justify-center">
            <p className="font-medium text-slate-700 mb-1">Search By Vendors</p>
            <p className="mb-3">
              in <span className="font-semibold">Location</span>
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-rose-500 px-4 py-2 text-xs font-medium text-white hover:bg-rose-600 transition">
              Find vendors
            </button>
          </div>
        </div>
      </section>

      {/* GUEST LIST OVERVIEW + WEDDING DETAILS */}
      <section className="grid gap-4 lg:grid-cols-[1.5fr,1.2fr]">
        {/* GUEST LIST OVERVIEW */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Guest List Overview
              </h2>
              <p className="text-xs text-slate-500">
                Keep track of who’s coming to each event.
              </p>
            </div>
            <button className="text-[11px] font-medium text-rose-500 hover:text-rose-600">
              Guest List
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <GuestRow label="Wedding" />
            <GuestRow label="Rehearsal Dinner" />
            <GuestRow label="Shower" />
            <GuestRow label="Dance Party" />
          </div>
        </div>

        {/* WEDDING DETAILS */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-slate-900 mb-2">
            Wedding details
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Add key details about your wedding to personalize your planning
            tools.
          </p>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between rounded-2xl border border-slate-100 px-3 py-2.5">
              <span className="text-slate-600">Wedding date</span>
              <span className="text-slate-900 font-medium">30 March 1999</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-100 px-3 py-2.5">
              <span className="text-slate-600">Location</span>
              <span className="text-slate-400">Add location</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-100 px-3 py-2.5">
              <span className="text-slate-600">Guest count</span>
              <span className="text-slate-400">Add guests</span>
            </div>
          </div>

          <button className="mt-4 w-full rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition">
            Edit wedding details
          </button>
        </div>
      </section>
    </>
  );
}

/* STATUS METRIC */
function StatusMetric({ label, value, total }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-3">
      <p className="text-[11px] text-slate-500 mb-1">{label}</p>
      <p className="text-base font-semibold text-slate-900">
        {value}
        <span className="text-[11px] text-slate-400 ml-1">Out of {total}</span>
      </p>
    </div>
  );
}

/* GUEST ROW */
function GuestRow({ label }) {
  return (
    <div className="rounded-2xl border border-slate-100 px-3 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
      <p className="font-medium text-slate-800 text-xs">{label}</p>
      <p className="text-[11px] text-slate-500">
        <span className="font-semibold">0</span> Attended ·{" "}
        <span className="font-semibold">0</span> Invited ·{" "}
        <span className="font-semibold">0</span> Declined
      </p>
    </div>
  );
}

/* PANNELLI PLACEHOLDER PER LE ALTRE SEZIONI */
function Placeholder({ title, subtitle }) {
  return (
    <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
      <h2 className="text-sm font-semibold text-slate-900 mb-1">{title}</h2>
      <p className="text-xs text-slate-500 mb-4">
        {subtitle || "This section will contain tools and details for your planning."}
      </p>
      <div className="border border-dashed border-slate-200 rounded-2xl px-4 py-8 text-center text-xs text-slate-500">
        Content coming soon…
      </div>
    </section>
  );
}

/* PANELLINO SPECIFICO PER "Guest Management" */
function GuestManagementPanel() {
  return (
    <section className="space-y-4">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
        <h2 className="text-sm font-semibold text-slate-900 mb-1">
          Guest Management
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          Manage your guests, RSVPs and events all in one place.
        </p>
        <div className="space-y-3 text-xs">
          <GuestRow label="Wedding" />
          <GuestRow label="Rehearsal Dinner" />
          <GuestRow label="Shower" />
          <GuestRow label="Dance Party" />
        </div>
      </div>
    </section>
  );
}
