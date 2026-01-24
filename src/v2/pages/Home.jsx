import { CinematicHero } from '../sections/CinematicHero';
import { ProductGrid } from '../features/products/ProductGrid';

const mockProducts = [
  {
    id: 'nebula-pulse',
    image: '/products/placeholder.png',
    video: '/assets/hero/home-hero.mp4',
    productName: 'Nebula Pulse',
    companyName: 'Aurora Labs',
    category: 'XR / Wearables',
    region: 'Global',
    emojiRating: ['🔥', '🔥', '😍'],
    views: 18400,
    hook: 'Cinematic headset tuned for creators',
    badges: ['CES Winner', 'Kickstarter', 'Global'],
    status: 'Kickstarter',
  },
  {
    id: 'looki-l1',
    image: '/products/looki-l1/product.png',
    productName: 'Looki L1',
    companyName: 'Looki',
    category: 'Smart Home',
    region: 'North America',
    emojiRating: ['✨', '🔥', '💡'],
    views: 9200,
    hook: 'A smarter portal for every room',
    badges: ['CES Honoree', 'In Market', 'North America'],
    status: 'In Market',
  },
  {
    id: 'osmotex',
    image: '/products/osmotex-jacket/product.png',
    productName: 'Osmotex Jacket',
    companyName: 'Osmotex',
    category: 'Health',
    region: 'Europe',
    emojiRating: ['🧊', '🔥', '😍'],
    views: 46200,
    hook: 'Adaptive thermal layers for any climate',
    badges: ['Investor Ready', 'Europe'],
    status: 'Investor Ready',
  },
  {
    id: 'q-vision-pro',
    image: '/products/q-vision-pro/product.png',
    productName: 'Q Vision Pro',
    companyName: 'Q Vision',
    category: 'AI',
    region: 'Asia-Pacific',
    emojiRating: ['🤖', '✨', '🚀'],
    views: 31800,
    hook: 'Ambient intelligence for the modern home',
    badges: ['Prototype', 'Asia-Pacific'],
    status: 'Prototype',
  },
  {
    id: 'viv-ring',
    image: '/products/viv-ring/product.png',
    productName: 'Viv Ring',
    companyName: 'Viv',
    category: 'Health',
    region: 'Global',
    emojiRating: ['💫', '🔥', '❤️'],
    views: 27100,
    hook: 'Biometric signal clarity, always on',
    badges: ['CES Honoree', 'In Market', 'Global'],
    status: 'In Market',
  },
  {
    id: 'sportrack-xr',
    image: '/products/sportrack-xr/product.png',
    productName: 'Sportrack XR',
    companyName: 'Sportrack',
    category: 'Mobility',
    region: 'North America',
    emojiRating: ['⚡', '🔥', '🎯'],
    views: 13300,
    hook: 'Motion-first training for athletes',
    badges: ['Kickstarter', 'North America'],
    status: 'Kickstarter',
  },
];

export function Home() {
  return (
    <main>
      <CinematicHero
        backgroundImage="/assets/hero/home-hero.png"
        backgroundVideo="/assets/hero/home-hero.mp4"
      />

      <section
        style={{
          padding: '3.5rem 0',
          background: '#0a0b0f',
          color: '#f5f7ff',
        }}
      >
        <div
          style={{
            width: 'min(1080px, 92vw)',
            margin: '0 auto',
            display: 'grid',
            gap: '2rem',
          }}
        >
          <div style={{ display: 'grid', gap: '1rem' }}>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: '0.75rem',
                color: 'rgba(245, 247, 255, 0.6)',
                margin: 0,
              }}
            >
              For startups + scaleups
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Feature on Yo!
            </h2>
            <p style={{ margin: 0, fontSize: '1.05rem', color: 'rgba(245, 247, 255, 0.75)' }}>
              We help startups get discovered, reviewed, and funded — globally.
            </p>
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '0.65rem',
              fontSize: '0.98rem',
              color: 'rgba(245, 247, 255, 0.8)',
            }}
          >
            <li>Feature in our innovation grid</li>
            <li>Get reviewed by Techfluencers</li>
            <li>Reach global investors &amp; early adopters</li>
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <button
              type="button"
              style={{
                background: '#f5f7ff',
                color: '#0a0b0f',
                border: 'none',
                padding: '0.85rem 1.6rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                minWidth: 'min(220px, 100%)',
              }}
            >
              Apply to Be Featured
            </button>
            <button
              type="button"
              style={{
                background: 'transparent',
                color: '#f5f7ff',
                border: '1px solid rgba(245, 247, 255, 0.4)',
                padding: '0.85rem 1.6rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                minWidth: 'min(200px, 100%)',
              }}
            >
              Book a Call
            </button>
          </div>
        </div>
      </section>

      <ProductGrid products={mockProducts} />

      <div style={{ height: '5rem' }} aria-hidden="true" />
    </main>
  );
}
