import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/components/layout/Layout";
import { LandingPage } from "@/pages/LandingPage";
import { LoginPage } from "@/pages/LoginPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { DownloadPage } from "@/pages/DownloadPage";
import { GuidePage } from "@/pages/GuidePage";
import { ContactPage } from "@/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="download" element={<DownloadPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;
