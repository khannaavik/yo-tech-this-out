import { Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { CompanyLink } from './CompanyLink';
import '../styles/components/best-of-ces.css';

/**
 * BestOfCES Component
 * Editorial picks showcasing the most impactful innovations from CES
 * Confident, curated, authoritative tone
 */

// Editorial picks with insights
const bestOfCESPicks = [
  {
    productId: 'galaxy-buds3-pro',
    insight: 'Samsung elevates wireless audio with AI that adapts in real-time. This isn\'t just noise cancellation—it\'s intelligent sound that learns your environment.',
  },
  {
    productId: 'bravia-theater-quad',
    insight: 'Sony redefines home cinema with quad-channel audio that doesn\'t require a dedicated theater room. The future of immersive entertainment is here.',
  },
  {
    productId: 'viv-ring',
    insight: 'VIV Health delivers comprehensive health monitoring in an elegant form factor. The smart ring category just found its benchmark.',
  },
  {
    productId: 'sony-xr-display',
    insight: 'Professional-grade XR for creators who demand precision. Sony\'s latest headset bridges the gap between virtual and physical workspaces.',
  },
];

export function BestOfCES() {
  return (
    <section className="best-of-ces">
      <div className="best-of-ces__container">
        <div className="best-of-ces__header">
          <h2 className="best-of-ces__title">Best of CES</h2>
          <p className="best-of-ces__subtitle">
            Our editorial picks for the most impactful innovations of 2026
          </p>
        </div>

        <div className="best-of-ces__grid">
          {bestOfCESPicks.map((pick, index) => {
            const product = getProductById(pick.productId);
            if (!product) return null;

            return (
              <article key={product.id} className="best-of-ces__card">
                <div className="best-of-ces__card-content">
                  <div className="best-of-ces__card-header">
                    <span className="best-of-ces__company">
                      <CompanyLink companyName={product.company} />
                    </span>
                    <h3 className="best-of-ces__product-name">{product.name}</h3>
                  </div>
                  <p className="best-of-ces__insight">{pick.insight}</p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="best-of-ces__link"
                    aria-label={`Learn more about ${product.name} by ${product.company}`}
                  >
                    Explore Product
                    <span className="best-of-ces__link-arrow">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
