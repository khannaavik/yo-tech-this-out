import { Link } from 'react-router-dom';
import { getCompanySlug } from '../data/companies';
import '../styles/components/company-link.css';

/**
 * CompanyLink Component
 * Renders company name as a link to company profile page
 */
export function CompanyLink({ companyName, className = '', children }) {
  if (!companyName) return null;

  const slug = getCompanySlug(companyName);
  const displayText = children || companyName;

  return (
    <Link
      to={`/companies/${slug}`}
      className={`company-link ${className}`}
      aria-label={`View ${companyName} company profile`}
    >
      {displayText}
    </Link>
  );
}
