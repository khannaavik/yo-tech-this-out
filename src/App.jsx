import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingIntro } from './components/LoadingIntro';
import { CursorLighting } from './components/CursorLighting';
import { FixedWatchDemoButton } from './components/FixedWatchDemoButton';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Why } from './pages/Why';
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

            {/* Fixed Watch Demo Button (desktop only) */}
            <ErrorBoundary>
              <FixedWatchDemoButton />
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
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
