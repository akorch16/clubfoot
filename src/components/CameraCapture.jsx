import { useRef, useState } from "react";

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

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (ev) => resolve(ev.target.result);
    reader.readAsDataURL(file);
  });
}

function PhotoPreview({ preview, onConfirm, onRetake }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={preview} alt="Preview" className="w-full max-w-sm rounded-2xl shadow-md object-cover max-h-72" />
      <div className="flex gap-3 w-full max-w-sm">
        <button onClick={onRetake} className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-600 font-semibold text-sm">
          Retake
        </button>
        <button onClick={onConfirm} className="flex-1 py-3 rounded-xl bg-slate-800 text-white font-semibold text-sm">
          Use this photo
        </button>
      </div>
    </div>
  );
}

export default function CameraCapture({ onCapture }) {
  const cameraRef = useRef(null);
  const uploadRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [pending, setPending] = useState(null);

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const raw = await readFileAsDataUrl(file);
    const resized = await resizeDataUrl(raw);
    setPending(resized);
    setPreview(resized);
    e.target.value = "";
  }

  if (preview) {
    return (
      <PhotoPreview
        preview={preview}
        onConfirm={() => onCapture(pending)}
        onRetake={() => { setPreview(null); setPending(null); }}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Hidden file inputs */}
      <input ref={cameraRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={handleFile} />
      <input ref={uploadRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

      {/* Camera tap target */}
      <button
        onClick={() => cameraRef.current?.click()}
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
          <p className="text-xs text-slate-400 mt-0.5">Opens your camera</p>
        </div>
      </button>

      {/* Upload button */}
      <div className="flex gap-3 w-full max-w-sm">
        <button
          onClick={() => uploadRef.current?.click()}
          className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-600 font-semibold text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Upload photo
        </button>
      </div>

      <p className="text-xs text-slate-400 text-center px-4">
        Point the camera at the cast, brace, or foot you want assessed
      </p>
    </div>
  );
}
