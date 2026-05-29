import { useState } from "react";
import { doctors, states } from "../data/doctors";

export default function DoctorFinder() {
  const [selectedState, setSelectedState] = useState("");
  const [search, setSearch] = useState("");

  const filtered = doctors.filter((d) => {
    const matchesState = !selectedState || d.state === selectedState;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.hospital.toLowerCase().includes(q) ||
      d.city.toLowerCase().includes(q);
    return matchesState && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Ponseti-trained providers
        </span>
        <h1 className="text-2xl font-bold text-slate-800">Find a Specialist</h1>
        <p className="text-slate-500 text-sm mt-1">Finding a qualified Ponseti provider is the most important step</p>
        <div className="mt-4 flex gap-2">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 outline-none flex-shrink-0 w-28"
          >
            <option value="">All States</option>
            {states.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <input
            type="text"
            placeholder="Name or hospital..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-slate-300"
          />
        </div>
      </div>

      <div className="px-4 pt-1 pb-6 space-y-3">
        {/* Official directory */}
        <a
          href="https://www.ponseti.info/find-a-provider.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-teal-500 rounded-2xl p-4 active:opacity-90 transition-opacity"
        >
          <span className="text-2xl flex-shrink-0">🌐</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">Official Ponseti International Directory</p>
            <p className="text-xs text-teal-100 mt-0.5">The most comprehensive and up-to-date provider list. Tap to open.</p>
          </div>
          <span className="text-white/60 flex-shrink-0">→</span>
        </a>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-3">
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>Note:</strong> The doctors listed below are examples only. Always verify credentials and Ponseti training directly with providers.
          </p>
        </div>

        {/* Doctor Cards */}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">No providers found for your search.</div>
        )}
        {filtered.map((doc) => (
          <div key={doc.id} className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div>
                <p className="font-semibold text-slate-800">{doc.name}</p>
                <p className="text-xs text-slate-500">{doc.specialty}</p>
              </div>
              {doc.ponseti && (
                <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-700">Ponseti</span>
              )}
            </div>
            <p className="text-sm text-slate-700 mt-1">{doc.hospital}</p>
            <p className="text-xs text-slate-500">{doc.city}, {doc.state}</p>
            <a href={`tel:${doc.phone}`} className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-teal-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {doc.phone}
            </a>
            {doc.notes && <p className="text-xs text-slate-400 mt-2 italic">{doc.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
