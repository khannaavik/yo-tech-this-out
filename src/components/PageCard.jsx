import '../styles/components/page-card.css';

/**
 * PageCard Component
 * Glass-style content card with soft gradients and glow accents
 */
export function PageCard({ 
  children, 
  className = '',
  variant = 'default', // 'default', 'highlight', 'subtle'
  onClick
}) {
  return (
    <div 
      className={`page-card page-card--${variant} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

