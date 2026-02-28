import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home           from './pages/Home';
import About          from './pages/About';
import Services       from './pages/Services';
import ServiceAI      from './pages/ServiceAI';
import Industries     from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Insights       from './pages/Insights';
import Careers        from './pages/Careers';
import Contact        from './pages/Contact';
import Investors      from './pages/Investors';

/* ── Scroll to top on every route change ───────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

/* ── Main layout wrapper ────────────────────────────── */
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/"                           element={<Home />}           />
          <Route path="/about"                      element={<About />}          />
          <Route path="/company-overview"           element={<About />}          />
          <Route path="/services"                   element={<Services />}       />
          <Route path="/services/ai-transformation" element={<ServiceAI />}     />
          <Route path="/industries"                 element={<Industries />}     />
          <Route path="/industries/:industryId"     element={<IndustryDetail />} />
          <Route path="/insights"                   element={<Insights />}       />
          <Route path="/careers"                    element={<Careers />}        />
          <Route path="/contact"                    element={<Contact />}        />
          <Route path="/investors"                  element={<Investors />}      />
          {/* Catch-all → Home */}
          <Route path="*"                           element={<Home />}           />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
