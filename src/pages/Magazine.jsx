import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/magazine.css';

/**
 * Magazine Page Component
 * Editorial content covering trends, CES insights, founder POV, and market analysis
 */

const editorialCards = [
  {
    id: 1,
    category: 'CES Intelligence',
    headline: 'The 2026 CES Innovation Awards: What They Reveal About Tech\'s Future',
    excerpt: 'An in-depth analysis of this year\'s winners and what they signal about the direction of consumer technology, from AI integration to sustainable innovation.',
    author: 'Mike Johns',
    date: 'January 2026',
    readTime: '8 min read',
  },
  {
    id: 2,
    category: 'U.S. Market Entry',
    headline: 'Breaking Into America: A Founder\'s Guide to U.S. Market Access',
    excerpt: 'Strategic insights for global startups navigating the complexities of the American market, from distribution channels to consumer behavior patterns.',
    author: 'Editorial Team',
    date: 'December 2025',
    readTime: '12 min read',
  },
  {
    id: 3,
    category: 'Global Startups',
    headline: 'From Seoul to Silicon Valley: How Korean Tech Startups Are Winning',
    excerpt: 'Exploring the rise of Korean innovation on the global stage, featuring founders who\'ve successfully bridged East and West markets.',
    author: 'Mike Johns',
    date: 'November 2025',
    readTime: '10 min read',
  },
  {
    id: 4,
    category: 'Innovation Trends',
    headline: 'The AI Wearable Revolution: What\'s Next After Smart Rings',
    excerpt: 'Beyond the smart ring boom—examining the next wave of AI-powered wearables and how they\'re reshaping health, productivity, and human augmentation.',
    author: 'Editorial Team',
    date: 'October 2025',
    readTime: '7 min read',
  },
  {
    id: 5,
    category: 'CES Intelligence',
    headline: 'Media Is Equity: Why Founders Should Think Differently About PR',
    excerpt: 'A founder\'s perspective on how strategic media coverage creates long-term value, not just short-term visibility—and why alignment matters.',
    author: 'Mike Johns',
    date: 'September 2025',
    readTime: '6 min read',
  },
];

export function Magazine() {
  return (
    <PageLayout>
      <SEO
        title="Magazine"
        description="Editorial insights on CES trends, U.S. market entry, global startups, and innovation analysis from Yo! Tech This Out."
        url="/magazine"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageHero
        title="Magazine"
        subtitle="Editorial Intelligence"
        description="Trends, insights, and analysis from the intersection of innovation and market strategy."
      />

      {/* Editorial Cards Grid */}
      <PageSection variant="wide" noPadding>
        <div className="magazine-grid">
          {editorialCards.map((card) => (
            <PageCard 
              key={card.id} 
              className="magazine-card"
            >
              <div className="magazine-card__category">{card.category}</div>
              <h2 className="magazine-card__headline">{card.headline}</h2>
              <p className="magazine-card__excerpt">{card.excerpt}</p>
              <div className="magazine-card__meta">
                <div className="magazine-card__author">{card.author}</div>
                <div className="magazine-card__details">
                  <span className="magazine-card__date">{card.date}</span>
                  <span className="magazine-card__separator">•</span>
                  <span className="magazine-card__read-time">{card.readTime}</span>
                </div>
              </div>
              <div className="magazine-card__cta">
                <span className="magazine-card__read-more">Read Article →</span>
              </div>
            </PageCard>
          ))}
        </div>
      </PageSection>

      {/* Category Filter Section (Future Enhancement) */}
      <PageSection variant="centered" noPadding>
        <div className="magazine-categories">
          <p className="magazine-categories__intro">
            Explore by category:
          </p>
          <div className="magazine-categories__tags">
            <span className="magazine-category-tag">CES Intelligence</span>
            <span className="magazine-category-tag">U.S. Market Entry</span>
            <span className="magazine-category-tag">Global Startups</span>
            <span className="magazine-category-tag">Innovation Trends</span>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
