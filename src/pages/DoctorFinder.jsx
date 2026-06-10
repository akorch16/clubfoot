import { useState, useEffect, useRef } from "react";
import { doctors } from "../data/doctors";

const totalDoctors = doctors.length;
const totalCountries = new Set(doctors.map((d) => d.country || "United States")).size;

function haversineMiles(lat1, lng1, lat2, lng2) {
  const R = 3958.8;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function geocodeQuery(query) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&limit=1&format=json`;
  const res = await fetch(url, {
    headers: { "Accept-Language": "en", "User-Agent": "ClubfootClub/1.0" },
  });
  const data = await res.json();
  if (!data.length) return null;
  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
    label: data[0].display_name.split(",")[0],
  };
}

export default function DoctorFinder() {
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 25;
  const [locationQuery, setLocationQuery] = useState("");
  const [userCoords, setUserCoords] = useState(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState("");
  const geoSkipRef = useRef(false);

  async function triggerGeocode(query) {
    if (!query.trim()) {
      setUserCoords(null);
      setGeoError("");
      return;
    }
    setPage(1);
    setGeoLoading(true);
    setGeoError("");
    try {
      const coords = await geocodeQuery(query);
      if (!coords) {
        setGeoError("Location not found. Try a city name or zip code.");
        setUserCoords(null);
      } else {
        setUserCoords(coords);
      }
    } catch {
      setGeoError("Could not look up location. Check your connection.");
      setUserCoords(null);
    } finally {
      setGeoLoading(false);
    }
  }

  useEffect(() => {
    if (geoSkipRef.current) {
      geoSkipRef.current = false;
      return;
    }
    if (!locationQuery.trim()) {
      setUserCoords(null);
      setGeoError("");
    }
  }, [locationQuery]);

  function handleGeolocate() {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser.");
      return;
    }
    setGeoLoading(true);
    setGeoError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        geoSkipRef.current = true;
        setLocationQuery("My location");
        setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude, label: "My location" });
        setGeoLoading(false);
      },
      () => {
        setGeoError("Could not access your location.");
        setGeoLoading(false);
      }
    );
  }

  function clearLocation() {
    geoSkipRef.current = true;
    setLocationQuery("");
    setUserCoords(null);
    setGeoError("");
  }

  const filtered = doctors
    .map((d) => ({
      ...d,
      distance:
        userCoords && d.lat != null && d.lng != null
          ? haversineMiles(userCoords.lat, userCoords.lng, d.lat, d.lng)
          : null,
    }))
    .sort((a, b) => {
      if (a.distance !== null && b.distance !== null) return a.distance - b.distance;
      if (a.distance !== null) return -1;
      if (b.distance !== null) return 1;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-slate-800">Find a Specialist</h1>
        <p className="text-teal-600 text-sm font-semibold mt-1 leading-relaxed">Search through {totalDoctors} doctors from {totalCountries} countries trained in Ponseti to find the best fit.</p>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">This list is sourced from the <a href="https://ponseti.medicine.uiowa.edu/parent-information/ponseti-doctors-location" target="_blank" rel="noopener noreferrer" className="underline">Ponseti International Association directory</a>. Always verify credentials and availability directly with providers.</p>
        <div className="mt-4 flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-500 px-1">City or zip code</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="City, zip, or country"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && triggerGeocode(locationQuery)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 pr-10 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-teal-300"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                {geoLoading ? (
                  <svg className="w-4 h-4 text-teal-500 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : userCoords ? (
                  <button onClick={clearLocation} className="text-slate-400 active:text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => triggerGeocode(locationQuery)} className="text-slate-400 active:text-teal-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
                    </svg>
                  </button>
                )}
              </span>
            </div>
            <button
              onClick={handleGeolocate}
              title="Use my location"
              className="flex-shrink-0 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-teal-600 active:bg-teal-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
        {geoError && <p className="text-xs text-red-500 mt-1 px-1">{geoError}</p>}
        {userCoords && !geoError && !geoLoading && (
          <p className="text-xs font-semibold text-teal-600 mt-1 px-1">
            Found {filtered.filter((d) => d.distance !== null && d.distance <= 100).length} doctors within 100 miles
          </p>
        )}
      </div>

      <div className="px-4 pt-1 pb-6 space-y-3">
        {/* Doctor Cards */}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">No providers found for your search.</div>
        )}
        {paginated.map((doc) => (
          <div key={doc.id} className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800">{doc.name}</p>
                <p className="text-xs text-slate-500">{doc.specialty}</p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {doc.distance !== null && (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-500">
                    {Math.round(doc.distance)} mi
                  </span>
                )}
                {doc.ponseti && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-700">Ponseti</span>
                )}
              </div>
            </div>
            {doc.hospital && <p className="text-sm text-slate-700 mt-1">{doc.hospital}</p>}
            <p className="text-xs text-slate-500">{doc.city ? `${doc.city}, ` : ""}{doc.country ?? doc.state}</p>
            {doc.phone && (
              <a href={`tel:${doc.phone}`} className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-teal-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {doc.phone}
              </a>
            )}
            {doc.notes && <p className="text-xs text-slate-400 mt-2 italic">{doc.notes}</p>}
          </div>
        ))}
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-2 pb-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl disabled:opacity-40 active:bg-slate-50"
            >
              ← Prev
            </button>
            <span className="text-xs text-slate-500">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl disabled:opacity-40 active:bg-slate-50"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
