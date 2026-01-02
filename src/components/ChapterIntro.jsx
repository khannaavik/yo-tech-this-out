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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldUseScrub, setShouldUseScrub] = useState(true);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Detect reduced motion and low-performance devices
  useEffect(() => {
    if (typeof window === 'undefined') {
      setShouldUseScrub(false);
      return;
    }

    try {
      const prefersReducedMotion = window.matchMedia 
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
        : false;
      
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = navigator.deviceMemory || 4;
      
      const isLowPerformance = 
        hardwareConcurrency <= 2 || 
        deviceMemory <= 2 || 
        prefersReducedMotion;

      setShouldUseScrub(!isLowPerformance);
    } catch (e) {
      setShouldUseScrub(false);
    }
  }, []);

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

  // Scroll-scrub for smooth section transitions
  useEffect(() => {
    if (!shouldUseScrub || typeof window === 'undefined') return;

    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) {
          rafId = null;
          return;
        }

        try {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight || 0;
          
          // Calculate scroll progress as section enters viewport
          // 0 = section below viewport, 1 = section centered, then decreases
          const sectionCenter = rect.top + rect.height / 2;
          const windowCenter = windowHeight / 2;
          const distanceFromCenter = sectionCenter - windowCenter;
          const maxDistance = windowHeight;
          const progress = Math.max(0, Math.min(1, 1 - Math.abs(distanceFromCenter) / maxDistance));
          
          setScrollProgress(progress);
        } catch (e) {
          setScrollProgress(0);
        }
        
        rafId = null;
      });
    };

    try {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    } catch (e) {
      console.warn('Could not set up chapter scroll scrub:', e);
    }

    return () => {
      try {
        window.removeEventListener('scroll', handleScroll);
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, [shouldUseScrub]);

  // Calculate scrub values for smooth slide-like reveal
  const translateY = shouldUseScrub ? (1 - scrollProgress) * 40 : 0;
  const opacity = shouldUseScrub ? Math.max(0.3, scrollProgress) : 1;

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`chapter-intro ${isVisible ? 'chapter-intro--visible' : ''}`}
      aria-label={`${title} chapter introduction`}
      style={{
        transform: shouldUseScrub ? `translate3d(0, ${translateY}px, 0)` : undefined,
        opacity: shouldUseScrub ? opacity : 1,
        willChange: shouldUseScrub ? 'transform, opacity' : 'auto',
      }}
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

