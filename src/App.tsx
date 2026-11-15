import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import CategoryPage from '@/pages/CategoryPage';
import HomePage from '@/pages/HomePage';

function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, key]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex min-h-screen flex-col bg-ink">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works/:slug" element={<CategoryPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
