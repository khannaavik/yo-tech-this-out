import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/legal.css';

/**
 * Privacy Policy Page Component
 * Standard privacy policy covering data collection, contact forms, and analytics
 */
export function Privacy() {
  const lastUpdated = 'January 2026';

  return (
    <PageLayout>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Yo! Tech This Out. Learn how we collect, use, and protect your personal information."
        url="/privacy"
        jsonLd={getOrganizationJsonLd()}
      />
      
      {/* Hero Section */}
      <PageHero
        title="Privacy Policy"
        subtitle="How We Handle Your Information"
        description={`Last updated: ${lastUpdated}`}
      />

      {/* Introduction */}
      <PageSection title="Introduction">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              Yo! Tech This Out ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you visit our website.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Information We Collect */}
      <PageSection title="Information We Collect">
        <div className="legal-content">
          <PageCard variant="subtle">
            <h3>Contact Form Information</h3>
            <p>
              When you use our contact form, we collect the information you provide, including:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
            <p>
              This information is processed through Formspree, a third-party service that handles 
              form submissions securely.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </PageCard>
        </div>
      </PageSection>

      {/* How We Use Information */}
      <PageSection title="How We Use Your Information">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website usage and trends</li>
              <li>Ensure website security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </PageCard>
        </div>
      </PageSection>

      {/* Analytics */}
      <PageSection title="Analytics and Tracking">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              We may use analytics tools to understand how visitors interact with our website. 
              These tools may collect information about your browsing behavior, such as pages visited, 
              time spent on pages, and click patterns. This information helps us improve our content 
              and user experience.
            </p>
            <p>
              Analytics data is typically aggregated and anonymized, and we do not use it to 
              personally identify individual visitors.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Data Sharing */}
      <PageSection title="Data Sharing">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may 
              share your information only in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website (such as Formspree for contact forms)</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </PageCard>
        </div>
      </PageSection>

      {/* Data Security */}
      <PageSection title="Data Security">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              We implement reasonable security measures to protect your information. However, no 
              method of transmission over the internet or electronic storage is 100% secure. While 
              we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Your Rights */}
      <PageSection title="Your Rights">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of certain data collection practices</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the contact form on our website.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Cookies */}
      <PageSection title="Cookies">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              Our website may use cookies and similar technologies to enhance your experience, 
              analyze usage, and assist with our marketing efforts. You can control cookies through 
              your browser settings.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Changes to Policy */}
      <PageSection title="Changes to This Privacy Policy">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Contact */}
      <PageSection title="Contact Us" variant="centered">
        <PageCard variant="subtle">
          <p>
            If you have any questions about this Privacy Policy, please contact us through our 
            contact form or email us at{' '}
            <a href="mailto:privacy@yotechthisout.com" className="legal-link">
              privacy@yotechthisout.com
            </a>
          </p>
        </PageCard>
      </PageSection>
    </PageLayout>
  );
}
