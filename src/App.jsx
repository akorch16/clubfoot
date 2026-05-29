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
import DesignPicker from "./pages/design/DesignPicker";
import HomeV1 from "./pages/design/HomeV1";
import HomeV2 from "./pages/design/HomeV2";
import HomeV3 from "./pages/design/HomeV3";
import CastingV1 from "./pages/design/CastingV1";

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
          <Route path="/design" element={<DesignPicker />} />
          <Route path="/design/v1" element={<HomeV1 />} />
          <Route path="/design/v2" element={<HomeV2 />} />
          <Route path="/design/v3" element={<HomeV3 />} />
          <Route path="/design/casting" element={<CastingV1 />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
