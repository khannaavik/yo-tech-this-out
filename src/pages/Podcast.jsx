import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/podcast.css';

/**
 * Podcast Page Component
 * Canonical podcast hub with Spotify embed, intro copy, and episode listings
 * Note: PodcastSection component remains globally above footer on all pages
 */

const futureEpisodes = [
  {
    id: 1,
    title: 'Episode Coming Soon',
    description: 'New episodes featuring CES leaders, founders, and futurists are on the way.',
    date: 'Coming Soon',
  },
  {
    id: 2,
    title: 'Episode Coming Soon',
    description: 'Stay tuned for deep conversations about innovation, market strategy, and the future of technology.',
    date: 'Coming Soon',
  },
  {
    id: 3,
    title: 'Episode Coming Soon',
    description: 'Exclusive interviews and insights from the intersection of technology and culture.',
    date: 'Coming Soon',
  },
];

export function Podcast() {
  return (
    <PageLayout>
      <SEO
        title="Podcast"
        description="Yo! Tech This Out Podcast: Conversations at the intersection of innovation, culture, and the future. Featuring CES leaders, founders, and futurists. Available on Spotify, Apple Podcasts, and iHeartMedia."
        url="/podcast"
        jsonLd={getOrganizationJsonLd()}
      />

      {/* Hero Section */}
      <PageHero
        title="Podcast"
        subtitle="Yo! Tech This Out"
        description="Conversations at the intersection of innovation, culture, and the future"
      />

      {/* Intro Section */}
      <PageSection variant="centered" noPadding>
        <div className="podcast-intro">
          <PageCard variant="highlight" className="podcast-intro-card">
            <h2 className="podcast-intro__title">About the Podcast</h2>
            <div className="podcast-intro__content">
              <p className="podcast-intro__text">
                The Yo! Tech This Out Podcast brings you conversations with the innovators, 
                founders, and futurists shaping tomorrow's technology landscape. From CES 
                Innovation Awards winners to global startups breaking into the U.S. market, 
                we explore the stories behind breakthrough technologies and the people 
                building them.
              </p>
              <p className="podcast-intro__text">
                Hosted by Mike Johns, CES Innovation Awards® Judge and TEDx Futurist, each 
                episode dives deep into what's hot, what's not, what's new, and what's next 
                in consumer technology.
              </p>
            </div>
          </PageCard>
        </div>
      </PageSection>

      {/* Spotify Embed Section */}
      <PageSection variant="wide" noPadding>
        <div className="podcast-embed-section">
          <div className="podcast-embed-section__header">
            <h2 className="podcast-embed-section__title">Listen Now</h2>
            <p className="podcast-embed-section__subtitle">
              Stream the latest episodes directly from Spotify
            </p>
          </div>
          <div className="podcast-embed-section__wrapper">
            <iframe
              className="podcast-embed-section__embed"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/4r8saKhqRmnaT3tL2P3Z4k?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Yo! Tech This Out Podcast on Spotify"
            />
          </div>
        </div>
      </PageSection>

      {/* Platform Links */}
      <PageSection variant="centered" noPadding>
        <div className="podcast-platforms">
          <h3 className="podcast-platforms__title">Available On</h3>
          <div className="podcast-platforms__grid">
            <a
              href="https://open.spotify.com/show/4r8saKhqRmnaT3tL2P3Z4k"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-platform-link"
            >
              <div className="podcast-platform-link__icon">🎵</div>
              <div className="podcast-platform-link__name">Spotify</div>
            </a>
            <a
              href="https://podcasts.apple.com/podcast/yo-tech-this-out"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-platform-link"
            >
              <div className="podcast-platform-link__icon">📱</div>
              <div className="podcast-platform-link__name">Apple Podcasts</div>
            </a>
            <a
              href="https://www.iheart.com/podcast/yo-tech-this-out"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-platform-link"
            >
              <div className="podcast-platform-link__icon">📻</div>
              <div className="podcast-platform-link__name">iHeartMedia</div>
            </a>
          </div>
        </div>
      </PageSection>

      {/* Future Episodes Section */}
      <PageSection title="Episodes" variant="wide" noPadding>
        <div className="podcast-episodes">
          <p className="podcast-episodes__intro">
            New episodes featuring CES leaders, founders, and futurists are coming soon. 
            Subscribe to stay updated on the latest conversations about innovation and technology.
          </p>
          <div className="podcast-episodes__grid">
            {futureEpisodes.map((episode) => (
              <PageCard key={episode.id} className="podcast-episode-card">
                <div className="podcast-episode-card__category">Coming Soon</div>
                <h3 className="podcast-episode-card__title">{episode.title}</h3>
                <p className="podcast-episode-card__description">{episode.description}</p>
                <div className="podcast-episode-card__date">{episode.date}</div>
              </PageCard>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
