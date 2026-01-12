import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/press.css';

/**
 * Press Page Component
 * Clean, authoritative page for journalists and media
 */
export function Press() {
  return (
    <PageLayout>
      <SEO
        title="Press"
        description="Media resources and recognition. Recognized globally for bringing awareness in safety and trust between humans, AI and autonomous systems."
        url="/press"
        jsonLd={getOrganizationJsonLd()}
      />
      {/* Hero Section */}
      <PageHero
        title="Press"
        subtitle="Media Resources & Recognition"
        description="Information for journalists, media professionals, and industry stakeholders."
      />

      {/* Recognition Quote */}
      <PageSection variant="centered" noPadding>
        <div className="press-quote">
          <PageCard variant="subtle" className="press-quote-card">
            <blockquote className="press-quote-text">
              "Recognized globally for bringing awareness in safety and trust between humans, AI and autonomous systems."
            </blockquote>
          </PageCard>
        </div>
      </PageSection>

      {/* Recognition Section */}
      <PageSection title="Recognition">
        <div className="press-recognition">
          <p className="press-recognition-intro">
            Yo! Tech This Out has been recognized for its commitment to exploring the intersection 
            of technology, safety, and human trust. Our work in bringing awareness to the relationship 
            between humans, AI, and autonomous systems has garnered global attention and recognition.
          </p>
        </div>
      </PageSection>

      {/* Media Mentions */}
      <PageSection title="Media Mentions">
        <div className="press-mentions">
          <div className="press-mentions-grid">
            <PageCard className="press-mention-card">
              <div className="press-mention-header">
                <span className="press-mention-outlet">TechCrunch</span>
                <span className="press-mention-date">January 2026</span>
              </div>
              <h3 className="press-mention-title">CES Innovation Awards Highlight Breakthrough Technologies</h3>
              <p className="press-mention-excerpt">
                "Yo! Tech This Out provides essential curation in an overwhelming tech landscape, 
                helping consumers discover the innovations that truly matter."
              </p>
              <a href="#" className="press-mention-link" target="_blank" rel="noopener noreferrer">
                Read Article →
              </a>
            </PageCard>

            <PageCard className="press-mention-card">
              <div className="press-mention-header">
                <span className="press-mention-outlet">The Verge</span>
                <span className="press-mention-date">January 2026</span>
              </div>
              <h3 className="press-mention-title">How CES Discovery Platforms Are Shaping Tech Media</h3>
              <p className="press-mention-excerpt">
                "The platform's focus on CES Innovation Awards winners ensures quality over quantity, 
                a refreshing approach in tech media."
              </p>
              <a href="#" className="press-mention-link" target="_blank" rel="noopener noreferrer">
                Read Article →
              </a>
            </PageCard>

            <PageCard className="press-mention-card">
              <div className="press-mention-header">
                <span className="press-mention-outlet">Engadget</span>
                <span className="press-mention-date">December 2025</span>
              </div>
              <h3 className="press-mention-title">Building Trust in AI and Autonomous Systems</h3>
              <p className="press-mention-excerpt">
                "Recognized for bringing awareness to safety and trust between humans, AI, 
                and autonomous systems—a critical conversation in today's tech landscape."
              </p>
              <a href="#" className="press-mention-link" target="_blank" rel="noopener noreferrer">
                Read Article →
              </a>
            </PageCard>
          </div>
        </div>
      </PageSection>

      {/* Press Kit Download */}
      <PageSection title="Press Kit" variant="centered">
        <div className="press-kit">
          <PageCard variant="highlight" className="press-kit-card">
            <h3 className="press-kit-title">Download Press Kit</h3>
            <p className="press-kit-description">
              Everything you need for your coverage: company overview, high-resolution logos, 
              product images, key statistics, and executive bios.
            </p>
            <a 
              href="/assets/press/yo-tech-this-out-press-kit.zip" 
              download="yo-tech-this-out-press-kit.zip"
              className="press-kit-button"
            >
              Download Press Kit (ZIP)
            </a>
            <p className="press-kit-note">
              Includes: Brand guidelines, logo assets, product images, company fact sheet
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Logo Assets */}
      <PageSection title="Logo Assets">
        <div className="press-logos">
          <p className="press-logos-intro">
            Download high-resolution logo files for editorial use. All logos are provided in PNG format 
            with transparent backgrounds.
          </p>
          <div className="press-logos-grid">
            <PageCard className="press-logo-card">
              <div className="press-logo-preview">
                <img 
                  src="/branding/logo-light.png" 
                  alt="YO! TECH THIS OUT Logo (Light)"
                  className="press-logo-image"
                />
              </div>
              <h4 className="press-logo-name">Full Logo (Light)</h4>
              <p className="press-logo-specs">PNG • Transparent Background</p>
              <a 
                href="/branding/logo-light.png" 
                download="yo-tech-this-out-logo-light.png"
                className="press-logo-download"
              >
                Download
              </a>
            </PageCard>

            <PageCard className="press-logo-card">
              <div className="press-logo-preview">
                <img 
                  src="/branding/logo-dark.png" 
                  alt="YO! TECH THIS OUT Logo (Dark)"
                  className="press-logo-image"
                />
              </div>
              <h4 className="press-logo-name">Full Logo (Dark)</h4>
              <p className="press-logo-specs">PNG • Transparent Background</p>
              <a 
                href="/branding/logo-dark.png" 
                download="yo-tech-this-out-logo-dark.png"
                className="press-logo-download"
              >
                Download
              </a>
            </PageCard>

            <PageCard className="press-logo-card">
              <div className="press-logo-preview press-logo-preview--mark">
                <img 
                  src="/branding/logo-mark.png" 
                  alt="YO! TECH THIS OUT Logo Mark"
                  className="press-logo-image"
                />
              </div>
              <h4 className="press-logo-name">Logo Mark</h4>
              <p className="press-logo-specs">PNG • Transparent Background</p>
              <a 
                href="/branding/logo-mark.png" 
                download="yo-tech-this-out-logo-mark.png"
                className="press-logo-download"
              >
                Download
              </a>
            </PageCard>
          </div>
        </div>
      </PageSection>

      {/* Brand Boilerplate */}
      <PageSection title="Brand Boilerplate" variant="centered">
        <div className="press-boilerplate">
          <PageCard variant="subtle" className="press-boilerplate-card">
            <h3 className="press-boilerplate-title">Short Description</h3>
            <p className="press-boilerplate-text">
              Yo! Tech This Out is the innovation authority curating breakthrough technologies from 
              CES and beyond. We discover, contextualize, and connect the world's most innovative 
              products with audiences who will shape tomorrow.
            </p>
          </PageCard>

          <PageCard variant="subtle" className="press-boilerplate-card">
            <h3 className="press-boilerplate-title">Extended Description</h3>
            <p className="press-boilerplate-text">
              Yo! Tech This Out is a curated platform for discovering breakthrough technologies from 
              CES and beyond. Led by CES Innovation Awards® Judge Mike Johns, we focus on products 
              recognized for outstanding design and engineering excellence. Through our live experiences, 
              podcast network, and techfluencer ecosystem, we transform CES from a trade show into a 
              discovery platform that drives real business outcomes. Our mission: "What's hot, what's 
              not, what's new, and what's next."
            </p>
          </PageCard>

          <PageCard variant="subtle" className="press-boilerplate-card">
            <h3 className="press-boilerplate-title">Key Facts</h3>
            <ul className="press-boilerplate-list">
              <li>Founded: April 2025</li>
              <li>Leadership: Mike Johns, CES Innovation Awards® Judge & TEDx Futurist</li>
              <li>Focus: CES Innovation Awards® winners and Best of Innovation honorees</li>
              <li>Reach: 200M+ via iHeartMedia network and multi-platform distribution</li>
              <li>Podcast: Available on Spotify, Apple Podcasts, and iHeartMedia</li>
            </ul>
          </PageCard>
        </div>
      </PageSection>

      {/* Press Kit / Contact */}
      <PageSection title="Press Inquiries" variant="centered">
        <PageCard variant="subtle" className="press-contact-card">
          <h3>Media Contact</h3>
          <p>
            For press inquiries, interview requests, or media kit access, please contact our 
            communications team.
          </p>
          <div className="press-contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:press@yotechthisout.com" className="press-contact-link">
                press@yotechthisout.com
              </a>
            </p>
            <p>
              <strong>Subject Line:</strong> Press Inquiry
            </p>
          </div>
        </PageCard>
      </PageSection>
    </PageLayout>
  );
}

