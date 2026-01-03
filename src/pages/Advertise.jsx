import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import '../styles/pages/advertise.css';

/**
 * Advertise Page Component
 * High-conversion page for brand partnerships and advertising opportunities
 */
export function Advertise() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        title="Advertise With Us"
        subtitle="Reach 200M+ Tech Enthusiasts"
        description="Connect your brand with the most engaged audience in consumer technology through CES-focused content and trusted recommendations."
      />

      {/* Key Metrics */}
      <PageSection title="Why Advertise With Us" noPadding>
        <div className="advertise-metrics">
          <PageCard variant="highlight" className="advertise-metric-card">
            <div className="advertise-metric-value">200M+</div>
            <div className="advertise-metric-label">Audience Reach</div>
            <div className="advertise-metric-description">
              Via iHeartMedia network and multi-platform distribution
            </div>
          </PageCard>
          <PageCard variant="highlight" className="advertise-metric-card">
            <div className="advertise-metric-value">$20–50</div>
            <div className="advertise-metric-label">CPM Range</div>
            <div className="advertise-metric-description">
              Competitive rates for premium CES-focused placements
            </div>
          </PageCard>
          <PageCard variant="highlight" className="advertise-metric-card">
            <div className="advertise-metric-value">CES</div>
            <div className="advertise-metric-label">Focused Exposure</div>
            <div className="advertise-metric-description">
              Exclusive access to innovation awards coverage
            </div>
          </PageCard>
        </div>
      </PageSection>

      {/* Value Proposition */}
      <PageSection title="The Yo! Tech This Out Advantage">
        <div className="advertise-value">
          <PageCard variant="highlight">
            <h3>Premium Audience, Premium Results</h3>
            <p>
              Our audience consists of tech enthusiasts, early adopters, decision-makers, and 
              industry professionals actively seeking the next breakthrough innovation. When you 
              advertise with us, you're not just reaching numbers—you're connecting with engaged 
              consumers who trust our curation and recommendations.
            </p>
            <p>
              With 200M+ reach through iHeartMedia and our multi-platform presence, your brand 
              gains access to a highly qualified audience that's ready to discover, learn, and purchase.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Sponsorship Options */}
      <PageSection title="Sponsorship Opportunities">
        <div className="advertise-options">
          <PageCard className="advertise-option-card">
            <div className="advertise-option-icon">🎙️</div>
            <h3>Podcast Integrations</h3>
            <p>
              Native integrations within our iHeartMedia, Spotify, and Apple Podcasts shows. 
              Reach engaged listeners through authentic, contextual placements that feel natural 
              and valuable.
            </p>
            <ul className="advertise-option-features">
              <li>Pre-roll, mid-roll, and post-roll ad placements</li>
              <li>Host-read endorsements and product features</li>
              <li>Sponsored episode series</li>
              <li>Cross-platform promotion</li>
            </ul>
          </PageCard>

          <PageCard className="advertise-option-card">
            <div className="advertise-option-icon">📱</div>
            <h3>Digital & Social Placements</h3>
            <p>
              Premium placements across our website, social media channels, and digital content. 
              From featured product showcases to sponsored content series, we create campaigns 
              that drive awareness and engagement.
            </p>
            <ul className="advertise-option-features">
              <li>Featured product showcases</li>
              <li>Sponsored content articles</li>
              <li>Social media campaign integration</li>
              <li>Video content partnerships</li>
            </ul>
          </PageCard>

          <PageCard className="advertise-option-card">
            <div className="advertise-option-icon">🎯</div>
            <h3>CES Activations</h3>
            <p>
              Exclusive opportunities during CES events. From live event sponsorships to 
              Innovation Awards® coverage, connect with the most influential moments in tech.
            </p>
            <ul className="advertise-option-features">
              <li>Live event sponsorships</li>
              <li>Innovation Awards® coverage integration</li>
              <li>Exclusive CES content partnerships</li>
              <li>On-site activation opportunities</li>
            </ul>
          </PageCard>
        </div>
      </PageSection>

      {/* ROI & Data Tracking */}
      <PageSection title="Measurable Results" variant="centered">
        <PageCard variant="highlight" className="advertise-roi-card">
          <h3>Data-Driven Performance</h3>
          <p>
            We believe in transparency and accountability. Every campaign includes comprehensive 
            tracking and reporting to ensure you understand the impact of your investment.
          </p>
          <div className="advertise-roi-metrics">
            <div className="advertise-roi-item">
              <div className="advertise-roi-icon">📊</div>
              <div className="advertise-roi-text">
                <strong>Engagement Metrics</strong>
                <span>Track views, clicks, and conversions</span>
              </div>
            </div>
            <div className="advertise-roi-item">
              <div className="advertise-roi-icon">🎯</div>
              <div className="advertise-roi-text">
                <strong>Audience Insights</strong>
                <span>Demographic and behavioral data</span>
              </div>
            </div>
            <div className="advertise-roi-item">
              <div className="advertise-roi-icon">💰</div>
              <div className="advertise-roi-text">
                <strong>ROI Reporting</strong>
                <span>Comprehensive performance analysis</span>
              </div>
            </div>
          </div>
        </PageCard>
      </PageSection>

      {/* Pricing */}
      <PageSection title="Investment & Pricing" variant="centered">
        <div className="advertise-pricing">
          <PageCard className="advertise-pricing-card">
            <h3>Competitive CPM Rates</h3>
            <div className="advertise-pricing-range">$20–50 CPM</div>
            <p className="advertise-pricing-note">
              Rates vary based on placement type, campaign duration, and targeting options. 
              Custom packages available for long-term partnerships.
            </p>
            <div className="advertise-pricing-features">
              <div className="advertise-pricing-feature">
                <span className="advertise-pricing-check">✓</span>
                <span>Flexible campaign structures</span>
              </div>
              <div className="advertise-pricing-feature">
                <span className="advertise-pricing-check">✓</span>
                <span>Multi-platform packages</span>
              </div>
              <div className="advertise-pricing-feature">
                <span className="advertise-pricing-check">✓</span>
                <span>Custom sponsorship opportunities</span>
              </div>
            </div>
          </PageCard>
        </div>
      </PageSection>

      {/* Primary CTA */}
      <PageSection variant="centered" noPadding>
        <div className="advertise-cta">
          <PageCard variant="highlight" className="advertise-cta-card">
            <h2 className="advertise-cta-title">Ready to Get Started?</h2>
            <p className="advertise-cta-description">
              Let's discuss how we can help your brand reach the right audience at the right time. 
              Contact our partnership team to explore custom sponsorship opportunities.
            </p>
            <a 
              href="mailto:jennifer@yotechthisout.com?subject=Advertising Inquiry" 
              className="advertise-cta-button"
            >
              Contact Jennifer Mueller
            </a>
            <p className="advertise-cta-note">
              Partnership Director • jennifer@yotechthisout.com
            </p>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}

