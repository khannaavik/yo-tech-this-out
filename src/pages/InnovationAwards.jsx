import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { PageSection } from '../components/PageSection';
import { SEO } from '../components/SEO';
import { ProductTile } from '../v2/components/ProductTile';
import { getOrganizationJsonLd } from '../utils/seo';
import { getProductById } from '../data/products';
import '../styles/pages/innovation-awards.css';
import '../v2/styles/innovation-awards.css';

/**
 * Innovation Awards Page Component
 * Global authority showcase - cinematic, confident, editorial
 */

const bestOfCes = [
  'galaxy-buds3-pro',
  'sony-xr-display',
  'bravia-theater-quad',
  'viv-ring',
];

const awardWinners = [
  'galaxy-buds3-pro',
  'bravia-theater-quad',
  'viv-ring',
  'sony-xr-display',
  'frenz-brainband',
  'maono-ai-mic',
];

// Category mapping for ProductTile
const categoryMap = {
  'ai-audio': 'AI',
  'wearables': 'XR / Wearables',
  'health': 'Health',
  'xr': 'XR / Wearables',
  'living': 'Smart Home',
};

// Transform product to v2 ProductTile format
const transformProduct = (product) => {
  return {
    id: product.id,
    image: product.image || '/products/placeholder.png',
    video: null,
    productName: product.name,
    companyName: product.company,
    category: categoryMap[product.category] || 'Innovation',
    region: 'Global',
    emojiRating: ['🔥', '✨', '💡'],
    views: Math.floor(Math.random() * 50000) + 5000,
    hook: product.description || '',
    badges: ['CES Honoree'],
  };
};

export function InnovationAwards() {
  // Transform Best of CES products
  const bestOfCesProducts = bestOfCes
    .map((id) => getProductById(id))
    .filter(Boolean)
    .map(transformProduct);

  // Transform Award Winners products
  const awardWinnersProducts = awardWinners
    .map((id) => getProductById(id))
    .filter(Boolean)
    .map(transformProduct);

  return (
    <PageLayout>
      <SEO
        title="Innovation Awards & CES Authority"
        description="Recognizing the products shaping what comes next. Curated by judges, technologists, and global innovation leaders."
        url="/innovation-awards"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* PART 1: Cinematic Hero */}
      <section className="innovation-awards-hero">
        <div className="innovation-awards-hero__container">
          <h1 className="innovation-awards-hero__headline">
            Innovation Awards &<br />CES Authority
          </h1>
          <p className="innovation-awards-hero__subheadline">
            Recognizing the products shaping what comes next.
          </p>
          <p className="innovation-awards-hero__supporting">
            Curated by judges, technologists, and global innovation leaders.
          </p>
        </div>
      </section>

      {/* PART 2: Best of CES - Featured Editorial Block */}
      <PageSection noPadding>
        <div className="innovation-awards-best-of">
          <div className="innovation-awards-best-of__intro">
            <p className="innovation-awards-best-of__intro-text">
              The most impactful products recognized on the CES stage.
            </p>
          </div>
          <div className="innovation-awards-best-of__grid">
            {bestOfCesProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="innovation-awards-best-of__tile-link"
              >
                <ProductTile
                  {...product}
                  badges={['Best of CES', ...(product.badges || [])]}
                />
              </Link>
            ))}
          </div>
        </div>
      </PageSection>

      {/* PART 3: CES Innovation Awards Grid */}
      <PageSection noPadding>
        <div className="innovation-awards-grid">
          <div className="innovation-awards-grid__container">
            {awardWinnersProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="innovation-awards-grid__tile-link"
              >
                <ProductTile
                  {...product}
                  badges={['CES Innovation Award']}
                />
              </Link>
            ))}
          </div>
        </div>
      </PageSection>

      {/* PART 4: Global Authority Section */}
      <PageSection variant="wide" noPadding>
        <div className="innovation-awards-authority">
          <div className="innovation-awards-authority__container">
            <h2 className="innovation-awards-authority__headline">
              Judging the Future, Globally
            </h2>
            <p className="innovation-awards-authority__text">
              From CES Innovation Awards to Global Innovation Forums, Yo! Tech This Out sits where tomorrow is decided — evaluating products, platforms, and founders before the mainstream catches on.
            </p>
          </div>
        </div>
      </PageSection>

      {/* PART 5: Refined CTA */}
      <PageSection variant="centered" noPadding>
        <div className="innovation-awards-cta">
          <div className="innovation-awards-cta__container">
            <h2 className="innovation-awards-cta__headline">
              Think your product belongs here?
            </h2>
            <div className="innovation-awards-cta__actions">
              <Link to="/advertise" className="innovation-awards-cta__button innovation-awards-cta__button--primary">
                Apply for Innovation Showcase
              </Link>
              <Link to="/products" className="innovation-awards-cta__button innovation-awards-cta__button--secondary">
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
