import { useEffect, useMemo, useState } from 'react';
import { ProductTile } from '../../components/ProductTile';
import { ProductFilters } from './ProductFilters';
import '../../styles/product-grid.css';

const mockProducts = [
  {
    id: 'nebula-pulse',
    image: '/products/placeholder.png',
    video: '/assets/hero/home-hero.mp4',
    productName: 'Nebula Pulse',
    companyName: 'Aurora Labs',
    category: 'XR / Wearables',
    region: 'Global',
    emojiRating: ['🔥', '🔥', '😍'],
    views: 18400,
    hook: 'Cinematic headset tuned for creators',
    badges: ['CES Winner', 'Kickstarter', 'Global'],
    status: 'Kickstarter',
  },
  {
    id: 'looki-l1',
    image: '/products/looki-l1/product.png',
    productName: 'Looki L1',
    companyName: 'Looki',
    category: 'Smart Home',
    region: 'North America',
    emojiRating: ['✨', '🔥', '💡'],
    views: 9200,
    hook: 'A smarter portal for every room',
    badges: ['CES Honoree', 'In Market', 'North America'],
    status: 'In Market',
  },
  {
    id: 'osmotex',
    image: '/products/osmotex-jacket/product.png',
    productName: 'Osmotex Jacket',
    companyName: 'Osmotex',
    category: 'Health',
    region: 'Europe',
    emojiRating: ['🧊', '🔥', '😍'],
    views: 46200,
    hook: 'Adaptive thermal layers for any climate',
    badges: ['Investor Ready', 'Europe'],
    status: 'Investor Ready',
  },
  {
    id: 'q-vision-pro',
    image: '/products/q-vision-pro/product.png',
    productName: 'Q Vision Pro',
    companyName: 'Q Vision',
    category: 'AI',
    region: 'Asia-Pacific',
    emojiRating: ['🤖', '✨', '🚀'],
    views: 31800,
    hook: 'Ambient intelligence for the modern home',
    badges: ['Prototype', 'Asia-Pacific'],
    status: 'Prototype',
  },
  {
    id: 'viv-ring',
    image: '/products/viv-ring/product.png',
    productName: 'Viv Ring',
    companyName: 'Viv',
    category: 'Health',
    region: 'Global',
    emojiRating: ['💫', '🔥', '❤️'],
    views: 27100,
    hook: 'Biometric signal clarity, always on',
    badges: ['CES Honoree', 'In Market', 'Global'],
    status: 'In Market',
  },
  {
    id: 'sportrack-xr',
    image: '/products/sportrack-xr/product.png',
    productName: 'Sportrack XR',
    companyName: 'Sportrack',
    category: 'Mobility',
    region: 'North America',
    emojiRating: ['⚡', '🔥', '🎯'],
    views: 13300,
    hook: 'Motion-first training for athletes',
    badges: ['Kickstarter', 'North America'],
    status: 'Kickstarter',
  },
];

const defaultFilterState = {
  category: 'All',
  region: 'All',
  status: 'All',
};

export function ProductGrid({ products = mockProducts }) {
  const [filters, setFilters] = useState(defaultFilterState);
  const [isInvestorMode, setIsInvestorMode] = useState(false);
  const fundingMatch = /kickstarter|investor ready/i;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleInvestorMode = (event) => {
      setIsInvestorMode(Boolean(event.detail));
    };
    window.addEventListener('investor-mode-change', handleInvestorMode);
    return () => window.removeEventListener('investor-mode-change', handleInvestorMode);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        filters.category === 'All' || product.category === filters.category;
      const matchesRegion = filters.region === 'All' || product.region === filters.region;
      const matchesStatus = filters.status === 'All' || product.status === filters.status;
      return matchesCategory && matchesRegion && matchesStatus;
    });
  }, [products, filters]);

  return (
    <section className={`v2-product-grid ${isInvestorMode ? 'v2-product-grid--investor' : ''}`}>
      <ProductFilters value={filters} onChange={setFilters} />
      {isInvestorMode && (
        <div className="v2-product-grid__spotlight">Funding Spotlight</div>
      )}
      <div className="v2-product-grid__rail">
        {filteredProducts.map((product) => {
          const isFunding =
            fundingMatch.test(product.status || '') ||
            (product.badges || []).some((badge) => fundingMatch.test(badge));
          const displayBadges =
            isInvestorMode && isFunding
              ? ['Funding Spotlight', ...(product.badges || [])]
              : product.badges;
          const tileClassName = [
            'v2-product-grid__tile',
            isInvestorMode && isFunding ? 'is-funding' : '',
            isInvestorMode && !isFunding ? 'is-muted' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={product.id} className={tileClassName}>
              <ProductTile {...product} badges={displayBadges} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
