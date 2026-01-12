import { useState, useEffect, useRef } from 'react';
import '../styles/components/podcast-section.css';

/**
 * PodcastSection Component
 * Global podcast section appearing above footer on all pages
 * Features Spotify embed with text content
 */
export function PodcastSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Scroll reveal animation - fade + slide-up
  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              setIsVisible(true);
              hasAnimated.current = true;
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      const fallbackTimeout = setTimeout(() => {
        if (!hasAnimated.current && sectionRef.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      }, 1000);

      return () => {
        clearTimeout(fallbackTimeout);
        if (observer && sectionRef.current) {
          try {
            observer.unobserve(sectionRef.current);
          } catch (e) {
            // Ignore cleanup errors
          }
        }
      };
    } catch (e) {
      console.warn('IntersectionObserver not available, showing content:', e);
      setIsVisible(true);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`podcast-section ${isVisible ? 'podcast-section--visible' : ''}`}
      aria-label="Yo! Tech This Out Podcast"
    >
      <div className="podcast-section__container">
        {/* Mobile: Embed on top */}
        <div className="podcast-section__embed-wrapper">
          <iframe
            className="podcast-section__embed"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/show/4r8saKhqRmnaT3tL2P3Z4k?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Yo! Tech This Out Podcast on Spotify"
          />
        </div>

        {/* Content - Text */}
        <div className="podcast-section__content">
          {/* Small Podcast Label */}
          <span className="podcast-section__label">Podcast</span>
          
          <h2 className="podcast-section__heading">
            Yo! Tech This Out Podcast
          </h2>
          
          <p className="podcast-section__subheading">
            Conversations at the intersection of innovation, culture, and the future — featuring CES leaders, founders, and futurists.
          </p>

          {/* Badge Row */}
          <div className="podcast-section__badges">
            <span className="podcast-section__badge">Streaming on Spotify, Apple Podcasts & iHeart</span>
          </div>

          {/* Secondary CTA */}
          <div className="podcast-section__cta">
            <a
              href="https://open.spotify.com/show/4r8saKhqRmnaT3tL2P3Z4k"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-section__cta-link"
              aria-label="Listen on Spotify"
            >
              Listen on Spotify
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
