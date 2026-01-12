import { useState, useEffect } from 'react';
import '../styles/components/go-to-top-button.css';

/**
 * GoToTopButton Component
 * Floating button to scroll to top of page
 * Futuristic design matching site aesthetic
 */
export function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  // Button only shows after scrolling down, hides when at top
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Show button after scrolling 300px, hide when at top
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position - should be false at page load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`go-to-top-button ${isVisible ? 'go-to-top-button--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path 
          d="M12 19V5M5 12L12 5L19 12" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

