import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen bg-stone-50">
      <TopNav />
      {isHome ? (
        // Homepage runs full width and manages its own layout.
        <main className="pb-20 md:pb-0">{children}</main>
      ) : (
        // Inner pages keep the focused column for now.
        <main className="max-w-lg mx-auto pb-20 md:pb-12">{children}</main>
      )}
      <BottomNav />
    </div>
  );
}
