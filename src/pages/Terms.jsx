import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/legal.css';

/**
 * Terms of Service Page Component
 * Standard terms of service covering website use, content, and user responsibilities
 */
export function Terms() {
  const lastUpdated = 'January 2026';

  return (
    <PageLayout>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Yo! Tech This Out. Read our terms and conditions for using our website."
        url="/terms"
        jsonLd={getOrganizationJsonLd()}
      />
      
      {/* Hero Section */}
      <PageHero
        title="Terms of Service"
        subtitle="Rules and Guidelines for Using Our Website"
        description={`Last updated: ${lastUpdated}`}
      />

      {/* Introduction */}
      <PageSection title="Agreement to Terms">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              By accessing or using Yo! Tech This Out ("the Website"), you agree to be bound by 
              these Terms of Service ("Terms"). If you do not agree to these Terms, please do not 
              use our Website.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Use of Website */}
      <PageSection title="Use of Website">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>You may use our Website for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Interfere with or disrupt the Website or servers connected to the Website</li>
              <li>Use automated systems to access the Website without permission</li>
              <li>Transmit any viruses, malware, or harmful code</li>
            </ul>
          </PageCard>
        </div>
      </PageSection>

      {/* Intellectual Property */}
      <PageSection title="Intellectual Property">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              All content on this Website, including text, graphics, logos, images, and software, 
              is the property of Yo! Tech This Out or its content suppliers and is protected by 
              copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any 
              content on this Website without our express written permission.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* User Content */}
      <PageSection title="User Content">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              If you submit content to us through our contact form or other means, you grant us a 
              non-exclusive, royalty-free, perpetual license to use, modify, and display such content 
              for the purpose of operating and improving our Website and services.
            </p>
            <p>
              You represent and warrant that any content you submit does not violate any third-party 
              rights, including copyright, trademark, or privacy rights.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Third-Party Links */}
      <PageSection title="Third-Party Links">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              Our Website may contain links to third-party websites or services. We are not responsible 
              for the content, privacy policies, or practices of any third-party websites. Your use of 
              third-party websites is at your own risk.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Disclaimer */}
      <PageSection title="Disclaimer">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              The information on this Website is provided "as is" without warranties of any kind, 
              either express or implied. We do not warrant that:
            </p>
            <ul>
              <li>The Website will be available at all times or free from errors</li>
              <li>The information on the Website is accurate, complete, or current</li>
              <li>The Website will meet your requirements or expectations</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of the Website at 
              any time without notice.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Limitation of Liability */}
      <PageSection title="Limitation of Liability">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              To the fullest extent permitted by law, Yo! Tech This Out shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, or any loss of 
              profits or revenues, whether incurred directly or indirectly, or any loss of data, use, 
              goodwill, or other intangible losses resulting from your use of the Website.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Indemnification */}
      <PageSection title="Indemnification">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              You agree to indemnify and hold harmless Yo! Tech This Out, its officers, directors, 
              employees, and agents from any claims, damages, losses, liabilities, and expenses 
              (including legal fees) arising out of or relating to your use of the Website or 
              violation of these Terms.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Changes to Terms */}
      <PageSection title="Changes to Terms">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any 
              material changes by posting the updated Terms on this page and updating the "Last 
              updated" date. Your continued use of the Website after such changes constitutes 
              acceptance of the modified Terms.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Governing Law */}
      <PageSection title="Governing Law">
        <div className="legal-content">
          <PageCard variant="subtle">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the 
              jurisdiction in which Yo! Tech This Out operates, without regard to its conflict of 
              law provisions.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Contact */}
      <PageSection title="Contact Us" variant="centered">
        <PageCard variant="subtle">
          <p>
            If you have any questions about these Terms of Service, please contact us through our 
            contact form or email us at{' '}
            <a href="mailto:legal@yotechthisout.com" className="legal-link">
              legal@yotechthisout.com
            </a>
          </p>
        </PageCard>
      </PageSection>
    </PageLayout>
  );
}
