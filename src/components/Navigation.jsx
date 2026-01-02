import { useTheme } from './ThemeProvider';
import '../styles/components/navigation.css';

/**
 * Navigation Component
 * Sticky top navigation bar with theme toggle
 * Placeholder for category jump links (to be added later)
 */
export function Navigation() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="navigation__container">
        {/* Logo/Brand - placeholder for future */}
        <div className="navigation__brand">
          <span className="navigation__brand-text">YO!</span>
        </div>

        {/* Category Links - placeholder (to be added later) */}
        <div className="navigation__links">
          {/* Future: Category jump links will be added here */}
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

