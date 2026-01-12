import { useState, useEffect } from 'react';
import '../styles/components/ces-badge.css';

/**
 * CES Badge Component
 * Fixed-position badge showing CES Innovation Awards 2026
 * Visible on all pages, appears after user scrolls down
 */
export function CESBadge() {
  const [isVisible, setIsVisible] = useState(false);

  // Show badge only after scrolling down
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Show badge after scrolling 400px (after scroll-to-top button appears)
      setIsVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="/innovation-awards"
      className={`ces-badge ${isVisible ? 'ces-badge--visible' : ''}`}
      aria-label="CES Innovation Awards 2026 Honoree"
      title="CES Innovation Awards 2026 Honoree"
    >
      <img
        src="/badges/ces-innovation-2026.png"
        alt="CES Innovation Awards 2026"
        className="ces-badge__image"
      />
    </a>
  );
}

