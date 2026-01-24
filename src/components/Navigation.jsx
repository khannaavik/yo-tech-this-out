import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Logo } from './Logo';
import '../styles/components/navigation.css';

/**
 * Navigation Component (v2 structure only)
 * Desktop: left logo, center nav, right theme toggle
 * Mobile: centered logo, larger scale, centered menu items
 */
export function Navigation() {
  const { toggleTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'media' | 'business' | null
  const [isInvestorMode, setIsInvestorMode] = useState(false);
  const location = useLocation();

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const event = new CustomEvent('investor-mode-change', { detail: isInvestorMode });
    window.dispatchEvent(event);
  }, [isInvestorMode]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

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

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleInvestorMode = useCallback(() => {
    setIsInvestorMode((prev) => !prev);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    closeMobileMenu();
    setOpenDropdown(null);
  }, [closeMobileMenu]);

  const isActivePath = useCallback((path) => location.pathname === path, [location.pathname]);

  const isDropdownItemActive = useCallback((dropdownItems) => {
    return dropdownItems.some(item => location.pathname === item.path);
  }, [location.pathname]);

  const discoverItems = [
    { path: '/explore', label: 'Explore' },
    { path: '/innovation-awards', label: 'Awards' },
  ];

  const mediaItems = [
    { path: '/techfluencers', label: 'Techfluencers' },
    { path: '/press', label: 'Press' },
    { path: '/live', label: 'Live' },
  ];

  const businessItems = [
    { path: '/why', label: 'Why' },
    { path: '/advertise', label: 'Advertise' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`nav nav--sticky ${isMobileMenuOpen ? 'nav--menu-open' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav__bar">
        {/* Left: Logo */}
        <div className="nav__left">
          <Link to="/" className="nav__logo-link" aria-label="Home" onClick={handleNavLinkClick}>
            <Logo variant="full" className="nav__logo nav__logo--desktop" />
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="nav__center nav__center--desktop" role="menubar" aria-label="Primary">
          <Link to="/" className={`nav__link ${isActivePath('/') ? 'nav__link--active' : ''}`} role="menuitem">Home</Link>

          <div
            className={`nav__dropdown ${openDropdown === 'discover' ? 'nav__dropdown--open' : ''} ${isDropdownItemActive(discoverItems) ? 'nav__dropdown--active' : ''}`}
            onMouseEnter={() => setOpenDropdown('discover')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`nav__dropdown-trigger ${isDropdownItemActive(discoverItems) ? 'nav__link--active' : ''}`}
              aria-expanded={openDropdown === 'discover'}
              aria-haspopup="true"
            >
              Discover
              <span className="nav__dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <div className="nav__dropdown-menu" role="menu">
              {discoverItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav__dropdown-link ${isActivePath(item.path) ? 'nav__dropdown-link--active' : ''}`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`nav__dropdown ${openDropdown === 'media' ? 'nav__dropdown--open' : ''} ${isDropdownItemActive(mediaItems) ? 'nav__dropdown--active' : ''}`}
            onMouseEnter={() => setOpenDropdown('media')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`nav__dropdown-trigger ${isDropdownItemActive(mediaItems) ? 'nav__link--active' : ''}`}
              aria-expanded={openDropdown === 'media'}
              aria-haspopup="true"
            >
              Media
              <span className="nav__dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <div className="nav__dropdown-menu" role="menu">
              {mediaItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav__dropdown-link ${isActivePath(item.path) ? 'nav__dropdown-link--active' : ''}`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`nav__dropdown ${openDropdown === 'business' ? 'nav__dropdown--open' : ''} ${isDropdownItemActive(businessItems) ? 'nav__dropdown--active' : ''}`}
            onMouseEnter={() => setOpenDropdown('business')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`nav__dropdown-trigger ${isDropdownItemActive(businessItems) ? 'nav__link--active' : ''}`}
              aria-expanded={openDropdown === 'business'}
              aria-haspopup="true"
            >
              Business
              <span className="nav__dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <div className="nav__dropdown-menu" role="menu">
              {businessItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav__dropdown-link ${isActivePath(item.path) ? 'nav__dropdown-link--active' : ''}`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Theme Toggle + Investor Mode */}
        <div className="nav__right">
          <button
            type="button"
            onClick={toggleInvestorMode}
            role="switch"
            aria-checked={isInvestorMode}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginRight: '0.75rem',
              padding: '0.35rem 0.6rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: isInvestorMode ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
              color: 'inherit',
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Investor Mode
            <span
              aria-hidden="true"
              style={{
                width: '2rem',
                height: '1.1rem',
                borderRadius: '999px',
                background: isInvestorMode ? '#f5f7ff' : 'rgba(255, 255, 255, 0.2)',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <span
                style={{
                  width: '0.85rem',
                  height: '0.85rem',
                  borderRadius: '50%',
                  background: isInvestorMode ? '#0a0b0f' : '#f5f7ff',
                  position: 'absolute',
                  top: '0.125rem',
                  left: isInvestorMode ? '1.05rem' : '0.2rem',
                  transition: 'left 160ms ease',
                }}
              />
            </span>
          </button>
          <button
            className="nav__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            type="button"
          >
            <span className="nav__theme-icon" aria-hidden="true">
              {isDark ? '☀️' : '🌙'}
            </span>
          </button>
        </div>

        {/* Mobile: Hamburger + Centered Logo */}
        <div className="nav__mobile">
          <button
            className={`nav__hamburger ${isMobileMenuOpen ? 'nav__hamburger--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span className="nav__hamburger-line"></span>
            <span className="nav__hamburger-line"></span>
            <span className="nav__hamburger-line"></span>
          </button>

          <Link to="/" className="nav__logo-link nav__logo-link--mobile" aria-label="Home" onClick={handleNavLinkClick}>
            <Logo variant="full" className="nav__logo nav__logo--mobile" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="nav__overlay" onClick={closeMobileMenu} aria-hidden="true">
          <div className="nav__panel" onClick={(e) => e.stopPropagation()}>
            <div className="nav__mobile-links" role="menu" aria-label="Mobile navigation">
              <Link to="/" className={`nav__mobile-link ${isActivePath('/') ? 'nav__link--active' : ''}`} onClick={handleNavLinkClick} role="menuitem">Home</Link>
              <div className="nav__mobile-group" role="menuitem">
                <span className="nav__mobile-group-label">Discover</span>
                <div className="nav__mobile-submenu">
                  {discoverItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav__mobile-link ${isActivePath(item.path) ? 'nav__link--active' : ''}`}
                      onClick={handleNavLinkClick}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="nav__mobile-group" role="menuitem">
                <span className="nav__mobile-group-label">Media</span>
                <div className="nav__mobile-submenu">
                  {mediaItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav__mobile-link ${isActivePath(item.path) ? 'nav__link--active' : ''}`}
                      onClick={handleNavLinkClick}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="nav__mobile-group" role="menuitem">
                <span className="nav__mobile-group-label">Business</span>
                <div className="nav__mobile-submenu">
                  {businessItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav__mobile-link ${isActivePath(item.path) ? 'nav__link--active' : ''}`}
                      onClick={handleNavLinkClick}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={toggleInvestorMode}
                role="switch"
                aria-checked={isInvestorMode}
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: isInvestorMode ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: 'inherit',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  width: '100%',
                }}
              >
                Investor Mode
                <span
                  aria-hidden="true"
                  style={{
                    width: '2.2rem',
                    height: '1.2rem',
                    borderRadius: '999px',
                    background: isInvestorMode ? '#f5f7ff' : 'rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <span
                    style={{
                      width: '0.9rem',
                      height: '0.9rem',
                      borderRadius: '50%',
                      background: isInvestorMode ? '#0a0b0f' : '#f5f7ff',
                      position: 'absolute',
                      top: '0.15rem',
                      left: isInvestorMode ? '1.15rem' : '0.2rem',
                      transition: 'left 160ms ease',
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

