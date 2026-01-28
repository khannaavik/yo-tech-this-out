import { useMemo } from 'react';
import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd, getProductJsonLd } from '../utils/seo';
import { ProductGrid } from '../v2/features/products/ProductGrid';
import { products } from '../data/products';
import '../styles/pages/products.css';

/**
 * Products Page Component
 * Displays all products using v2 ProductGrid with filters and Investor Mode support
 */

// Map product categories to display categories
const categoryMap = {
  'ai-audio': 'AI',
  'wearables': 'XR / Wearables',
  'health': 'Health',
  'xr': 'XR / Wearables',
  'living': 'Smart Home',
};

// Map category tags to regions (default to Global if not specified)
const getRegionFromProduct = (product) => {
  // You can add logic here to determine region based on company or other factors
  // For now, defaulting to Global
  return 'Global';
};

// Determine status from product data
const getStatusFromProduct = (product) => {
  // Default status - you can enhance this logic based on product data
  if (product.website) {
    return 'In Market';
  }
  return 'Prototype';
};

// Generate badges from product data
const getBadgesFromProduct = (product) => {
  const badges = [];
  
  // Add category tag as a badge if it contains "CES"
  if (product.categoryTag && /ces/i.test(product.categoryTag)) {
    badges.push('CES Honoree');
  }
  
  // Add region badge
  const region = getRegionFromProduct(product);
  if (region !== 'Global') {
    badges.push(region);
  }
  
  return badges;
};

// Transform products data to ProductGrid format
const transformProducts = (products) => {
  return products.map((product) => ({
    id: product.id,
    image: product.image || '/products/placeholder.png',
    video: null,
    productName: product.name,
    companyName: product.company,
    category: categoryMap[product.category] || 'Smart Home',
    region: getRegionFromProduct(product),
    emojiRating: ['🔥', '✨', '💡'],
    views: Math.floor(Math.random() * 50000) + 5000,
    hook: product.description || '',
    badges: getBadgesFromProduct(product),
    status: getStatusFromProduct(product),
  }));
};

export function Products() {
  const transformedProducts = useMemo(() => transformProducts(products), []);
  
  // Generate JSON-LD for all products
  const productJsonLd = products.map(product => getProductJsonLd(product));

  return (
    <PageLayout>
      <SEO
        title="Products"
        description={`Discover ${products.length} breakthrough innovations from CES 2026. Explore AI audio, wearables, health tech, XR, and future living technologies.`}
        url="/products"
        jsonLd={[
          getOrganizationJsonLd(),
          ...productJsonLd,
        ]}
      />
      
      <div className="products-page">
        <PageHero
          title="Products"
          subtitle={`${products.length} Breakthrough Innovations`}
          description="Discover the complete lineup of innovations from CES 2026"
        />

        <div className="products-page__grid">
          <ProductGrid products={transformedProducts} />
        </div>
      </div>
    </PageLayout>
  );
}
