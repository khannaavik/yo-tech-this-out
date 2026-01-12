import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CompanyLink } from './CompanyLink';
import '../styles/components/product-row.css';

/**
 * ProductRow Component
 * Reusable product row for list/explore views
 * 
 * @param {string} productId - Product ID (used for slug)
 * @param {string} productName - Name of the product
 * @param {string} companyName - Name of the company
 * @param {string} categoryTag - Category tag/label
 * @param {string} shortDescription - Product description
 * @param {string} productImage - Product image URL
 * @param {string} youtubeUrl - YouTube video URL
 * @param {string} websiteUrl - Product website URL
 */
export function ProductRow(props) {
  const {
    productId,
    productName,
    companyName,
    categoryTag,
    shortDescription,
    productImage,
    youtubeUrl,
    websiteUrl,
  } = props || {};

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Normalize YouTube URL
  const getYouTubeUrl = () => {
    if (!youtubeUrl) return null;
    
    // If it's already a full YouTube URL, return as-is
    if (youtubeUrl.includes('youtube.com') || youtubeUrl.includes('youtu.be')) {
      return youtubeUrl;
    }
    
    return null;
  };

  const normalizedYoutubeUrl = getYouTubeUrl();
  const resolvedImageSrc = productImage || '/products/placeholder.png';

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const productLink = productId ? `/products/${productId}` : null;

  return (
    <article className="product-row">
      <div className="product-row__container">
        {/* Image */}
        <div className="product-row__image-wrapper">
          {productLink ? (
            <Link to={productLink} className="product-row__image-link" aria-label={`View ${productName} details`}>
              <div className="product-row__image-container">
                {!imageError ? (
                  <img
                    src={resolvedImageSrc}
                    alt={`${productName} by ${companyName}`}
                    className="product-row__image"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                    style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                  />
                ) : null}
                {imageError && (
                  <div className="product-row__image-placeholder" aria-label={`${productName} image`}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100" height="100" fill="var(--color-bg-secondary)" opacity="0.5"/>
                      <path d="M30 40L50 25L70 40V70H30V40Z" stroke="var(--color-text-secondary)" strokeWidth="2" fill="none"/>
                      <circle cx="50" cy="50" r="8" fill="var(--color-text-secondary)" opacity="0.3"/>
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <div className="product-row__image-container">
              {!imageError ? (
                <img
                  src={resolvedImageSrc}
                  alt={`${productName} by ${companyName}`}
                  className="product-row__image"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="lazy"
                  decoding="async"
                  style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                />
              ) : null}
              {imageError && (
                <div className="product-row__image-placeholder" aria-label={`${productName} image`}>
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="var(--color-bg-secondary)" opacity="0.5"/>
                    <path d="M30 40L50 25L70 40V70H30V40Z" stroke="var(--color-text-secondary)" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="8" fill="var(--color-text-secondary)" opacity="0.3"/>
                  </svg>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="product-row__content">
          <div className="product-row__header">
            {productLink ? (
              <Link to={productLink} className="product-row__title-link">
                <h3 className="product-row__title">{productName}</h3>
              </Link>
            ) : (
              <h3 className="product-row__title">{productName}</h3>
            )}
            {categoryTag && (
              <span className="product-row__category">{categoryTag}</span>
            )}
          </div>

          {companyName && (
            <p className="product-row__company">
              by <CompanyLink companyName={companyName} />
            </p>
          )}

          {shortDescription && (
            <p className="product-row__description">{shortDescription}</p>
          )}

          {/* Action Buttons */}
          <div className="product-row__actions">
            {normalizedYoutubeUrl && (
              <a
                href={normalizedYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="product-row__button product-row__button--primary"
                aria-label={`Watch demo video for ${productName}`}
              >
                <span className="product-row__play-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 5L15 10L7 15V5Z" fill="currentColor"/>
                  </svg>
                </span>
                Watch Demo
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="product-row__button product-row__button--secondary"
                aria-label={`Visit ${productName} website`}
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

