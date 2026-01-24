import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/product-tile.css';

/**
 * ProductTile
 * HUGE-inspired cinematic product tile for grids.
 */
export function ProductTile({
  productSlug,
  title,
  categoryLabel,
  regionLabel,
  hookLine,
  ratingEmojis,
  viewCount,
  videoSrc,
  posterSrc,
  badges,
  className,
}) {
  const tileClassName = ['product-tile', className].filter(Boolean).join(' ');

  return (
    <Link to={`/products/${productSlug}`} className={tileClassName} aria-label={`View ${title}`}>
      <div className="product-tile__media">
        <video
          className="product-tile__video"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div className="product-tile__content">
        <div className="product-tile__badges">
          <span className="product-tile__badge product-tile__badge--category">{categoryLabel}</span>
          <span className="product-tile__badge product-tile__badge--region">{regionLabel}</span>
        </div>

        <h3 className="product-tile__title">{title}</h3>
        <p className="product-tile__hook">{hookLine}</p>

        <div className="product-tile__meta">
          <div className="product-tile__rating" aria-label="Rating">
            {ratingEmojis.map((emoji, index) => (
              <span key={`${emoji}-${index}`} className="product-tile__rating-emoji" aria-hidden="true">
                {emoji}
              </span>
            ))}
          </div>
          <span className="product-tile__views" aria-label={`${viewCount} views`}>
            {viewCount.toLocaleString()} views
          </span>
        </div>

        <div className="product-tile__flags">
          {badges.map((badge) => (
            <span key={badge} className="product-tile__flag">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

ProductTile.propTypes = {
  productSlug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categoryLabel: PropTypes.string.isRequired,
  regionLabel: PropTypes.string.isRequired,
  hookLine: PropTypes.string.isRequired,
  ratingEmojis: PropTypes.arrayOf(PropTypes.string),
  viewCount: PropTypes.number.isRequired,
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

ProductTile.defaultProps = {
  ratingEmojis: ['🔥', '✨', '🧠', '🚀'],
  posterSrc: '',
  badges: [],
  className: '',
};
