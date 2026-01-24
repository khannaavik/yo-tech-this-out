import { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/product-tile.css';

const defaultMockProps = {
  image: '/products/placeholder.png',
  video: '/assets/hero/home-hero.mp4',
  productName: 'Nebula Pulse',
  companyName: 'Aurora Labs',
  category: 'XR / Wearables',
  region: 'Global',
  emojiRating: ['🔥', '🔥', '😍'],
  views: 28400,
  hook: 'A cinematic headset for everyday creators',
  badges: ['CES Winner', 'Featured', 'Kickstarter Live'],
};

const CES_BADGE_REGEX = /ces/i;
const FUNDING_BADGE_REGEX = /(kickstarter|investor ready)/i;

const formatCompactNumber = (value, digits) => {
  const fixed = value.toFixed(digits);
  return fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed;
};

const formatViews = (value) => {
  if (!Number.isFinite(value)) return '0 views';
  if (value < 1000) return `${value} views`;
  if (value < 100_000) return `${formatCompactNumber(value / 1000, 1)}k views`;
  if (value < 1_000_000) return `${Math.round(value / 1000)}k views`;
  if (value < 10_000_000) return `${formatCompactNumber(value / 1_000_000, 1)}m views`;
  return `${Math.round(value / 1_000_000)}m views`;
};

export function ProductTile(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouchDevice = window.matchMedia
      ? window.matchMedia('(hover: none), (pointer: coarse)').matches
      : false;
    setIsTouch(isTouchDevice);
  }, []);

  const resolved = useMemo(() => ({ ...defaultMockProps, ...props }), [props]);
  const showVideo = resolved.video && isHovering && !isTouch;
  const formattedViews = formatViews(resolved.views);

  const badgeTone = (badge) => {
    if (CES_BADGE_REGEX.test(badge)) return 'ces';
    if (FUNDING_BADGE_REGEX.test(badge)) return 'funding';
    if (badge.toLowerCase() === resolved.region.toLowerCase()) return 'region';
    return 'standard';
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (showVideo) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [showVideo]);

  return (
    <article
      className={[
        'v2-product-tile',
        showVideo ? 'is-hovering' : '',
        isTouch ? 'is-touch' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="v2-product-tile__media">
        <img
          className="v2-product-tile__image"
          src={resolved.image}
          alt={resolved.productName}
          loading="lazy"
        />
        {resolved.video && (
          <video
            className="v2-product-tile__video"
            muted
            loop
            playsInline
            preload="metadata"
            poster={resolved.image}
            ref={videoRef}
          >
            <source src={resolved.video} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="v2-product-tile__body">
        <div className="v2-product-tile__title">
          <h3>{resolved.productName}</h3>
          <p>{resolved.companyName}</p>
        </div>

        <div className="v2-product-tile__tags">
          <span>{resolved.category}</span>
          <span>{resolved.region}</span>
        </div>

        <div className="v2-product-tile__rating">
          {resolved.emojiRating.map((emoji, index) => (
            <span key={`${emoji}-${index}`} aria-hidden="true">
              {emoji}
            </span>
          ))}
        </div>

        <div className="v2-product-tile__views">{formattedViews}</div>

        <p className="v2-product-tile__hook">{resolved.hook}</p>

        <div className="v2-product-tile__badges">
          {resolved.badges.map((badge) => (
            <span key={badge} data-tone={badgeTone(badge)}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

ProductTile.propTypes = {
  image: PropTypes.string,
  video: PropTypes.string,
  productName: PropTypes.string,
  companyName: PropTypes.string,
  category: PropTypes.string,
  region: PropTypes.string,
  emojiRating: PropTypes.arrayOf(PropTypes.string),
  views: PropTypes.number,
  hook: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.string),
};

ProductTile.defaultProps = defaultMockProps;
