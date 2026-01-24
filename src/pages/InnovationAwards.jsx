import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { SEO } from '../components/SEO';
import { CompanyLink } from '../components/CompanyLink';
import { ProductTile } from '../components/ProductTile';
import { getOrganizationJsonLd } from '../utils/seo';
import { getProductById } from '../data/products';
import '../styles/pages/innovation-awards.css';

/**
 * Innovation Awards Page Component
 * Gallery showcase of CES Innovation Award winners
 * Focus on company, product, video, and editorial insight
 */

const bestOfCes = [
  'galaxy-buds3-pro',
  'sony-xr-display',
  'bravia-theater-quad',
  'viv-ring',
];

const awardWinners = [
  {
    productId: 'galaxy-buds3-pro',
    awardType: 'CES Innovation Award',
    insight: 'Samsung\'s AI-powered audio represents a fundamental shift in how we experience sound. The adaptive intelligence doesn\'t just cancel noise—it understands context and optimizes in real-time.',
  },
  {
    productId: 'bravia-theater-quad',
    awardType: 'CES Innovation Award',
    insight: 'Sony reimagines home entertainment with quad-channel audio that creates true spatial immersion. This isn\'t an upgrade—it\'s a new category of cinematic experience.',
  },
  {
    productId: 'viv-ring',
    awardType: 'CES Innovation Award',
    insight: 'VIV Health proves that comprehensive health monitoring can be elegant and unobtrusive. The smart ring category finally has its benchmark product.',
  },
  {
    productId: 'sony-xr-display',
    awardType: 'CES Innovation Award',
    insight: 'Professional creators now have an XR headset that matches their standards. Sony bridges the gap between virtual and physical workspaces with stunning fidelity.',
  },
  {
    productId: 'frenz-brainband',
    awardType: 'CES Innovation Award',
    insight: 'Earable\'s neurotechnology approach to sleep and focus represents a new frontier in wearable wellness. Science meets design in a breakthrough form factor.',
  },
  {
    productId: 'maono-ai-mic',
    awardType: 'CES Innovation Award',
    insight: 'Content creators get professional-grade audio with AI that adapts to their voice. Maono democratizes broadcast-quality sound for the creator economy.',
  },
];

const pavilions = [
  {
    title: 'Korea Innovation Pavilion',
    description: 'Cinematic hardware and deep-tech startups redefining mobility, displays, and AI.',
  },
  {
    title: 'Japan Innovation Pavilion',
    description: 'Precision engineering meets human-centered design for the next decade of living.',
  },
  {
    title: 'Europe Innovation Pavilion',
    description: 'Sustainable breakthroughs and industrial-grade innovation with global impact.',
  },
];

export function InnovationAwards() {
  return (
    <PageLayout>
      <SEO
        title="The Global Innovation Authority"
        description="From CES Innovation Award winners to breakthrough startups shaping what’s next."
        url="/innovation-awards"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageHero
        title="The Global Innovation Authority"
        subtitle="CES & Innovation Authority Hub"
        description="From CES Innovation Award winners to breakthrough startups shaping what’s next."
      />

      {/* Best of CES */}
      <PageSection title="Best of CES" noPadding>
        <div className="innovation-awards__about">
          <p className="innovation-awards__about-text">
            Best of CES highlights the products that define the show — category leaders with real market impact and
            undeniable momentum.
          </p>
        </div>
        <div className="innovation-awards__gallery">
          {bestOfCes.map((productId) => {
            const product = getProductById(productId);
            if (!product) return null;
            return (
              <ProductTile
                key={product.id}
                productSlug={product.id}
                title={product.name}
                categoryLabel={product.categoryTag || 'Innovation'}
                regionLabel={product.regionLabel || 'Global'}
                hookLine={product.description || 'Best of CES selection.'}
                ratingEmojis={['🔥', '🧠', '✨', '🚀']}
                viewCount={28400}
                videoSrc="/assets/hero/home-hero.mp4"
                posterSrc={product.image}
                badges={['Best of CES']}
                className="innovation-awards__tile"
              />
            );
          })}
        </div>
      </PageSection>

      {/* CES Innovation Awards */}
      <PageSection title="CES Innovation Awards">
        <div className="innovation-awards__about">
          <p className="innovation-awards__about-text">
            The CES Innovation Awards celebrate standout design and engineering across consumer technology. These winners
            are the benchmarks for what the industry believes is next.
          </p>
        </div>
        <div className="innovation-awards__gallery">
          {awardWinners.map((award) => {
            const product = getProductById(award.productId);
            if (!product) return null;
            return (
              <article key={product.id} className="innovation-awards__card">
                <div className="innovation-awards__card-content">
                  <div className="innovation-awards__header">
                    <span className="innovation-awards__company">
                      <CompanyLink companyName={product.company} />
                    </span>
                    <h3 className="innovation-awards__product-name">{product.name}</h3>
                    <span className="innovation-awards__category">{award.awardType}</span>
                  </div>
                  <div className="innovation-awards__insight">
                    <p className="innovation-awards__insight-text">{award.insight}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </PageSection>

      {/* Global Innovation Pavilions */}
      <PageSection title="Global Innovation Pavilions">
        <div className="innovation-awards__gallery">
          {pavilions.map((pavilion) => (
            <article key={pavilion.title} className="innovation-awards__card">
              <div className="innovation-awards__card-content">
                <h3 className="innovation-awards__product-name">{pavilion.title}</h3>
                <p className="innovation-awards__insight-text">{pavilion.description}</p>
                <button type="button" className="innovation-awards__link">
                  Explore Innovations <span className="innovation-awards__link-arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      {/* Authority Close */}
      <PageSection title="Authority" variant="centered">
        <div className="innovation-awards__about">
          <p className="innovation-awards__about-text">
            Yo! Tech This Out curates, validates, and amplifies the world’s most important innovations — beyond press
            releases.
          </p>
        </div>
      </PageSection>
    </PageLayout>
  );
}
