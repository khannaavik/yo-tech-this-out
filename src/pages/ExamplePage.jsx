import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';

/**
 * Example Page Component
 * Demonstrates the PageLayout system usage
 * This can be used as a template for About, Advertise, Techfluencers, Press, Contact, Live pages
 */
export function ExamplePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        title="Page Title"
        subtitle="Page Subtitle"
        description="This is a description of what this page is about. It provides context and sets expectations for the content below."
      />

      {/* Content Section with Cards */}
      <PageSection title="Section Title">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)'
        }}>
          <PageCard>
            <h3>Card Title</h3>
            <p>
              This is a default card with glass-style styling. It has soft gradients,
              subtle glows, and rounded corners for a premium, futuristic feel.
            </p>
          </PageCard>

          <PageCard variant="highlight">
            <h3>Highlight Card</h3>
            <p>
              This is a highlight card with more prominent styling. Use this for
              important content that needs extra visual emphasis.
            </p>
          </PageCard>

          <PageCard variant="subtle">
            <h3>Subtle Card</h3>
            <p>
              This is a subtle card with minimal styling. Use this for secondary
              content or when you want a more understated presentation.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Centered Section */}
      <PageSection title="Centered Content" variant="centered">
        <p style={{ 
          fontSize: 'var(--font-size-lg)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--color-text-secondary)',
          textAlign: 'center'
        }}>
          This section uses the centered variant for a narrower, more focused content width.
          Perfect for editorial content, testimonials, or key messages.
        </p>
      </PageSection>

      {/* Wide Section with Grid */}
      <PageSection title="Wide Content" variant="wide">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-xl)'
        }}>
          <PageCard>
            <h3>Feature 1</h3>
            <p>Description of feature one.</p>
          </PageCard>
          <PageCard>
            <h3>Feature 2</h3>
            <p>Description of feature two.</p>
          </PageCard>
          <PageCard>
            <h3>Feature 3</h3>
            <p>Description of feature three.</p>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}

