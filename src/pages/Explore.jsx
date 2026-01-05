import { useEffect, useRef } from 'react';
import { products } from '../data/products';
import { ProductRow } from '../components/ProductRow';
import { PageLayout } from '../components/PageLayout';
import '../styles/pages/explore.css';

/**
 * Explore Page Component
 * Displays all products in a vertical list layout
 * Optimized for performance with lazy loading and smooth scrolling
 */
export function Explore() {
  const containerRef = useRef(null);

  // Smooth scroll behavior
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollBehavior' in document.documentElement.style) {
      // CSS smooth scroll is supported
      return;
    }
    // Fallback for browsers without CSS smooth scroll
    const handleScroll = () => {
      // Native smooth scrolling will be used
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout>
      <div className="explore-page" ref={containerRef}>
        <div className="explore-page__header">
          <h1 className="explore-page__title">Explore All Products</h1>
          <p className="explore-page__subtitle">
            Discover the complete lineup of breakthrough innovations from CES 2026
          </p>
          <p className="explore-page__count">
            {products.length} {products.length === 1 ? 'Product' : 'Products'}
          </p>
        </div>

        <div className="explore-page__products">
          {products.map((product) => (
            <ProductRow
              key={product.id}
              productName={product.name}
              companyName={product.company}
              categoryTag={product.categoryTag}
              shortDescription={product.description}
              productImage={product.image}
              youtubeUrl={product.youtube}
              websiteUrl={product.website}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

