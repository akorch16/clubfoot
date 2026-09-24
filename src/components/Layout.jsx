import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

// Pages that manage their own desktop layout (full width, own max-w
// containers). Everything else keeps the mobile-style max-w-lg column
// until it gets the same treatment.
function isWidePage(pathname) {
  return pathname === "/" || pathname.startsWith("/phase/") || pathname === "/method";
}

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const wide = isWidePage(pathname);

  return (
    <div className="min-h-screen bg-stone-50">
      <TopNav />
      {wide ? (
        <main className="pb-20 md:pb-0">{children}</main>
      ) : (
        // Inner pages keep the focused column for now.
        <main className="max-w-lg mx-auto pb-20 md:pb-12">{children}</main>
      )}
      <BottomNav />
    </div>
  );
}
