import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import '../styles/pages/press.css';

/**
 * Press Page Component
 * Clean, authoritative page for journalists and media
 */
export function Press() {
  return (
    <PageLayout>
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

      {/* Media Mentions - Future Content */}
      <PageSection title="Media Mentions">
        <div className="press-mentions">
          <p className="press-placeholder-text">
            Recent coverage and mentions will appear here.
          </p>
          {/* Space for future media mention cards */}
          <div className="press-mentions-grid">
            {/* Future mention cards will be added here */}
          </div>
        </div>
      </PageSection>

      {/* Press Logos - Future Content */}
      <PageSection title="Featured In">
        <div className="press-logos">
          <p className="press-placeholder-text">
            Media outlet logos will appear here.
          </p>
          {/* Space for future logo grid */}
          <div className="press-logos-grid">
            {/* Future logo images will be added here */}
          </div>
        </div>
      </PageSection>

      {/* Press Quotes - Future Content */}
      <PageSection title="What They're Saying">
        <div className="press-quotes">
          <p className="press-placeholder-text">
            Press quotes and testimonials will appear here.
          </p>
          {/* Space for future quote cards */}
          <div className="press-quotes-grid">
            {/* Future quote cards will be added here */}
          </div>
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

