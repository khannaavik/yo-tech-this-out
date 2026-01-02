import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import '../styles/components/logo.css';

/**
 * Logo Component
 * Text-based wordmark with SVG fallback support
 * Dynamically switches based on theme
 * NEVER crashes if SVG is missing - always falls back to text
 */
export function Logo() {
  // Safe theme access with fallback
  let isDark = true;
  try {
    const theme = useTheme();
    isDark = theme?.isDark ?? true;
  } catch (e) {
    // If theme context is not available, default to dark
    // This is safe and won't crash the app
  }

  const [isVisible, setIsVisible] = useState(false);
  const [svgError, setSvgError] = useState(false);
  const [svgLoaded, setSvgLoaded] = useState(false);

  // Entrance animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Determine logo path based on theme - with safe fallback
  // If path construction fails, default to dark
  let logoSvgPath = '/logo/logo-dark.svg';
  try {
    logoSvgPath = isDark ? '/logo/logo-dark.svg' : '/logo/logo-light.svg';
  } catch (e) {
    // If path construction fails, use default
    logoSvgPath = '/logo/logo-dark.svg';
  }

  // Handle SVG load error - always fallback to text
  // NEVER throw an error
  const handleSvgError = () => {
    try {
      setSvgError(true);
      setSvgLoaded(false);
    } catch (e) {
      // If state update fails, component will still render text fallback
      console.warn('Logo SVG error handler failed:', e);
    }
  };

  // Handle SVG load success
  const handleSvgLoad = () => {
    try {
      setSvgLoaded(true);
      setSvgError(false);
    } catch (e) {
      // If state update fails, continue with text fallback
      console.warn('Logo SVG load handler failed:', e);
    }
  };

  // Always render - never crash
  try {
    return (
      <div 
        className={`logo ${isVisible ? 'logo--visible' : ''}`}
        aria-label="YO! TECH THIS OUT"
        style={{ opacity: 1, visibility: 'visible' }}
      >
        {/* Try SVG logo first, always fallback to text if it fails or doesn't exist */}
        {!svgError ? (
          <img
            src={logoSvgPath}
            alt="YO! TECH THIS OUT"
            className="logo__image"
            onError={handleSvgError}
            onLoad={handleSvgLoad}
            loading="eager"
            style={{ display: svgLoaded ? 'block' : 'none' }}
          />
        ) : null}
        
        {/* Always render text fallback (visible if SVG fails or hasn't loaded) */}
        <span 
          className="logo__text" 
          style={{ 
            opacity: 1, 
            visibility: 'visible',
            display: svgError || !svgLoaded ? 'inline' : 'none'
          }}
        >
          YO! TECH THIS OUT
        </span>
      </div>
    );
  } catch (e) {
    // Ultimate fallback - if component render fails, return minimal text
    console.error('Logo component render error:', e);
    return (
      <div aria-label="YO! TECH THIS OUT" style={{ opacity: 1, visibility: 'visible' }}>
        <span className="logo__text">YO! TECH THIS OUT</span>
      </div>
    );
  }
}

