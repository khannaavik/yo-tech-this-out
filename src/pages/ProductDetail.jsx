import { Link, useParams } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { SEO } from '../components/SEO';
import { getProductBySlug } from '../data/products';
import { getOrganizationJsonLd, getProductJsonLd } from '../utils/seo';
import { NotFound } from './NotFound';
import '../v2/styles/product-detail.css';

const mockProduct = {
  name: 'Nebula Pulse',
  company: 'Aurora Labs',
  image: '/products/placeholder.png',
  heroVideo: '/assets/hero/home-hero.mp4',
  category: 'XR / Wearables',
  region: 'Global',
  status: 'Kickstarter',
  badges: ['CES Winner', 'Global', 'XR / Wearables', 'Kickstarter'],
  website: 'https://example.com',
  kickstarterUrl: 'https://example.com',
  investorReady: true,
  investorUrl: 'https://example.com',
  storyWhatItIs:
    'A cinematic mixed-reality headset designed for creators who want studio-grade immersion without the bulk.',
  storyWhyItMatters:
    'It brings pro-level spatial computing to everyday storytellers, expanding who gets to build in 3D.',
  storyInnovation:
    'A new optical stack that delivers true-to-life color without the heat or weight of traditional rigs.',
  reactions: [
    { emoji: '🔥', label: 'Instant hype' },
    { emoji: '🧠', label: 'Smart design' },
    { emoji: '😍', label: 'People love it' },
    { emoji: '🌍', label: 'Global buzz' },
  ],
  quotes: [
    '“The most cinematic headset at CES.”',
    '“Feels like the future of spatial storytelling.”',
  ],
  views: 18400,
  favorites: 920,
  fundingStatus: '34% funded',
  fundingDaysRemaining: 18,
  fundingUrl: 'https://example.com',
};

/**
 * Product Detail Page Component
 * Route: /products/:productSlug
 */
