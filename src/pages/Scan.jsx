import { useState } from "react";
import CameraCapture from "../components/CameraCapture";
import DiagnosisResult from "../components/DiagnosisResult";
import FeedbackWidget from "../components/FeedbackWidget";
import { analyzeImage } from "../services/vision";

export default function Scan() {
  const [phase, setPhase] = useState("capture"); // capture | analyzing | result | error
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleCapture(dataUrl) {
    if (!import.meta.env.VITE_ANTHROPIC_API_KEY || import.meta.env.VITE_ANTHROPIC_API_KEY === "your-key-here") {
      setErrorMsg("API key not configured. Add VITE_ANTHROPIC_API_KEY to your .env.local file.");
      setPhase("error");
      return;
    }
    setImageDataUrl(dataUrl);
    setPhase("analyzing");
    try {
      const result = await analyzeImage(dataUrl);
      setDiagnosis(result);
      setPhase("result");
    } catch (err) {
      console.error("Vision API error:", err);
      setErrorMsg(err.message ?? "Something went wrong analyzing the image.");
      setPhase("error");
    }
  }

  function reset() {
    setPhase("capture");
    setImageDataUrl(null);
    setDiagnosis(null);
    setErrorMsg(null);
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 px-5 pt-12 pb-6">
        <span className="inline-block bg-violet-400/20 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3">
          AI-powered · not medical advice
        </span>
        <h1 className="text-2xl font-bold text-white">Scan &amp; Assess</h1>
        <p className="text-slate-300 text-sm mt-1">
          Take a photo of a cast, brace, or foot to check for common issues
        </p>
      </div>

      <div className="px-4 pt-5 pb-6 space-y-4">

        {/* Capture phase */}
        {phase === "capture" && (
          <CameraCapture onCapture={handleCapture} />
        )}

        {/* Analyzing phase */}
        {phase === "analyzing" && (
          <div className="flex flex-col items-center gap-4 py-6">
            {imageDataUrl && (
              <img src={imageDataUrl} alt="Analyzing" className="w-40 h-40 rounded-2xl object-cover shadow-md opacity-70" />
            )}
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin" />
              <p className="text-sm font-medium text-slate-600">Analyzing your photo…</p>
              <p className="text-xs text-slate-400">This usually takes 2–5 seconds</p>
            </div>
          </div>
        )}

        {/* Result phase */}
        {phase === "result" && diagnosis && (
          <>
            {/* Thumbnail */}
            {imageDataUrl && (
              <img src={imageDataUrl} alt="Assessed" className="w-full max-w-sm mx-auto rounded-2xl object-cover max-h-48 shadow-md" />
            )}

            <DiagnosisResult diagnosis={diagnosis} />

            <FeedbackWidget
              diagnosis={diagnosis}
              imageDataUrl={imageDataUrl}
              onSubmitted={() => {}}
            />

            <button
              onClick={reset}
              className="w-full py-3.5 rounded-2xl border border-slate-300 text-slate-600 font-semibold text-sm"
            >
              Scan another photo
            </button>
          </>
        )}

        {/* Error phase */}
        {phase === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 space-y-3">
            <p className="font-semibold text-red-800 text-sm">Something went wrong</p>
            <p className="text-sm text-red-600 leading-relaxed">{errorMsg}</p>
            <button
              onClick={reset}
              className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold text-sm"
            >
              Try again
            </button>
          </div>
        )}

        {/* Disclaimer — always visible in capture phase */}
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
