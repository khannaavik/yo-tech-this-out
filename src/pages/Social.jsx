import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/social.css';

/**
 * Social Page Component
 * Showcases Yo!'s distribution power and builds trust through social media presence
 */

const socialPlatforms = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/company/yotechthisout',
    description: 'Professional network and B2B reach',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '▶️',
    url: 'https://www.youtube.com/@yotechthisout',
    description: 'Video content and product demos',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📷',
    url: 'https://www.instagram.com/yotechthisout',
    description: 'Visual storytelling and engagement',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    icon: '🐦',
    url: 'https://twitter.com/yotechthisout',
    description: 'Real-time updates and conversations',
  },
];

export function Social() {
  return (
    <PageLayout>
      <SEO
        title="Social"
        description="Yo! Tech This Out's social media presence across LinkedIn, YouTube, Instagram, and X. Reach millions through our multi-platform distribution network."
        url="/social"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageHero
        title="Social"
        subtitle="Multi-Platform Distribution"
        description="Reach millions through our integrated social media network"
      />

      {/* Intro Section */}
      <PageSection variant="centered" noPadding>
        <div className="social-intro">
          <PageCard variant="highlight" className="social-intro-card">
            <h2 className="social-intro__title">Distribution Power</h2>
            <div className="social-intro__content">
              <p className="social-intro__text">
                Yo! Tech This Out reaches millions of engaged consumers, decision-makers, and 
                innovators across LinkedIn, YouTube, Instagram, and X. Our multi-platform 
                approach ensures your innovation story reaches the right audience at the right time.
              </p>
              <p className="social-intro__text">
                With strategic content distribution and authentic engagement, we build trust 
                and drive real business outcomes. Every post, video, and conversation is 
                designed to amplify your innovation and connect you with the people who matter.
              </p>
              <div className="social-intro__stats">
                <div className="social-intro__stat">
                  <div className="social-intro__stat-value">200M+</div>
                  <div className="social-intro__stat-label">Combined Reach</div>
                </div>
                <div className="social-intro__stat">
                  <div className="social-intro__stat-value">4</div>
                  <div className="social-intro__stat-label">Platforms</div>
                </div>
                <div className="social-intro__stat">
                  <div className="social-intro__stat-value">24/7</div>
                  <div className="social-intro__stat-label">Engagement</div>
                </div>
              </div>
            </div>
          </PageCard>
        </div>
      </PageSection>

      {/* Social Embeds Grid */}
      <PageSection title="Our Social Presence" variant="wide" noPadding>
        <div className="social-embeds">
          <p className="social-embeds__intro">
            Connect with us across all platforms to stay updated on the latest innovations, 
            CES insights, and founder stories.
          </p>
          <div className="social-embeds__grid">
            {socialPlatforms.map((platform) => (
              <div key={platform.id} className="social-embed-card">
                <PageCard className="social-embed-card__wrapper">
                  <div className="social-embed-card__header">
                    <div className="social-embed-card__icon">{platform.icon}</div>
                    <div className="social-embed-card__info">
                      <h3 className="social-embed-card__name">{platform.name}</h3>
                      <p className="social-embed-card__description">{platform.description}</p>
                    </div>
                  </div>
                  <div className="social-embed-card__placeholder">
                    <div className="social-embed-placeholder">
                      <div className="social-embed-placeholder__icon">{platform.icon}</div>
                      <div className="social-embed-placeholder__text">
                        {platform.name} Feed
                      </div>
                      <div className="social-embed-placeholder__subtext">
                        Embed coming soon
                      </div>
                    </div>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-embed-card__link"
                  >
                    Follow on {platform.name} →
                  </a>
                </PageCard>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Trust Section */}
      <PageSection variant="centered" noPadding>
        <div className="social-trust">
          <PageCard className="social-trust-card">
            <h2 className="social-trust__title">Why Social Matters</h2>
            <div className="social-trust__content">
              <div className="social-trust__point">
                <h3 className="social-trust__point-title">Authentic Engagement</h3>
                <p className="social-trust__point-text">
                  We don't just broadcast—we build relationships. Every interaction is 
                  an opportunity to connect with your audience authentically.
                </p>
              </div>
              <div className="social-trust__point">
                <h3 className="social-trust__point-title">Strategic Distribution</h3>
                <p className="social-trust__point-text">
                  Content is tailored for each platform's unique audience, maximizing 
                  reach and engagement across professional networks, video platforms, and social feeds.
                </p>
              </div>
              <div className="social-trust__point">
                <h3 className="social-trust__point-title">Trust & Credibility</h3>
                <p className="social-trust__point-text">
                  Consistent, high-quality content builds trust over time. Our audience 
                  knows they can rely on Yo! for authentic innovation stories.
                </p>
              </div>
            </div>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}
