import { useState } from "react";
import CameraCapture from "../components/CameraCapture";
import DiagnosisResult from "../components/DiagnosisResult";
import FeedbackWidget from "../components/FeedbackWidget";
import { analyzeImage, getStoredApiKey, saveApiKey, clearApiKey } from "../services/vision";

export default function Scan() {
  const [phase, setPhase] = useState(() => getStoredApiKey() ? "capture" : "setup");
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");
  const [symptoms, setSymptoms] = useState("");

  function handleSaveKey() {
    const trimmed = keyInput.trim();
    if (!trimmed.startsWith("sk-ant-")) { setKeyError("Key must start with sk-ant-"); return; }
    saveApiKey(trimmed);
    setKeyInput("");
    setKeyError("");
    setPhase("capture");
  }

  function handleForgetKey() { clearApiKey(); setPhase("setup"); }

  async function handleCapture(dataUrl) {
    setImageDataUrl(dataUrl);
    setPhase("analyzing");
    try {
      const result = await analyzeImage(dataUrl, symptoms);
      setDiagnosis(result);
      setPhase("result");
    } catch (err) {
      console.error("Vision API error:", err);
      if (err.message === "NO_API_KEY") { setPhase("setup"); }
      else { setErrorMsg(err.message ?? "Something went wrong analyzing the image."); setPhase("error"); }
    }
  }

  function reset() {
    setPhase("capture");
    setImageDataUrl(null);
    setDiagnosis(null);
    setErrorMsg(null);
    setSymptoms("");
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-500 px-5 pt-12 pb-6">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          AI-powered · not medical advice
        </span>
        <h1 className="text-2xl font-bold text-white">Scan &amp; Assess</h1>
        <p className="text-violet-100 text-sm mt-1">
          Take a photo of a cast, brace, or foot to check for common issues
        </p>
      </div>

      <div className="px-4 pt-5 pb-8 space-y-4">

        {/* Setup phase */}
        {phase === "setup" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
              <div>
                <h2 className="font-semibold text-slate-800 text-base">Connect your Anthropic key</h2>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Your key is stored only on this device and is never sent to any server other than Anthropic.
                </p>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-medium text-slate-600">Anthropic API key</label>
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => { setKeyInput(e.target.value); setKeyError(""); }}
                  placeholder="sk-ant-..."
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
                {keyError && <p className="text-xs text-red-600">{keyError}</p>}
              </div>
              <button
                onClick={handleSaveKey}
                disabled={!keyInput.trim()}
                className="w-full py-3 rounded-xl bg-violet-500 text-white font-semibold text-sm disabled:opacity-40 active:scale-95 transition-transform"
              >
                Save &amp; continue
              </button>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-3">
              <p className="text-xs text-amber-700 leading-relaxed">
                <strong>Where to get a key:</strong> Visit <span className="font-mono">console.anthropic.com</span>, sign in, and create an API key under "API Keys."
              </p>
            </div>
          </div>
        )}

        {/* Capture phase */}
        {phase === "capture" && (
          <>
            <CameraCapture onCapture={handleCapture} />
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Describe any symptoms <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value.slice(0, 500))}
                placeholder="e.g. Toes look a little purple, baby is fussier than usual, cast feels tight"
                rows={3}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-300 resize-none"
              />
              <p className="text-xs text-slate-400 text-right">{symptoms.length}/500</p>
            </div>
            <button onClick={handleForgetKey} className="w-full py-2 text-xs text-slate-400 active:text-slate-600 transition-colors">
              Forget saved API key
            </button>
          </>
        )}

        {/* Analyzing phase */}
        {phase === "analyzing" && (
          <div className="flex flex-col items-center gap-4 py-8">
            {imageDataUrl && (
              <img src={imageDataUrl} alt="Analyzing" className="w-40 h-40 rounded-2xl object-cover opacity-70" />
            )}
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-slate-200 border-t-violet-500 rounded-full animate-spin" />
              <p className="text-sm font-medium text-slate-600">Analyzing your photo…</p>
              <p className="text-xs text-slate-400">This usually takes 2–5 seconds</p>
            </div>
          </div>
        )}

        {/* Result phase */}
        {phase === "result" && diagnosis && (
          <>
            {imageDataUrl && (
              <img src={imageDataUrl} alt="Assessed" className="w-full max-w-sm mx-auto rounded-2xl object-cover max-h-48 shadow-sm" />
            )}
            <DiagnosisResult diagnosis={diagnosis} />
            <FeedbackWidget diagnosis={diagnosis} imageDataUrl={imageDataUrl} onSubmitted={() => {}} />
            <button onClick={reset}
              className="w-full py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-600 font-semibold text-sm active:scale-95 transition-transform shadow-sm">
              Scan another photo
            </button>
          </>
        )}

        {/* Error phase */}
        {phase === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 space-y-3">
            <p className="font-semibold text-red-800 text-sm">Something went wrong</p>
            <p className="text-sm text-red-600 leading-relaxed">{errorMsg}</p>
            <button onClick={reset} className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold text-sm active:scale-95 transition-transform">
              Try again
            </button>
          </div>
        )}

        {phase === "capture" && (
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-3">
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>Not medical advice.</strong> This tool helps parents spot common issues but cannot replace your care team. When in doubt, call your provider.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
