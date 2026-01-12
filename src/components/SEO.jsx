import { useEffect } from 'react';

/**
 * SEO Component
 * Manages meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
 */
export function SEO({
  title,
  description,
  image = '/assets/hero/home-hero.png',
  url,
  type = 'website',
  jsonLd,
}) {
  const siteName = 'YO! TECH THIS OUT';
  const siteUrl = 'https://yotechthisout.com'; // Update with actual domain
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'A curated scroll through the future of technology from CES and beyond.');

    // Update or create Open Graph tags
    const ogTags = {
      'og:title': fullTitle,
      'og:description': description || 'A curated scroll through the future of technology from CES and beyond.',
      'og:image': fullImage,
      'og:url': fullUrl,
      'og:type': type,
      'og:site_name': siteName,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Update or create Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description || 'A curated scroll through the future of technology from CES and beyond.',
      'twitter:image': fullImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Add JSON-LD structured data
    if (jsonLd) {
      // Remove existing JSON-LD scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // Handle both single objects and arrays
      const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      
      jsonLdArray.forEach((data) => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [title, description, image, url, type, jsonLd, fullTitle, fullImage, fullUrl]);

  return null;
}
