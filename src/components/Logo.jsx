import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import '../styles/components/logo.css';

/**
 * Logo Component
 * Text-based wordmark with SVG fallback support
 * Dynamically switches based on theme
 */
export function Logo() {
  const { theme, isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [svgError, setSvgError] = useState(false);

  // Entrance animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Determine logo path based on theme
  const logoSvgPath = isDark ? '/logo/logo-dark.svg' : '/logo/logo-light.svg';

  return (
    <div 
      className={`logo ${isVisible ? 'logo--visible' : ''}`}
      aria-label="YO! TECH THIS OUT"
    >
      {/* Try SVG logo first, fallback to text */}
      {!svgError ? (
        <img
          src={logoSvgPath}
          alt="YO! TECH THIS OUT"
          className="logo__image"
          onError={() => setSvgError(true)}
          loading="eager"
        />
      ) : (
        <span className="logo__text">YO! TECH THIS OUT</span>
      )}
    </div>
  );
}

