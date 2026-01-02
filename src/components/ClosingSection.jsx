import '../styles/components/closing-section.css';

/**
 * ClosingSection Component
 * Final section at the bottom of the page with closing message
 */
export function ClosingSection() {
  return (
    <section className="closing-section" aria-label="Closing section">
      <div className="closing-section__container">
        <p className="closing-section__text">
          YO! TECH THIS OUT — A visual curation of technologies shaping the future.
        </p>
      </div>
    </section>
  );
}

