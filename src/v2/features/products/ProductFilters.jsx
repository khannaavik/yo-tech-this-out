import { useEffect, useMemo, useState } from 'react';
import '../../styles/product-grid.css';

const FILTER_GROUPS = [
  {
    id: 'category',
    label: 'Category',
    options: ['XR / Wearables', 'Health', 'Smart Home', 'AI', 'Mobility'],
  },
  {
    id: 'region',
    label: 'Region',
    options: ['Global', 'North America', 'Europe', 'Asia-Pacific'],
  },
  {
    id: 'status',
    label: 'Status',
    options: ['Prototype', 'In Market', 'Kickstarter', 'Investor Ready'],
  },
];

const buildInitialState = () =>
  FILTER_GROUPS.reduce((acc, group) => {
    acc[group.id] = 'All';
    return acc;
  }, {});

export function ProductFilters({ value, onChange }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const filters = useMemo(() => value ?? buildInitialState(), [value]);
  const [draftFilters, setDraftFilters] = useState(filters);

  useEffect(() => {
    if (!isPanelOpen) {
      setDraftFilters(filters);
    }
  }, [filters, isPanelOpen]);

  const handleSelect = (groupId, option) => {
    setDraftFilters((prev) => ({ ...prev, [groupId]: option }));
  };

  const handleApply = () => {
    onChange?.(draftFilters);
    setIsPanelOpen(false);
  };

  const handleClear = () => {
    const reset = buildInitialState();
    setDraftFilters(reset);
    onChange?.(reset);
  };

  const activeCount = Object.values(filters).filter((val) => val !== 'All').length;

  return (
    <section className="v2-product-filters" aria-label="Product filters">
      <div className="v2-product-filters__refine">
        <button
          className="v2-product-filters__refine-button"
          type="button"
          onClick={() => setIsPanelOpen(true)}
          aria-label="Open filters"
          aria-expanded={isPanelOpen}
        >
          <svg className="v2-product-filters__refine-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Refine
        </button>
        {activeCount > 0 && (
          <span className="v2-product-filters__count">{activeCount} active</span>
        )}
      </div>

      {isPanelOpen && (
        <div className="v2-product-filters__panel">
          <div className="v2-product-filters__panel-overlay" onClick={() => setIsPanelOpen(false)} />
          <div className="v2-product-filters__panel-sheet">
            <div className="v2-product-filters__panel-header">
              <div>
                <p className="v2-product-filters__panel-eyebrow">Refine</p>
                <h3>Filter the grid</h3>
              </div>
              <button type="button" onClick={() => setIsPanelOpen(false)}>
                Close
              </button>
            </div>

            <div className="v2-product-filters__panel-body">
              {FILTER_GROUPS.map((group) => (
                <div key={group.id} className="v2-product-filters__panel-group">
                  <span className="v2-product-filters__label">{group.label}</span>
                  <div
                    className={
                      group.id === 'status'
                        ? 'v2-product-filters__segmented'
                        : 'v2-product-filters__chips'
                    }
                  >
                    {['All', ...group.options].map((option) => {
                      const isActive = draftFilters[group.id] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          className={
                            group.id === 'status'
                              ? `v2-product-filters__segment ${isActive ? 'is-active' : ''}`
                              : `v2-product-filters__chip ${isActive ? 'is-active' : ''}`
                          }
                          onClick={() => handleSelect(group.id, option)}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="v2-product-filters__panel-actions">
              <button type="button" className="v2-product-filters__clear" onClick={handleClear}>
                Clear
              </button>
              <button type="button" className="v2-product-filters__apply" onClick={handleApply}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
