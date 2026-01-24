import { useMemo, useState } from 'react';
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const filters = useMemo(() => value ?? buildInitialState(), [value]);

  const handleSelect = (groupId, option) => {
    const next = { ...filters, [groupId]: option };
    onChange?.(next);
  };

  const activeCount = Object.values(filters).filter((val) => val !== 'All').length;

  return (
    <section className="v2-product-filters" aria-label="Product filters">
      <div className="v2-product-filters__bar">
        <div className="v2-product-filters__title">
          <span>Filters</span>
          {activeCount > 0 && <em>{activeCount} active</em>}
        </div>

        <button
          className="v2-product-filters__mobile-toggle"
          type="button"
          onClick={() => setIsMobileOpen(true)}
        >
          Edit filters
        </button>

        <div className="v2-product-filters__groups">
          {FILTER_GROUPS.map((group) => (
            <div key={group.id} className="v2-product-filters__group">
              <span className="v2-product-filters__label">{group.label}</span>
              <div className="v2-product-filters__options">
                {['All', ...group.options].map((option) => {
                  const isActive = filters[group.id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`v2-product-filters__option ${isActive ? 'is-active' : ''}`}
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
      </div>

      {isMobileOpen && (
        <div className="v2-product-filters__sheet">
          <div className="v2-product-filters__sheet-overlay" onClick={() => setIsMobileOpen(false)} />
          <div className="v2-product-filters__sheet-panel">
            <div className="v2-product-filters__sheet-header">
              <h3>Filters</h3>
              <button type="button" onClick={() => setIsMobileOpen(false)}>
                Close
              </button>
            </div>
            <div className="v2-product-filters__sheet-body">
              {FILTER_GROUPS.map((group) => (
                <div key={group.id} className="v2-product-filters__sheet-group">
                  <span className="v2-product-filters__label">{group.label}</span>
                  <div className="v2-product-filters__sheet-options">
                    {['All', ...group.options].map((option) => {
                      const isActive = filters[group.id] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          className={`v2-product-filters__sheet-option ${isActive ? 'is-active' : ''}`}
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
            <div className="v2-product-filters__sheet-actions">
              <button type="button" onClick={() => setIsMobileOpen(false)}>
                View results
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
