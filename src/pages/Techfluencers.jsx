import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/techfluencers.css';

/**
 * Techfluencers Page Component
 * Premium amplification engine for tech innovation and influence
 */
export function Techfluencers() {
  return (
    <PageLayout>
      <SEO
        title="TECHFLUENCERS™"
        description="Where tech innovation and influence converge. A curated community of creators who authentically amplify innovation, connecting brands with voices that resonate."
        url="/techfluencers"
        jsonLd={getOrganizationJsonLd()}
      />
      {/* Hero Section */}
      <PageHero
        title="TECHFLUENCERS™"
        subtitle="Where Tech Innovation & Influence Converge"
        description="A curated community of creators who authentically amplify innovation, connecting brands with voices that resonate."
      />

      {/* Concept Explanation */}
      <PageSection title="What Are Techfluencers™?">
        <div className="techfluencers-concept">
          <PageCard variant="highlight" className="techfluencers-concept-card">
            <p className="techfluencers-concept-lead">
              Techfluencers™ represents a new paradigm in tech media—a curated network of creators 
              who bridge the gap between groundbreaking innovation and cultural influence.
            </p>
            <p>
              Adapted from the Digital Mind State framework, Techfluencers™ are more than content 
              creators. They are trusted voices who understand technology's cultural impact, speak 
              authentically to engaged audiences, and drive real discovery through genuine recommendations.
            </p>
            <p>
              Unlike traditional influencers who may lack technical depth, or tech reviewers who 
              miss cultural context, Techfluencers™ combine deep product knowledge with cultural 
              awareness—creating content that resonates on both intellectual and emotional levels.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Core Pillars */}
      <PageSection title="The Techfluencer™ Advantage">
        <div className="techfluencers-pillars">
          <PageCard className="techfluencers-pillar-card">
            <div className="techfluencers-pillar-icon">🎯</div>
            <h3>Credibility</h3>
            <p>
              Our Techfluencers™ are recognized authorities in their niches. They've built trust 
              through consistent, honest evaluation and deep technical understanding. When they 
              recommend a product, their audience listens.
            </p>
          </PageCard>

          <PageCard className="techfluencers-pillar-card">
            <div className="techfluencers-pillar-icon">📡</div>
            <h3>Reach</h3>
            <p>
              Combined reach across platforms—YouTube, TikTok, Instagram, Twitter, podcasts, and 
              more. Our network amplifies your message to millions of engaged tech enthusiasts, 
              early adopters, and decision-makers.
            </p>
          </PageCard>

          <PageCard className="techfluencers-pillar-card">
            <div className="techfluencers-pillar-icon">🌐</div>
            <h3>Cultural Influence</h3>
            <p>
              Techfluencers™ understand how technology shapes culture and vice versa. They create 
              content that goes beyond specs—exploring how innovations impact how we live, work, 
              and connect.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Value for Brands */}
      <PageSection title="Value for Brands & Launches">
        <div className="techfluencers-value">
          <PageCard variant="highlight" className="techfluencers-value-card">
            <h3>Premium Amplification Engine</h3>
            <p>
              When you partner with Techfluencers™, you're not just buying reach—you're accessing 
              a premium amplification engine designed to drive discovery, consideration, and action.
            </p>
            <div className="techfluencers-value-grid">
              <div className="techfluencers-value-item">
                <div className="techfluencers-value-icon">🚀</div>
                <div className="techfluencers-value-content">
                  <h4>Product Launches</h4>
                  <p>
                    Coordinate multi-creator campaigns that build anticipation, generate buzz, and 
                    drive launch-day impact across platforms.
                  </p>
                </div>
              </div>
              <div className="techfluencers-value-item">
                <div className="techfluencers-value-icon">💡</div>
                <div className="techfluencers-value-content">
                  <h4>Innovation Stories</h4>
                  <p>
                    Transform technical features into compelling narratives that resonate with 
                    audiences and drive emotional connection.
                  </p>
                </div>
              </div>
              <div className="techfluencers-value-item">
                <div className="techfluencers-value-icon">🎬</div>
                <div className="techfluencers-value-content">
                  <h4>Authentic Content</h4>
                  <p>
                    Creators produce genuine, high-quality content that feels natural, not 
                    promotional—maintaining trust while driving results.
                  </p>
                </div>
              </div>
              <div className="techfluencers-value-item">
                <div className="techfluencers-value-icon">📊</div>
                <div className="techfluencers-value-content">
                  <h4>Measurable Impact</h4>
                  <p>
                    Track engagement, conversions, and brand lift across all campaigns with 
                    comprehensive analytics and reporting.
                  </p>
                </div>
              </div>
            </div>
          </PageCard>
        </div>
      </PageSection>

      {/* PDF Download CTA */}
      <PageSection variant="centered" noPadding>
        <div className="techfluencers-pdf-cta">
          <PageCard variant="highlight" className="techfluencers-pdf-card">
            <h2 className="techfluencers-pdf-title">Explore Our Network</h2>
            <p className="techfluencers-pdf-description">
              Download our comprehensive Techfluencer™ roster to discover creators who align with 
              your brand and campaign objectives.
            </p>
            <a 
              href="/assets/techfluencers/Techfluencer-DMS-Talent-Roster-21.pdf" 
              download="Techfluencer-DMS-Talent-Roster-21.pdf"
              className="techfluencers-pdf-button"
            >
              Download Techfluencer™ Roster (PDF)
            </a>
            <p className="techfluencers-pdf-note">
              Complete network overview with creator profiles, audience demographics, and reach metrics
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* How It Works */}
      <PageSection title="How It Works">
        <div className="techfluencers-process">
          <div className="techfluencers-process-item">
            <div className="techfluencers-process-number">01</div>
            <div className="techfluencers-process-content">
              <h3>Discovery</h3>
              <p>
                Review our curated Techfluencer™ roster to identify creators whose audience, 
                style, and expertise align with your brand and campaign goals.
              </p>
            </div>
          </div>
          <div className="techfluencers-process-item">
            <div className="techfluencers-process-number">02</div>
            <div className="techfluencers-process-content">
              <h3>Strategy</h3>
              <p>
                Work with our team to develop a custom campaign strategy that leverages the right 
                creators, platforms, and content formats for maximum impact.
              </p>
            </div>
          </div>
          <div className="techfluencers-process-item">
            <div className="techfluencers-process-number">03</div>
            <div className="techfluencers-process-content">
              <h3>Amplification</h3>
              <p>
                Creators produce authentic, high-quality content that resonates with their audiences, 
                driving discovery, engagement, and action across multiple touchpoints.
              </p>
            </div>
          </div>
          <div className="techfluencers-process-item">
            <div className="techfluencers-process-number">04</div>
            <div className="techfluencers-process-content">
              <h3>Measurement</h3>
              <p>
                Track performance across all channels with comprehensive analytics, reporting, and 
                insights that prove ROI and inform future campaigns.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection variant="centered" noPadding>
        <div className="techfluencers-cta">
          <PageCard variant="highlight" className="techfluencers-cta-card">
            <h2 className="techfluencers-cta-title">Ready to Amplify Your Innovation?</h2>
            <p className="techfluencers-cta-description">
              Connect with our team to explore how Techfluencers™ can drive discovery and impact 
              for your brand or product launch.
            </p>
            <a 
              href="mailto:partnerships@yotechthisout.com?subject=TECHFLUENCERS™ Partnership Inquiry" 
              className="techfluencers-cta-button"
            >
              Get Started
            </a>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}

