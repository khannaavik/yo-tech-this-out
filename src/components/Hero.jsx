import { useState, useEffect, useRef } from 'react';
import '../styles/components/hero.css';

/**
 * Hero Section Component
 * Fullscreen hero with scroll-scrub animations
 */
export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [shouldUseScrub, setShouldUseScrub] = useState(true);

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

  // Optimized scroll-scrub: Only active when hero is in viewport
  useEffect(() => {
    if (!shouldUseScrub || typeof window === 'undefined') return;

    let rafId = null;
    let isVisible = true; // Hero starts visible
    let scrollListener = null;

    // Use IntersectionObserver to disable scroll scrub when hero is off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          
          if (!isVisible) {
            // Disable when off-screen (performance)
            setScrollProgress(1);
            if (scrollListener) {
              window.removeEventListener('scroll', scrollListener);
              scrollListener = null;
            }
            if (rafId) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
          } else if (!scrollListener) {
            // Enable when visible
            scrollListener = () => {
              if (rafId) return;
              
              rafId = requestAnimationFrame(() => {
                if (!heroRef.current || !isVisible) {
                  rafId = null;
                  return;
                }

                try {
                  const rect = heroRef.current.getBoundingClientRect();
                  const windowHeight = window.innerHeight || 0;
                  
                  // Only calculate if hero is reasonably close
                  if (rect.bottom < -200 || rect.top > windowHeight + 200) {
                    rafId = null;
                    return;
                  }
                  
                  const scrollProgress = Math.max(0, Math.min(1, -rect.top / windowHeight));
                  setScrollProgress(scrollProgress);
                } catch (e) {
                  setScrollProgress(0);
                }
                
                rafId = null;
              });
            };

            try {
              window.addEventListener('scroll', scrollListener, { passive: true });
              scrollListener(); // Initial calculation
            } catch (e) {
              console.warn('Could not set up hero scroll scrub:', e);
            }
          }
        });
      },
      {
        rootMargin: '200px 0px 200px 0px',
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      try {
        if (heroRef.current) {
          observer.unobserve(heroRef.current);
        }
        if (scrollListener) {
          window.removeEventListener('scroll', scrollListener);
        }
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, [shouldUseScrub]);

  // Calculate scrub values based on scroll progress
  const titleTranslateY = scrollProgress * -60; // Subtle upward translation
  const titleOpacity = Math.max(0, 1 - scrollProgress * 1.2); // Gentle fade, never fully disappears abruptly
  const subtitleOpacity = Math.max(0, 1 - scrollProgress * 1.5);
  const backgroundPosition = scrollProgress * 20; // Gradient shift

  return (
    <section 
      className="hero" 
      ref={heroRef}
      aria-label="Hero section"
      style={{
        backgroundPosition: shouldUseScrub ? `${50 + backgroundPosition}% ${50 + backgroundPosition * 0.5}%` : undefined,
      }}
    >
      <div className="hero__container">
        <div 
          className="hero__content"
          ref={contentRef}
          style={{
            transform: shouldUseScrub ? `translate3d(0, ${titleTranslateY}px, 0)` : undefined,
            opacity: shouldUseScrub ? titleOpacity : 1,
            willChange: shouldUseScrub ? 'transform, opacity' : 'auto',
          }}
        >
          {/* Main Title */}
          <h1 className="hero__title">
            YO! TECH THIS OUT
          </h1>

          {/* Subtitle */}
          <p 
            className="hero__subtitle"
            style={{
              opacity: shouldUseScrub ? subtitleOpacity : 1,
            }}
          >
            A curated scroll through the future of technology.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="hero__scroll-indicator" 
          aria-hidden="true"
          style={{
            opacity: shouldUseScrub ? Math.max(0, 1 - scrollProgress * 2) : 1,
          }}
        >
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel"></div>
          </div>
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
}

