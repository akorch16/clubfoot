import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import PhaseDetail from "./pages/PhaseDetail";
import Products from "./pages/Products";
import DoctorFinder from "./pages/DoctorFinder";
import Support from "./pages/Support";
import Scan from "./pages/Scan";
import Train from "./pages/Train";
import ScanLog from "./pages/ScanLog";
import Eval from "./pages/Eval";
import PonsetiMethod from "./pages/PonsetiMethod";
import OurStory from "./pages/OurStory";

// HashRouter doesn't reset scroll position on route change the way a
// traditional multi-page site does -- without this, navigating to a new
// page while scrolled down leaves the viewport scrolled down on the new
// page's content instead of starting at the top.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function BoundedRoutes() {
  const { pathname } = useLocation();
  return (
    <ErrorBoundary key={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phase/:phaseId" element={<PhaseDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/doctors" element={<DoctorFinder />} />
        <Route path="/support" element={<Support />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/train" element={<Train />} />
        <Route path="/logs" element={<ScanLog />} />
        <Route path="/eval" element={<Eval />} />
        <Route path="/method" element={<PonsetiMethod />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <ScrollToTop />
        <BoundedRoutes />
      </Layout>
    </HashRouter>
  );
}
