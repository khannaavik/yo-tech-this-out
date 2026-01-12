import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CategoryJumpNav } from '../components/CategoryJumpNav';
import { Hero } from '../components/Hero';
import { HeroIntro } from '../components/HeroIntro';
import { BestOfCES } from '../components/BestOfCES';
import { FeaturedLookiSection } from '../components/FeaturedLookiSection';
import { ChapterIntro } from '../components/ChapterIntro';
import { ProductScrollSection } from '../components/ProductScrollSection';
import { products } from '../data/products';
import { getOrganizationJsonLd, getWebsiteJsonLd } from '../utils/seo';
import '../styles/pages/home-explore-cta.css';

/**
 * Home Page Component
 * Main product showcase page
 */
export function Home() {
  // Group products by category, filtered by showOnHome === true
  const productsByCategory = {
    'ai-audio': products.filter(p => p.category === 'ai-audio' && p.showOnHome === true),
    'wearables': products.filter(p => p.category === 'wearables' && p.showOnHome === true),
    'health': products.filter(p => p.category === 'health' && p.showOnHome === true),
    'xr': products.filter(p => p.category === 'xr' && p.showOnHome === true),
    'living': products.filter(p => p.category === 'living' && p.showOnHome === true),
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
      {/* Category Jump Navigation */}
      <CategoryJumpNav />

      {/* Hero Section */}
      <Hero />

      {/* Hero Intro Section */}
      <HeroIntro />

      {/* Best of CES Section */}
      <BestOfCES />

      {/* Featured Looki L1 Section */}
      <FeaturedLookiSection />

      {/* AI & AUDIO Chapter */}
      {productsByCategory['ai-audio'].length > 0 && (
        <ChapterIntro
          id="ai-audio"
          title="AI & AUDIO"
          subtitle="Intelligent sound systems and audio innovation"
        />
      )}

      {productsByCategory['ai-audio'].map((product, index) => (
        <ProductScrollSection
          key={product.id}
          productId={product.id}
          productName={product.name}
          companyName={product.company}
          categoryTag={product.categoryTag}
          shortDescription={product.description}
          productImage={product.image}
          youtubeUrl={product.youtube}
          websiteUrl={product.website}
          reverseLayout={index % 2 === 1}
        />
      ))}

      {/* WEARABLES & HUMAN TECH Chapter */}
      {productsByCategory['wearables'].length > 0 && (
        <ChapterIntro
          id="wearables"
          title="WEARABLES & HUMAN TECH"
          subtitle="Technology that enhances human capabilities"
        />
      )}

      {productsByCategory['wearables'].map((product, index) => (
        <ProductScrollSection
          key={product.id}
          productId={product.id}
          productName={product.name}
          companyName={product.company}
          categoryTag={product.categoryTag}
          shortDescription={product.description}
          productImage={product.image}
          youtubeUrl={product.youtube}
          websiteUrl={product.website}
          reverseLayout={index % 2 === 1}
        />
      ))}

      {/* HEALTH & WELLNESS Chapter */}
      {productsByCategory['health'].length > 0 && (
        <ChapterIntro
          id="health"
          title="HEALTH & WELLNESS"
          subtitle="Innovative health monitoring and wellness technologies"
        />
      )}

      {productsByCategory['health'].map((product, index) => (
        <ProductScrollSection
          key={product.id}
          productId={product.id}
          productName={product.name}
          companyName={product.company}
          categoryTag={product.categoryTag}
          shortDescription={product.description}
          productImage={product.image}
          youtubeUrl={product.youtube}
          websiteUrl={product.website}
          reverseLayout={index % 2 === 1}
        />
      ))}

      {/* XR, GAMING & FUTURE INTERACTION Chapter */}
      {productsByCategory['xr'].length > 0 && (
        <ChapterIntro
          id="xr"
          title="XR, GAMING & FUTURE INTERACTION"
          subtitle="Immersive experiences and next-generation interfaces"
        />
      )}

      {productsByCategory['xr'].map((product, index) => (
        <ProductScrollSection
          key={product.id}
          productId={product.id}
          productName={product.name}
          companyName={product.company}
          categoryTag={product.categoryTag}
          shortDescription={product.description}
          productImage={product.image}
          youtubeUrl={product.youtube}
          websiteUrl={product.website}
          reverseLayout={index % 2 === 1}
        />
      ))}

      {/* FUTURE LIVING & MOBILITY Chapter */}
      {productsByCategory['living'].length > 0 && (
        <ChapterIntro
          id="living"
          title="FUTURE LIVING & MOBILITY"
          subtitle="Smart homes and autonomous systems reshaping daily life"
        />
      )}

      {productsByCategory['living'].map((product, index) => (
        <ProductScrollSection
          key={product.id}
          productId={product.id}
          productName={product.name}
          companyName={product.company}
          categoryTag={product.categoryTag}
          shortDescription={product.description}
          productImage={product.image}
          youtubeUrl={product.youtube}
          websiteUrl={product.website}
          reverseLayout={index % 2 === 1}
        />
      ))}

      {/* Explore All CTA */}
      <section className="home-explore-cta">
        <div className="home-explore-cta__container">
          <h2 className="home-explore-cta__title">Explore All CES Innovations</h2>
          <p className="home-explore-cta__subtext">Discover every breakthrough in one place</p>
          <Link
            to="/explore"
            className="home-explore-cta__button"
            aria-label="Explore all products"
          >
            Explore All
          </Link>
        </div>
      </section>
    </>
  );
}

