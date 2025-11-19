// src/components/BudgetCalculatorPanel.jsx
import { useState, useMemo } from "react";

const BUDGET_CATEGORIES = [
  {
    id: "venue",
    label: "Venue",
    icon: "🏛️",
    rows: [
      "Ceremony Venue Fee",
      "Ceremony Venue Decorations",
      "Reception Venue",
      "Rehearsal Dinner Venue",
    ],
  },
  {
    id: "videographer",
    label: "Videographer",
    icon: "🎥",
    rows: ["Videographer"],
  },
  {
    id: "invitations",
    label: "Invitations",
    icon: "💌",
    rows: ["Invitations and Reply Cards", "Other Stationery"],
  },
  {
    id: "favors",
    label: "Favors and Gifts",
    icon: "🎁",
    rows: ["Favors and Gifts"],
  },
  {
    id: "dress",
    label: "Dress and Attire",
    icon: "👗",
    rows: [
      "Dress and Alterations",
      "Headpiece and Veil",
      "Wedding Accessories",
      "Tux or Suit",
      "Additional Accessories",
    ],
  },
  {
    id: "rentals",
    label: "Rentals",
    icon: "⛺",
    rows: ["Reception Rentals"],
  },
];

export default function BudgetCalculatorPanel() {
  const [activeCategoryId, setActiveCategoryId] = useState("venue");

  const activeCategory =
    BUDGET_CATEGORIES.find((c) => c.id === activeCategoryId) ||
    BUDGET_CATEGORIES[0];

  // Per ora tutti a 0, ma ho messo la struttura pronta per calcoli futuri
  const summary = useMemo(
    () => ({
      estimatedTotal: 0,
      finalTotal: 0,
      paidTotal: 0,
    }),
    []
  );

  return (
    <section className="space-y-6">
      {/* HEADER + AZIONI */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-slate-900">My Budget</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          <button className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 font-medium text-rose-600 hover:bg-rose-100">
            Reset Budget Data
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 font-medium text-slate-700 hover:bg-slate-50">
            + Add Budget Category
          </button>
        </div>
      </div>

      {/* CHART + RIEPILOGO */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
        <div className="grid gap-6 md:grid-cols-[1.1fr,1.5fr] items-center">
          {/* Finto “grafico” a torta */}
          <div className="flex justify-center">
            <div className="relative h-48 w-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-500/80 to-rose-400 shadow-lg" />
              <div className="absolute inset-6 rounded-full bg-white flex flex-col items-center justify-center text-center px-4">
                <p className="text-xs font-medium text-slate-500">
                  Budget overview
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Ron0
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  No expenses added yet.
                </p>
              </div>
            </div>
          </div>

          {/* Riepilogo costi */}
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    Expenses
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Estimated cost for all categories.
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-900">
                    Ron{summary.estimatedTotal}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Estimated cost
                  </p>
                  <button className="mt-3 text-[11px] font-medium text-rose-500 hover:text-rose-600 inline-flex items-center gap-1">
                    <span>✏️</span> Edit Budget
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    Budget
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    Final costs and payment status.
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-900">
                    Ron{summary.finalTotal}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Final cost
                  </p>
                  <p className="mt-3 text-[11px] text-slate-500">
                    Paid:{" "}
                    <span className="font-semibold text-emerald-600">
                      Ron{summary.paidTotal}
                    </span>{" "}
                    · Pending:{" "}
                    <span className="font-semibold text-amber-600">
                      Ron{summary.finalTotal - summary.paidTotal}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              Tip: aggiorna regolarmente i tuoi costi per tenere sotto controllo
              il budget del matrimonio.
            </p>
          </div>
        </div>
      </div>

      {/* CATEGORIE + DETTAGLIO */}
      <div className="grid gap-6 lg:grid-cols-[230px,1fr]">
        {/* Sidebar categorie */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-3">
          <p className="px-2 pt-1 pb-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
            Categories
          </p>
          <div className="flex flex-col gap-1">
            {BUDGET_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium transition ${
                  activeCategoryId === cat.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dettaglio categoria attiva */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm">
          {/* HEADER CARD CATEGORIA */}
          <div className="border-b border-slate-100 px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-lg">
                {activeCategory.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {activeCategory.label}
                </p>
                <p className="text-[11px] text-slate-500">
                  Manage your {activeCategory.label.toLowerCase()} expenses.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[11px]">
              <div>
                <p className="text-slate-500">Final Cost</p>
                <p className="font-semibold text-emerald-600">Ron0</p>
              </div>
              <div>
                <p className="text-slate-500">Estimated cost</p>
                <p className="font-semibold text-slate-800">Ron0</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-slate-400 hover:text-slate-600">
                  ✏️
                </button>
                <button className="text-slate-400 hover:text-rose-500">
                  🗑️
                </button>
              </div>
            </div>
          </div>

          {/* TABELLA SPESE */}
          <div className="px-4 py-4">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70">
                    <th className="text-left font-medium text-slate-500 px-3 py-2 w-64">
                      Expense
                    </th>
                    <th className="text-left font-medium text-slate-500 px-3 py-2">
                      Estimate Cost
                    </th>
                    <th className="text-left font-medium text-slate-500 px-3 py-2">
                      Final Cost
                    </th>
                    <th className="text-left font-medium text-slate-500 px-3 py-2">
                      Paid
                    </th>
                    <th className="text-left font-medium text-slate-500 px-3 py-2 w-16">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeCategory.rows.map((expense) => (
                    <tr
                      key={expense}
                      className="border-b border-slate-50 hover:bg-slate-50/60"
                    >
                      <td className="px-3 py-2">
                        <input
                          type="text"
                          defaultValue={expense}
                          className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-300"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          placeholder="0"
                          className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-300"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          placeholder="0"
                          className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-300"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="number"
                          placeholder="0"
                          className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-300"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <button className="text-slate-400 hover:text-rose-500">
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="px-3 py-3 text-center">
                      <button className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[11px] font-medium text-emerald-700 hover:bg-emerald-100">
                        + Add Budget Item
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t border-slate-100">
                    <td className="px-3 py-2 text-xs font-semibold text-slate-700">
                      Total Amount
                    </td>
                    <td className="px-3 py-2 text-xs text-slate-700">Ron0</td>
                    <td className="px-3 py-2 text-xs text-slate-700">Ron0</td>
                    <td className="px-3 py-2 text-xs text-slate-700">Ron0</td>
                    <td className="px-3 py-2"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
