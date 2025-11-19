import { useMemo, useState } from "react";

const INITIAL_EVENTS = [
  {
    id: "wedding",
    wpId: "888063986",
    name: "Wedding",
    icon: "💍",
  },
  {
    id: "rehearsal-dinner",
    wpId: "1967944181",
    name: "Rehearsal Dinner",
    icon: "🎁",
  },
  {
    id: "shower",
    wpId: "1033652147",
    name: "Shower",
    icon: "🎈",
  },
  {
    id: "dance-party",
    wpId: "999646259",
    name: "Dance Party",
    icon: "🍷",
  },
];

const INITIAL_GROUPS = [
  "Groom Sister",
  "Bride Friend",
  "Groom Friend",
  "Bride Family",
  "Groom Family",
];

export default function GuestManagementPanel() {
  const [events] = useState(INITIAL_EVENTS);

  // ✅ QUI LA RIGA GIUSTA
  const [activeEventId, setActiveEventId] = useState("overview");

  const [guests, setGuests] = useState([]);
  const [groups, setGroups] = useState(INITIAL_GROUPS);
  const [search, setSearch] = useState("");

  const [isAddGuestOpen, setIsAddGuestOpen] = useState(false);
  const [isGroupPanelOpen, setIsGroupPanelOpen] = useState(false);

  // ---- Stato form Add Guest ----
  const [newGuest, setNewGuest] = useState({
    firstName: "",
    lastName: "",
    ageType: "0", // adult / child / baby
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    group: "0",
    needHotel: false,
    invitedEvents: ["wedding"], // di default invitato al Wedding
  });

  // ---- Stato form Group Management ----
  const [newGroupName, setNewGroupName] = useState("");

  // ---- Contatori per overview ----
  const eventStats = useMemo(() => {
    const base = {};
    events.forEach((ev) => {
      base[ev.id] = {
        invited: 0,
        attending: 0,
        declined: 0,
      };
    });

    guests.forEach((g) => {
      g.invitedEvents.forEach((evId) => {
        if (!base[evId]) return;
        base[evId].invited += 1;
        if (g.status === "attending") base[evId].attending += 1;
        if (g.status === "declined") base[evId].declined += 1;
      });
    });

    return base;
  }, [guests, events]);

  // ---- Filtri lista ospiti ----
  const filteredGuests = useMemo(() => {
    return guests.filter((g) => {
      // filtro per evento attivo (se non overview)
      if (activeEventId !== "overview") {
        if (!g.invitedEvents.includes(activeEventId)) return false;
      }

      // filtro per search
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        g.firstName.toLowerCase().includes(q) ||
        g.lastName.toLowerCase().includes(q) ||
        (g.email || "").toLowerCase().includes(q)
      );
    });
  }, [guests, activeEventId, search]);

  // ---- Helper ----
  const resetNewGuest = () => {
    setNewGuest({
      firstName: "",
      lastName: "",
      ageType: "0",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      group: "0",
      needHotel: false,
      invitedEvents: ["wedding"],
    });
  };

  // ---- Add Guest submit ----
  const handleAddGuestSubmit = (e) => {
    e.preventDefault();
    if (!newGuest.firstName.trim()) {
      alert("First Name is required");
      return;
    }

    const guest = {
      id: Date.now().toString(),
      ...newGuest,
      status: "invited", // default
    };

    setGuests((prev) => [...prev, guest]);
    resetNewGuest();
    setIsAddGuestOpen(false);
  };

  // ---- Group Management handlers ----
  const handleAddGroup = () => {
    const name = newGroupName.trim();
    if (!name) return;
    if (!groups.includes(name)) {
      setGroups((prev) => [...prev, name]);
    }
    setNewGroupName("");
  };

  const handleDeleteGroup = (groupName) => {
    if (!window.confirm(`Delete group "${groupName}"?`)) return;
    setGroups((prev) => prev.filter((g) => g !== groupName));

    // Rimuovi group dai guest se lo avevano
    setGuests((prev) =>
      prev.map((g) => (g.group === groupName ? { ...g, group: "0" } : g))
    );
  };

  const toggleGuestEvent = (eventId) => {
    setNewGuest((g) => {
      const exists = g.invitedEvents.includes(eventId);
      return {
        ...g,
        invitedEvents: exists
          ? g.invitedEvents.filter((id) => id !== eventId)
          : [...g.invitedEvents, eventId],
      };
    });
  };

  const updateGuestStatus = (guestId, status) => {
    setGuests((prev) =>
      prev.map((g) => (g.id === guestId ? { ...g, status } : g))
    );
  };

  return (
    <div className="space-y-6">
      {/* Titolo pagina */}
      <div className="section-title">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-lg font-semibold text-slate-900">
            Guest Management
          </h1>
        </div>
      </div>

      {/* Tabs eventi */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-2">
        <button
          type="button"
          onClick={() => setActiveEventId("overview")}
          className={`text-xs md:text-sm rounded-full px-3 py-1.5 border transition ${
            activeEventId === "overview"
              ? "bg-rose-500 border-rose-500 text-white"
              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          Overview
        </button>

        {events.map((ev) => (
          <button
            key={ev.id}
            type="button"
            onClick={() => setActiveEventId(ev.id)}
            className={`text-xs md:text-sm rounded-full px-3 py-1.5 border transition ${
              activeEventId === ev.id
                ? "bg-rose-500 border-rose-500 text-white"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {ev.name}
          </button>
        ))}

        {/* "New Event" solo UI (link a gestione eventi) */}
        <div className="ml-auto">
          <a
            href="https://macasatoresc.com/panou-miri/?dashboard=event-management"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 text-xs"
            title="New Event"
          >
            +
          </a>
        </div>
      </div>

      {/* Overview cards eventi */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="p-4">
          <div className="flex flex-wrap gap-3">
            {events.map((ev) => {
              const stats = eventStats[ev.id] || {
                invited: 0,
                attending: 0,
                declined: 0,
              };
              return (
                <div
                  key={ev.id}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 min-w-[210px]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-lg">
                    <span>{ev.icon}</span>
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <div className="font-semibold text-slate-900">
                      {ev.name}
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
                      <span>
                        <strong>{stats.attending}</strong> Attending
                      </span>
                      <span>
                        <strong>{stats.invited}</strong> Invited
                      </span>
                      <span>
                        <strong>{stats.declined}</strong> Declined
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {events.length === 0 && (
              <p className="text-xs text-slate-500">No events yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Barra comandi: Add Guest / Group / Search */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsAddGuestOpen(true)}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                <span>＋</span>
                <span>Guest</span>
              </button>
              <button
                type="button"
                onClick={() => setIsGroupPanelOpen(true)}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                <span>＋</span>
                <span>Group</span>
              </button>
            </div>

            <div className="md:ml-auto w-full md:w-64">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-xs text-slate-400">
                  🔍
                </span>
                <input
                  type="text"
                  className="w-full rounded-full border border-slate-200 bg-slate-50 px-8 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                  placeholder="Search list"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabella guest */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">Guest List</h2>
          <p className="text-[11px] text-slate-500">
            Event:{" "}
            {activeEventId === "overview"
              ? "All events"
              : events.find((ev) => ev.id === activeEventId)?.name}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Age</th>
                <th className="px-4 py-2 text-left">Group</th>
                <th className="px-4 py-2 text-left hidden md:table-cell">
                  Email
                </th>
                <th className="px-4 py-2 text-left hidden md:table-cell">
                  Invited To
                </th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuests.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-[11px] text-slate-400"
                  >
                    No guests found. Use &quot;Guest&quot; to add someone.
                  </td>
                </tr>
              )}
              {filteredGuests.map((g) => (
                <tr
                  key={g.id}
                  className="border-t border-slate-50 hover:bg-slate-50/60"
                >
                  <td className="px-4 py-2">
                    <div className="font-medium text-slate-900">
                      {g.firstName} {g.lastName}
                    </div>
                    <div className="text-[11px] text-slate-500 md:hidden">
                      {g.email}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-slate-600">
                    {g.ageType === "adult"
                      ? "Adult"
                      : g.ageType === "child"
                      ? "Child"
                      : g.ageType === "baby"
                      ? "Baby"
                      : "-"}
                  </td>
                  <td className="px-4 py-2 text-slate-600">
                    {g.group === "0" ? "-" : g.group}
                  </td>
                  <td className="px-4 py-2 text-slate-600 hidden md:table-cell">
                    {g.email || "-"}
                  </td>
                  <td className="px-4 py-2 text-slate-600 hidden md:table-cell">
                    {g.invitedEvents
                      .map(
                        (id) => events.find((ev) => ev.id === id)?.name || id
                      )
                      .join(", ")}
                  </td>
                  <td className="px-4 py-2">
                    <select
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={g.status}
                      onChange={(e) => updateGuestStatus(g.id, e.target.value)}
                    >
                      <option value="invited">Invited</option>
                      <option value="attending">Attending</option>
                      <option value="declined">Declined</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overlay per sidepanel */}
      {(isAddGuestOpen || isGroupPanelOpen) && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => {
            setIsAddGuestOpen(false);
            setIsGroupPanelOpen(false);
          }}
        />
      )}

      {/* Sidepanel: Add Guest */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ${
          isAddGuestOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-slate-100 px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Add Guest</h3>
          <button
            type="button"
            onClick={() => setIsAddGuestOpen(false)}
            className="text-slate-400 hover:text-slate-600 text-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full pb-24">
          <form onSubmit={handleAddGuestSubmit} className="space-y-5">
            {/* Sezione: Add Guest (base) */}
            <AccordionSection title="Add Guest" defaultOpen>
              <div className="space-y-3 text-xs">
                <div className="grid gap-2 md:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs"
                      value={newGuest.firstName}
                      onChange={(e) =>
                        setNewGuest((g) => ({
                          ...g,
                          firstName: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs"
                      value={newGuest.lastName}
                      onChange={(e) =>
                        setNewGuest((g) => ({
                          ...g,
                          lastName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <select
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs bg-white"
                      value={newGuest.ageType}
                      onChange={(e) =>
                        setNewGuest((g) => ({
                          ...g,
                          ageType: e.target.value,
                        }))
                      }
                    >
                      <option value="0">Guest Age</option>
                      <option value="adult">Adult</option>
                      <option value="child">Child</option>
                      <option value="baby">Baby</option>
                    </select>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 text-center">
                  Use &quot;Add related guests or a plus one&quot; in the real
                  app – qui è semplificato.
                </p>
              </div>
            </AccordionSection>

            {/* Contact Information */}
            <AccordionSection title="Contact Information">
              <div className="grid gap-2 text-xs md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-2xl border border-slate-200 px-3 py-2"
                  value={newGuest.email}
                  onChange={(e) =>
                    setNewGuest((g) => ({
                      ...g,
                      email: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-2xl border border-slate-200 px-3 py-2"
                  value={newGuest.phone}
                  onChange={(e) =>
                    setNewGuest((g) => ({
                      ...g,
                      phone: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="rounded-2xl border border-slate-200 px-3 py-2"
                  value={newGuest.address}
                  onChange={(e) =>
                    setNewGuest((g) => ({
                      ...g,
                      address: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="City / Town"
                  className="rounded-2xl border border-slate-200 px-3 py-2"
                  value={newGuest.city}
                  onChange={(e) =>
                    setNewGuest((g) => ({
                      ...g,
                      city: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="State"
                  className="rounded-2xl border border-slate-200 px-3 py-2"
                  value={newGuest.state}
                  onChange={(e) =>
                    setNewGuest((g) => ({
                      ...g,
                      state: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="rounded-2xl border border-slate-200 px-3 py-2"
                  value={newGuest.zip}
                  onChange={(e) =>
                    setNewGuest((g) => ({
                      ...g,
                      zip: e.target.value,
                    }))
                  }
                />
              </div>
            </AccordionSection>

            {/* Guest Information */}
            <AccordionSection title="Guest Information">
              <div className="space-y-4 text-xs">
                <div className="grid gap-3 md:grid-cols-[1.2fr,0.8fr]">
                  <div>
                    <label className="mb-1 block text-slate-700">Group</label>
                    <select
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 bg-white"
                      value={newGuest.group}
                      onChange={(e) =>
                        setNewGuest((g) => ({
                          ...g,
                          group: e.target.value,
                        }))
                      }
                    >
                      <option value="0">Choose Group</option>
                      {groups.map((gr) => (
                        <option key={gr} value={gr}>
                          {gr}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      id="need_hotel"
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-rose-500"
                      checked={newGuest.needHotel}
                      onChange={(e) =>
                        setNewGuest((g) => ({
                          ...g,
                          needHotel: e.target.checked,
                        }))
                      }
                    />
                    <label htmlFor="need_hotel" className="text-slate-700">
                      Need hotel?
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-slate-700">Invited To</div>
                  <div className="space-y-1">
                    {events.map((ev) => (
                      <label
                        key={ev.id}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300 text-rose-500"
                          checked={newGuest.invitedEvents.includes(ev.id)}
                          onChange={() => toggleGuestEvent(ev.id)}
                        />
                        <span>{ev.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionSection>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sidepanel: Guest Group Management */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm transform bg-white shadow-xl transition-transform duration-300 ${
          isGroupPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-slate-100 px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">
            Guest Group Management
          </h3>
          <button
            type="button"
            onClick={() => setIsGroupPanelOpen(false)}
            className="text-slate-400 hover:text-slate-600 text-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full pb-24 text-xs">
          <div className="space-y-3">
            <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/60">
              {groups.map((gr) => (
                <li
                  key={gr}
                  className="flex items-center justify-between px-3 py-2"
                >
                  <span className="text-slate-700">{gr}</span>
                  <button
                    type="button"
                    className="text-[11px] text-slate-400 hover:text-rose-600"
                    onClick={() => handleDeleteGroup(gr)}
                  >
                    🗑
                  </button>
                </li>
              ))}
              {groups.length === 0 && (
                <li className="px-3 py-3 text-[11px] text-slate-400">
                  No groups defined yet.
                </li>
              )}
            </ul>

            <div className="mt-4">
              <label className="mb-1 block text-slate-700">Add new group</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-2xl border border-slate-200 px-3 py-2 text-xs"
                  placeholder="Add in Group"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                />
                <button
                  type="button"
                  className="rounded-2xl bg-slate-800 px-3 text-[11px] font-semibold text-white hover:bg-slate-900"
                  onClick={handleAddGroup}
                >
                  +
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                className="w-full rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-600"
                onClick={() => setIsGroupPanelOpen(false)}
              >
                Update Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- COMPONENTI DI SUPPORTO ---------- */

function AccordionSection({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70">
      <button
        type="button"
        className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold text-slate-800"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span className="text-[10px] text-slate-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-slate-100 px-3 py-3">{children}</div>
      )}
    </div>
  );
}
