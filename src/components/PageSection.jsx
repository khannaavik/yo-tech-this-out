import { useRef, useEffect, useState } from 'react';
import '../styles/components/page-section.css';

/**
 * PageSection Component
 * Reusable content section with scroll reveal animation and optional title
 */
export function PageSection({ 
  title, 
  children, 
  className = '',
  variant = 'default', // 'default', 'centered', 'wide'
  noPadding = false
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
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

  return (
    <section
      ref={sectionRef}
      className={`page-section page-section--${variant} ${isVisible ? 'page-section--visible' : ''} ${noPadding ? 'page-section--no-padding' : ''} ${className}`}
    >
      <div className="page-section__container">
        {title && (
          <h2 className="page-section__title">{title}</h2>
        )}
        <div className="page-section__content">
          {children}
        </div>
      </div>
    </section>
  );
}

