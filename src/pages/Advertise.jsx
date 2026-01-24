import { PageLayout } from '../components/PageLayout';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/advertise.css';

/**
 * Advertise Page Component
 * For Startups page
 */
export function Advertise() {
  return (
    <PageLayout>
      <SEO
        title="For Startups"
        description="For startups shaping the future. Curated visibility, global credibility, and editorial storytelling."
        url="/advertise"
        jsonLd={getOrganizationJsonLd()}
      />

      <section className="startups">
        {/* Hero */}
        <header className="startups__hero">
          <p className="startups__eyebrow">For Startups</p>
          <h1 className="startups__title">For Startups Shaping the Future</h1>
          <p className="startups__subtitle">
            Yo! is a curated innovation authority for CES winners and ambitious builders — a
            place where serious products are discovered and trusted.
          </p>
          <div className="startups__cta-row">
            <a className="startups__cta startups__cta--primary" href="mailto:hello@yotechthisout.com?subject=Apply%20to%20be%20Featured">
              Apply to Be Featured
            </a>
            <a className="startups__cta startups__cta--ghost" href="mailto:hello@yotechthisout.com?subject=Book%20a%20Call">
              Book a Call
            </a>
          </div>
        </header>

        {/* Why Yo */}
        <section className="startups__value">
          <h2 className="startups__section-title">Why Startups Choose Yo!</h2>
          <div className="startups__value-grid">
            <article className="startups__value-card">
              <h3>Cross-border visibility</h3>
              <p>Get discovered beyond your home market by press, investors, and early adopters.</p>
            </article>
            <article className="startups__value-card">
              <h3>Cultural translation</h3>
              <p>Editorial storytelling with visual + emoji UX that travels across languages.</p>
            </article>
            <article className="startups__value-card">
              <h3>CES-aligned authority</h3>
              <p>Signal credibility with an innovation feed inspired by CES winners.</p>
            </article>
            <article className="startups__value-card">
              <h3>Investor discovery</h3>
              <p>Visibility that reaches global investors looking beyond familiar markets.</p>
            </article>
          </div>
        </section>

        {/* Ways to be featured */}
        <section className="startups__packages" aria-label="Ways to be featured">
          <h2 className="startups__section-title">Ways to Be Featured</h2>
          <div className="startups__packages-grid">
            <article className="startups__package">
              <div className="startups__package-badge">Innovation Grid</div>
              <h3 className="startups__package-title">Product-first discovery</h3>
              <p className="startups__package-price">Cinematic tiles and editorial storytelling.</p>
              <ul className="startups__package-features">
                <li>Premium product profile</li>
                <li>Global discovery feed</li>
                <li>Curated category placement</li>
              </ul>
            </article>

            <article className="startups__package startups__package--highlight">
              <div className="startups__package-badge">Awards</div>
              <h3 className="startups__package-title">Authority placement</h3>
              <p className="startups__package-price">Aligned with CES credibility.</p>
              <ul className="startups__package-features">
                <li>Innovation authority hub</li>
                <li>Editorial context and insight</li>
                <li>Best-of moments</li>
              </ul>
            </article>

            <article className="startups__package">
              <div className="startups__package-badge">Media</div>
              <h3 className="startups__package-title">Story-led visibility</h3>
              <p className="startups__package-price">Techfluencers, press, and live moments.</p>
              <ul className="startups__package-features">
                <li>Techfluencer reviews</li>
                <li>Press-ready narratives</li>
                <li>Live features</li>
              </ul>
            </article>

            <article className="startups__package">
              <div className="startups__package-badge">Investors</div>
              <h3 className="startups__package-title">Investor-ready spotlight</h3>
              <p className="startups__package-price">Signal momentum without noise.</p>
              <ul className="startups__package-features">
                <li>Investor-ready badge</li>
                <li>Funding emphasis</li>
                <li>Global investor discovery</li>
              </ul>
            </article>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="startups__footer-cta">
          <div className="startups__footer-card">
            <h2>Apply to be Featured</h2>
            <p>We review carefully and respond quickly.</p>
            <div className="startups__cta-row">
              <a className="startups__cta startups__cta--primary" href="mailto:hello@yotechthisout.com?subject=Apply%20to%20be%20Featured">
                Apply to Be Featured
              </a>
              <a className="startups__cta startups__cta--ghost" href="mailto:hello@yotechthisout.com?subject=Book%20a%20Call">
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </section>
    </PageLayout>
  );
}

