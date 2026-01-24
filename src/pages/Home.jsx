import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { products } from '../data/products';
import { getOrganizationJsonLd, getWebsiteJsonLd } from '../utils/seo';

const CATEGORY_LABELS = {
  'ai-audio': 'AI & Audio',
  wearables: 'Wearables & Human Tech',
  health: 'Health & Wellness',
  xr: 'XR, Gaming & Interaction',
  living: 'Future Living & Mobility',
};

const REGION_OPTIONS = [
  { value: 'all', label: 'All Regions' },
  { value: 'global', label: 'Global' },
  { value: 'north-america', label: 'North America' },
  { value: 'europe', label: 'Europe' },
  { value: 'asia-pacific', label: 'Asia Pacific' },
  { value: 'mena', label: 'MENA' },
  { value: 'latam', label: 'LATAM' },
];

const FUNDING_OPTIONS = [
  { value: 'all', label: 'All Funding' },
  { value: 'pre-seed', label: 'Pre-Seed' },
  { value: 'seed', label: 'Seed' },
  { value: 'series-a', label: 'Series A' },
  { value: 'series-b', label: 'Series B+' },
  { value: 'public', label: 'Public' },
  { value: 'undisclosed', label: 'Undisclosed' },
];

/**
 * Home Page Component
 * Cinematic innovation gallery
 */
export function Home() {
  const [filters, setFilters] = useState({
    category: 'all',
    region: 'all',
    funding: 'all',
  });

  const categoryOptions = useMemo(() => {
    const categories = Array.from(new Set(products.map((product) => product.category)));
    return categories.map((category) => ({
      value: category,
      label: CATEGORY_LABELS[category] || category,
    }));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = filters.category === 'all' || product.category === filters.category;
      const regionValue = product.region ?? 'global';
      const fundingValue = product.fundingStatus ?? 'undisclosed';
      const regionMatch = filters.region === 'all' || regionValue === filters.region;
      const fundingMatch = filters.funding === 'all' || fundingValue === filters.funding;

      return categoryMatch && regionMatch && fundingMatch;
    });
  }, [filters]);

  const handleFilterChange = (key) => (event) => {
    setFilters((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: 'all',
      region: 'all',
      funding: 'all',
    });
  };

  return (
    <>
      <SEO
        title="The Innovation Authority"
        description="Curating breakthrough technologies from CES and beyond. Discover the innovations shaping tomorrow—from AI audio to wearables, health tech, XR, and future living."
        url="/"
        jsonLd={[
          getOrganizationJsonLd(),
          getWebsiteJsonLd(),
        ]}
      />
      {/* Full-bleed hero video */}
      <section className="home-hero" aria-label="Innovation hero">
        <div className="home-hero__media">
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero/home-hero.png"
          >
            <source src="/assets/hero/home-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Intro text below hero */}
      <section className="home-intro">
        <div className="home-intro__content">
          <p className="home-intro__eyebrow">Yo! Tech This Out</p>
          <h1 className="home-intro__title">Cinematic. Curated. Global.</h1>
          <p className="home-intro__subtext">
            Discover the innovations shaping audio, wearables, health, XR, and future living —
            curated for founders, creators, and world builders.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="home-filters" aria-label="Filter innovations">
        <div className="home-filters__bar">
          <div className="home-filters__group">
            <label className="home-filters__label" htmlFor="filter-category">Category</label>
            <select
              id="filter-category"
              className="home-filters__select"
              value={filters.category}
              onChange={handleFilterChange('category')}
            >
              <option value="all">All Categories</option>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="home-filters__group">
            <label className="home-filters__label" htmlFor="filter-region">Region</label>
            <select
              id="filter-region"
              className="home-filters__select"
              value={filters.region}
              onChange={handleFilterChange('region')}
            >
              {REGION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="home-filters__group">
            <label className="home-filters__label" htmlFor="filter-funding">Funding Status</label>
            <select
              id="filter-funding"
              className="home-filters__select"
              value={filters.funding}
              onChange={handleFilterChange('funding')}
            >
              {FUNDING_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button className="home-filters__reset" type="button" onClick={resetFilters}>
            Reset
          </button>
        </div>
        <div className="home-filters__meta">
          <span className="home-filters__count">{filteredProducts.length} innovations</span>
        </div>
      </section>

      {/* Infinite product grid */}
      <section className="home-grid" aria-label="Innovation grid">
        <div className="home-grid__wrap">
          <div className="home-grid__list">
            {filteredProducts.map((product) => (
              <article key={product.id} className="home-grid__item">
                <Link to={`/products/${product.id}`} className="home-grid__link">
                  <div className="home-grid__media">
                    <img
                      className="home-grid__image"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="home-grid__content">
                    <p className="home-grid__tag">{product.categoryTag}</p>
                    <h3 className="home-grid__title">{product.name}</h3>
                    <p className="home-grid__company">{product.company}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="home-grid__sentinel" aria-hidden="true" />
        </div>
      </section>

      {/* Persistent CTA */}
      <aside className="home-cta" aria-label="Showcase your innovation">
        <div className="home-cta__content">
          <p className="home-cta__eyebrow">For founders & teams</p>
          <h2 className="home-cta__title">Showcase Your Innovation on Yo!</h2>
          <p className="home-cta__subtext">
            Get featured in the cinematic gallery and reach a global audience of tech curators.
          </p>
          <Link to="/advertise" className="home-cta__button">
            Get Featured
          </Link>
        </div>
      </aside>
    </>
  );
}

