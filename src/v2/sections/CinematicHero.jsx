import PropTypes from 'prop-types';
import '../styles/cinematic-hero.css';

export function CinematicHero({ backgroundImage, backgroundVideo }) {
  return (
    <section className="cinematic-hero" aria-label="Cinematic hero">
      <div className="cinematic-hero__media" aria-hidden="true">
        {backgroundVideo ? (
          <video
            className="cinematic-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={backgroundImage}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            className="cinematic-hero__image"
            src={backgroundImage}
            alt=""
            loading="eager"
          />
        )}
      </div>

      <div className="cinematic-hero__overlay" />

      <div className="cinematic-hero__content">
        <div className="cinematic-hero__text">
          <h1 className="cinematic-hero__headline">See what’s next.</h1>
          <p className="cinematic-hero__subheadline">
            Yo! Tech This Out is the innovation authority for CES winners and global startups.
          </p>
        </div>
        <div className="cinematic-hero__actions">
          <button type="button" className="cinematic-hero__cta cinematic-hero__cta--primary">
            Discover Innovation
          </button>
          <button type="button" className="cinematic-hero__cta cinematic-hero__cta--secondary">
            Feature Your Startup
          </button>
        </div>
      </div>
    </section>
  );
}

CinematicHero.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundVideo: PropTypes.string,
};

CinematicHero.defaultProps = {
  backgroundImage: '',
  backgroundVideo: '',
};
