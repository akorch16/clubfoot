import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PhaseDetail from "./pages/PhaseDetail";
import Products from "./pages/Products";
import DoctorFinder from "./pages/DoctorFinder";
import Support from "./pages/Support";
import Scan from "./pages/Scan";
import Train from "./pages/Train";
import PonsetiMethod from "./pages/PonsetiMethod";

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phase/:phaseId" element={<PhaseDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/doctors" element={<DoctorFinder />} />
          <Route path="/support" element={<Support />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/train" element={<Train />} />
          <Route path="/method" element={<PonsetiMethod />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
