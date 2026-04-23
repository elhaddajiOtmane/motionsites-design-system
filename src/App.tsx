import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ChannelsPage } from "./pages/ChannelsPage";
import { PricingPage } from "./pages/PricingPage";
import { SupportPage } from "./pages/SupportPage";
import { CtaFooter } from "./components/CtaFooter";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/channels" element={<ChannelsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <CtaFooter />
      </div>
    </BrowserRouter>
  );
}
