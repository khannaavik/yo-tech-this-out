import { CinematicHero } from '../sections/CinematicHero';
import { ProductGrid } from '../features/products/ProductGrid';
import '../styles/home.css';

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

      <section className="home-feature" aria-labelledby="home-feature-title">
        <div className="home-feature__card">
          <div className="home-feature__inner">
            <p className="home-feature__eyebrow">For startups + scaleups</p>
            <h2 id="home-feature-title" className="home-feature__title">
              Feature on Yo!
            </h2>
            <p className="home-feature__desc">
              Get discovered, reviewed, and funded — by the right people, everywhere.
            </p>

            <ul className="home-feature__list" role="list">
              <li>
                <span className="home-feature__check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Feature in our innovation grid</span>
              </li>
              <li>
                <span className="home-feature__check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Get reviewed by Techfluencers</span>
              </li>
              <li>
                <span className="home-feature__check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>Reach global investors &amp; early adopters</span>
              </li>
            </ul>

            <div className="home-feature__actions">
              <button type="button" className="home-feature__btn home-feature__btn--primary">
                Apply to Be Featured
              </button>
              <button type="button" className="home-feature__btn home-feature__btn--secondary">
                Book a Call
              </button>
            </div>

            <p className="home-feature__trust">
              Trusted by CES winners, investors, and founders worldwide.
            </p>
          </div>
        </div>
      </section>

      <ProductGrid products={mockProducts} />

      <div style={{ height: '5rem' }} aria-hidden="true" />
    </main>
  );
}
