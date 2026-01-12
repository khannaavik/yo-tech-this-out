import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { SEO } from '../components/SEO';
import { CompanyLink } from '../components/CompanyLink';
import { getOrganizationJsonLd } from '../utils/seo';
import { getProductById } from '../data/products';
import '../styles/pages/innovation-awards.css';

/**
 * Innovation Awards Page Component
 * Gallery showcase of CES Innovation Award winners
 * Focus on company, product, video, and editorial insight
 */

// CES Innovation Award winners with editorial insights
const awardWinners = [
  {
    productId: 'galaxy-buds3-pro',
    awardType: 'Best of Innovation',
    insight: 'Samsung\'s AI-powered audio represents a fundamental shift in how we experience sound. The adaptive intelligence doesn\'t just cancel noise—it understands context and optimizes in real-time.',
  },
  {
    productId: 'bravia-theater-quad',
    awardType: 'Innovation Award',
    insight: 'Sony reimagines home entertainment with quad-channel audio that creates true spatial immersion. This isn\'t an upgrade—it\'s a new category of cinematic experience.',
  },
  {
    productId: 'viv-ring',
    awardType: 'Innovation Award',
    insight: 'VIV Health proves that comprehensive health monitoring can be elegant and unobtrusive. The smart ring category finally has its benchmark product.',
  },
  {
    productId: 'sony-xr-display',
    awardType: 'Best of Innovation',
    insight: 'Professional creators now have an XR headset that matches their standards. Sony bridges the gap between virtual and physical workspaces with stunning fidelity.',
  },
  {
    productId: 'frenz-brainband',
    awardType: 'Innovation Award',
    insight: 'Earable\'s neurotechnology approach to sleep and focus represents a new frontier in wearable wellness. Science meets design in a breakthrough form factor.',
  },
  {
    productId: 'maono-ai-mic',
    awardType: 'Innovation Award',
    insight: 'Content creators get professional-grade audio with AI that adapts to their voice. Maono democratizes broadcast-quality sound for the creator economy.',
  },
];

export function InnovationAwards() {
  return (
    <PageLayout>
      <SEO
        title="CES Innovation Awards"
        description="Celebrating the most impactful innovations from CES 2026. Explore award-winning products that represent the pinnacle of technological achievement and design excellence."
        url="/innovation-awards"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageHero
        title="CES Innovation Awards"
        subtitle="Recognizing Excellence in Innovation"
        description="The products that set the standard. These award winners represent the pinnacle of technological achievement, design excellence, and market impact."
      />

      {/* Awards Gallery */}
      <PageSection title="Award Winners" noPadding>
        <div className="innovation-awards__gallery">
          {awardWinners.map((award, index) => {
            const product = getProductById(award.productId);
            if (!product) return null;

            return (
              <article key={product.id} className="innovation-awards__card">
                <div className="innovation-awards__badge-wrapper">
                  <img
                    src="/badges/ces-innovation-2026.png"
                    alt="CES Innovation Awards 2026"
                    className="innovation-awards__badge"
                  />
                  {award.awardType === 'Best of Innovation' && (
                    <span className="innovation-awards__badge-label">Best of Innovation</span>
                  )}
                </div>

                <div className="innovation-awards__card-content">
                  <div className="innovation-awards__header">
                    <span className="innovation-awards__company">
                      <CompanyLink companyName={product.company} />
                    </span>
                    <h3 className="innovation-awards__product-name">{product.name}</h3>
                    <span className="innovation-awards__category">{product.categoryTag}</span>
                  </div>

                  {product.youtube && product.youtube.includes('watch?v=') && (
                    <div className="innovation-awards__video">
                      <iframe
                        src={`https://www.youtube.com/embed/${product.youtube.split('watch?v=')[1].split('&')[0]}`}
                        title={`${product.name} by ${product.company}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="innovation-awards__video-iframe"
                      />
                    </div>
                  )}

                  <div className="innovation-awards__insight">
                    <p className="innovation-awards__insight-text">{award.insight}</p>
                  </div>

                  {product.website && (
                    <a
                      href={product.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="innovation-awards__link"
                      aria-label={`Visit ${product.company} website`}
                    >
                      Learn More
                      <span className="innovation-awards__link-arrow">→</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </PageSection>

      {/* About the Awards */}
      <PageSection title="About CES Innovation Awards" variant="centered">
        <div className="innovation-awards__about">
          <p className="innovation-awards__about-text">
            The CES Innovation Awards program recognizes outstanding design and engineering in consumer technology products. 
            Winners are selected by a panel of industry experts, including CES Innovation Awards® Judge Mike Johns, 
            who evaluate products based on engineering, functionality, aesthetics, and user value.
          </p>
          <p className="innovation-awards__about-text">
            Products featured here represent the highest standards of innovation—technologies that don't just improve 
            existing categories, but define new ones. These are the breakthroughs that will shape how we live, work, 
            and experience the world.
          </p>
        </div>
      </PageSection>
    </PageLayout>
  );
}
