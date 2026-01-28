import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingIntro } from './components/LoadingIntro';
import { CursorLighting } from './components/CursorLighting';
import { CESBadge } from './components/CESBadge';
import { ScrollToTop } from './components/ScrollToTop';
import { AppShell } from './v2/app/AppShell';
import { AppRoutes } from './v2/app/routes';
import { Why } from './pages/Why';
import { About } from './pages/About';
import { WhatWeDo } from './pages/WhatWeDo';
import { Magazine } from './pages/Magazine';
import { Podcast } from './pages/Podcast';
import { Social } from './pages/Social';
import { Advertise } from './pages/Advertise';
import { Techfluencers } from './pages/Techfluencers';
import { Press } from './pages/Press';
import { Contact } from './pages/Contact';
import { Live } from './pages/Live';
import { Products } from './pages/Products';
import { InnovationAwards } from './pages/InnovationAwards';
import { CompanyProfile } from './pages/CompanyProfile';
import { ProductDetail } from './pages/ProductDetail';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';
import './styles/globals.css';

/**
 * App Component
 * Main application shell with theme provider and routing
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          {/* Scroll to top on route change */}
          <ScrollToTop />
          
          {/* Apple-style loading intro - shown once per session */}
          <LoadingIntro />
          
          <div className="app" style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Cursor-reactive lighting (desktop only) */}
            <CursorLighting />
            
            {/* CES Badge - Shows on all pages */}
            <ErrorBoundary>
              <CESBadge />
            </ErrorBoundary>

            <AppShell>
              <Routes>
                <Route path="/" element={<AppRoutes />} />
                <Route path="/why" element={
                  <ErrorBoundary>
                    <Why />
                  </ErrorBoundary>
                } />
                <Route path="/about" element={
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                } />
                <Route path="/what-we-do" element={
                  <ErrorBoundary>
                    <WhatWeDo />
                  </ErrorBoundary>
                } />
                <Route path="/magazine" element={
                  <ErrorBoundary>
                    <Magazine />
                  </ErrorBoundary>
                } />
                <Route path="/podcast" element={
                  <ErrorBoundary>
                    <Podcast />
                  </ErrorBoundary>
                } />
                <Route path="/social" element={
                  <ErrorBoundary>
                    <Social />
                  </ErrorBoundary>
                } />
                <Route path="/advertise" element={
                  <ErrorBoundary>
                    <Advertise />
                  </ErrorBoundary>
                } />
                <Route path="/techfluencers" element={
                  <ErrorBoundary>
                    <Techfluencers />
                  </ErrorBoundary>
                } />
                <Route path="/press" element={
                  <ErrorBoundary>
                    <Press />
                  </ErrorBoundary>
                } />
                <Route path="/contact" element={
                  <ErrorBoundary>
                    <Contact />
                  </ErrorBoundary>
                } />
                <Route path="/live" element={
                  <ErrorBoundary>
                    <Live />
                  </ErrorBoundary>
                } />
                <Route path="/products" element={
                  <ErrorBoundary>
                    <Products />
                  </ErrorBoundary>
                } />
                <Route path="/innovation-awards" element={
                  <ErrorBoundary>
                    <InnovationAwards />
                  </ErrorBoundary>
                } />
                <Route path="/companies/:companySlug" element={
                  <ErrorBoundary>
                    <CompanyProfile />
                  </ErrorBoundary>
                } />
                <Route path="/products/:productSlug" element={
                  <ErrorBoundary>
                    <ProductDetail />
                  </ErrorBoundary>
                } />
                <Route path="/privacy" element={
                  <ErrorBoundary>
                    <Privacy />
                  </ErrorBoundary>
                } />
                <Route path="/terms" element={
                  <ErrorBoundary>
                    <Terms />
                  </ErrorBoundary>
                } />
                {/* Catch-all route for 404 pages */}
                <Route path="*" element={
                  <ErrorBoundary>
                    <NotFound />
                  </ErrorBoundary>
                } />
              </Routes>
            </AppShell>
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
