import { useState } from "react";

const TABS = [
  { id: "about", label: "About" },
  { id: "info", label: "Wedding Info" },
  { id: "vendors", label: "Hire Vendors" },
];

export default function RealWeddingPanel() {
  const [activeTab, setActiveTab] = useState("about");

  // ABOUT TAB STATE
  const [groom, setGroom] = useState({
    firstName: "",
    lastName: "",
    image: null,
    imagePreview:
      "https://macasatoresc.com/wp-content/plugins/weddingdir/dashboard/couple-file/dashboard/filters-hooks/images/demo/groom.jpg",
  });

  const [bride, setBride] = useState({
    firstName: "",
    lastName: "",
    image: null,
    imagePreview:
      "https://macasatoresc.com/wp-content/plugins/weddingdir/dashboard/couple-file/dashboard/filters-hooks/images/demo/bride.jpg",
  });

  const [about, setAbout] = useState({
    weddingDate: "",
    location: "",
    headerBannerPreview:
      "https://macasatoresc.com/wp-content/plugins/weddingdir-real-wedding/filters-hooks/images//demo/page-banner.jpg",
    headerBanner: null,
    story: "",
    featuredImagePreview:
      "https://macasatoresc.com/wp-content/plugins/weddingdir-real-wedding/filters-hooks/images//demo/featured.jpg",
    featuredImage: null,
    galleryImages: [],
  });

  // WEDDING INFO TAB STATE
  const [weddingInfo, setWeddingInfo] = useState({
    season: "0",
    community: "0",
    spacePreference: "0",
    style: "0",
    category: "0",
    functionName: "",
    tags: [],
  });

  // HIRE VENDORS TAB STATE
  const [vendors, setVendors] = useState({
    websiteCredits: [],
    outsideVendors: [],
  });

  const [tagInput, setTagInput] = useState("");
  const [websiteVendorInput, setWebsiteVendorInput] = useState("");
  const [newVendor, setNewVendor] = useState({
    name: "",
    role: "",
    website: "",
    notes: "",
  });

  // ---------- HANDLER GENERICI ----------

  const handleImageChange = (file, setter) => {
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setter((prev) => ({ ...prev, image: file, imagePreview: preview }));
  };

  const handleBannerChange = (file) => {
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setAbout((prev) => ({
      ...prev,
      headerBanner: file,
      headerBannerPreview: preview,
    }));
  };

  const handleFeaturedChange = (file) => {
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setAbout((prev) => ({
      ...prev,
      featuredImage: file,
      featuredImagePreview: preview,
    }));
  };

  const handleGalleryChange = (files) => {
    if (!files?.length) return;
    const newImages = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setAbout((prev) => {
      const merged = [...prev.galleryImages, ...newImages].slice(0, 6); // max 6
      return { ...prev, galleryImages: merged };
    });
  };

  const handleRemoveGalleryImage = (index) => {
    setAbout((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== index),
    }));
  };

  const toggleArrayValue = (arr, value) =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  // ---------- SUBMIT (solo demo, console + alert) ----------

  const handleAboutSubmit = (e) => {
    e.preventDefault();
    console.log("ABOUT:", { groom, bride, about });
    alert("Real Wedding - About salvato (demo)");
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    console.log("WEDDING INFO:", weddingInfo);
    alert("Real Wedding - Wedding Info salvato (demo)");
  };

  const handleVendorsSubmit = (e) => {
    e.preventDefault();
    console.log("VENDORS:", vendors);
    alert("Real Wedding - Vendors salvato (demo)");
  };

  // ---------- RENDER ----------

  return (
    <div className="space-y-6">
      {/* TITOLO + PREVIEW BTN */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-900">Real Wedding</h1>

        <a
          href="https://macasatoresc.com/real-wedding/madgiirl99/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-rose-600 transition"
        >
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[10px]">
            👁
          </span>
          <span>Preview</span>
        </a>
      </div>

      {/* AVVISO */}
      <div className="bg-white border border-amber-100 rounded-3xl shadow-sm p-4 text-xs text-slate-700">
        <p className="font-semibold mb-1">
          Real Wedding posts will only go live online once all required fields
          have been completed.
        </p>
        <p className="font-semibold">
          These fields include the names of the bride and groom, the event date,
          a featured image, and a minimum of three gallery images.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        {/* TAB VERTICALI */}
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

        {/* CONTENUTO TAB */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-5 py-3">
            <h2 className="text-sm font-semibold text-slate-900">
              {TABS.find((t) => t.id === activeTab)?.label}
            </h2>
          </div>

          <div className="p-5">
            {/* TAB ABOUT */}
            {activeTab === "about" && (
              <form className="space-y-6" onSubmit={handleAboutSubmit}>
                {/* GROOM / BRIDE */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Groom */}
                  <div className="md:border-r md:border-slate-100 md:pr-4">
                    <div className="flex gap-4">
                      <AvatarUpload
                        label="Groom"
                        preview={groom.imagePreview}
                        onChange={(file) => handleImageChange(file, setGroom)}
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-900 mb-4">
                          Groom Info
                        </h3>
                        <div className="space-y-3 text-xs">
                          <div>
                            <label className="block text-slate-600 mb-1">
                              Groom First Name
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                              value={groom.firstName}
                              onChange={(e) =>
                                setGroom((g) => ({
                                  ...g,
                                  firstName: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div>
                            <label className="block text-slate-600 mb-1">
                              Groom Last Name
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                              value={groom.lastName}
                              onChange={(e) =>
                                setGroom((g) => ({
                                  ...g,
                                  lastName: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bride */}
                  <div>
                    <div className="flex gap-4">
                      <AvatarUpload
                        label="Bride"
                        preview={bride.imagePreview}
                        onChange={(file) => handleImageChange(file, setBride)}
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-900 mb-4">
                          Bride Info
                        </h3>
                        <div className="space-y-3 text-xs">
                          <div>
                            <label className="block text-slate-600 mb-1">
                              Bride First Name
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                              value={bride.firstName}
                              onChange={(e) =>
                                setBride((b) => ({
                                  ...b,
                                  firstName: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div>
                            <label className="block text-slate-600 mb-1">
                              Bride Last Name
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                              value={bride.lastName}
                              onChange={(e) =>
                                setBride((b) => ({
                                  ...b,
                                  lastName: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wedding date + location */}
                <SectionTitle title="Wedding Date with Location" />
                <div className="grid gap-4 md:grid-cols-2 text-xs">
                  <div>
                    <label className="block text-slate-600 mb-1">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={about.weddingDate}
                      onChange={(e) =>
                        setAbout((a) => ({ ...a, weddingDate: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">
                      Location
                    </label>
                    <div className="flex rounded-2xl border border-slate-200 overflow-hidden">
                      <span className="inline-flex items-center px-3 text-[11px] text-slate-500 bg-slate-50 border-r border-slate-200">
                        in
                      </span>
                      <input
                        type="text"
                        placeholder="Select Location"
                        className="flex-1 px-3 py-2 text-xs focus:outline-none"
                        value={about.location}
                        onChange={(e) =>
                          setAbout((a) => ({ ...a, location: e.target.value }))
                        }
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">
                      In produzione qui puoi collegare l&apos;autocomplete delle
                      location (per ora è solo testo).
                    </p>
                  </div>
                </div>

                {/* Header banner */}
                <SectionTitle title="Page Header Banner" />
                <ImageBannerUpload
                  preview={about.headerBannerPreview}
                  onChange={handleBannerChange}
                />

                {/* Your story */}
                <SectionTitle title="Your story" />
                <div className="space-y-2 text-xs">
                  <label className="block text-slate-600 mb-1">
                    Tell your story by adding it here!
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                    placeholder="Tell your story by adding it here!"
                    value={about.story}
                    onChange={(e) =>
                      setAbout((a) => ({ ...a, story: e.target.value }))
                    }
                  />
                  <div className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-[10px] text-slate-500">
                    Max 3000 caratteri (demo)
                  </div>
                </div>

                {/* Couple image */}
                <SectionTitle title="Couple Image" />
                <ImageCardUpload
                  preview={about.featuredImagePreview}
                  onChange={handleFeaturedChange}
                />

                {/* Gallery */}
                <SectionTitle title="Upload Gallery Images" />
                <div className="space-y-3 text-xs">
                  <GalleryUpload
                    images={about.galleryImages}
                    onChange={handleGalleryChange}
                    onRemove={handleRemoveGalleryImage}
                  />
                  <p className="text-[11px] text-slate-500">
                    Minimo 3 immagini, massimo 6 (solo limit UI).
                  </p>
                </div>

                {/* FOOTER BUTTON */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-xs font-medium text-white hover:bg-rose-600 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {/* TAB WEDDING INFO */}
            {activeTab === "info" && (
              <form className="space-y-6" onSubmit={handleInfoSubmit}>
                <SectionTitle title="Wedding Info" />

                <div className="grid gap-4 md:grid-cols-2 text-xs">
                  <SelectField
                    label="Season ?"
                    value={weddingInfo.season}
                    onChange={(v) =>
                      setWeddingInfo((w) => ({ ...w, season: v }))
                    }
                    options={[
                      { value: "0", label: "Season ?" },
                      { value: "spring", label: "Spring" },
                      { value: "summer", label: "Summer" },
                      { value: "autumn", label: "Autumn" },
                      { value: "winter", label: "Winter" },
                    ]}
                  />
                  <SelectField
                    label="Which Community ?"
                    value={weddingInfo.community}
                    onChange={(v) =>
                      setWeddingInfo((w) => ({ ...w, community: v }))
                    }
                    options={[
                      { value: "0", label: "Which Community ?" },
                      { value: "religious", label: "Religious" },
                      { value: "civil", label: "Civil" },
                      { value: "symbolic", label: "Symbolic" },
                    ]}
                  />
                  <SelectField
                    label="Space Preference ?"
                    value={weddingInfo.spacePreference}
                    onChange={(v) =>
                      setWeddingInfo((w) => ({ ...w, spacePreference: v }))
                    }
                    options={[
                      { value: "0", label: "Space Preference ?" },
                      { value: "indoor", label: "Indoor" },
                      { value: "outdoor", label: "Outdoor" },
                      { value: "both", label: "Indoor & Outdoor" },
                    ]}
                  />
                  <SelectField
                    label="Which Style ?"
                    value={weddingInfo.style}
                    onChange={(v) =>
                      setWeddingInfo((w) => ({ ...w, style: v }))
                    }
                    options={[
                      { value: "0", label: "Which Style ?" },
                      { value: "classic", label: "Classic" },
                      { value: "boho", label: "Boho" },
                      { value: "modern", label: "Modern" },
                      { value: "rustic", label: "Rustic" },
                    ]}
                  />
                  <SelectField
                    label="Which Categories ?"
                    value={weddingInfo.category}
                    onChange={(v) =>
                      setWeddingInfo((w) => ({ ...w, category: v }))
                    }
                    options={[
                      { value: "0", label: "Which Categories ?" },
                      { value: "intimate", label: "Intimate" },
                      { value: "big", label: "Big Wedding" },
                      { value: "destination", label: "Destination Wedding" },
                    ]}
                  />
                  <div>
                    <label className="block text-slate-600 mb-1">
                      Wedding, Reception, etc..
                    </label>
                    <input
                      type="text"
                      placeholder="Wedding, Reception, etc.."
                      className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={weddingInfo.functionName}
                      onChange={(e) =>
                        setWeddingInfo((w) => ({
                          ...w,
                          functionName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                {/* TAG MULTI SELECT SEMPLICE */}
                <div className="space-y-2 text-xs">
                  <label className="block text-slate-600 mb-1">Tags</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {weddingInfo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-[11px] text-rose-600"
                      >
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setWeddingInfo((w) => ({
                              ...w,
                              tags: w.tags.filter((t) => t !== tag),
                            }))
                          }
                          className="text-[10px] hover:text-rose-800"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                    {weddingInfo.tags.length === 0 && (
                      <span className="text-[11px] text-slate-400">
                        Nessun tag selezionato
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add tag and press Enter"
                      className="flex-1 rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          const trimmed = tagInput.trim();
                          if (!trimmed) return;
                          if (!weddingInfo.tags.includes(trimmed)) {
                            setWeddingInfo((w) => ({
                              ...w,
                              tags: [...w.tags, trimmed],
                            }));
                          }
                          setTagInput("");
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="rounded-full bg-slate-100 px-3 text-[11px] text-slate-700 hover:bg-slate-200"
                      onClick={() => {
                        const trimmed = tagInput.trim();
                        if (!trimmed) return;
                        if (!weddingInfo.tags.includes(trimmed)) {
                          setWeddingInfo((w) => ({
                            ...w,
                            tags: [...w.tags, trimmed],
                          }));
                        }
                        setTagInput("");
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-xs font-medium text-white hover:bg-rose-600 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {/* TAB VENDORS */}
            {activeTab === "vendors" && (
              <form className="space-y-6" onSubmit={handleVendorsSubmit}>
                {/* Website vendors */}
                <SectionTitle title="MaCasatoresc.com Website Vendor's Team" />
                <div className="space-y-3 text-xs">
                  <label className="block text-slate-600 mb-1">
                    Select Your Listing Service Your Hire on MaCasatoresc.com
                  </label>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {vendors.websiteCredits.map((v) => (
                      <span
                        key={v}
                        className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-[11px] text-rose-600"
                      >
                        <span>{v}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setVendors((state) => ({
                              ...state,
                              websiteCredits: state.websiteCredits.filter(
                                (s) => s !== v
                              ),
                            }))
                          }
                          className="text-[10px] hover:text-rose-800"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                    {vendors.websiteCredits.length === 0 && (
                      <span className="text-[11px] text-slate-400">
                        Nessun vendor selezionato
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type vendor name and press Enter"
                      className="flex-1 rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      value={websiteVendorInput}
                      onChange={(e) => setWebsiteVendorInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          const trimmed = websiteVendorInput.trim();
                          if (!trimmed) return;
                          setVendors((state) => ({
                            ...state,
                            websiteCredits: toggleArrayValue(
                              state.websiteCredits,
                              trimmed
                            ),
                          }));
                          setWebsiteVendorInput("");
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="rounded-full bg-slate-100 px-3 text-[11px] text-slate-700 hover:bg-slate-200"
                      onClick={() => {
                        const trimmed = websiteVendorInput.trim();
                        if (!trimmed) return;
                        setVendors((state) => ({
                          ...state,
                          websiteCredits: toggleArrayValue(
                            state.websiteCredits,
                            trimmed
                          ),
                        }));
                        setWebsiteVendorInput("");
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* OUTSIDE VENDORS */}
                <SectionTitle title="Outside Vendor's Team" />
                <div className="space-y-4 text-xs">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="block text-slate-600 mb-1">
                        Vendor Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                        value={newVendor.name}
                        onChange={(e) =>
                          setNewVendor((v) => ({ ...v, name: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 mb-1">
                        Vendor Role (e.g. Photographer)
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                        value={newVendor.role}
                        onChange={(e) =>
                          setNewVendor((v) => ({ ...v, role: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 mb-1">
                        Website / Social URL
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                        placeholder="https://..."
                        value={newVendor.website}
                        onChange={(e) =>
                          setNewVendor((v) => ({
                            ...v,
                            website: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 mb-1">Notes</label>
                      <input
                        type="text"
                        className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                        placeholder="Extra dettagli"
                        value={newVendor.notes}
                        onChange={(e) =>
                          setNewVendor((v) => ({
                            ...v,
                            notes: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full bg-rose-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-rose-600 transition"
                      onClick={() => {
                        if (!newVendor.name.trim()) {
                          alert("Inserisci almeno il nome del vendor");
                          return;
                        }
                        setVendors((state) => ({
                          ...state,
                          outsideVendors: [...state.outsideVendors, newVendor],
                        }));
                        setNewVendor({
                          name: "",
                          role: "",
                          website: "",
                          notes: "",
                        });
                      }}
                    >
                      Add New Vendor Team
                    </button>
                  </div>

                  {/* LISTA VENDORS GIA' AGGIUNTI */}
                  <div className="space-y-3">
                    {vendors.outsideVendors.length === 0 && (
                      <p className="text-[11px] text-slate-400 text-center">
                        Nessun vendor esterno aggiunto ancora.
                      </p>
                    )}
                    {vendors.outsideVendors.map((v, index) => (
                      <div
                        key={`${v.name}-${index}`}
                        className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-2 flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="text-xs font-semibold text-slate-900">
                            {v.name}
                          </div>
                          {v.role && (
                            <div className="text-[11px] text-slate-600">
                              {v.role}
                            </div>
                          )}
                          {v.website && (
                            <a
                              href={v.website}
                              target="_blank"
                              rel="noreferrer"
                              className="block text-[11px] text-rose-600 hover:text-rose-800 mt-1 truncate max-w-xs"
                            >
                              {v.website}
                            </a>
                          )}
                          {v.notes && (
                            <div className="text-[11px] text-slate-500 mt-1">
                              {v.notes}
                            </div>
                          )}
                        </div>
                        <button
                          type="button"
                          className="text-[10px] text-slate-400 hover:text-rose-600"
                          onClick={() =>
                            setVendors((state) => ({
                              ...state,
                              outsideVendors: state.outsideVendors.filter(
                                (_, i) => i !== index
                              ),
                            }))
                          }
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-rose-500 px-5 py-2 text-xs font-medium text-white hover:bg-rose-600 transition"
                  >
                    Save Changes
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

/* ------------------ COMPONENTI PICCOLI ------------------ */

function SectionTitle({ title }) {
  return (
    <div className="mt-4 mb-2">
      <h3 className="text-xs font-semibold text-slate-900 tracking-wide uppercase">
        {title}
      </h3>
    </div>
  );
}

function AvatarUpload({ label, preview, onChange }) {
  return (
    <div className="relative">
      <img
        src={preview}
        alt={`${label} avatar`}
        className="h-20 w-20 rounded-full object-cover border border-slate-200"
      />
      <label className="absolute -bottom-1 -right-1 inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-rose-500 text-[12px] text-white shadow hover:bg-rose-600">
        <span>✎</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0])}
        />
      </label>
    </div>
  );
}

function ImageBannerUpload({ preview, onChange }) {
  return (
    <div className="relative">
      <img
        src={preview}
        alt="Page header banner"
        className="w-full max-h-56 rounded-2xl object-cover border border-slate-200"
      />
      <label className="absolute bottom-3 right-3 inline-flex cursor-pointer items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow hover:bg-white">
        <span>✎</span>
        <span>Change Banner</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0])}
        />
      </label>
    </div>
  );
}

function ImageCardUpload({ preview, onChange }) {
  return (
    <div className="relative max-w-xs">
      <img
        src={preview}
        alt="Couple featured"
        className="w-full rounded-2xl object-cover border border-slate-200"
      />
      <label className="absolute bottom-3 right-3 inline-flex cursor-pointer items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow hover:bg-white">
        <span>✎</span>
        <span>Change Image</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0])}
        />
      </label>
    </div>
  );
}

function GalleryUpload({ images, onChange, onRemove }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-200"
          >
            <img
              src={img.preview}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white shadow"
              onClick={() => onRemove(index)}
            >
              ✕
            </button>
          </div>
        ))}
        {images.length === 0 && (
          <span className="text-[11px] text-slate-400">
            Nessuna immagine caricata.
          </span>
        )}
      </div>

      <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-rose-500 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-rose-600 transition">
        <span>⬆</span>
        <span>Add Gallery Images</span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => onChange(e.target.files)}
        />
      </label>
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div className="text-xs">
      <label className="block text-slate-600 mb-1">{label}</label>
      <select
        className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
