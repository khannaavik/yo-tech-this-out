import { useState, useEffect, useRef } from 'react';
import '../styles/components/product-scroll-section.css';

/**
 * ProductScrollSection Component
 * Reusable product showcase section with scroll animations, parallax effects, and video modal
 * 
 * @param {string} productName - Name of the product
 * @param {string} companyName - Name of the company
 * @param {string} categoryTag - Category tag/label
 * @param {string} shortDescription - 1-2 line product description
 * @param {string} productImage - Product image URL (e.g., "/products/galaxy-buds/product.png")
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
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageRotation, setImageRotation] = useState(0);
  const [imageScale, setImageScale] = useState(1);
  const [imageTranslateY, setImageTranslateY] = useState(0);
  const [textTranslateY, setTextTranslateY] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0.8); // Start with subtle glow
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


  // Optimized scroll-scrub: Only active when section is visible (performance critical)
  useEffect(() => {
    if (!shouldUseParallax || typeof window === 'undefined') return;

    let rafId = null;
    let isVisible = false;
    let scrollListener = null;

    // Use IntersectionObserver to only enable scroll scrub when section is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          
          if (!isVisible) {
            // Disable animations when off-screen (performance optimization)
            setParallaxOffset(0);
            setImageRotation(0);
            setImageScale(1);
            setImageTranslateY(0);
            setTextTranslateY(0);
            setGlowIntensity(0.8); // Default to subtle glow
            setScrollProgress(0);
            
            // Remove scroll listener when off-screen
            if (scrollListener) {
              window.removeEventListener('scroll', scrollListener);
              scrollListener = null;
            }
            if (rafId) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
          } else if (!scrollListener) {
            // Add scroll listener when section becomes visible
            scrollListener = () => {
              if (rafId) return;
              
              rafId = requestAnimationFrame(() => {
                if (!imageRef.current || !sectionRef.current || !isVisible) {
                  rafId = null;
                  return;
                }

                try {
                  const rect = sectionRef.current.getBoundingClientRect();
                  const windowHeight = window.innerHeight || 0;
                  const windowCenter = windowHeight / 2;
                  const sectionCenter = rect.top + rect.height / 2;
                  
                  // Only calculate if section is reasonably close to viewport (performance)
                  if (rect.bottom < -200 || rect.top > windowHeight + 200) {
                    rafId = null;
                    return;
                  }
                  
                  const distanceFromCenter = sectionCenter - windowCenter;
                  const maxDistance = windowHeight + rect.height;
                  const progress = Math.max(0, Math.min(1, 1 - Math.abs(distanceFromCenter) / maxDistance));
                  
                  setScrollProgress(progress);
                  
                  // Gentle scroll-based micro-motion - calm and minimal
                  const scale = 1 + (progress * 0.02); // Very subtle scale (2% max)
                  setImageScale(scale);
                  
                  const translateY = distanceFromCenter * 0.1; // Reduced from 0.2 - gentler motion
                  setImageTranslateY(translateY);
                  
                  const parallaxAmount = distanceFromCenter * 0.08; // Reduced from 0.15 - subtle parallax
                  setParallaxOffset(parallaxAmount);
                  
                  // No rotation - clean, floating presentation
                  setImageRotation(0);
                  
                  const textTranslate = distanceFromCenter * 0.05; // Reduced from 0.08 - gentler text motion
                  setTextTranslateY(textTranslate);
                  
                  // Subtle glow variation - calm and minimal
                  const glow = Math.sin(progress * Math.PI) * 0.2 + 0.8; // Reduced variation (0.8-1.0)
                  setGlowIntensity(glow);
                } catch (e) {
                  setParallaxOffset(0);
                  setImageRotation(0);
                  setImageScale(1);
                  setImageTranslateY(0);
                  setTextTranslateY(0);
                  setGlowIntensity(0.8); // Default to subtle glow
                }
                
                rafId = null;
              });
            };

            try {
              window.addEventListener('scroll', scrollListener, { passive: true });
              scrollListener(); // Initial calculation
            } catch (e) {
              console.warn('Could not set up parallax scroll:', e);
            }
          }
        });
      },
      {
        rootMargin: '200px 0px 200px 0px', // Start calculating 200px before entering viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      try {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
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
  }, [shouldUseParallax]);


  // Normalize YouTube URL - if it's a channel or search URL, keep as is; if it's a video URL, use it directly
  const getYouTubeUrl = (url) => {
    if (!url) return null;
    // If it's already a full YouTube URL, use it
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return url;
    }
    return null;
  };

  const normalizedYoutubeUrl = getYouTubeUrl(youtubeUrl);

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
        data-product-section
        data-product-name={productName}
        data-youtube-url={youtubeUrl || ''}
      >
        <div className="product-scroll-section__container">
          {/* Image Container */}
          <div className="product-scroll-section__image-wrapper">
            <div
              ref={imageRef}
              className={`product-scroll-section__image-container ${isVisible ? 'product-scroll-section__image-container--visible' : ''}`}
              style={{ 
                transform: shouldUseParallax 
                  ? `translate3d(0, ${parallaxOffset + imageTranslateY}px, 0) scale(${imageScale})`
                  : 'translate3d(0, 0, 0) scale(1)',
                opacity: isVisible ? 1 : 0,
                willChange: shouldUseParallax ? 'transform, opacity' : 'opacity',
              }}
            >
              {/* Scroll-reactive glow halo behind image - premium ambient lighting */}
              <div 
                className="product-scroll-section__image-glow" 
                aria-hidden="true"
                style={{
                  opacity: shouldUseParallax ? glowIntensity : 1,
                  transform: `scale(${1 + (glowIntensity - 0.8) * 0.05})`, // Very subtle scale variation
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

          {/* Content Container - Text scrubs at slower rate for depth effect */}
          <div 
            ref={contentRef}
            className="product-scroll-section__content"
            style={{
              opacity: isVisible ? Math.max(0.3, scrollProgress) : 0,
              transform: shouldUseParallax && isVisible
                ? `translate3d(0, ${textTranslateY}px, 0) scale(${0.95 + scrollProgress * 0.05})`
                : isVisible
                ? `translateY(${(1 - scrollProgress) * 30}px) scale(${0.95 + scrollProgress * 0.05})`
                : 'translateY(30px) scale(0.95)',
              willChange: shouldUseParallax ? 'transform, opacity' : 'auto',
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
              {normalizedYoutubeUrl && (
                <a
                  href={normalizedYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-scroll-section__button product-scroll-section__button--primary product-scroll-section__button--watch-demo"
                  aria-label={`Watch demo video for ${productName}`}
                >
                  <span className="product-scroll-section__play-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 5L15 10L7 15V5Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="product-scroll-section__button-text">Watch Demo</span>
                </a>
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
    </>
  );
}

