import '../styles/components/page-hero.css';

/**
 * PageHero Component
 * Consistent hero section with title, subtitle, and optional description
 */
export function PageHero({ title, subtitle, description, className = '' }) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="page-hero__container">
        {title && (
          <h1 className="page-hero__title">{title}</h1>
        )}
        {subtitle && (
          <p className="page-hero__subtitle">{subtitle}</p>
        )}
        {description && (
          <p className="page-hero__description">{description}</p>
        )}
      </div>
    </section>
  );
}

