import { useState } from "react";

const TABS = [
  { id: "profile", label: "My Profile" },
  { id: "wedding", label: "Wedding Information" },
  { id: "password", label: "Password Change" },
  { id: "social", label: "Social Media" },
];

export default function ProfilePanel() {
  const [activeTab, setActiveTab] = useState("profile");

  // stati finti solo lato client (per ora niente backend)
  const [profile, setProfile] = useState({
    firstName: "sofia",
    lastName: "vidotto",
    email: "sofiavidotto8@gmail.com",
    phone: "",
    address: "",
    about: "Welcome madgiirl99",
  });

  const [weddingInfo, setWeddingInfo] = useState({
    date: "1999-03-30",
    address: "",
    brideFirstName: "",
    brideLastName: "",
    groomFirstName: "",
    groomLastName: "",
  });

  const [passwords, setPasswords] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  // handler submit fake
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile:", profile);
    alert("Profilo aggiornato (demo)");
  };

  const handleWeddingSubmit = (e) => {
    e.preventDefault();
    console.log("Wedding info:", weddingInfo);
    alert("Informazioni matrimonio aggiornate (demo)");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("Le nuove password non coincidono");
      return;
    }
    console.log("Password change:", passwords);
    alert("Password aggiornata (demo)");
  };

  const handleSocialSubmit = (e) => {
    e.preventDefault();
    alert("Social profile aggiornato (demo)");
  };

  return (
    <div className="space-y-6">
      {/* SECTION TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-900">My Profile</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        {/* TAB VERTICALI SINISTRA */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-3">
          <nav className="flex flex-col gap-1 text-sm">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left rounded-2xl px-3 py-2.5 transition font-medium ${
                    isActive
                      ? "bg-rose-50 text-rose-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* CONTENUTO TAB DESTRA */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm">
          {/* HEADER SOTTO-SEZIONE */}
          <div className="border-b border-slate-100 px-5 py-3">
            <h2 className="text-sm font-semibold text-slate-900">
              {
                TABS.find((t) => t.id === activeTab)?.label // titolo dinamico
              }
            </h2>
          </div>

          {/* BODY */}
          <div className="p-5">
            {activeTab === "profile" && (
              <form onSubmit={handleProfileSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={profile.firstName}
                      onChange={(e) =>
                        setProfile((p) => ({ ...p, firstName: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={profile.lastName}
                      onChange={(e) =>
                        setProfile((p) => ({ ...p, lastName: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      disabled
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm bg-slate-50 text-slate-500"
                      value={profile.email}
                      onChange={() => {}}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Write Phone Number"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile((p) => ({ ...p, phone: e.target.value }))
                      }
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Private Address
                    </label>
                    <input
                      type="text"
                      placeholder="Private Address"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={profile.address}
                      onChange={(e) =>
                        setProfile((p) => ({ ...p, address: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    About Us
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    value={profile.about}
                    onChange={(e) =>
                      setProfile((p) => ({ ...p, about: e.target.value }))
                    }
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Max 3000 caratteri (demo, nessun limite reale).
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:bg-rose-600 transition"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            )}

            {activeTab === "wedding" && (
              <form onSubmit={handleWeddingSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={weddingInfo.date}
                      onChange={(e) =>
                        setWeddingInfo((w) => ({ ...w, date: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Wedding Location Address
                    </label>
                    <input
                      type="text"
                      placeholder="Wedding Location Address"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={weddingInfo.address}
                      onChange={(e) =>
                        setWeddingInfo((w) => ({
                          ...w,
                          address: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Bride First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={weddingInfo.brideFirstName}
                      onChange={(e) =>
                        setWeddingInfo((w) => ({
                          ...w,
                          brideFirstName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Bride Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={weddingInfo.brideLastName}
                      onChange={(e) =>
                        setWeddingInfo((w) => ({
                          ...w,
                          brideLastName: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Groom First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={weddingInfo.groomFirstName}
                      onChange={(e) =>
                        setWeddingInfo((w) => ({
                          ...w,
                          groomFirstName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Groom Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={weddingInfo.groomLastName}
                      onChange={(e) =>
                        setWeddingInfo((w) => ({
                          ...w,
                          groomLastName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:bg-rose-600 transition"
                  >
                    Update Wedding Information
                  </button>
                </div>
              </form>
            )}

            {activeTab === "password" && (
              <form onSubmit={handlePasswordSubmit} className="space-y-5">
                <div className="space-y-4">
                  <PasswordField
                    label="Old Password"
                    value={passwords.old}
                    onChange={(value) =>
                      setPasswords((p) => ({ ...p, old: value }))
                    }
                    visible={showPassword.old}
                    onToggleVisible={() =>
                      setShowPassword((s) => ({ ...s, old: !s.old }))
                    }
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <PasswordField
                      label="New Password"
                      value={passwords.new}
                      onChange={(value) =>
                        setPasswords((p) => ({ ...p, new: value }))
                      }
                      visible={showPassword.new}
                      onToggleVisible={() =>
                        setShowPassword((s) => ({ ...s, new: !s.new }))
                      }
                    />
                    <PasswordField
                      label="Confirm Password"
                      value={passwords.confirm}
                      onChange={(value) =>
                        setPasswords((p) => ({ ...p, confirm: value }))
                      }
                      visible={showPassword.confirm}
                      onToggleVisible={() =>
                        setShowPassword((s) => ({
                          ...s,
                          confirm: !s.confirm,
                        }))
                      }
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    La password deve contenere almeno 8 caratteri, una
                    maiuscola, una minuscola e un numero (solo UI demo).
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:bg-rose-600 transition"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            )}

            {activeTab === "social" && (
              <form onSubmit={handleSocialSubmit} className="space-y-5">
                <p className="text-xs text-slate-600">
                  Qui puoi aggiungere i link ai tuoi social (per ora solo UI di
                  esempio).
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <SocialField label="Instagram" placeholder="@username" />
                  <SocialField label="Facebook" placeholder="https://..." />
                  <SocialField label="TikTok" placeholder="@username" />
                  <SocialField label="Website" placeholder="https://..." />
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:bg-rose-600 transition"
                  >
                    Update Social Profile
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Campo password riutilizzabile */
function PasswordField({ label, value, onChange, visible, onToggleVisible }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-600 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          className="w-full rounded-2xl border border-slate-200 px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          onClick={onToggleVisible}
          className="absolute inset-y-0 right-0 px-3 text-slate-400 hover:text-slate-700 text-xs"
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

/* Campo social semplice */
function SocialField({ label, placeholder }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-600 mb-1">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
      />
    </div>
  );
}
