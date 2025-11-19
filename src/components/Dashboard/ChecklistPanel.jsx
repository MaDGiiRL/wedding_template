// src/components/ChecklistPanel.jsx
import { useMemo, useState } from "react";

// --- DATI INIZIALI DELLA CHECKLIST (raggruppati per mese) ---
const INITIAL_SECTIONS = [
  {
    id: "iulie-1998",
    month: "iulie",
    year: "1998",
    defaultDate: "30 July 1998",
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
    id: "septembrie-1998",
    month: "septembrie",
    year: "1998",
    defaultDate: "30 September 1998",
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
    id: "noiembrie-1998",
    month: "noiembrie",
    year: "1998",
    defaultDate: "30 November 1998",
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
    id: "ianuarie-1999",
    month: "ianuarie",
    year: "1999",
    defaultDate: "30 January 1999",
    tasks: [
      "Order alcohol for your wedding",
      "Plan your wedding ceremony",
      "Purchase guest book",
      "Purchase your wedding rings",
      "Write your vows",
    ],
  },
  // se vuoi puoi aggiungere anche martie / aprilie come avevamo prima
];

// trasformo INITIAL_SECTIONS in una struttura con id / done / date
function buildInitialState() {
  return INITIAL_SECTIONS.map((section) => ({
    ...section,
    tasks: section.tasks.map((title, index) => ({
      id: `${section.id}-${index}`,
      title,
      overview: title,
      date: section.defaultDate,
      done: false,
    })),
  }));
}

export default function ChecklistPanel() {
  const [sections, setSections] = useState(buildInitialState);
  const [adding, setAdding] = useState(false);

  // contatori globali
  const { doneCount, totalCount } = useMemo(() => {
    const allTasks = sections.flatMap((s) => s.tasks);
    const total = allTasks.length;
    const done = allTasks.filter((t) => t.done).length;
    return { doneCount: done, totalCount: total };
  }, [sections]);

  const progress = totalCount ? (doneCount / totalCount) * 100 : 0;

  // toggle done
  const handleToggleTask = (sectionId, taskId) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id !== sectionId
          ? section
          : {
              ...section,
              tasks: section.tasks.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
              ),
            }
      )
    );
  };

  // reset todo
  const handleReset = () => {
    if (
      window.confirm(
        "Make sure you wish to reset todo list (tutte le attività torneranno Pending)"
      )
    ) {
      setSections(buildInitialState());
    }
  };

  // delete task
  const handleDeleteTask = (sectionId, taskId) => {
    if (
      !window.confirm("Are you sure to remove this task from your checklist?")
    ) {
      return;
    }
    setSections((prev) =>
      prev.map((section) =>
        section.id !== sectionId
          ? section
          : {
              ...section,
              tasks: section.tasks.filter((task) => task.id !== taskId),
            }
      )
    );
  };

  // edit task (usa prompt semplice)
  const handleEditTask = (sectionId, taskId) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          tasks: section.tasks.map((task) => {
            if (task.id !== taskId) return task;
            const newTitle =
              window.prompt("Edit task title:", task.title) ?? task.title;
            const newOverview =
              window.prompt("Edit task description:", task.overview) ??
              task.overview;
            const newDate =
              window.prompt("Edit task date:", task.date) ?? task.date;
            return {
              ...task,
              title: newTitle.trim() || task.title,
              overview: newOverview.trim() || task.overview,
              date: newDate.trim() || task.date,
            };
          }),
        };
      })
    );
  };

  // add new task (aggiungo al primo mese per semplicità)
  const handleAddNewTask = () => {
    const title = window.prompt("New task title:");
    if (!title) return;
    const overview =
      window.prompt("Task description (optional):", title) || title;
    const date =
      window.prompt("Task date (es. 01 January 1999):", "") || "No date set";

    setSections((prev) => {
      if (prev.length === 0) return prev;
      const first = prev[0];
      const newTask = {
        id: `${first.id}-${Date.now()}`,
        title,
        overview,
        date,
        done: false,
      };
      return [{ ...first, tasks: [...first.tasks, newTask] }, ...prev.slice(1)];
    });
    setAdding(false);
  };

  return (
    <section className="space-y-5">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm sm:text-base font-semibold text-slate-900">
          Checklist
        </h2>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={handleReset}
            className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 font-medium text-rose-600 hover:bg-rose-100"
          >
            Reset Todo
          </button>
          <button
            onClick={handleAddNewTask}
            className="rounded-full border border-slate-200 bg-white px-4 py-1.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            + Add New
          </button>
        </div>
      </div>

      {/* CARD STATO + COUNTERS */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100">
          <div className="grid gap-4 md:grid-cols-[2fr,1.2fr] items-center">
            <div className="flex flex-col gap-3">
              <div className="text-xs text-slate-700">
                <strong>
                  You have completed{" "}
                  <span className="TODO_DONE_COUNTER">{doneCount}</span> out of{" "}
                  <span className="TODO_PENDING_COUNTER">{totalCount}</span>{" "}
                  tasks
                </strong>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-rose-500 transition-all"
                  style={{ width: `${progress.toFixed(1)}%` }}
                />
              </div>
            </div>

            <div className="flex justify-end gap-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
                <div>
                  <div className="TODO_DONE_COUNTER text-sm font-semibold text-slate-900">
                    {doneCount}
                  </div>
                  <span className="text-[11px] text-slate-500">Done</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-amber-400" />
                <div>
                  <div className="TODO_PENDING_COUNTER text-sm font-semibold text-slate-900">
                    {totalCount - doneCount}
                  </div>
                  <span className="text-[11px] text-slate-500">To Do</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LISTA TASKS PER MESE */}
        <div className="px-4 py-4 space-y-4 max-h-[540px] overflow-y-auto">
          {sections.map((section) => (
            <div key={section.id}>
              {/* Sottotitolo mese */}
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-xs font-semibold text-slate-800">
                  {section.month}{" "}
                  <span className="text-slate-500">{section.year}</span>
                </h3>
              </div>

              <ul className="space-y-2">
                {section.tasks.map((task) => (
                  <li
                    key={task.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-2.5 flex flex-col gap-2"
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-rose-500 focus:ring-rose-400"
                        checked={task.done}
                        onChange={() => handleToggleTask(section.id, task.id)}
                      />
                      <div>
                        <p
                          className={`text-xs font-medium ${
                            task.done
                              ? "text-slate-400 line-through"
                              : "text-slate-800"
                          }`}
                        >
                          {task.title}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {task.overview}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 justify-between">
                      <div className="flex gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <div>Task Date</div>
                          <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-0.5">
                            {task.date || section.defaultDate}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div>Status</div>
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-0.5 ${
                              task.done
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {task.done ? "Done" : "Pending"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditTask(section.id, task.id)}
                          className="text-slate-400 hover:text-slate-700"
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDeleteTask(section.id, task.id)}
                          className="text-slate-400 hover:text-rose-600"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {sections.length === 0 && (
            <p className="text-xs text-slate-500">
              Nessun task presente. Usa &quot;Add New&quot; per creare la tua
              prima attività.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
