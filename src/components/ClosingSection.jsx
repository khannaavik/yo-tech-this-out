import { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import '../styles/components/closing-section.css';

/**
 * ClosingSection Component
 * Apple-style footer with brand statement, minimal navigation, and signature
 * Features full logo with tagline
 */
export function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (observer && sectionRef.current) {
          try {
            observer.unobserve(sectionRef.current);
          } catch (e) {
            // Ignore cleanup errors
          }
        }
      };
    } catch (e) {
      setIsVisible(true);
    }
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`closing-section ${isVisible ? 'closing-section--visible' : ''}`}
      ref={sectionRef}
      aria-label="Footer"
    >
      {/* Closing transition gradient */}
      <div className="closing-section__transition" aria-hidden="true"></div>
      
      <div className="closing-section__container">
        {/* Brand Statement */}
        <p className="closing-section__brand-statement">
          A curated look at technologies shaping how humans live, move, and think.
        </p>

        {/* Minimal Navigation */}
        <nav className="closing-section__nav" aria-label="Footer navigation">
          <a 
            href="#ai-audio" 
            className="closing-section__nav-link"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('ai-audio');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Explore
          </a>
          <a 
            href="#top" 
            className="closing-section__nav-link"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Watch Demos
          </a>
          <a 
            href="#xr" 
            className="closing-section__nav-link"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('xr');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            About
          </a>
        </nav>

        {/* Brand Signature with Logo */}
        <div className="closing-section__signature">
          <div className="closing-section__logo-wrapper">
            <Logo variant="full" className="closing-section__logo" />
          </div>
          <p className="closing-section__tagline">Built as an experimental tech showcase</p>
          <p className="closing-section__year">© {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