export function ProductDetail() {
  const { productSlug } = useParams();
  const liveProduct = getProductBySlug(productSlug);
  const product = { ...mockProduct, ...(liveProduct || {}) };

  if (!product?.name) {
    return <NotFound />;
  }

  const productName = product.name || product.productName;
  const companyName = product.company || product.companyName;
  const productImage = product.image || '/products/placeholder.png';
  const heroVideo = product.heroVideo || product.video || null;
  const heroPoster = product.heroPoster || productImage;
  const regionLabel = product.regionLabel || product.region || 'Global';
  const categoryLabel = product.categoryTag || product.category || 'Innovation';
  const statusLabel = product.status || product.fundingStatus || 'In Market';

  const supportUrl =
    product.kickstarterUrl || product.preorderUrl || product.purchaseUrl || product.buyUrl || null;
  const supportLabel = product.kickstarterUrl
    ? 'Support on Kickstarter'
    : product.preorderUrl
    ? 'Preorder'
    : 'Buy Now';
  const investorUrl = product.investorUrl || null;
  const showInvestor = product.investorReady || Boolean(investorUrl);
  const badges =
    product.badges?.length > 0
      ? product.badges
      : ['CES Winner', regionLabel, categoryLabel, statusLabel];

  const story = {
    whatItIs:
      product.storyWhatItIs ||
      product.description ||
      `${productName} by ${companyName}.`,
    whyItMatters: product.storyWhyItMatters || 'Why it matters to the future of this category.',
    whatMakesItInnovative: product.storyInnovation || 'What makes this product a category breaker.',
  };

  const reactions = product.reactions ||
    product.techfluencerReactions || [
      { emoji: '🔥', label: 'Hype-worthy' },
      { emoji: '🧠', label: 'Smart design' },
      { emoji: '😍', label: 'Fan favorite' },
      { emoji: '🌍', label: 'Global buzz' },
    ];

  const quotes = product.quotes || [
    '“The most talked-about product in the hall.”',
    '“A rare blend of utility and cinematic polish.”',
  ];

  const fundingStatus = product.fundingStatus || product.fundingRound || null;
  const fundingAmount = product.fundingAmount || null;
  const fundingProgress = product.fundingProgress || null;
  const fundingDaysRemaining = product.fundingDaysRemaining || null;
  const fundingUrl = product.fundingUrl || product.kickstarterUrl || null;
  const views = product.views || 0;
  const favorites = product.favorites || 0;

  return (
    <PageLayout>
      <SEO
        title={`${productName} by ${companyName} | Product Detail`}
        description={
          product.description || `Discover ${productName} by ${companyName}. ${categoryLabel}.`
        }
        url={`/products/${productSlug}`}
        jsonLd={[
          getOrganizationJsonLd(),
          getProductJsonLd(product),
        ]}
      />

      <article className="v2-product-detail">
        <header className="v2-product-detail__hero">
          <div className="v2-product-detail__hero-media">
            {heroVideo ? (
              <video
                className="v2-product-detail__hero-video"
                src={heroVideo}
                poster={heroPoster}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={heroPoster}
                alt={productName}
                className="v2-product-detail__hero-image"
                loading="eager"
              />
            )}
          </div>

          <div className="v2-product-detail__hero-content">
            <div className="v2-product-detail__badges">
              {badges.map((badge) => (
                <span key={badge} className="v2-product-detail__badge">
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="v2-product-detail__title">{productName}</h1>
            <p className="v2-product-detail__subtitle">by {companyName}</p>

            <div className="v2-product-detail__cta-row">
              {product.website && (
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-product-detail__cta v2-product-detail__cta--primary"
                >
                  Visit Website
                </a>
              )}
              {supportUrl && (
                <a
                  href={supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-product-detail__cta v2-product-detail__cta--ghost"
                >
                  {supportLabel}
                </a>
              )}
              {showInvestor && (
                <a
                  href={investorUrl || '#'}
                  target={investorUrl ? '_blank' : undefined}
                  rel={investorUrl ? 'noopener noreferrer' : undefined}
                  className="v2-product-detail__cta v2-product-detail__cta--outline"
                >
                  Investor Info
                </a>
              )}
            </div>
          </div>
        </header>

        <section className="v2-product-detail__story">
          <div className="v2-product-detail__story-grid">
            <article>
              <h2>What it is</h2>
              <p>{story.whatItIs}</p>
            </article>
            <article>
              <h2>Why it matters</h2>
              <p>{story.whyItMatters}</p>
            </article>
            <article>
              <h2>What makes it innovative</h2>
              <p>{story.whatMakesItInnovative}</p>
            </article>
          </div>
        </section>

        <section className="v2-product-detail__social">
          <div className="v2-product-detail__section-head">
            <h2>Social proof</h2>
            <div className="v2-product-detail__stats">
              <span>{views.toLocaleString()} views</span>
              <span>{favorites.toLocaleString()} favorites</span>
            </div>
          </div>
          <div className="v2-product-detail__reactions">
            {reactions.map((reaction, index) => (
              <span key={`${reaction.label}-${index}`} className="v2-product-detail__reaction">
                <span aria-hidden="true">{reaction.emoji}</span>
                <span>{reaction.label}</span>
              </span>
            ))}
          </div>
          <div className="v2-product-detail__quotes">
            {quotes.map((quote, index) => (
              <blockquote key={`${quote}-${index}`}>{quote}</blockquote>
            ))}
          </div>
        </section>

        {(fundingStatus || fundingAmount || fundingProgress) && (
          <section className="v2-product-detail__funding">
            <h2>Funding &amp; investor info</h2>
            <div className="v2-product-detail__funding-grid">
              {fundingStatus && (
                <p>
                  Funding status <span>{fundingStatus}</span>
                </p>
              )}
              {fundingAmount && (
                <p>
                  Raised <span>{fundingAmount}</span>
                </p>
              )}
              {fundingProgress && (
                <p>
                  Progress <span>{fundingProgress}</span>
                </p>
              )}
              {fundingDaysRemaining && (
                <p>
                  Days remaining <span>{fundingDaysRemaining}</span>
                </p>
              )}
            </div>
            {fundingUrl && (
              <a
                href={fundingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-product-detail__funding-link"
              >
                Visit official campaign
              </a>
            )}
            <p className="v2-product-detail__disclaimer">
              Yo! does not process investments.
            </p>
          </section>
        )}

        <section className="v2-product-detail__upsell">
          <div>
            <p className="v2-product-detail__upsell-eyebrow">For startups + founders</p>
            <h2>Showcase Your Innovation on Yo!</h2>
            <p>
              Apply to join the cinematic feed and reach global curators, investors, and early
              adopters.
            </p>
          </div>
          <div className="v2-product-detail__upsell-actions">
            <Link to="/advertise" className="v2-product-detail__cta v2-product-detail__cta--primary">
              Apply to Be Featured
            </Link>
            <Link to="/contact" className="v2-product-detail__cta v2-product-detail__cta--ghost">
              Book a Call
            </Link>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
