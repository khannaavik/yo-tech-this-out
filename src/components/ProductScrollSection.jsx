import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/components/product-scroll-section.css';

/**
 * ProductScrollSection Component
 * Reusable product showcase section with scroll animations, parallax effects, and video modal
 * 
 * @param {string} productName - Name of the product
 * @param {string} companyName - Name of the company
 * @param {string} categoryTag - Category tag/label
 * @param {string} shortDescription - 1-2 line product description
 * @param {string} productImage - Product image URL (e.g., "/products/galaxy-buds3-pro/hero.png")
 * @param {string} youtubeUrl - YouTube video URL (for modal)
 * @param {string} websiteUrl - Product website URL
 * @param {boolean} reverseLayout - Reverse layout on large screens (image right, text left)
 */
export function ProductScrollSection(props) {
  // Safe destructuring with defaults
  const {
    productName,
    companyName,
    categoryTag,
    shortDescription,
    productImage,
    youtubeUrl,
    websiteUrl,
    reverseLayout = false,
  } = props || {};
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageRotation, setImageRotation] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [shouldUseParallax, setShouldUseParallax] = useState(true);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const placeholderRef = useRef(null);
  const contentRef = useRef(null);
  const hasAnimated = useRef(false);

  // Detect low-performance devices and disable parallax
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') {
      setShouldUseParallax(false);
      return;
    }

    try {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia 
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
        : false;
      
      // Check for low-end device indicators (safe access with fallbacks)
      const hardwareConcurrency = navigator.hardwareConcurrency || 4; // Default to 4 if unavailable
      const deviceMemory = navigator.deviceMemory || 4; // Default to 4 if unavailable
      
      const isLowPerformance = 
        hardwareConcurrency <= 2 || // Low CPU cores
        deviceMemory <= 2 || // Low RAM (if available)
        prefersReducedMotion;

      setShouldUseParallax(!isLowPerformance);
    } catch (e) {
      // If any check fails, disable parallax for safety
      console.warn('Could not detect device capabilities:', e);
      setShouldUseParallax(false);
    }
  }, []);

  // Apple-level scroll-synced reveal animation
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
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px',
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

  // Handle modal close
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Apple-level scroll-synced parallax with perspective and rotation
  useEffect(() => {
    if (!shouldUseParallax || typeof window === 'undefined') return;

    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        if (!imageRef.current || !sectionRef.current) {
          rafId = null;
          return;
        }

        try {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight || 0;
          const windowCenter = windowHeight / 2;
          const sectionCenter = rect.top + rect.height / 2;
          
          // Calculate scroll progress (0 to 1) as section moves through viewport
          const distanceFromCenter = sectionCenter - windowCenter;
          const maxDistance = windowHeight + rect.height;
          const progress = Math.max(0, Math.min(1, 1 - Math.abs(distanceFromCenter) / maxDistance));
          
          setScrollProgress(progress);
          
          // Parallax offset with perspective (subtle, Apple-like)
          const parallaxAmount = distanceFromCenter * 0.15; // Gentle parallax
          setParallaxOffset(parallaxAmount);
          
          // Subtle rotation based on scroll position (max 2 degrees)
          const rotation = (distanceFromCenter / windowHeight) * 2;
          setImageRotation(Math.max(-2, Math.min(2, rotation)));
          
          // Glow intensity peaks when image is centered
          const glow = Math.sin(progress * Math.PI) * 0.6 + 0.4; // 0.4 to 1.0
          setGlowIntensity(glow);
        } catch (e) {
          setParallaxOffset(0);
          setImageRotation(0);
          setGlowIntensity(0.4);
        }
        
        rafId = null;
      });
    };

    try {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    } catch (e) {
      console.warn('Could not set up parallax scroll:', e);
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
  }, [shouldUseParallax]);

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isModalOpen) {
      try {
        document.body.style.overflow = 'hidden';
        
        // Handle Escape key to close modal
        const handleEscape = (e) => {
          if (e.key === 'Escape') {
            handleCloseModal();
          }
        };
        
        document.addEventListener('keydown', handleEscape);
        
        return () => {
          try {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscape);
          } catch (e) {
            // Ignore cleanup errors
          }
        };
      } catch (e) {
        console.warn('Could not lock body scroll:', e);
      }
    } else {
      try {
        document.body.style.overflow = '';
      } catch (e) {
        // Ignore errors
      }
    }
  }, [isModalOpen, handleCloseModal]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  // Safe resolved image source - always has a value, never undefined
  // If productImage is provided → use it, otherwise fallback to placeholder
  const resolvedImageSrc = productImage || '/products/placeholder.png';

  // Safe alt text generation with fallbacks
  const imageAlt = productName 
    ? `${productName}${companyName ? ` by ${companyName}` : ''}`
    : 'Product image';

  return (
    <>
      <section
        ref={sectionRef}
        className={`product-scroll-section ${isVisible ? 'product-scroll-section--visible' : ''} ${reverseLayout ? 'product-scroll-section--reverse' : ''}`}
        aria-label={`${productName} product section`}
      >
        <div className="product-scroll-section__container">
          {/* Image Container */}
          <div className="product-scroll-section__image-wrapper">
            <div
              ref={imageRef}
              className={`product-scroll-section__image-container ${isVisible ? 'product-scroll-section__image-container--visible' : ''}`}
              style={{ 
                transform: shouldUseParallax 
                  ? `translate3d(0, ${parallaxOffset}px, 0) rotateY(${imageRotation}deg) perspective(1000px)`
                  : 'translate3d(0, 0, 0)',
                filter: shouldUseParallax 
                  ? `drop-shadow(0 ${20 + glowIntensity * 40}px ${60 + glowIntensity * 40}px rgba(0, 212, 255, ${0.2 + glowIntensity * 0.3}))`
                  : 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.3))',
              }}
            >
              {/* Scroll-reactive glow halo behind image */}
              <div 
                className="product-scroll-section__image-glow" 
                aria-hidden="true"
                style={{
                  opacity: shouldUseParallax ? glowIntensity : 0.6,
                  transform: `scale(${1 + glowIntensity * 0.1})`,
                }}
              ></div>
              
              {/* Always render placeholder as fallback (hidden when image loads successfully) */}
              <div 
                ref={placeholderRef}
                className="product-scroll-section__image-placeholder" 
                aria-label={imageAlt}
                style={{ display: 'none' }}
              >
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="var(--color-bg-secondary)" opacity="0.5"/>
                  <path d="M30 40L50 25L70 40V70H30V40Z" stroke="var(--color-text-secondary)" strokeWidth="2" fill="none"/>
                  <circle cx="50" cy="50" r="8" fill="var(--color-text-secondary)" opacity="0.3"/>
                </svg>
              </div>

              {/* Always render image block unconditionally using resolved image source */}
              <img
                src={resolvedImageSrc}
                alt={imageAlt}
                className="product-scroll-section__image"
                loading="lazy"
                onError={(e) => {
                  // Hide broken image and show placeholder
                  e.target.style.display = 'none';
                  if (placeholderRef.current) {
                    placeholderRef.current.style.display = 'flex';
                  }
                }}
                onLoad={() => {
                  // Ensure placeholder is hidden when image loads successfully
                  if (placeholderRef.current) {
                    placeholderRef.current.style.display = 'none';
                  }
                }}
              />
            </div>
          </div>

          {/* Content Container */}
          <div 
            ref={contentRef}
            className="product-scroll-section__content"
            style={{
              opacity: isVisible ? scrollProgress : 0,
              transform: isVisible 
                ? `translateY(${(1 - scrollProgress) * 30}px) scale(${0.95 + scrollProgress * 0.05})`
                : 'translateY(30px) scale(0.95)',
            }}
          >
            {/* Category Tag */}
            {categoryTag && (
              <span className="product-scroll-section__category">
                {categoryTag}
              </span>
            )}

            {/* Product Name */}
            <h2 className="product-scroll-section__title">
              {productName}
            </h2>

            {/* Company Name */}
            {companyName && (
              <p className="product-scroll-section__company">
                by {companyName}
              </p>
            )}

            {/* Description */}
            <p className="product-scroll-section__description">
              {shortDescription}
            </p>

            {/* Action Buttons */}
            <div className="product-scroll-section__actions">
              {youtubeUrl && embedUrl && (
                <button
                  className="product-scroll-section__button product-scroll-section__button--primary product-scroll-section__button--watch-demo"
                  onClick={() => setIsModalOpen(true)}
                  aria-label={`Watch demo video for ${productName}`}
                >
                  <span className="product-scroll-section__play-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 5L15 10L7 15V5Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="product-scroll-section__button-text">Watch Demo</span>
                </button>
              )}
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-scroll-section__button product-scroll-section__button--secondary"
                  aria-label={`Visit ${productName} website`}
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && embedUrl && (
        <div
          className="product-scroll-section__modal-backdrop"
          onClick={handleBackdropClick}
          aria-label="Close video modal"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              handleCloseModal();
            }
          }}
        >
          <div className="product-scroll-section__modal">
            <button
              className="product-scroll-section__modal-close"
              onClick={handleCloseModal}
              aria-label="Close video modal"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="product-scroll-section__modal-content">
              <iframe
                src={embedUrl}
                title={`${productName} demo video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="product-scroll-section__modal-video"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

