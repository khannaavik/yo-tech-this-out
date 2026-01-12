import { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/why.css';

/**
 * Why Page Component
 * Vision, ecosystem, and strategic value page for brands, partners, and investors
 */
export function Why() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Smooth scroll reveal on mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('why-section--visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="why-page">
      <SEO
        title="Why Yo! Tech This Out"
        description="The future of tech discovery. We curate, contextualize, and connect breakthrough CES innovations with audiences who will shape tomorrow."
        url="/why"
        jsonLd={getOrganizationJsonLd()}
      />
      {/* Hero Section */}
      <section className="why-hero">
        <div className="why-hero__container">
          <h1 className="why-hero__title">Our Why</h1>
          <p className="why-hero__subtitle">
            The Future of Tech Discovery
          </p>
          <p className="why-hero__description">
            We're building the definitive platform for CES retail, connecting the world's most innovative 
            technology with the audiences who will shape tomorrow.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="why-section why-section--vision"
      >
        <div className="why-section__container">
          <h2 className="why-section__title">Vision & Mission</h2>
          <div className="why-section__content">
            <div className="why-section__text">
              <p className="why-section__lead">
                Technology moves fast. Discovery shouldn't be fragmented.
              </p>
              <p>
                Yo! Tech This Out exists to solve a fundamental problem: the gap between groundbreaking 
                innovation at CES and the consumers, creators, and decision-makers who need to discover it.
              </p>
              <p>
                We curate, contextualize, and connect. Through our live experiences, podcast network, 
                and techfluencer ecosystem, we transform CES from a trade show into a discovery platform 
                that drives real business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section 
        ref={(el) => (sectionsRef.current[1] = el)}
        className="why-section why-section--ecosystem"
      >
        <div className="why-section__container">
          <h2 className="why-section__title">The Ecosystem</h2>
          <div className="why-section__content">
            <div className="why-ecosystem__grid">
              <div className="why-ecosystem__item">
                <h3 className="why-ecosystem__item-title">Live Experience</h3>
                <p className="why-ecosystem__item-description">
                  Immersive, curated showcases that bring CES innovation directly to audiences. 
                  We create moments that matter—where products meet purpose and brands meet buyers.
                </p>
              </div>
              <div className="why-ecosystem__item">
                <h3 className="why-ecosystem__item-title">Podcast Network</h3>
                <p className="why-ecosystem__item-description">
                  Deep-dive conversations with founders, engineers, and visionaries. Our audio-first 
                  approach delivers context, stories, and insights that go beyond the press release.
                </p>
              </div>
              <div className="why-ecosystem__item">
                <h3 className="why-ecosystem__item-title">Techfluencer Network</h3>
                <p className="why-ecosystem__item-description">
                  A curated community of creators who authentically amplify innovation. We connect 
                  brands with voices that resonate, driving discovery through trusted recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section 
        ref={(el) => (sectionsRef.current[2] = el)}
        className="why-section why-section--competitive"
      >
        <div className="why-section__container">
          <h2 className="why-section__title">Competitive Edge</h2>
          <div className="why-section__content">
            <div className="why-competitive__list">
              <div className="why-competitive__item">
                <h3 className="why-competitive__item-title">Curated, Not Cluttered</h3>
                <p>
                  We filter signal from noise. Every product we feature has been vetted for innovation, 
                  quality, and market potential. Quality over quantity.
                </p>
              </div>
              <div className="why-competitive__item">
                <h3 className="why-competitive__item-title">Multi-Channel Amplification</h3>
                <p>
                  Live events, podcasts, digital content, and influencer partnerships work in concert. 
                  We create multiple touchpoints that compound reach and impact.
                </p>
              </div>
              <div className="why-competitive__item">
                <h3 className="why-competitive__item-title">B2B & B2C Bridge</h3>
                <p>
                  We serve both enterprise buyers and end consumers. Our platform enables discovery 
                  at every stage of the buyer's journey, from awareness to purchase.
                </p>
              </div>
              <div className="why-competitive__item">
                <h3 className="why-competitive__item-title">Data-Driven Insights</h3>
                <p>
                  We measure what matters. Engagement metrics, conversion tracking, and audience 
                  analytics inform every decision, ensuring ROI for partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section 
        ref={(el) => (sectionsRef.current[3] = el)}
        className="why-section why-section--business"
      >
        <div className="why-section__container">
          <h2 className="why-section__title">Business & Monetization</h2>
          <div className="why-section__content">
            <div className="why-business__grid">
              <div className="why-business__item">
                <h3 className="why-business__item-title">Brand Partnerships</h3>
                <p>
                  Sponsored showcases, featured placements, and integrated content opportunities. 
                  We align your brand with innovation narratives that drive awareness and consideration.
                </p>
              </div>
              <div className="why-business__item">
                <h3 className="why-business__item-title">Affiliate Revenue</h3>
                <p>
                  Strategic affiliate relationships with retailers and manufacturers. We monetize 
                  discovery while maintaining editorial integrity and user trust.
                </p>
              </div>
              <div className="why-business__item">
                <h3 className="why-business__item-title">Premium Experiences</h3>
                <p>
                  VIP access, exclusive events, and curated experiences for enterprise buyers and 
                  high-value consumers. Premium tiers drive revenue while enhancing value.
                </p>
              </div>
              <div className="why-business__item">
                <h3 className="why-business__item-title">Data & Analytics</h3>
                <p>
                  Aggregated, anonymized insights on tech trends, buyer behavior, and market 
                  opportunities. Data products create recurring revenue streams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section 
        ref={(el) => (sectionsRef.current[4] = el)}
        className="why-section why-section--pillars"
      >
        <div className="why-section__container">
          <h2 className="why-section__title">Strategic Pillars</h2>
          <div className="why-section__content">
            <div className="why-pillars__list">
              <div className="why-pillars__item">
                <div className="why-pillars__item-number">01</div>
                <div className="why-pillars__item-content">
                  <h3 className="why-pillars__item-title">Discovery First</h3>
                  <p>
                    We prioritize user experience and authentic discovery over aggressive monetization. 
                    When users find value, business value follows.
                  </p>
                </div>
              </div>
              <div className="why-pillars__item">
                <div className="why-pillars__item-number">02</div>
                <div className="why-pillars__item-content">
                  <h3 className="why-pillars__item-title">Quality Curation</h3>
                  <p>
                    Every product, every story, every partnership is chosen with intention. We build 
                    trust through consistency and editorial rigor.
                  </p>
                </div>
              </div>
              <div className="why-pillars__item">
                <div className="why-pillars__item-number">03</div>
                <div className="why-pillars__item-content">
                  <h3 className="why-pillars__item-title">Multi-Platform Excellence</h3>
                  <p>
                    We don't just create content—we create ecosystems. Live events, podcasts, digital 
                    platforms, and influencer networks amplify each other.
                  </p>
                </div>
              </div>
              <div className="why-pillars__item">
                <div className="why-pillars__item-number">04</div>
                <div className="why-pillars__item-content">
                  <h3 className="why-pillars__item-title">Measurable Impact</h3>
                  <p>
                    We track everything. From engagement metrics to conversion rates, we prove ROI 
                    and continuously optimize for better outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CES 2026 Vision */}
      <section 
        ref={(el) => (sectionsRef.current[5] = el)}
        className="why-section why-section--ces"
      >
        <div className="why-section__container">
          <h2 className="why-section__title">CES 2026 Vision</h2>
          <div className="why-section__content">
            <div className="why-ces__content">
              <p className="why-ces__lead">
                By CES 2026, Yo! Tech This Out will be the definitive platform for tech discovery.
              </p>
              <div className="why-ces__goals">
                <div className="why-ces__goal">
                  <h3>Scale</h3>
                  <p>
                    Reach 10M+ monthly active users across all platforms, establishing ourselves as 
                    the go-to destination for CES innovation discovery.
                  </p>
                </div>
                <div className="why-ces__goal">
                  <h3>Partnerships</h3>
                  <p>
                    Forge strategic relationships with 500+ brands, retailers, and media partners, 
                    creating a network effect that compounds value.
                  </p>
                </div>
                <div className="why-ces__goal">
                  <h3>Impact</h3>
                  <p>
                    Drive $100M+ in attributed sales for partner brands, proving that discovery 
                    platforms can be both user-centric and commercially successful.
                  </p>
                </div>
                <div className="why-ces__goal">
                  <h3>Innovation</h3>
                  <p>
                    Launch new discovery formats, AI-powered personalization, and immersive experiences 
                    that set the standard for tech media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="why-section why-section--cta">
        <div className="why-section__container">
          <div className="why-cta__content">
            <h2 className="why-cta__title">Join Us</h2>
            <p className="why-cta__description">
              We're building the future of tech discovery. Whether you're a brand looking to amplify 
              innovation, an investor seeking the next media platform, or a partner ready to shape 
              CES retail—let's connect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

