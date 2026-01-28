import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Logo } from './Logo';
import '../styles/components/navigation.css';

/**
 * Navigation Component
 * Top-level navigation with dropdown menus for additional pages
 * Desktop: left logo, center nav
 * Mobile: centered logo, centered menu items
 */
export function Navigation() {
  const { toggleTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  useEffect(() => {
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

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

  const handleNavLinkClick = useCallback(() => {
    closeMobileMenu();
    setActiveMenu(null);
    setOpenMobileSection(null);
  }, [closeMobileMenu]);

  const handleDropdownTriggerClick = useCallback((menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const isActivePath = useCallback((path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  const isDropdownItemActive = useCallback((items) => {
    return items.some(item => isActivePath(item.path));
  }, [isActivePath]);

  // Navigation structure with dropdowns
  const navItems = [
    { path: '/', label: 'Home', type: 'link' },
    { 
      path: '/products', 
      label: 'Products', 
      type: 'dropdown',
      items: [
        { path: '/products', label: 'All Products' },
        { path: '/innovation-awards', label: 'Innovation Awards' },
      ]
    },
    { 
      path: '/what-we-do', 
      label: 'What We Do', 
      type: 'dropdown',
      items: [
        { path: '/what-we-do', label: 'What We Do' },
        { path: '/why', label: 'Why Yo!' },
        { path: '/advertise', label: 'Packages' },
      ]
    },
    { path: '/magazine', label: 'Magazine', type: 'link' },
    { 
      path: '/podcast', 
      label: 'Podcast', 
      type: 'dropdown',
      items: [
        { path: '/podcast', label: 'Podcast' },
        { path: '/live', label: 'Live' },
      ]
    },
    { 
      path: '/about', 
      label: 'About', 
      type: 'dropdown',
      items: [
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
        { path: '/press', label: 'Press' },
      ]
    },
    { 
      path: '/social', 
      label: 'Social', 
      type: 'dropdown',
      items: [
        { path: '/social', label: 'Social' },
        { path: '/techfluencers', label: 'Techfluencers' },
      ]
    },
    { 
      path: 'https://news.yotechthisout.com/', 
      label: 'News', 
      type: 'external',
    },
  ];

  return (
    <nav
      className={`nav nav--sticky ${isMobileMenuOpen ? 'nav--menu-open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
      ref={navRef}
    >
      <div className="nav__bar">
        {/* Left: Logo (Desktop) / Center: Logo (Mobile) */}
        <div className="nav__left">
          <Link to="/" className="nav__logo-link" aria-label="Home" onClick={handleNavLinkClick}>
            <Logo variant="full" className="nav__logo" />
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="nav__center nav__center--desktop" role="menubar" aria-label="Primary">
          {navItems.map((item) => {
            if (item.type === 'link') {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav__link ${isActivePath(item.path) ? 'nav__link--active' : ''}`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              );
            }

            if (item.type === 'external') {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav__link nav__link--external"
                  role="menuitem"
                >
                  {item.label}
                  <span className="nav__external-icon" aria-hidden="true">↗</span>
                </a>
              );
            }

            // Dropdown menu
            const isActive = isDropdownItemActive(item.items);
            const isOpen = activeMenu === item.path;

            return (
              <div
                key={item.path}
                className={`nav__dropdown ${isOpen ? 'nav__dropdown--open' : ''} ${isActive ? 'nav__dropdown--active' : ''}`}
                onMouseEnter={() => setActiveMenu(item.path)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  className={`nav__dropdown-trigger ${isActive ? 'nav__link--active' : ''}`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => handleDropdownTriggerClick(item.path)}
                >
                  {item.label}
                  <span className="nav__dropdown-arrow" aria-hidden="true">▼</span>
                </button>
                {isOpen && (
                  <div className="nav__dropdown-panel" onMouseEnter={() => setActiveMenu(item.path)} onMouseLeave={() => setActiveMenu(null)}>
                    <div className="nav__dropdown-panel-inner">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`nav__dropdown-link ${isActivePath(subItem.path) ? 'nav__dropdown-link--active' : ''}`}
                          role="menuitem"
                          onClick={handleNavLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Theme Toggle */}
        <div className="nav__right">
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
              {navItems.map((item) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav__mobile-link ${isActivePath(item.path) ? 'nav__mobile-link--active' : ''}`}
                      onClick={handleNavLinkClick}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.type === 'external') {
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav__mobile-link nav__mobile-link--external"
                      onClick={handleNavLinkClick}
                      role="menuitem"
                    >
                      {item.label}
                      <span className="nav__external-icon" aria-hidden="true">↗</span>
                    </a>
                  );
                }

                // Mobile dropdown/accordion
                const isOpen = openMobileSection === item.path;
                const isActive = isDropdownItemActive(item.items);

                return (
                  <div key={item.path} className="nav__mobile-accordion">
                    <button
                      type="button"
                      className={`nav__mobile-accordion-trigger ${isActive ? 'nav__mobile-accordion-trigger--active' : ''}`}
                      onClick={() => setOpenMobileSection(openMobileSection === item.path ? null : item.path)}
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <span className="nav__mobile-accordion-arrow" aria-hidden="true">▼</span>
                    </button>
                    {isOpen && (
                      <div className="nav__mobile-accordion-panel">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`nav__mobile-link nav__mobile-link--sub ${isActivePath(subItem.path) ? 'nav__mobile-link--active' : ''}`}
                            onClick={handleNavLinkClick}
                            role="menuitem"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Theme Toggle */}
              <div className="nav__mobile-theme-toggle">
                <button
                  className="nav__theme-toggle nav__theme-toggle--mobile"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                  type="button"
                >
                  <span className="nav__theme-icon" aria-hidden="true">
                    {isDark ? '☀️' : '🌙'}
                  </span>
                  <span className="nav__theme-label">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
