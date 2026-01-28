import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/what-we-do.css';

/**
 * What We Do Page Component
 * Strategic, founder-friendly page explaining Yo!'s services and media-for-equity model
 */
export function WhatWeDo() {
  return (
    <PageLayout>
      <SEO
        title="What We Do"
        description="Yo! Tech This Out turns global innovation into U.S. market wins. We're your launch partner, not a media seller. Media-for-equity model aligns our success with yours."
        url="/what-we-do"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageSection variant="wide" noPadding>
        <div className="what-we-do-hero">
          <h1 className="what-we-do-hero__headline">
            Turning Global Innovation<br />
            into U.S. Market Wins
          </h1>
          <p className="what-we-do-hero__subhead">
            We're your launch partner, not a media seller. When you win, we win.
          </p>
        </div>
      </PageSection>

      {/* Section 2: How We Help You Win */}
      <PageSection variant="wide" noPadding>
        <div className="what-we-do-section what-we-do-services">
          <div className="what-we-do-services__header">
            <h2 className="what-we-do-services__title">How We Help You Win</h2>
            <p className="what-we-do-services__intro">
              We combine media expertise, data-driven strategy, and founder-focused execution to launch your innovation in the U.S. market.
            </p>
          </div>

          <div className="what-we-do-services__grid">
            <PageCard className="what-we-do-service-card">
              <div className="what-we-do-service-card__icon">🎯</div>
              <h3 className="what-we-do-service-card__title">Techfluencers</h3>
              <p className="what-we-do-service-card__text">
                Access our curated network of technology influencers who reach millions of engaged consumers and decision-makers.
              </p>
            </PageCard>

            <PageCard className="what-we-do-service-card">
              <div className="what-we-do-service-card__icon">🤖</div>
              <h3 className="what-we-do-service-card__title">AI + Data-Driven Targeting</h3>
              <p className="what-we-do-service-card__text">
                Precision targeting powered by AI and data analytics ensures your message reaches the right audience at the right time.
              </p>
            </PageCard>

            <PageCard className="what-we-do-service-card">
              <div className="what-we-do-service-card__icon">📱</div>
              <h3 className="what-we-do-service-card__title">Digital-First Campaigns</h3>
              <p className="what-we-do-service-card__text">
                Multi-channel campaigns across podcast, video, social, and digital platforms designed for maximum impact and engagement.
              </p>
            </PageCard>

            <PageCard className="what-we-do-service-card">
              <div className="what-we-do-service-card__icon">🚀</div>
              <h3 className="what-we-do-service-card__title">Go-to-Market Execution</h3>
              <p className="what-we-do-service-card__text">
                End-to-end launch support from strategy to execution, ensuring your product gets the visibility it deserves.
              </p>
            </PageCard>

            <PageCard className="what-we-do-service-card">
              <div className="what-we-do-service-card__icon">🤝</div>
              <h3 className="what-we-do-service-card__title">Distribution & Partnerships</h3>
              <p className="what-we-do-service-card__text">
                Strategic partnerships and distribution channels that accelerate your path to market and scale.
              </p>
            </PageCard>
          </div>
        </div>
      </PageSection>

      {/* Section 3: Media-for-Equity Model */}
      <PageSection variant="wide" noPadding>
        <div className="what-we-do-section what-we-do-equity">
          <div className="what-we-do-equity__header">
            <h2 className="what-we-do-equity__title">Media-for-Equity Model</h2>
            <p className="what-we-do-equity__subtitle">
              Aligned interests. Shared success.
            </p>
          </div>

          <div className="what-we-do-equity__content">
            <div className="what-we-do-equity__visual">
              <div className="what-we-do-equity-visual">
                <div className="what-we-do-equity-visual__item">
                  <div className="what-we-do-equity-visual__icon">📊</div>
                  <div className="what-we-do-equity-visual__label">Your Innovation</div>
                </div>
                <div className="what-we-do-equity-visual__arrow">→</div>
                <div className="what-we-do-equity-visual__item">
                  <div className="what-we-do-equity-visual__icon">📺</div>
                  <div className="what-we-do-equity-visual__label">Our Media</div>
                </div>
                <div className="what-we-do-equity-visual__arrow">→</div>
                <div className="what-we-do-equity-visual__item">
                  <div className="what-we-do-equity-visual__icon">🎯</div>
                  <div className="what-we-do-equity-visual__label">Market Wins</div>
                </div>
              </div>
            </div>

            <div className="what-we-do-equity__explanation">
              <PageCard variant="highlight" className="what-we-do-equity-card">
                <h3 className="what-we-do-equity-card__title">Why This Works</h3>
                <div className="what-we-do-equity-card__content">
                  <div className="what-we-do-equity-card__point">
                    <h4 className="what-we-do-equity-card__point-title">Aligned Interests</h4>
                    <p className="what-we-do-equity-card__point-text">
                      We're not just vendors—we're partners. Our success is directly tied to your success, so we're invested in your long-term growth.
                    </p>
                  </div>
                  <div className="what-we-do-equity-card__point">
                    <h4 className="what-we-do-equity-card__point-title">Founder-Friendly</h4>
                    <p className="what-we-do-equity-card__point-text">
                      No upfront media costs. We take equity instead, making it easier for startups to access premium media channels.
                    </p>
                  </div>
                  <div className="what-we-do-equity-card__point">
                    <h4 className="what-we-do-equity-card__point-title">Trust & Long-Term Upside</h4>
                    <p className="what-we-do-equity-card__point-text">
                      When we have skin in the game, we work harder, think smarter, and stay committed to your success. It's that simple.
                    </p>
                  </div>
                </div>
              </PageCard>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Section 4: CTA Section */}
      <PageSection variant="centered" noPadding>
        <div className="what-we-do-cta">
          <h2 className="what-we-do-cta__title">Ready to launch in the U.S.?</h2>
          <p className="what-we-do-cta__text">
            Let's discuss how we can help turn your global innovation into a U.S. market success story.
          </p>
          <a href="/contact" className="what-we-do-cta__button">
            Get in Touch
          </a>
        </div>
      </PageSection>
    </PageLayout>
  );
}
