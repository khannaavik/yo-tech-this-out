import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Logo } from './Logo';
import '../styles/components/navigation.css';

/**
 * Navigation Component
 * Sticky top navigation bar with logo, mobile menu, and theme toggle
 * Mobile: 3-column layout (hamburger left, logo center, theme toggle right)
 * Includes dropdown menus for Media and Business sections
 */
export function Navigation() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'media' | 'business' | null
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null); // 'media' | 'business' | null
  const location = useLocation();
  const mediaDropdownRef = useRef(null);
  const businessDropdownRef = useRef(null);

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
    setOpenMobileDropdown(null);
  }, [closeMobileMenu]);

  // Check if a path matches any dropdown item
  const isDropdownItemActive = useCallback((dropdownItems) => {
    return dropdownItems.some(item => location.pathname === item.path);
  }, [location.pathname]);

  // Media dropdown items
  const mediaItems = [
    { path: '/techfluencers', label: 'Techfluencers' },
    { path: '/press', label: 'Press' },
    { path: '/live', label: 'Live' },
  ];

  // Business dropdown items
  const businessItems = [
    { path: '/why', label: 'Why' },
    { path: '/advertise', label: 'Advertise' },
  ];

  // Desktop dropdown handlers
  const handleDropdownMouseEnter = useCallback((dropdown) => {
    setOpenDropdown(dropdown);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  // Mobile dropdown handlers
  const handleMobileDropdownToggle = useCallback((dropdown) => {
    setOpenMobileDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

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
          <Link to="/innovation-awards" className={`navigation__link ${location.pathname === '/innovation-awards' ? 'navigation__link--active' : ''}`}>Awards</Link>
          
          {/* Media Dropdown */}
          <div
            className={`navigation__dropdown ${openDropdown === 'media' ? 'navigation__dropdown--open' : ''} ${isDropdownItemActive(mediaItems) ? 'navigation__dropdown--active' : ''}`}
            onMouseEnter={() => handleDropdownMouseEnter('media')}
            onMouseLeave={handleDropdownMouseLeave}
            ref={mediaDropdownRef}
          >
            <button
              type="button"
              className={`navigation__dropdown-trigger ${isDropdownItemActive(mediaItems) ? 'navigation__link--active' : ''}`}
              aria-expanded={openDropdown === 'media'}
              aria-haspopup="true"
            >
              Media
              <span className="navigation__dropdown-arrow">▼</span>
            </button>
            <div className="navigation__dropdown-menu">
              {mediaItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`navigation__dropdown-link ${location.pathname === item.path ? 'navigation__dropdown-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Business Dropdown */}
          <div
            className={`navigation__dropdown ${openDropdown === 'business' ? 'navigation__dropdown--open' : ''} ${isDropdownItemActive(businessItems) ? 'navigation__dropdown--active' : ''}`}
            onMouseEnter={() => handleDropdownMouseEnter('business')}
            onMouseLeave={handleDropdownMouseLeave}
            ref={businessDropdownRef}
          >
            <button
              type="button"
              className={`navigation__dropdown-trigger ${isDropdownItemActive(businessItems) ? 'navigation__link--active' : ''}`}
              aria-expanded={openDropdown === 'business'}
              aria-haspopup="true"
            >
              Business
              <span className="navigation__dropdown-arrow">▼</span>
            </button>
            <div className="navigation__dropdown-menu">
              {businessItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`navigation__dropdown-link ${location.pathname === item.path ? 'navigation__dropdown-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={`navigation__link ${location.pathname === '/about' ? 'navigation__link--active' : ''}`}>About</Link>
          <Link to="/contact" className={`navigation__link ${location.pathname === '/contact' ? 'navigation__link--active' : ''}`}>Contact</Link>
        </div>

        {/* Desktop: Right - Theme Toggle Button */}
        <button
          className="navigation__theme-toggle navigation__theme-toggle--desktop"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          type="button"
        >
          <span className="navigation__theme-icon" aria-hidden="true">
            {isDark ? '☀️' : '🌙'}
          </span>
        </button>

        {/* Mobile: Extreme Right - Theme Toggle Button */}
        <button
          className="navigation__theme-toggle navigation__theme-toggle--mobile"
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
              <Link to="/innovation-awards" className={`navigation__link ${location.pathname === '/innovation-awards' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Awards</Link>
              
              {/* Media Dropdown - Mobile */}
              <div className="navigation__mobile-dropdown">
                <button
                  type="button"
                  className={`navigation__mobile-dropdown-trigger ${isDropdownItemActive(mediaItems) ? 'navigation__link--active' : ''}`}
                  onClick={() => handleMobileDropdownToggle('media')}
                  aria-expanded={openMobileDropdown === 'media'}
                  aria-haspopup="true"
                >
                  Media
                  <span className="navigation__mobile-dropdown-arrow">
                    {openMobileDropdown === 'media' ? '▲' : '▼'}
                  </span>
                </button>
                {openMobileDropdown === 'media' && (
                  <div className="navigation__mobile-dropdown-menu">
                    {mediaItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`navigation__mobile-dropdown-link ${location.pathname === item.path ? 'navigation__mobile-dropdown-link--active' : ''}`}
                        onClick={handleNavLinkClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Business Dropdown - Mobile */}
              <div className="navigation__mobile-dropdown">
                <button
                  type="button"
                  className={`navigation__mobile-dropdown-trigger ${isDropdownItemActive(businessItems) ? 'navigation__link--active' : ''}`}
                  onClick={() => handleMobileDropdownToggle('business')}
                  aria-expanded={openMobileDropdown === 'business'}
                  aria-haspopup="true"
                >
                  Business
                  <span className="navigation__mobile-dropdown-arrow">
                    {openMobileDropdown === 'business' ? '▲' : '▼'}
                  </span>
                </button>
                {openMobileDropdown === 'business' && (
                  <div className="navigation__mobile-dropdown-menu">
                    {businessItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`navigation__mobile-dropdown-link ${location.pathname === item.path ? 'navigation__mobile-dropdown-link--active' : ''}`}
                        onClick={handleNavLinkClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className={`navigation__link ${location.pathname === '/about' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>About</Link>
              <Link to="/contact" className={`navigation__link ${location.pathname === '/contact' ? 'navigation__link--active' : ''}`} onClick={handleNavLinkClick}>Contact</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

