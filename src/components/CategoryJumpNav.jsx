import { useState, useEffect, useRef } from 'react';
import '../styles/components/category-jump-nav.css';

/**
 * CategoryJumpNav Component
 * Sticky category navigation with smooth scroll and active section highlighting
 */
export function CategoryJumpNav() {
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);

  // Chapter sections with their IDs and labels
  const chapters = [
    { id: 'ai-audio', label: 'AI & Audio', shortLabel: 'AI & Audio' },
    { id: 'wearables', label: 'Wearables', shortLabel: 'Wearables' },
    { id: 'health', label: 'Health', shortLabel: 'Health' },
    { id: 'xr', label: 'XR', shortLabel: 'XR' },
    { id: 'living', label: 'Living', shortLabel: 'Living' },
  ];

  // Smooth scroll to chapter
  const scrollToChapter = (chapterId) => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    
    try {
      const element = document.getElementById(chapterId);
      if (element) {
        const navHeight = navRef.current?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + (window.pageYOffset || window.scrollY || 0);
        const offsetPosition = elementPosition - navHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } catch (e) {
      console.warn('Could not scroll to chapter:', e);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const handleScroll = () => {
      try {
        const scrollPosition = (window.scrollY || window.pageYOffset || 0) + 150; // Offset for sticky nav

        // Check each chapter section
        for (let i = chapters.length - 1; i >= 0; i--) {
          const element = document.getElementById(chapters[i].id);
          if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              setActiveSection(chapters[i].id);
              return;
            }
          }
        }

        // If scrolled past all sections, set last one as active
        const lastElement = document.getElementById(chapters[chapters.length - 1].id);
        if (lastElement && scrollPosition >= lastElement.offsetTop) {
          setActiveSection(chapters[chapters.length - 1].id);
        }
      } catch (e) {
        console.warn('Error detecting active section:', e);
      }
    };

    try {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial check
    } catch (e) {
      console.warn('Could not set up scroll listener:', e);
    }

    return () => {
      try {
        window.removeEventListener('scroll', handleScroll);
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="category-jump-nav"
      role="navigation"
      aria-label="Category navigation"
    >
      <div className="category-jump-nav__container">
        <div className="category-jump-nav__links">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              className={`category-jump-nav__link ${
                activeSection === chapter.id ? 'category-jump-nav__link--active' : ''
              }`}
              onClick={() => scrollToChapter(chapter.id)}
              aria-label={`Jump to ${chapter.label} section`}
              type="button"
            >
              <span className="category-jump-nav__link-text">{chapter.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

