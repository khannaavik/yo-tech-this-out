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
 * @param {string} productImage - URL to product image
 * @param {string} youtubeUrl - YouTube video URL (for modal)
 * @param {string} websiteUrl - Product website URL
 * @param {boolean} reverseLayout - Reverse layout on large screens (image right, text left)
 */
export function ProductScrollSection({
  productName,
  companyName,
  categoryTag,
  shortDescription,
  productImage,
  youtubeUrl,
  websiteUrl,
  reverseLayout = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [shouldUseParallax, setShouldUseParallax] = useState(true);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const hasAnimated = useRef(false);

  // Detect low-performance devices and disable parallax
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for low-end device indicators
    const isLowPerformance = 
      navigator.hardwareConcurrency <= 2 || // Low CPU cores
      navigator.deviceMemory <= 2 || // Low RAM (if available)
      prefersReducedMotion;

    setShouldUseParallax(!isLowPerformance);
  }, []);

  // IntersectionObserver for scroll reveal animation (one-time trigger with subtle easing)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle modal close
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Subtle parallax effect on scroll (disabled on low-performance devices)
  useEffect(() => {
    if (!shouldUseParallax) return;

    let rafId = null;
    const handleScroll = () => {
      if (rafId) return; // Throttle with RAF
      
      rafId = requestAnimationFrame(() => {
        if (!imageRef.current || !sectionRef.current) {
          rafId = null;
          return;
        }

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate subtle parallax offset when section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const offset = scrollProgress * 15; // Reduced to 15px for subtlety
          setParallaxOffset(offset);
        } else {
          setParallaxOffset(0);
        }
        
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [shouldUseParallax]);

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      
      // Handle Escape key to close modal
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
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
              className="product-scroll-section__image-container"
              style={{ 
                transform: shouldUseParallax ? `translate3d(0, ${parallaxOffset}px, 0)` : 'translate3d(0, 0, 0)',
              }}
            >
              <img
                src={productImage}
                alt={productName}
                className="product-scroll-section__image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="product-scroll-section__content">
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
                  className="product-scroll-section__button product-scroll-section__button--primary"
                  onClick={() => setIsModalOpen(true)}
                  aria-label={`Watch demo video for ${productName}`}
                >
                  Watch Demo
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

