import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Logo } from './Logo';
import '../styles/components/navigation.css';

/**
 * Navigation Component
 * Sticky top navigation bar with logo, mobile menu, and theme toggle
 * Mobile: 3-column layout (hamburger left, logo center, theme toggle right)
 */
export function Navigation() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Single function to close menu - used everywhere
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Toggle menu function
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Handle nav link click - close menu
  const handleNavLinkClick = useCallback(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <nav className={`navigation ${isMobileMenuOpen ? 'navigation--menu-open' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navigation__container">
        {/* Mobile: Left - Hamburger Menu Toggle */}
        <button
          className={`navigation__mobile-toggle ${isMobileMenuOpen ? 'navigation__mobile-toggle--active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <span className="navigation__mobile-toggle-line"></span>
          <span className="navigation__mobile-toggle-line"></span>
          <span className="navigation__mobile-toggle-line"></span>
        </button>

        {/* Mobile: Center / Desktop: Left - Logo/Brand */}
        <div className="navigation__brand">
          <Link to="/" style={{ textDecoration: 'none' }} aria-label="Home" onClick={handleNavLinkClick}>
            {/* Use compact mark on small screens, full logo on larger screens */}
            <Logo variant="mark" className="navigation__logo--mobile" />
            <Logo variant="full" className="navigation__logo--desktop" />
          </Link>
        </div>

        {/* Desktop: Center - Navigation Links */}
        <div className="navigation__links navigation__links--desktop">
          <Link to="/" className={`navigation__link ${location.pathname === '/' ? 'navigation__link--active' : ''}`}>Home</Link>
          <Link to="/explore" className={`navigation__link ${location.pathname === '/explore' ? 'navigation__link--active' : ''}`}>Explore</Link>
          <Link to="/about" className={`navigation__link ${location.pathname === '/about' ? 'navigation__link--active' : ''}`}>About</Link>
          <Link to="/why" className={`navigation__link ${location.pathname === '/why' ? 'navigation__link--active' : ''}`}>Why</Link>
          <Link to="/advertise" className={`navigation__link ${location.pathname === '/advertise' ? 'navigation__link--active' : ''}`}>Advertise</Link>
          <Link to="/techfluencers" className={`navigation__link ${location.pathname === '/techfluencers' ? 'navigation__link--active' : ''}`}>Techfluencers</Link>
          <Link to="/press" className={`navigation__link ${location.pathname === '/press' ? 'navigation__link--active' : ''}`}>Press</Link>
          <Link to="/live" className={`navigation__link ${location.pathname === '/live' ? 'navigation__link--active' : ''}`}>Live</Link>
          <Link to="/contact" className={`navigation__link ${location.pathname === '/contact' ? 'navigation__link--active' : ''}`}>Contact</Link>
        </div>

        {/* Mobile: Extreme Right / Desktop: Right - Theme Toggle Button */}
        <button
          className="navigation__theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          type="button"
        >
          <span className="navigation__theme-icon" aria-hidden="true">
            {isDark ? '☀️' : '🌙'}
          </span>
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay Backdrop - Covers entire viewport, clickable to close */}
          <div
            className="navigation__overlay"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Menu Panel - Full Screen */}
          <div 
            className="navigation__links navigation__links--mobile navigation__links--open"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing when clicking menu content
          >
            {/* Close Button - Top Left - ONLY close icon */}
            <button
              className="navigation__mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Navigation Links */}
            <div className="navigation__links-content">
              <Link to="/" className={`navigation__link ${location.pathname === '/' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Home</Link>
              <Link to="/explore" className={`navigation__link ${location.pathname === '/explore' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Explore</Link>
              <Link to="/about" className={`navigation__link ${location.pathname === '/about' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>About</Link>
              <Link to="/why" className={`navigation__link ${location.pathname === '/why' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Why</Link>
              <Link to="/advertise" className={`navigation__link ${location.pathname === '/advertise' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Advertise</Link>
              <Link to="/techfluencers" className={`navigation__link ${location.pathname === '/techfluencers' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Techfluencers</Link>
              <Link to="/press" className={`navigation__link ${location.pathname === '/press' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Press</Link>
              <Link to="/live" className={`navigation__link ${location.pathname === '/live' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Live</Link>
              <Link to="/contact" className={`navigation__link ${location.pathname === '/contact' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Contact</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

