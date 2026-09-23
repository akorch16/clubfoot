import { useState, useRef } from "react";

// Citation markers in text look like [[1]] or [[1,2]].
const CITE_RE = /\[\[(\d+(?:\s*,\s*\d+)*)\]\]/g;

// A single superscript citation. Tapping it opens a small popover with the
// source, positioned with fixed coordinates clamped to the viewport so it never
// clips (no hash jump — safe under HashRouter, works on mobile).
function CiteMark({ n, source }) {
  const [pos, setPos] = useState(null); // { left, top?, bottom?, width } or null when closed
  const ref = useRef(null);

  function toggle() {
    if (pos) { setPos(null); return; }
    const r = ref.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(256, vw - 16);
    let left = r.left + r.width / 2 - width / 2;
    left = Math.max(8, Math.min(left, vw - width - 8));
    // Open above the mark when it sits low on screen, otherwise below.
    if (r.top > vh * 0.55) setPos({ left, bottom: vh - r.top + 6, width });
    else setPos({ left, top: r.bottom + 6, width });
  }

  return (
    <sup
      className="ml-0.5 text-[0.7em] font-semibold"
      style={{ lineHeight: 0, position: "relative", top: "-0.5em", verticalAlign: "baseline" }}
    >
      <button
        ref={ref}
        type="button"
        onClick={toggle}
        className="text-teal-600 hover:underline focus:outline-none"
        aria-expanded={!!pos}
      >
        [{n}]
      </button>
      {pos && source && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setPos(null)}
            className="fixed inset-0 z-30 cursor-default"
          />
          <span
            role="tooltip"
            style={{ position: "fixed", left: pos.left, top: pos.top, bottom: pos.bottom, width: pos.width }}
            className="z-40 block text-left font-normal normal-case"
          >
            <span className="block whitespace-normal break-words rounded-lg bg-slate-800 p-2.5 text-[11px] leading-snug text-white shadow-lg">
              {source.label}
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-teal-300 hover:underline"
                >
                  View source ↗
                </a>
              )}
            </span>
          </span>
        </>
      )}
    </sup>
  );
}

// Renders a string that may contain [[n]] markers as tap-to-view citations.
// Pass the phase/page `sources` array so each marker can show its reference.
export default function Cited({ text, sources }) {
  if (typeof text !== "string" || !text.includes("[[")) return text ?? null;
  const byId = {};
  (sources || []).forEach((s) => { byId[String(s.id)] = s; });

  const parts = [];
  let last = 0;
  let m;
  let key = 0;
  while ((m = CITE_RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const nums = m[1].split(",").map((s) => s.trim());
    nums.forEach((nRaw) => {
      parts.push(<CiteMark key={`c${key++}`} n={nRaw} source={byId[nRaw]} />);
    });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

// A reusable numbered Sources list. `sources` is [{ id, label, url }].
export function Sources({ sources }) {
  if (!sources?.length) return null;
  return (
    <ol className="bg-white rounded-2xl shadow-sm p-5 space-y-2.5">
      {sources.map((s) => (
        <li key={s.id} id={`src-${s.id}`} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
          <span className="text-teal-600 font-semibold flex-shrink-0">{s.id}.</span>
          <span>
            {s.label}
            {s.url && (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal-600 ml-1 whitespace-nowrap hover:underline">
                View ↗
              </a>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
