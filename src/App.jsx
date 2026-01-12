import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingIntro } from './components/LoadingIntro';
import { CursorLighting } from './components/CursorLighting';
import { GoToTopButton } from './components/GoToTopButton';
import { CESBadge } from './components/CESBadge';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Why } from './pages/Why';
import { About } from './pages/About';
import { Advertise } from './pages/Advertise';
import { Techfluencers } from './pages/Techfluencers';
import { Press } from './pages/Press';
import { Contact } from './pages/Contact';
import { Live } from './pages/Live';
import { Explore } from './pages/Explore';
import { PodcastSection } from './components/PodcastSection';
import { ClosingSection } from './components/ClosingSection';
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
          {/* Apple-style loading intro - shown once per session */}
          <LoadingIntro />
          
          <div className="app" style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Cursor-reactive lighting (desktop only) */}
            <CursorLighting />
            
            {/* Sticky Navigation */}
            <ErrorBoundary>
              <Navigation />
            </ErrorBoundary>

            {/* CES Badge - Only shows on Home page */}
            <ErrorBoundary>
              <CESBadge />
            </ErrorBoundary>

            {/* Go to Top Button */}
            <ErrorBoundary>
              <GoToTopButton />
            </ErrorBoundary>

            {/* Routes */}
            <Routes>
              <Route path="/" element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              } />
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
              <Route path="/explore" element={
                <ErrorBoundary>
                  <Explore />
                </ErrorBoundary>
              } />
            </Routes>

            {/* Podcast Section - Appears on all pages above footer */}
            <ErrorBoundary>
              <PodcastSection />
            </ErrorBoundary>

            {/* Footer - Appears on all pages */}
            <ErrorBoundary>
              <ClosingSection />
            </ErrorBoundary>
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
