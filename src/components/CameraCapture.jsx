import { useRef, useState, useEffect } from "react";

const isMobileDevice = () =>
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

function resizeDataUrl(dataUrl, maxPx = 1200) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(maxPx / img.width, maxPx / img.height, 1);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.src = dataUrl;
  });
}

// ─── Mobile path: file input with capture ───────────────────────────────────
function MobileCapture({ onCapture }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [pending, setPending] = useState(null);

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const resized = await resizeDataUrl(ev.target.result);
      setPending(resized);
      setPreview(resized);
    };
    reader.readAsDataURL(file);
    // Reset so the same file can be re-selected after a retake
    e.target.value = "";
  }

  function confirm() {
    if (pending) onCapture(pending);
  }

  function retake() {
    setPreview(null);
    setPending(null);
    inputRef.current?.click();
  }

  if (preview) {
    return (
      <div className="flex flex-col items-center gap-4">
        <img src={preview} alt="Preview" className="w-full max-w-sm rounded-2xl shadow-md object-cover max-h-72" />
        <div className="flex gap-3 w-full max-w-sm">
          <button onClick={retake} className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-600 font-semibold text-sm">
            Retake
          </button>
          <button onClick={confirm} className="flex-1 py-3 rounded-xl bg-slate-800 text-white font-semibold text-sm">
            Use this photo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <input ref={inputRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={handleFile} />
      <button
        onClick={() => inputRef.current?.click()}
        className="w-full max-w-sm py-5 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center gap-3 active:bg-slate-50"
      >
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-semibold text-slate-700">Take a photo</p>
          <p className="text-xs text-slate-400 mt-0.5">or choose from your library</p>
        </div>
      </button>
      <p className="text-xs text-slate-400 text-center px-4">
        Point the camera at the cast, brace, or foot you want assessed
      </p>
    </div>
  );
}

// ─── Desktop path: live webcam viewfinder ────────────────────────────────────
function DesktopCapture({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [pending, setPending] = useState(null);

  useEffect(() => {
    let active = true;
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment", width: { ideal: 1280 } } })
      .then((stream) => {
        if (!active) { stream.getTracks().forEach((t) => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(() => setPermissionDenied(true));
    return () => {
      active = false;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  async function capture() {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    const resized = await resizeDataUrl(dataUrl);
    setPending(resized);
    setPreview(resized);
    streamRef.current?.getTracks().forEach((t) => t.stop());
  }

  function retake() {
    setPreview(null);
    setPending(null);
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      });
  }

  if (permissionDenied) {
    return (
      <div className="text-center px-4">
        <p className="text-slate-500 text-sm">Camera access was denied.</p>
        <p className="text-slate-400 text-xs mt-1">Enable camera permissions in your browser settings and reload.</p>
      </div>
    );
  }

  if (preview) {
    return (
      <div className="flex flex-col items-center gap-4">
        <img src={preview} alt="Preview" className="w-full max-w-sm rounded-2xl shadow-md object-cover max-h-72" />
        <div className="flex gap-3 w-full max-w-sm">
          <button onClick={retake} className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-600 font-semibold text-sm">
            Retake
          </button>
          <button onClick={() => onCapture(pending)} className="flex-1 py-3 rounded-xl bg-slate-800 text-white font-semibold text-sm">
            Use this photo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-black aspect-[4/3] relative">
        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
      </div>
      <canvas ref={canvasRef} className="hidden" />
      <button
        onClick={capture}
        className="w-16 h-16 rounded-full bg-white border-4 border-slate-800 flex items-center justify-center shadow-md active:scale-95 transition-transform"
      >
        <div className="w-10 h-10 rounded-full bg-slate-800" />
      </button>
      <p className="text-xs text-slate-400 text-center">
        Frame the cast, brace, or foot clearly — then tap the button
      </p>
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────
export default function CameraCapture({ onCapture }) {
  const mobile = isMobileDevice();
  return mobile
    ? <MobileCapture onCapture={onCapture} />
    : <DesktopCapture onCapture={onCapture} />;
}
