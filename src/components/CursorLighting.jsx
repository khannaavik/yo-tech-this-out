import { useEffect, useRef } from 'react';
import '../styles/components/cursor-lighting.css';

/**
 * CursorLighting Component
 * Subtle cursor-reactive lighting effect for desktop devices only
 */
export function CursorLighting() {
  const lightingRef = useRef(null);
  const rafIdRef = useRef(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);

  useEffect(() => {
    // Only enable on desktop devices with mouse
    if (typeof window === 'undefined') return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;

    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia 
      ? window.matchMedia('(hover: hover) and (pointer: fine)').matches 
      : false;

    if (prefersReducedMotion || !hasHover) {
      return;
    }

    const lightingElement = lightingRef.current;
    if (!lightingElement) return;

    // Smooth mouse tracking with easing
    const updateLighting = () => {
      // Ease towards mouse position for smooth movement
      const diffX = mouseXRef.current - currentXRef.current;
      const diffY = mouseYRef.current - currentYRef.current;
      const distance = Math.sqrt(diffX * diffX + diffY * diffY);
      
      // Stop animation loop when close enough to target (performance optimization)
      if (distance < 0.5) {
        currentXRef.current = mouseXRef.current;
        currentYRef.current = mouseYRef.current;
        lightingElement.style.setProperty('--cursor-x', `${currentXRef.current}px`);
        lightingElement.style.setProperty('--cursor-y', `${currentYRef.current}px`);
        rafIdRef.current = null;
        return;
      }
      
      currentXRef.current += diffX * 0.1;
      currentYRef.current += diffY * 0.1;

      // Update CSS custom properties for GPU-friendly animation
      lightingElement.style.setProperty('--cursor-x', `${currentXRef.current}px`);
      lightingElement.style.setProperty('--cursor-y', `${currentYRef.current}px`);

      rafIdRef.current = requestAnimationFrame(updateLighting);
    };

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;

      // Start animation loop if not already running
      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(updateLighting);
      }
    };

    const handleMouseLeave = () => {
      // Fade out lighting when mouse leaves viewport
      if (lightingElement) {
        lightingElement.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      // Fade in lighting when mouse enters viewport
      if (lightingElement) {
        lightingElement.style.opacity = '1';
      }
    };

    try {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      
      // Initial position
      updateLighting();
    } catch (e) {
      console.warn('Could not set up cursor lighting:', e);
    }

    return () => {
      try {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, []);

  return (
    <div 
      ref={lightingRef}
      className="cursor-lighting"
      aria-hidden="true"
    />
  );
}

