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
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 px-5 pt-12 pb-6">
        <span className="inline-block bg-teal-400/20 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          Ponseti-trained providers
        </span>
        <h1 className="text-2xl font-bold text-white">Find a Specialist</h1>
        <p className="text-slate-300 text-sm mt-1">
          Finding a qualified Ponseti provider is the most important step
        </p>
        <div className="mt-4 flex gap-2">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-white rounded-xl px-3 py-2.5 text-sm text-gray-800 outline-none flex-shrink-0 w-24"
          >
            <option value="">All States</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Name or hospital..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-white rounded-xl px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4 pb-4">
        {/* Official Directory Callout */}
        <a
          href="https://www.ponseti.info/find-a-provider.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-2xl p-4"
        >
          <span className="text-2xl">🌐</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-teal-800">
              Official Ponseti International Directory
            </p>
            <p className="text-xs text-teal-600 mt-0.5">
              The most comprehensive and up-to-date provider list. Tap to open.
            </p>
          </div>
          <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Example disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>Note:</strong> The doctors listed below are examples only. Real provider data will be added by administrators. Always verify credentials and Ponseti training directly with providers.
          </p>
        </div>

        {/* Doctor Cards */}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No providers found for your search.
          </div>
        )}
        {filtered.map((doc) => (
          <div key={doc.id} className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div>
                <p className="font-semibold text-gray-800">{doc.name}</p>
                <p className="text-xs text-gray-500">{doc.specialty}</p>
              </div>
              {doc.ponseti && (
                <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-700">
                  Ponseti
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 mt-1">{doc.hospital}</p>
            <p className="text-xs text-gray-500">
              {doc.city}, {doc.state}
            </p>
            <a
              href={`tel:${doc.phone}`}
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-teal-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {doc.phone}
            </a>
            {doc.notes && (
              <p className="text-xs text-gray-500 mt-2 italic">{doc.notes}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
