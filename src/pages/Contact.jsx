import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import '../styles/pages/contact.css';

/**
 * Contact Page Component
 * Friendly, professional contact page with form and contact information
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Placeholder form submission
    // In production, this would connect to a backend API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Let's Connect"
        description="Have a question, partnership idea, or just want to say hello? We'd love to hear from you."
      />

      {/* Contact Information */}
      <PageSection title="Get In Touch">
        <div className="contact-info">
          <div className="contact-info-grid">
            {/* General Inquiries */}
            <PageCard className="contact-info-card">
              <div className="contact-info-icon">✉️</div>
              <h3>General Inquiries</h3>
              <a href="mailto:hello@yotechthisout.com" className="contact-email-link">
                hello@yotechthisout.com
              </a>
            </PageCard>

            {/* Business Development */}
            <PageCard className="contact-info-card">
              <div className="contact-info-icon">🤝</div>
              <h3>Business Development</h3>
              <a href="mailto:bizdev@yo-tech-this-out.com" className="contact-email-link">
                bizdev@yo-tech-this-out.com
              </a>
            </PageCard>

            {/* Direct Contact */}
            <PageCard className="contact-info-card">
              <div className="contact-info-icon">👋</div>
              <h3>Direct Contact</h3>
              <a href="mailto:jenn@yotechthisout.com" className="contact-email-link">
                jenn@yotechthisout.com
              </a>
            </PageCard>

            {/* Press */}
            <PageCard className="contact-info-card">
              <div className="contact-info-icon">📰</div>
              <h3>Press Inquiries</h3>
              <a href="mailto:press@yotechthisout.com" className="contact-email-link">
                press@yotechthisout.com
              </a>
            </PageCard>
          </div>

          {/* Phone */}
          <div className="contact-phone">
            <PageCard variant="subtle" className="contact-phone-card">
              <div className="contact-phone-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:+13107225210" className="contact-phone-link">
                (310) 722-5210
              </a>
            </PageCard>
          </div>
        </div>
      </PageSection>

      {/* Social Links */}
      <PageSection title="Connect With Us" variant="centered">
        <div className="contact-social">
          <div className="contact-social-links">
            <a
              href="https://www.linkedin.com/company/yotechthisout"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="LinkedIn"
            >
              <div className="contact-social-icon">💼</div>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@yotechthisout"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="YouTube"
            >
              <div className="contact-social-icon">▶️</div>
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/yotechthisout"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="Instagram"
            >
              <div className="contact-social-icon">📷</div>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </PageSection>

      {/* Contact Form */}
      <PageSection title="Send Us a Message" variant="centered">
        <div className="contact-form-wrapper">
          <PageCard className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="contact-form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="contact-form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact-form-textarea"
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="contact-form-success">
                  ✓ Message sent! We'll get back to you soon.
                </div>
              )}
            </form>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}

