import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CinematicHero } from '../sections/CinematicHero';
import { ProductGrid } from '../features/products/ProductGrid';
import { products } from '../../data/products';
import '../styles/home.css';

// Category mapping for ProductGrid
const categoryMap = {
  'ai-audio': 'AI',
  'wearables': 'XR / Wearables',
  'health': 'Health',
  'xr': 'XR / Wearables',
  'living': 'Smart Home',
};

// Transform product data to ProductGrid format
const transformProduct = (product) => {
  const isBike = /bike|ebike|mobility/i.test(product.categoryTag);
  const region = 'Global'; // Default region
  const status = product.website ? 'In Market' : 'Prototype';
  
  const badges = [];
  if (product.categoryTag && /ces/i.test(product.categoryTag)) {
    badges.push('CES Honoree');
  }
  if (isBike) {
    badges.push('Mobility');
  }
  
  return {
    id: product.id,
    image: product.image || '/products/placeholder.png',
    video: null,
    productName: product.name,
    companyName: product.company,
    category: categoryMap[product.category] || 'Smart Home',
    region: region,
    emojiRating: ['🔥', '✨', '💡'],
    views: Math.floor(Math.random() * 50000) + 5000,
    hook: product.description || '',
    badges: badges,
    status: status,
  };
};

export function Home() {
  // Get all bike products (categoryTag includes Bike, eBike, or Mobility)
  const bikeProducts = useMemo(() => {
    return products
      .filter((product) => {
        const tag = product.categoryTag || '';
        return /bike|ebike|mobility/i.test(tag);
      })
      .map(transformProduct);
  }, []);

  // Get 4 premium editorial products (CES winners, featured products)
  const premiumProducts = useMemo(() => {
    const premiumIds = [
      'galaxy-buds3-pro', // CES Winner
      'viv-ring', // CES Winner, Featured
      'sony-xr-display', // CES Winner
      'looki-l1', // Featured flagship
    ];
    
    return products
      .filter((product) => premiumIds.includes(product.id))
      .map(transformProduct);
  }, []);

  // Combine bikes + premium products
  const featuredProducts = useMemo(() => {
    return [...premiumProducts, ...bikeProducts];
  }, [premiumProducts, bikeProducts]);

  return (
    <main>
      <CinematicHero
        backgroundImage="/assets/hero/home-hero.png"
        backgroundVideo="/assets/hero/home-hero.mp4"
      />

      <section className="home-feature" aria-labelledby="home-feature-title">
        <div className="home-feature__card">
          <div className="home-feature__inner">
            <p className="home-feature__eyebrow">For startups + scaleups</p>
            <h2 id="home-feature-title" className="home-feature__title">
              Feature on Yo!
            </h2>
            <p className="home-feature__desc">
              Get discovered, reviewed, and funded — by the right people, everywhere.
            </p>

            <ul className="home-feature__list" role="list">
              <li>
                <span className="home-feature__check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Feature in our innovation grid</span>
              </li>
              <li>
                <span className="home-feature__check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Get reviewed by Techfluencers</span>
              </li>
              <li>
                <span className="home-feature__check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Reach global investors &amp; early adopters</span>
              </li>
            </ul>

            <div className="home-feature__actions">
              <button type="button" className="home-feature__btn home-feature__btn--primary">
                Apply to Be Featured
              </button>
              <button type="button" className="home-feature__btn home-feature__btn--secondary">
                Book a Call
              </button>
            </div>

            <p className="home-feature__trust">
              Trusted by CES winners, investors, and founders worldwide.
            </p>
          </div>
        </div>
      </section>

      <ProductGrid products={featuredProducts} />

      {/* View All Products CTA */}
      <section className="home-view-all" aria-label="View all products">
        <div className="home-view-all__container">
          <Link to="/products" className="home-view-all__button">
            View All Products
          </Link>
        </div>
      </section>

      <div style={{ height: '5rem' }} aria-hidden="true" />
    </main>
  );
}
