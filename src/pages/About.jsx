import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/about.css';

/**
 * About Page Component
 * Cinematic storytelling about Yo! Tech This Out and founder Mike Johns
 */
export function About() {
  return (
    <PageLayout>
      <SEO
        title="About Us"
        description="Yo! Tech This Out is an innovation authority connecting global founders with U.S. market access. Led by CES Innovation Awards® Judge Mike Johns."
        url="/about"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageHero
        title="About"
        subtitle="Yo! Tech This Out"
      />

      {/* SECTION 1: About Yo! Tech This Out */}
      <PageSection variant="wide" noPadding>
        <div className="about-cinematic-section about-section-1">
          <div className="about-section-1__intro">
            <h2 className="about-section-1__title">
              Innovation Authority,<br />
              Not an Agency
            </h2>
            <p className="about-section-1__lead">
              We discover, curate, and amplify breakthrough technologies from CES and beyond.
            </p>
          </div>

          <div className="about-section-1__content">
            <div className="about-section-1__block">
              <h3 className="about-section-1__block-title">Purpose-Driven Discovery</h3>
              <p className="about-section-1__block-text">
                Yo! Tech This Out exists to bridge the gap between groundbreaking innovation and the audiences who need to discover it.
              </p>
            </div>

            <div className="about-section-1__block">
              <h3 className="about-section-1__block-title">CES Authority</h3>
              <p className="about-section-1__block-text">
                We're not just covering CES—we're embedded in it. As Innovation Awards® judges, we evaluate and identify the technologies that will shape tomorrow.
              </p>
            </div>

            <div className="about-section-1__block">
              <h3 className="about-section-1__block-title">Startups & Global Innovation</h3>
              <p className="about-section-1__block-text">
                From Silicon Valley to Seoul, we connect global founders with the U.S. market. We spotlight startups that are redefining what's possible.
              </p>
            </div>

            <div className="about-section-1__block">
              <h3 className="about-section-1__block-title">Global Reach</h3>
              <p className="about-section-1__block-text">
                Our platform reaches millions through iHeartMedia, Spotify, and Apple Podcasts—amplifying innovation stories that matter.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* SECTION 2: Meet the Founder – Mike Johns */}
      <PageSection variant="wide" noPadding>
        <div className="about-cinematic-section about-section-2">
          <div className="about-section-2__header">
            <h2 className="about-section-2__title">
              Meet the Founder
            </h2>
            <p className="about-section-2__subtitle">
              Mike Johns
            </p>
          </div>

          <div className="about-section-2__content">
            {/* Founder Portrait Placeholder */}
            <div className="about-section-2__portrait">
              <div className="about-portrait-placeholder">
                <span className="about-portrait-placeholder__text">Portrait</span>
              </div>
            </div>

            {/* Philosophy Statement */}
            <div className="about-section-2__philosophy">
              <PageCard variant="highlight" className="about-philosophy-card">
                <p className="about-philosophy-quote">
                  "Media is equity"
                </p>
                <p className="about-philosophy-text">
                  Every story we tell, every product we feature, every founder we amplify—it's all about creating value through visibility.
                </p>
              </PageCard>
            </div>

            {/* Timeline-Style Credibility Blocks */}
            <div className="about-section-2__credibility">
              <div className="about-credibility-timeline">
                <div className="about-credibility-item">
                  <div className="about-credibility-item__marker"></div>
                  <div className="about-credibility-item__content">
                    <h3 className="about-credibility-item__title">CES Innovation Awards® Judge</h3>
                    <p className="about-credibility-item__text">
                      Evaluating breakthrough technologies and identifying products that will shape tomorrow's landscape.
                    </p>
                  </div>
                </div>

                <div className="about-credibility-item">
                  <div className="about-credibility-item__marker"></div>
                  <div className="about-credibility-item__content">
                    <h3 className="about-credibility-item__title">JETRO Partnership</h3>
                    <p className="about-credibility-item__text">
                      Facilitating Japanese innovation access to U.S. markets through strategic media partnerships.
                    </p>
                  </div>
                </div>

                <div className="about-credibility-item">
                  <div className="about-credibility-item__marker"></div>
                  <div className="about-credibility-item__content">
                    <h3 className="about-credibility-item__title">Korea Electronics Show</h3>
                    <p className="about-credibility-item__text">
                      Connecting Korean tech innovators with global audiences and market opportunities.
                    </p>
                  </div>
                </div>

                <div className="about-credibility-item">
                  <div className="about-credibility-item__marker"></div>
                  <div className="about-credibility-item__content">
                    <h3 className="about-credibility-item__title">Global Innovation Forum</h3>
                    <p className="about-credibility-item__text">
                      Speaking and moderating at international forums that shape the future of technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bridge Statement */}
            <div className="about-section-2__bridge">
              <PageCard className="about-bridge-card">
                <h3 className="about-bridge-title">The Bridge</h3>
                <p className="about-bridge-text">
                  Mike Johns serves as the critical bridge between global founders and U.S. market access. Through media, partnerships, and strategic positioning, he transforms international innovation into American opportunity.
                </p>
              </PageCard>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
