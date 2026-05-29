import BottomNav from "./BottomNav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="max-w-lg mx-auto pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
