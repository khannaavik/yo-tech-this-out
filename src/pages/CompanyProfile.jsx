import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { ProductRow } from '../components/ProductRow';
import { SEO } from '../components/SEO';
import { getCompanyBySlug, getCompanyProfile } from '../data/companies';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/company-profile.css';

/**
 * Company Profile Page Component
 * Dynamic route: /companies/:companySlug
 */
export function CompanyProfile() {
  const { companySlug } = useParams();
  const company = getCompanyBySlug(companySlug);

  // Show 404 if company not found
  if (!company) {
    return <NotFound />;
  }

  const profile = getCompanyProfile(company.name);
  const companyProducts = company.products;

  // Get all YouTube videos from products
  const videos = companyProducts
    .filter(p => p.youtube && p.youtube.includes('watch?v='))
    .slice(0, 3); // Limit to 3 videos

  return (
    <PageLayout>
      <SEO
        title={`${company.name} | Company Profile`}
        description={`Explore ${company.name}'s innovative products from CES 2026. ${profile.overview}`}
        url={`/companies/${companySlug}`}
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageHero
        title={company.name}
        subtitle="Company Profile"
        description={profile.overview}
      />

      {/* Company Overview */}
      <PageSection title="Company Overview">
        <div className="company-profile__overview">
          <PageCard variant="highlight">
            <p className="company-profile__overview-text">{profile.overview}</p>
            {profile.cesInvolvement && (
              <div className="company-profile__ces-info">
                <h4 className="company-profile__ces-title">CES 2026 Involvement</h4>
                <p>{profile.cesInvolvement}</p>
              </div>
            )}
          </PageCard>
        </div>
      </PageSection>

      {/* Featured Products */}
      <PageSection title={`Products Featured on Yo! Tech This Out`}>
        <div className="company-profile__products">
          {companyProducts.map((product) => (
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
      </PageSection>

      {/* Awards & Recognition */}
      {profile.awards && profile.awards.length > 0 && (
        <PageSection title="CES Innovation Awards">
          <div className="company-profile__awards">
            <PageCard variant="highlight" className="company-profile__awards-card">
              <div className="company-profile__awards-header">
                <img
                  src="/badges/ces-innovation-2026.png"
                  alt="CES Innovation Awards 2026"
                  className="company-profile__awards-badge"
                />
                <h3 className="company-profile__awards-title">Award Recognition</h3>
              </div>
              <ul className="company-profile__awards-list">
                {profile.awards.map((award, index) => (
                  <li key={index} className="company-profile__awards-item">
                    {award}
                  </li>
                ))}
              </ul>
              <Link
                to="/innovation-awards"
                className="company-profile__awards-link"
              >
                View All Award Winners
                <span className="company-profile__awards-link-arrow">→</span>
              </Link>
            </PageCard>
          </div>
        </PageSection>
      )}

      {/* Embedded Videos */}
      {videos.length > 0 && (
        <PageSection title="Featured Videos">
          <div className="company-profile__videos">
            {videos.map((product, index) => {
              const videoId = product.youtube.split('watch?v=')[1]?.split('&')[0];
              if (!videoId) return null;

              return (
                <PageCard key={product.id} className="company-profile__video-card">
                  <h4 className="company-profile__video-title">{product.name}</h4>
                  <div className="company-profile__video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${product.name} by ${company.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="company-profile__video-iframe"
                    />
                  </div>
                </PageCard>
              );
            })}
          </div>
        </PageSection>
      )}

      {/* Why This Company Matters */}
      <PageSection title="Why This Company Matters" variant="centered">
        <div className="company-profile__why-matters">
          <PageCard variant="highlight" className="company-profile__why-card">
            <p className="company-profile__why-text">{profile.whyItMatters}</p>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}
