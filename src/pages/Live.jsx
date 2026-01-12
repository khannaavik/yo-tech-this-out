import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/live.css';

/**
 * Live Page Component
 * CES Live / LinkedIn Streams page with real-time coverage
 */
export function Live() {
  return (
    <PageLayout>
      <SEO
        title="CES Live"
        description="Real-time coverage of CES 2026 on LinkedIn. Join us for live streaming coverage of the latest innovations, insights, and behind-the-scenes moments."
        url="/live"
        jsonLd={getOrganizationJsonLd()}
      />
      {/* Hero Section */}
      <PageHero
        title="CES Live"
        subtitle="Real-Time Coverage on LinkedIn"
        description="Join us for live streaming coverage of CES 2026, bringing you the latest innovations, insights, and behind-the-scenes moments as they happen."
      />

      {/* Live Indicator */}
      <PageSection variant="centered" noPadding>
        <div className="live-indicator">
          <div className="live-indicator-dot"></div>
          <span className="live-indicator-text">Live Coverage Coming Soon</span>
        </div>
      </PageSection>

      {/* Upcoming Streams */}
      <PageSection title="Upcoming Streams">
        <div className="live-streams">
          <PageCard variant="highlight" className="live-stream-card live-stream-card--upcoming">
            <div className="live-stream-header">
              <div className="live-stream-badge">Upcoming</div>
              <div className="live-stream-date">Jan 6, 2026</div>
            </div>
            <h3 className="live-stream-title">CES 2026 Kickoff</h3>
            <div className="live-stream-time">
              <span className="live-stream-time-icon">🕐</span>
              <span>8:00 AM PT</span>
            </div>
            <p className="live-stream-description">
              Join us for the official kickoff of CES 2026. We'll be live from the show floor, 
              bringing you first looks at the most innovative products, exclusive interviews with 
              industry leaders, and real-time reactions to the biggest announcements.
            </p>
            <div className="live-stream-platform">
              <span className="live-stream-platform-icon">💼</span>
              <span>LinkedIn Live</span>
            </div>
          </PageCard>

          <PageCard variant="highlight" className="live-stream-card live-stream-card--upcoming">
            <div className="live-stream-header">
              <div className="live-stream-badge">Upcoming</div>
              <div className="live-stream-date">Jan 7, 2026</div>
            </div>
            <h3 className="live-stream-title">GIF Pitch Watch Party</h3>
            <div className="live-stream-time">
              <span className="live-stream-time-icon">🕐</span>
              <span>Time TBD</span>
            </div>
            <p className="live-stream-description">
              Watch along as we review the most innovative pitches in GIF format. Fast-paced, 
              entertaining, and packed with insights—this is CES coverage like you've never seen it.
            </p>
            <div className="live-stream-platform">
              <span className="live-stream-platform-icon">💼</span>
              <span>LinkedIn Live</span>
            </div>
          </PageCard>

          <PageCard variant="highlight" className="live-stream-card live-stream-card--upcoming">
            <div className="live-stream-header">
              <div className="live-stream-badge">Upcoming</div>
              <div className="live-stream-date">Jan 8, 2026</div>
            </div>
            <h3 className="live-stream-title">Post-Awards Breakdown</h3>
            <div className="live-stream-time">
              <span className="live-stream-time-icon">🕐</span>
              <span>Time TBD</span>
            </div>
            <p className="live-stream-description">
              Deep dive into the CES Innovation Awards® winners and Best of Innovation honorees. 
              We'll break down what makes each product special, the technology behind the innovation, 
              and what it means for the future of consumer tech.
            </p>
            <div className="live-stream-platform">
              <span className="live-stream-platform-icon">💼</span>
              <span>LinkedIn Live</span>
            </div>
          </PageCard>
        </div>
      </PageSection>

      {/* What to Expect */}
      <PageSection title="What to Expect" variant="centered">
        <div className="live-expectations">
          <PageCard variant="subtle" className="live-expectations-card">
            <h3>Real-Time Coverage</h3>
            <p>
              Get instant access to CES 2026 as it happens. Our live streams bring you directly 
              to the show floor, with real-time commentary, product demonstrations, and exclusive 
              interviews you won't find anywhere else.
            </p>
          </PageCard>
          <PageCard variant="subtle" className="live-expectations-card">
            <h3>Interactive Experience</h3>
            <p>
              Engage with us live on LinkedIn. Ask questions, share your thoughts, and be part 
              of the conversation as we explore the future of technology together.
            </p>
          </PageCard>
          <PageCard variant="subtle" className="live-expectations-card">
            <h3>Expert Insights</h3>
            <p>
              Our team, including CES Innovation Awards® Judge Mike Johns, brings deep expertise 
              and authentic reactions to every stream. Get the context and analysis that matters.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Follow on LinkedIn */}
      <PageSection variant="centered" noPadding>
        <div className="live-cta">
          <PageCard variant="highlight" className="live-cta-card">
            <h2 className="live-cta-title">Follow Us on LinkedIn</h2>
            <p className="live-cta-description">
              Don't miss a stream. Follow Yo! Tech This Out on LinkedIn to get notified when 
              we go live and stay connected with all our CES 2026 coverage.
            </p>
            <a
              href="https://www.linkedin.com/company/yotechthisout"
              target="_blank"
              rel="noopener noreferrer"
              className="live-cta-button"
            >
              Follow on LinkedIn
            </a>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}

