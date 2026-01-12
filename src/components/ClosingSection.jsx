import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
          <Link 
            to="/explore" 
            className="closing-section__nav-link"
          >
            Explore
          </Link>
          <Link 
            to="/" 
            className="closing-section__nav-link"
          >
            Watch Demos
          </Link>
          <Link 
            to="/about" 
            className="closing-section__nav-link"
          >
            About
          </Link>
        </nav>

        {/* Legal Links */}
        <nav className="closing-section__legal" aria-label="Legal navigation">
          <Link 
            to="/privacy" 
            className="closing-section__legal-link"
          >
            Privacy Policy
          </Link>
          <span className="closing-section__legal-separator">•</span>
          <Link 
            to="/terms" 
            className="closing-section__legal-link"
          >
            Terms of Service
          </Link>
        </nav>

        {/* Brand Signature with Logo */}
        <div className="closing-section__signature">
          <div className="closing-section__logo-wrapper">
            <Logo variant="full" className="closing-section__logo" />
          </div>
          <p className="closing-section__tagline">Built as an experimental tech showcase</p>
          
          {/* Social Handle */}
          <div className="closing-section__social">
            <a
              href="https://www.instagram.com/yotechthisout"
              target="_blank"
              rel="noopener noreferrer"
              className="closing-section__social-link"
              aria-label="Follow @yotechthisout on Instagram"
            >
              <span className="closing-section__social-icon">📷</span>
              <span className="closing-section__social-handle">@yotechthisout</span>
            </a>
          </div>
          
          <p className="closing-section__year">© {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

