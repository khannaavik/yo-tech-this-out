import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Logo } from './Logo';
import '../styles/components/loading-intro.css';

/**
 * LoadingIntro Component
 * Apple-style fullscreen loading intro shown once per session
 * Features logo with fade + scale + glow animation
 */
export function LoadingIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    // Check if intro has already been shown in this session
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const hasShownIntro = sessionStorage.getItem('yo-tech-intro-shown');
      
      if (hasShownIntro === 'true') {
        // Skip intro if already shown in this session
        return;
      }

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia 
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
        : false;

      // Show intro
      setShouldRender(true);
      
      // Trigger animation after a brief delay to ensure DOM is ready
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      });

      // Hide intro after animation duration
      const duration = prefersReducedMotion ? 600 : 1500; // Shorter for reduced motion
      
      let removeTimeout = null;
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
        
        // Mark as shown in session immediately
        try {
          sessionStorage.setItem('yo-tech-intro-shown', 'true');
        } catch (e) {
          // Ignore storage errors
        }
        
        // Remove from DOM after fade-out completes
        removeTimeout = setTimeout(() => {
          setShouldRender(false);
        }, 500); // Wait for fade-out transition
      }, duration);

      return () => {
        clearTimeout(hideTimeout);
        if (removeTimeout) {
          clearTimeout(removeTimeout);
        }
      };
    } catch (e) {
      // If anything fails, don't show intro
      console.warn('Loading intro error:', e);
    }
  }, []);

  // Don't render if not needed
  if (!shouldRender) {
    return null;
  }

  return (
    <div 
      className={`loading-intro ${isVisible ? 'loading-intro--visible' : ''} ${isDark ? 'loading-intro--dark' : 'loading-intro--light'}`}
      aria-hidden="true"
    >
      <div className="loading-intro__content">
        <div className="loading-intro__logo-wrapper">
          <Logo variant="full" className="loading-intro__logo" />
        </div>
        <p className="loading-intro__subtext">Exploring the future.</p>
      </div>
    </div>
  );
}

