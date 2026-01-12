import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { CompanyLink } from '../components/CompanyLink';
import { SEO } from '../components/SEO';
import { getProductBySlug } from '../data/products';
import { getOrganizationJsonLd, getProductJsonLd } from '../utils/seo';
import { NotFound } from './NotFound';
import '../styles/pages/product-detail.css';

/**
 * Extract YouTube video ID from URL
 */
function getYouTubeVideoId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
}

/**
 * Product Detail Page Component
 * Route: /products/:productSlug
 */
export function ProductDetail() {
  const { productSlug } = useParams();
  const product = getProductBySlug(productSlug);

  // Show 404 if product not found
  if (!product) {
    return <NotFound />;
  }

  const videoId = getYouTubeVideoId(product.youtube);
  const embedUrl = videoId 
    ? `https://www.youtube.com/embed/${videoId}?rel=0` 
    : null;

  const productImage = product.image || '/products/placeholder.png';

  return (
    <PageLayout>
      <SEO
        title={`${product.name} by ${product.company} | Product Detail`}
        description={product.description || `Discover ${product.name} by ${product.company}. ${product.categoryTag}.`}
        url={`/products/${productSlug}`}
        jsonLd={[
          getOrganizationJsonLd(),
          getProductJsonLd(product),
        ]}
      />

      {/* Hero Section */}
      <PageHero
        title={product.name}
        subtitle={product.categoryTag}
        description={
          <span>
            by <CompanyLink companyName={product.company} />
          </span>
        }
      />

      {/* Product Image */}
      <PageSection variant="centered" noPadding>
        <div className="product-detail__image-container">
          <PageCard variant="subtle" className="product-detail__image-card">
            <img
              src={productImage}
              alt={product.name}
              className="product-detail__image"
              loading="eager"
            />
          </PageCard>
        </div>
      </PageSection>

      {/* Product Description */}
      {product.description && (
        <PageSection title="About This Product" variant="centered">
          <div className="product-detail__description">
            <PageCard variant="subtle">
              <p className="product-detail__description-text">{product.description}</p>
            </PageCard>
          </div>
        </PageSection>
      )}

      {/* Demo Video */}
      {embedUrl && (
        <PageSection title="Demo Video" variant="centered">
          <div className="product-detail__video">
            <PageCard variant="subtle" className="product-detail__video-card">
              <div className="product-detail__video-wrapper">
                <iframe
                  src={embedUrl}
                  title={`${product.name} Demo Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="product-detail__video-iframe"
                  loading="lazy"
                />
              </div>
            </PageCard>
          </div>
        </PageSection>
      )}

      {/* Visit Website CTA */}
      {product.website && (
        <PageSection variant="centered">
          <div className="product-detail__cta">
            <PageCard variant="highlight" className="product-detail__cta-card">
              <h3 className="product-detail__cta-title">Visit Official Website</h3>
              <p className="product-detail__cta-description">
                Learn more about {product.name} and explore additional features, specifications, and purchase options.
              </p>
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="product-detail__cta-button"
                aria-label={`Visit ${product.name} website`}
              >
                Visit Website
                <span className="product-detail__cta-arrow" aria-hidden="true">→</span>
              </a>
            </PageCard>
          </div>
        </PageSection>
      )}
    </PageLayout>
  );
}
