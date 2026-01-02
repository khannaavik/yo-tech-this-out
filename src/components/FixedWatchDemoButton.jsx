import { useState, useEffect, useRef } from 'react';
import '../styles/components/fixed-watch-demo-button.css';

/**
 * FixedWatchDemoButton Component
 * Persistent side button that tracks current product and opens demo video
 */
export function FixedWatchDemoButton() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const observerRef = useRef(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  // Track which product section is in view (throttled for performance)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;

    // Find all product sections
    const productSections = document.querySelectorAll('[data-product-section]');
    if (productSections.length === 0) return;

    let rafId = null;
    let pendingUpdate = null;

    const observer = new IntersectionObserver(
      (entries) => {
        // Throttle updates using requestAnimationFrame
        if (rafId) return;

        rafId = requestAnimationFrame(() => {
          // Find the section with the highest intersection ratio
          let mostVisible = null;
          let maxRatio = 0;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisible = entry.target;
            }
          });

          if (mostVisible && maxRatio > 0.15) {
            // Extract product data from data attributes
            const productName = mostVisible.getAttribute('data-product-name');
            const youtubeUrl = mostVisible.getAttribute('data-youtube-url');
            
            if (youtubeUrl && youtubeUrl.trim() !== '') {
              // Smooth update - only change if product actually changed
              setCurrentProduct((prev) => {
                const newProduct = {
                  name: productName || 'Product',
                  youtubeUrl,
                };
                // Only update if product changed to avoid unnecessary re-renders
                if (!prev || prev.youtubeUrl !== youtubeUrl) {
                  return newProduct;
                }
                return prev;
              });
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          } else {
            // Check if any section with video is still in view
            const hasVisibleSection = Array.from(productSections).some((section) => {
              const rect = section.getBoundingClientRect();
              const youtubeUrl = section.getAttribute('data-youtube-url');
              return rect.top < window.innerHeight && 
                     rect.bottom > 0 && 
                     youtubeUrl && 
                     youtubeUrl.trim() !== '';
            });
            
            if (!hasVisibleSection) {
              setIsVisible(false);
            }
          }

          rafId = null;
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
        rootMargin: '-25% 0px -25% 0px', // Center-focused for better detection
      }
    );

    productSections.forEach((section) => {
      observer.observe(section);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        productSections.forEach((section) => {
          observerRef.current.unobserve(section);
        });
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (currentProduct?.youtubeUrl) {
      setIsModalOpen(true);
    }
  };

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isModalOpen) {
      try {
        document.body.style.overflow = 'hidden';
        
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
  }, [isModalOpen]);

  const videoId = currentProduct?.youtubeUrl 
    ? getYouTubeVideoId(currentProduct.youtubeUrl) 
    : null;
  const embedUrl = videoId 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` 
    : null;

  // Hide on mobile/tablet - only show on desktop (1024px+)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    
    // Throttle resize listener
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDesktop, 150);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  if (!currentProduct || !isVisible) {
    return null;
  }

  return (
    <>
      <button
        className={`fixed-watch-demo-button ${isVisible ? 'fixed-watch-demo-button--visible' : ''}`}
        onClick={handleClick}
        aria-label={`Watch demo video for ${currentProduct.name}`}
        type="button"
      >
        <span className="fixed-watch-demo-button__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 5L15 10L7 15V5Z" fill="currentColor"/>
          </svg>
        </span>
        <span className="fixed-watch-demo-button__text">Watch Demo</span>
      </button>

      {/* Video Modal */}
      {isModalOpen && embedUrl && (
        <div 
          className="fixed-watch-demo-button__modal"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Video demo for ${currentProduct.name}`}
        >
          <div 
            className="fixed-watch-demo-button__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fixed-watch-demo-button__modal-close"
              onClick={handleCloseModal}
              aria-label="Close video"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="fixed-watch-demo-button__modal-video">
              <iframe
                src={embedUrl}
                title={`${currentProduct.name} Demo Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

