import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import '../styles/components/logo.css';

/**
 * Logo Component
 * Text-based wordmark with SVG fallback support
 * Dynamically switches based on theme
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

  // Entrance animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Determine logo path based on theme
  const logoSvgPath = isDark ? '/logo/logo-dark.svg' : '/logo/logo-light.svg';

  // Always show text fallback immediately for debugging
  const showTextFallback = true; // TEMPORARY: Force text to always show

  return (
    <div 
      className={`logo ${isVisible ? 'logo--visible' : ''}`}
      aria-label="YO! TECH THIS OUT"
      style={{ opacity: 1, visibility: 'visible' }} // Force visible
    >
      {/* Always show text for now - will restore SVG after debugging */}
      {showTextFallback ? (
        <span className="logo__text" style={{ opacity: 1, visibility: 'visible' }}>
          YO! TECH THIS OUT
        </span>
      ) : (
        <>
          {/* Try SVG logo first, fallback to text */}
          {!svgError ? (
            <img
              src={logoSvgPath}
              alt="YO! TECH THIS OUT"
              className="logo__image"
              onError={() => {
                console.log('Logo SVG failed to load, using text fallback');
                setSvgError(true);
              }}
              loading="eager"
              onLoad={() => {
                console.log('Logo SVG loaded successfully');
              }}
            />
          ) : (
            <span className="logo__text">YO! TECH THIS OUT</span>
          )}
        </>
      )}
    </div>
  );
}

