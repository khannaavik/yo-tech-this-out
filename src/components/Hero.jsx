import '../styles/components/hero.css';

/**
 * Hero Section Component
 * Fullscreen hero with title, subtitle, and scroll indicator
 */
export function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__container">
        <div className="hero__content">
          {/* Main Title */}
          <h1 className="hero__title">
            YO! TECH THIS OUT
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            A curated scroll through the future of technology.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator" aria-hidden="true">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel"></div>
          </div>
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
}

