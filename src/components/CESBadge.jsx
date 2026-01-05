import { useLocation } from 'react-router-dom';
import '../styles/components/ces-badge.css';

/**
 * CES Badge Component
 * Fixed-position badge showing CES Innovation Awards 2026
 * Only visible on Home page
 */
export function CESBadge() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <a
      href="/ces-innovation-awards"
      className="ces-badge"
      aria-label="CES Innovation Awards 2026 Honoree"
      title="CES Innovation Awards 2026 Honoree"
    >
      <img
        src="/badges/ces-innovation-2026.png"
        alt="CES Innovation Awards 2026"
        className="ces-badge__image"
      />
    </a>
  );
}

