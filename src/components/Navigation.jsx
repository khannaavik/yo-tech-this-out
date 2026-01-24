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
  const [openDropdown, setOpenDropdown] = useState(null); // 'discover' | 'media' | 'startups' | null
  const [openMobileSection, setOpenMobileSection] = useState(null);
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
    setOpenMobileSection(null);
  }, [closeMobileMenu]);

  const isActivePath = useCallback((path) => location.pathname === path, [location.pathname]);

  const isDropdownItemActive = useCallback((dropdownItems) => {
    return dropdownItems.some(item => location.pathname === item.path);
  }, [location.pathname]);

  const discoverGroups = [
    {
      title: 'Explore',
      items: [
        { path: '/explore', label: 'Explore' },
        { path: '/', label: 'Home' },
      ],
    },
    {
      title: 'About Yo!',
      items: [
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ],
    },
  ];

  const mediaGroups = [
    {
      title: 'Media',
      items: [
        { path: '/techfluencers', label: 'Techfluencers' },
        { path: '/press', label: 'Press' },
        { path: '/live', label: 'Live' },
      ],
    },
  ];

  const startupGroups = [
    {
      title: 'For Startups',
      items: [
        { path: '/advertise', label: 'Packages' },
        { path: '/why', label: 'Why Yo!' },
      ],
    },
  ];

  return (
    <nav className={`nav nav--sticky ${isMobileMenuOpen ? 'nav--menu-open' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav__bar">
        {/* Left: Logo */}
        <div className="nav__left">
          <Link to="/" className="nav__logo-link" aria-label="Home" onClick={handleNavLinkClick}>
            <Logo variant="full" className="nav__logo" />
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="nav__center nav__center--desktop" role="menubar" aria-label="Primary">
          <div
            className={`nav__dropdown nav__dropdown--mega ${openDropdown === 'discover' ? 'nav__dropdown--open' : ''} ${isDropdownItemActive(discoverGroups.flatMap((group) => group.items)) ? 'nav__dropdown--active' : ''}`}
            onMouseEnter={() => setOpenDropdown('discover')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`nav__dropdown-trigger ${isDropdownItemActive(discoverGroups.flatMap((group) => group.items)) ? 'nav__link--active' : ''}`}
              aria-expanded={openDropdown === 'discover'}
              aria-haspopup="true"
            >
              Discover
              <span className="nav__dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <div className="nav__dropdown-menu nav__dropdown-menu--mega" role="menu">
              {discoverGroups.map((group) => (
                <div key={group.title} className="nav__dropdown-group">
                  <p className="nav__dropdown-heading">{group.title}</p>
                  {group.items.map((item) => (
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
              ))}
            </div>
          </div>

          <Link
            to="/innovation-awards"
            className={`nav__link ${isActivePath('/innovation-awards') ? 'nav__link--active' : ''}`}
            role="menuitem"
          >
            Awards
          </Link>

          <div
            className={`nav__dropdown nav__dropdown--mega ${openDropdown === 'media' ? 'nav__dropdown--open' : ''} ${isDropdownItemActive(mediaGroups.flatMap((group) => group.items)) ? 'nav__dropdown--active' : ''}`}
            onMouseEnter={() => setOpenDropdown('media')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`nav__dropdown-trigger ${isDropdownItemActive(mediaGroups.flatMap((group) => group.items)) ? 'nav__link--active' : ''}`}
              aria-expanded={openDropdown === 'media'}
              aria-haspopup="true"
            >
              Media
              <span className="nav__dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <div className="nav__dropdown-menu nav__dropdown-menu--mega" role="menu">
              {mediaGroups.map((group) => (
                <div key={group.title} className="nav__dropdown-group">
                  <p className="nav__dropdown-heading">{group.title}</p>
                  {group.items.map((item) => (
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
              ))}
            </div>
          </div>

          <div
            className={`nav__dropdown nav__dropdown--mega ${openDropdown === 'startups' ? 'nav__dropdown--open' : ''} ${isDropdownItemActive(startupGroups.flatMap((group) => group.items)) ? 'nav__dropdown--active' : ''}`}
            onMouseEnter={() => setOpenDropdown('startups')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`nav__dropdown-trigger ${isDropdownItemActive(startupGroups.flatMap((group) => group.items)) ? 'nav__link--active' : ''}`}
              aria-expanded={openDropdown === 'startups'}
              aria-haspopup="true"
            >
              For Startups
              <span className="nav__dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <div className="nav__dropdown-menu nav__dropdown-menu--mega" role="menu">
              {startupGroups.map((group) => (
                <div key={group.title} className="nav__dropdown-group">
                  <p className="nav__dropdown-heading">{group.title}</p>
                  {group.items.map((item) => (
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
            className="nav__investor-toggle"
          >
            Investor Mode
            <span className={`nav__investor-switch ${isInvestorMode ? 'is-on' : ''}`} aria-hidden="true">
              <span className="nav__investor-knob" />
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

        {/* Mobile: Hamburger */}
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="nav__overlay" onClick={closeMobileMenu} aria-hidden="true">
          <div className="nav__panel" onClick={(e) => e.stopPropagation()}>
            <div className="nav__mobile-links" role="menu" aria-label="Mobile navigation">
              <Link to="/innovation-awards" className={`nav__mobile-link ${isActivePath('/innovation-awards') ? 'nav__link--active' : ''}`} onClick={handleNavLinkClick} role="menuitem">Awards</Link>

              <div className="nav__mobile-accordion">
                <button
                  type="button"
                  className="nav__mobile-accordion-trigger"
                  onClick={() => setOpenMobileSection(openMobileSection === 'discover' ? null : 'discover')}
                  aria-expanded={openMobileSection === 'discover'}
                >
                  Discover
                  <span className="nav__mobile-accordion-arrow" aria-hidden="true">▼</span>
                </button>
                {openMobileSection === 'discover' && (
                  <div className="nav__mobile-accordion-panel">
                    {discoverGroups.flatMap((group) => group.items).map((item) => (
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
                )}
              </div>

              <div className="nav__mobile-accordion">
                <button
                  type="button"
                  className="nav__mobile-accordion-trigger"
                  onClick={() => setOpenMobileSection(openMobileSection === 'media' ? null : 'media')}
                  aria-expanded={openMobileSection === 'media'}
                >
                  Media
                  <span className="nav__mobile-accordion-arrow" aria-hidden="true">▼</span>
                </button>
                {openMobileSection === 'media' && (
                  <div className="nav__mobile-accordion-panel">
                    {mediaGroups.flatMap((group) => group.items).map((item) => (
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
                )}
              </div>

              <div className="nav__mobile-accordion">
                <button
                  type="button"
                  className="nav__mobile-accordion-trigger"
                  onClick={() => setOpenMobileSection(openMobileSection === 'startups' ? null : 'startups')}
                  aria-expanded={openMobileSection === 'startups'}
                >
                  For Startups
                  <span className="nav__mobile-accordion-arrow" aria-hidden="true">▼</span>
                </button>
                {openMobileSection === 'startups' && (
                  <div className="nav__mobile-accordion-panel">
                    {startupGroups.flatMap((group) => group.items).map((item) => (
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
                )}
              </div>

              <div className="nav__mobile-toggles">
                <button
                  type="button"
                  onClick={toggleInvestorMode}
                  role="switch"
                  aria-checked={isInvestorMode}
                  className="nav__investor-toggle"
                >
                  Investor Mode
                  <span className={`nav__investor-switch ${isInvestorMode ? 'is-on' : ''}`} aria-hidden="true">
                    <span className="nav__investor-knob" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

