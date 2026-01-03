import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import '../styles/components/logo.css';

/**
 * Logo Component
 * Theme-aware logo with PNG images from /public/branding/
 * Supports full logo and compact mark variants
 * NEVER crashes if images are missing - always falls back to text
 */
export function Logo({ variant = 'full', className = '' }) {
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
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Entrance animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Determine logo path based on theme and variant - with safe fallback
  let logoPath = '/branding/logo-dark.png';
  try {
    if (variant === 'mark') {
      // Compact mark (same for both themes, or use theme-specific if available)
      logoPath = '/branding/logo-mark.png';
    } else {
      // Full logo - theme-aware
      logoPath = isDark ? '/branding/logo-dark.png' : '/branding/logo-light.png';
    }
  } catch (e) {
    // If path construction fails, use default
    logoPath = '/branding/logo-dark.png';
  }

  // Handle image load error - always fallback to text
  // NEVER throw an error
  const handleImageError = () => {
    try {
      setImageError(true);
      setImageLoaded(false);
    } catch (e) {
      // If state update fails, component will still render text fallback
      console.warn('Logo image error handler failed:', e);
    }
  };

  // Handle image load success
  const handleImageLoad = () => {
    try {
      setImageLoaded(true);
      setImageError(false);
    } catch (e) {
      // If state update fails, continue with text fallback
      console.warn('Logo image load handler failed:', e);
    }
  };

  // Always render - never crash
  try {
    return (
      <div 
        className={`logo ${isVisible ? 'logo--visible' : ''} ${variant === 'mark' ? 'logo--mark' : ''} ${className}`}
        aria-label="YO! TECH THIS OUT"
      >
        {/* Try PNG logo first, always fallback to text if it fails or doesn't exist */}
        {!imageError ? (
          <img
            src={logoPath}
            alt="YO! TECH THIS OUT"
            className="logo__image"
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="eager"
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        ) : null}
        
        {/* Always render text fallback (visible if image fails or hasn't loaded) */}
        <span 
          className="logo__text" 
          style={{ 
            display: imageError || !imageLoaded ? 'inline' : 'none'
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
      <div aria-label="YO! TECH THIS OUT">
        <span className="logo__text">YO! TECH THIS OUT</span>
      </div>
    );
  }
}

