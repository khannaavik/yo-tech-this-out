import { useState, useEffect, useRef } from 'react';
import '../styles/components/chapter-intro.css';

/**
 * ChapterIntro Component
 * Reusable chapter introduction section with scroll fade-in animation
 * 
 * @param {string} title - Chapter title
 * @param {string} subtitle - Chapter subtitle (1 line)
 * @param {string} id - Section ID for navigation
 */
export function ChapterIntro({ title, subtitle, id }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // IntersectionObserver for scroll reveal animation (one-time trigger)
  useEffect(() => {
    // Fallback: if IntersectionObserver is not available, show content immediately
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
          rootMargin: '0px 0px -50px 0px',
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      // Fallback timeout: show content after 1 second if observer doesn't trigger
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
      // If IntersectionObserver fails, show content immediately
      console.warn('IntersectionObserver not available, showing content:', e);
      setIsVisible(true);
    }
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`chapter-intro ${isVisible ? 'chapter-intro--visible' : ''}`}
      aria-label={`${title} chapter introduction`}
    >
      <div className="chapter-intro__container">
        <h2 className="chapter-intro__title">{title}</h2>
        {subtitle && (
          <p className="chapter-intro__subtitle">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

