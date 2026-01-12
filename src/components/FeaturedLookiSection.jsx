import { useState, useEffect, useRef } from 'react';
import { getProductById } from '../data/products';
import '../styles/components/featured-looki-section.css';

/**
 * FeaturedLookiSection Component
 * Flagship featured product section for Looki L1
 * Transparent PNG image with glow effects, no background
 */
export function FeaturedLookiSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const hasAnimated = useRef(false);
  const shouldUseMotion = useRef(true);

  const product = getProductById('looki-l1');

  // If product doesn't exist, don't render
  if (!product) {
    return null;
  }

  // Detect reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') {
      shouldUseMotion.current = false;
      return;
    }

    try {
      const prefersReducedMotion = window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
      shouldUseMotion.current = !prefersReducedMotion;
    } catch (e) {
      shouldUseMotion.current = false;
    }
  }, []);

  // Intersection Observer for scroll reveal
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

  // Subtle floating animation
  useEffect(() => {
    if (!shouldUseMotion.current || typeof window === 'undefined') {
      return;
    }

    let animationFrame;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000; // Convert to seconds
      // Very slow floating motion: 3 seconds per cycle, 8px range
      const offset = Math.sin(elapsed * (Math.PI / 3)) * 8;
      setFloatOffset(offset);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`featured-looki-section ${isVisible ? 'featured-looki-section--visible' : ''}`}
      aria-label="Featured product: Looki L1"
    >
      <div className="featured-looki-section__container">
        {/* Image Container - Left side on desktop, top on mobile */}
        <div className="featured-looki-section__image-wrapper">
          <div
            ref={imageRef}
            className={`featured-looki-section__image-container ${isVisible ? 'featured-looki-section__image-container--visible' : ''}`}
            style={{
              transform: shouldUseMotion.current
                ? `translate3d(0, ${floatOffset}px, 0)`
                : 'translate3d(0, 0, 0)',
            }}
          >
            {/* Radial glow behind image */}
            <div
              className="featured-looki-section__image-glow"
              aria-hidden="true"
            ></div>

            {/* Product Image - Transparent PNG */}
            <img
              src={product.image}
              alt={`${product.name} by ${product.company}`}
              className="featured-looki-section__image"
              loading="eager"
            />
          </div>
        </div>

        {/* Content Container - Right side on desktop, bottom on mobile */}
        <div className="featured-looki-section__content">
          {/* Eyebrow */}
          <span className="featured-looki-section__eyebrow">
            Featured AI Wearable
          </span>

          {/* Headline */}
          <h2 className="featured-looki-section__headline">
            {product.name}
          </h2>

          {/* Subline */}
          <p className="featured-looki-section__subline">
            Capture life. Automatically.
          </p>

          {/* Description */}
          <p className="featured-looki-section__description">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="featured-looki-section__actions">
            {product.youtube && (
              <a
                href={product.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-looki-section__button featured-looki-section__button--primary"
                aria-label={`Watch demo video for ${product.name}`}
              >
                <span className="featured-looki-section__play-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 5L15 10L7 15V5Z" fill="currentColor"/>
                  </svg>
                </span>
                <span>Watch Demo</span>
              </a>
            )}
            {product.website && (
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-looki-section__button featured-looki-section__button--secondary"
                aria-label={`Visit ${product.name} website`}
              >
                <span className="featured-looki-section__globe-icon" aria-hidden="true">
                  🌐
                </span>
                <span>Visit Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
