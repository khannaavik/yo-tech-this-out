import { Link } from 'react-router-dom';
import '../styles/components/hero-intro.css';

/**
 * Hero Intro Section Component
 * Text section directly below hero image with headline and subheading
 * Provides strong contrast and modern typography
 */
export function HeroIntro() {
  return (
    <section className="hero-intro" aria-label="Introduction">
      <div className="hero-intro__container">
        <h1 className="hero-intro__headline">
          The Innovation Authority
        </h1>
        <p className="hero-intro__subheading">
          Curating breakthrough technologies from CES and beyond. 
          Discover the innovations shaping tomorrow—from AI audio to wearables, 
          health tech, XR, and future living.
        </p>
        <div className="hero-intro__actions">
          <Link to="/explore" className="hero-intro__button hero-intro__button--primary">
            Explore Innovation
          </Link>
          <a 
            href="#ai-audio" 
            className="hero-intro__button hero-intro__button--secondary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('ai-audio');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                window.location.href = '/explore';
              }
            }}
          >
            Watch Demos
          </a>
        </div>
      </div>
    </section>
  );
}
