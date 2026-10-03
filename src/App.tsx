import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VercelAnalytics from './components/VercelAnalytics';
import HomePage from './pages/HomePage';
import DeficiencyDetailPage from './pages/DeficiencyDetailPage';
import SymptomNavigatorPage from './pages/SymptomNavigatorPage';
import BloodTestPage from './pages/BloodTestPage';
import NutritionPage from './pages/NutritionPage';
import AboutPage from './pages/AboutPage';
import VitaminHubPage from './pages/VitaminHubPage';
import SymptomArticlePage from './pages/SymptomArticlePage';
import LabTestArticlePage from './pages/LabTestArticlePage';
import CauseArticlePage from './pages/CauseArticlePage';
import FoodArticlePage from './pages/FoodArticlePage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import { SiteProvider } from '@plattform/core';
import { siteConfig } from './site.config';
import { products } from './products';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteProvider config={siteConfig} products={products}>
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
    </SiteProvider>
  );
}

function RouteWatcher() {
  const location = useLocation();

  React.useEffect(() => {
    const pathname = location.pathname;
    
    // Normalize path
    let cleanPath = pathname;
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    const fullUrl = `https://www.nährstoffmangel.de${cleanPath === '/' ? '' : cleanPath}`;
    
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    
    if (canonicalLink) canonicalLink.setAttribute('href', fullUrl);
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);
    if (twitterUrl) twitterUrl.setAttribute('content', fullUrl);

    // Scroll to top on client route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return null;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/eisenmangel" element={<DeficiencyDetailPage customSlug="eisenmangel" />} />
      <Route path="/vitamin-d-mangel" element={<DeficiencyDetailPage customSlug="vitamin-d-mangel" />} />
      <Route path="/magnesiummangel" element={<DeficiencyDetailPage customSlug="magnesiummangel" />} />
      <Route path="/vitamin-b12-mangel" element={<DeficiencyDetailPage customSlug="vitamin-b12-mangel" />} />
      <Route path="/zinkmangel" element={<DeficiencyDetailPage customSlug="zinkmangel" />} />
      <Route path="/folsaeuremangel" element={<DeficiencyDetailPage customSlug="folsaeuremangel" />} />
      <Route path="/jodmangel" element={<DeficiencyDetailPage customSlug="jodmangel" />} />
      <Route path="/vitaminmangel" element={<VitaminHubPage />} />
      <Route path="/symptome" element={<SymptomNavigatorPage />} />
      <Route path="/symptome/:slug" element={<SymptomArticlePage />} />
      <Route path="/laborwerte/:slug" element={<LabTestArticlePage />} />
      <Route path="/ursachen/:slug" element={<CauseArticlePage />} />
      <Route path="/ernaehrung" element={<NutritionPage />} />
      <Route path="/ernaehrung/:slug" element={<FoodArticlePage />} />
      <Route path="/bluttest" element={<BloodTestPage />} />
      <Route path="/ueber-uns" element={<AboutPage />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <VercelAnalytics />
      <RouteWatcher />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
