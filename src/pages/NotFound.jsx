import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import '../styles/pages/not-found.css';

/**
 * NotFound Page Component
 * 404 error page with friendly messaging and navigation
 */
export function NotFound() {
  return (
    <PageLayout>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        url="/404"
      />
      {/* Hero Section */}
      <PageHero
        title="404"
        subtitle="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
      />

      {/* Content Section */}
      <PageSection variant="centered" noPadding>
        <div className="not-found-content">
          <PageCard variant="highlight" className="not-found-card">
            <div className="not-found-icon">🔍</div>
            <h2 className="not-found-heading">Oops! We couldn't find that page.</h2>
            <p className="not-found-description">
              The page you're looking for might have been moved, deleted, or doesn't exist. 
              Let's get you back on track.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="not-found-button">
                Back to Home
              </Link>
            </div>
            <div className="not-found-suggestions">
              <p className="not-found-suggestions-title">You might be looking for:</p>
              <ul className="not-found-links">
                <li>
                  <Link to="/explore">Explore Products</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}
