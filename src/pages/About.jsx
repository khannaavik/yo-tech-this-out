import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/about.css';

/**
 * About Page Component
 * Origin story, authority, and vision of Yo! Tech This Out
 */
export function About() {
  return (
    <PageLayout>
      <SEO
        title="About Us"
        description="Discover the story behind Yo! Tech This Out. Led by CES Innovation Awards® Judge Mike Johns, we curate breakthrough technologies from CES and beyond."
        url="/about"
        jsonLd={getOrganizationJsonLd()}
      />
      {/* Hero Section */}
      <PageHero
        title="About Us"
        subtitle="The Story Behind Yo! Tech This Out"
        description="Discovering the future of technology, one innovation at a time."
      />

      {/* Origin Story */}
      <PageSection title="Our Origin Story">
        <div className="about-content">
          <p className="about-lead">
            Yo! Tech This Out was born from a simple observation: the gap between groundbreaking 
            innovation at CES and the audiences who need to discover it.
          </p>
          <p>
            In April 2025, we set out to solve this fundamental problem. The world's most innovative 
            technologies were being unveiled at CES, but finding the truly transformative products 
            among thousands of exhibitors was overwhelming for consumers, creators, and decision-makers alike.
          </p>
          <p>
            We believed that discovery shouldn't be fragmented. That's why we created a platform that 
            curates, contextualizes, and connects—transforming CES from a trade show into a discovery 
            experience that drives real outcomes.
          </p>
        </div>
      </PageSection>

      {/* Mike Johns Feature */}
      <PageSection title="Leadership & Authority">
        <div className="about-leadership">
          <PageCard variant="highlight" className="about-leadership-card">
            <div className="about-leadership-content">
              <h3>Mike Johns</h3>
              <p className="about-leadership-role">
                CES Innovation Awards® Judge & TEDx Futurist
              </p>
              <p>
                At the helm of Yo! Tech This Out is Mike Johns, a recognized authority in technology 
                innovation and future trends. As a judge for the prestigious CES Innovation Awards®, 
                Mike brings deep expertise in evaluating breakthrough technologies and identifying 
                products that will shape tomorrow's landscape.
              </p>
              <p>
                His role as a TEDx futurist further establishes his credibility in understanding 
                how emerging technologies will transform industries, behaviors, and human experiences. 
                This unique combination of CES authority and forward-thinking vision drives our 
                editorial rigor and curation standards.
              </p>
            </div>
          </PageCard>
        </div>
      </PageSection>

      {/* Signature Phrase - Pull Quote */}
      <PageSection variant="centered" noPadding>
        <div className="about-signature-quote">
          <blockquote className="about-quote">
            "What's hot, what's not, what's new, and what's next."
          </blockquote>
          <p className="about-quote-attribution">— Yo! Tech This Out</p>
        </div>
      </PageSection>

      {/* Podcast Presence */}
      <PageSection title="Our Podcast Network">
        <div className="about-podcast">
          <p className="about-lead">
            Our podcast brings the stories behind innovation directly to your ears, available on 
            the world's leading audio platforms.
          </p>
          <div className="about-podcast-grid">
            <PageCard>
              <div className="about-podcast-item">
                <div className="about-podcast-icon">🎙️</div>
                <h3>iHeartMedia</h3>
                <p>
                  Reaching millions of listeners through one of the world's largest audio platforms.
                </p>
              </div>
            </PageCard>
            <PageCard>
              <div className="about-podcast-item">
                <div className="about-podcast-icon">🎵</div>
                <h3>Spotify</h3>
                <p>
                  Connecting with music and podcast enthusiasts globally.
                </p>
              </div>
            </PageCard>
            <PageCard>
              <div className="about-podcast-item">
                <div className="about-podcast-icon">📱</div>
                <h3>Apple Podcasts</h3>
                <p>
                  Available to millions of Apple users worldwide.
                </p>
              </div>
            </PageCard>
          </div>
        </div>
      </PageSection>

      {/* CES Innovation Awards Focus */}
      <PageSection title="Focus on Excellence">
        <div className="about-focus">
          <PageCard variant="highlight">
            <h3>CES Innovation Awards® & Best of Innovation</h3>
            <p>
              Our editorial focus centers on products recognized by the CES Innovation Awards® program, 
              with special emphasis on Best of Innovation winners. These awards represent the pinnacle 
              of technological achievement, recognizing products that demonstrate outstanding design and 
              engineering in consumer technology.
            </p>
            <p>
              By highlighting these award-winning innovations, we ensure our audience discovers 
              technologies that have been rigorously evaluated by industry experts—including our 
              own Mike Johns as a judge. This commitment to quality over quantity sets us apart 
              in the crowded tech media landscape.
            </p>
          </PageCard>
        </div>
      </PageSection>

      {/* Timeline */}
      <PageSection title="Our Journey" variant="centered">
        <div className="about-timeline">
          <div className="about-timeline-item">
            <div className="about-timeline-date">April 2025</div>
            <div className="about-timeline-content">
              <h3>Launch</h3>
              <p>
                Yo! Tech This Out launches with a mission to curate and contextualize CES innovation 
                for global audiences.
              </p>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-date">May 2025</div>
            <div className="about-timeline-content">
              <h3>Podcast Launch</h3>
              <p>
                Our podcast debuts on iHeartMedia, Spotify, and Apple Podcasts, bringing innovation 
                stories to audio audiences worldwide.
              </p>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-date">June 2025</div>
            <div className="about-timeline-content">
              <h3>CES Innovation Awards® Partnership</h3>
              <p>
                Mike Johns joins the CES Innovation Awards® judging panel, establishing our 
                authority in technology evaluation.
              </p>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-date">January 2026</div>
            <div className="about-timeline-content">
              <h3>CES 2026 Coverage</h3>
              <p>
                Comprehensive coverage of CES 2026, with special focus on Innovation Awards® winners 
                and Best of Innovation honorees.
              </p>
            </div>
          </div>
          <div className="about-timeline-item">
            <div className="about-timeline-date">March 2026</div>
            <div className="about-timeline-content">
              <h3>Looking Forward</h3>
              <p>
                Continuing to discover and share the technologies that will shape how humans live, 
                move, and think.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Vision Statement */}
      <PageSection title="Our Vision" variant="centered">
        <PageCard variant="highlight" className="about-vision-card">
          <p className="about-vision-text">
            We envision a world where groundbreaking technology is not just discovered, but understood, 
            contextualized, and connected to the people who will shape its impact. Through curated 
            experiences, authentic storytelling, and trusted recommendations, we're building the 
            definitive platform for CES innovation discovery.
          </p>
        </PageCard>
      </PageSection>
    </PageLayout>
  );
}

