import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Logo } from './Logo';
import '../styles/components/navigation.css';

/**
 * Navigation Component
 * Sticky top navigation bar with logo and theme toggle
 */
export function Navigation() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="navigation__container">
        {/* Logo/Brand */}
        <div className="navigation__brand">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navigation__links">
          <Link to="/" className="navigation__link">Home</Link>
          <Link to="/why" className="navigation__link">Why</Link>
        </div>

        {/* Theme Toggle Button */}
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
    </nav>
  );
}

