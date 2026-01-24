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
        description="Get your innovation seen, reviewed, and funded with cinematic, editorial packages built for global visibility."
        url="/advertise"
        jsonLd={getOrganizationJsonLd()}
      />

      <section className="startups">
        {/* Hero */}
        <header className="startups__hero">
          <p className="startups__eyebrow">For Startups</p>
          <h1 className="startups__title">Get Your Innovation Seen, Reviewed, and Funded</h1>
          <p className="startups__subtitle">
            Yo! Tech This Out is the global innovation showroom for CES winners and emerging
            startups.
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

        {/* Packages */}
        <section className="startups__packages" aria-label="Packages">
          <h2 className="startups__section-title">Packages</h2>
          <div className="startups__packages-grid">
            <article className="startups__package">
              <div className="startups__package-badge">Basic</div>
              <h3 className="startups__package-title">Basic (Free)</h3>
              <p className="startups__package-price">Listed. Discoverable. Ready.</p>
              <ul className="startups__package-features">
                <li>Listed in the innovation grid</li>
                <li>Discoverable by users &amp; investors</li>
                <li>Standard product page</li>
              </ul>
              <a className="startups__cta startups__cta--ghost" href="mailto:hello@yotechthisout.com?subject=Apply%20to%20Basic">
                Apply
              </a>
            </article>

            <article className="startups__package startups__package--highlight">
              <div className="startups__package-badge">Showcase</div>
              <h3 className="startups__package-title">Showcase</h3>
              <p className="startups__package-price">Priority placement with a cinematic edge.</p>
              <ul className="startups__package-features">
                <li>Priority placement in grid</li>
                <li>Enhanced product page</li>
                <li>Featured badge</li>
                <li>Region highlight (Korea / Japan / EU / US)</li>
              </ul>
              <a className="startups__cta startups__cta--primary" href="mailto:hello@yotechthisout.com?subject=Apply%20to%20Showcase">
                Apply
              </a>
            </article>

            <article className="startups__package">
              <div className="startups__package-badge">Premium</div>
              <h3 className="startups__package-title">Promotion + Investor Spotlight</h3>
              <p className="startups__package-price">Full-funnel visibility with investor focus.</p>
              <ul className="startups__package-features">
                <li>Podcast feature</li>
                <li>Newsletter spotlight</li>
                <li>Techfluencer review</li>
                <li>Investor-ready badge</li>
                <li>Kickstarter / funding emphasis</li>
              </ul>
              <a className="startups__cta startups__cta--ghost" href="mailto:hello@yotechthisout.com?subject=Book%20a%20Call%20-%20Premium">
                Book a Call
              </a>
            </article>
          </div>
        </section>

        {/* Why Yo */}
        <section className="startups__value">
          <h2 className="startups__section-title">Why Global Startups Choose Yo!</h2>
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

        {/* CTA Footer */}
        <section className="startups__footer-cta">
          <div className="startups__footer-card">
            <h2>Showcase Your Innovation on Yo!</h2>
            <p>Apply in minutes. We will reply fast.</p>
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

