import { useEffect, useRef } from 'react';
import '../styles/components/page-layout.css';

/**
 * PageLayout Component
 * Reusable page wrapper with consistent structure and scroll reveal animations
 */
export function PageLayout({ children, className = '' }) {
  const pageRef = useRef(null);

  useEffect(() => {
    // Smooth scroll reveal for all sections
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('page-section--visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const sections = pageRef.current?.querySelectorAll('.page-section');
    sections?.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections?.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div ref={pageRef} className={`page-layout ${className}`}>
      {children}
    </div>
  );
}

