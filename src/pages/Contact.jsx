import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { PageHero } from '../components/PageHero';
import { PageSection } from '../components/PageSection';
import { PageCard } from '../components/PageCard';
import { SEO } from '../components/SEO';
import { getOrganizationJsonLd } from '../utils/seo';
import '../styles/pages/contact.css';

/**
 * Contact Page Component
 * Friendly, professional contact page with form and contact information
 * 
 * Formspree Integration:
 * 1. Sign up at https://formspree.io
 * 2. Create a new form
 * 3. Copy your form ID
 * 4. Replace 'YOUR_FORM_ID' below with your actual Formspree form ID
 * 
 * Example: const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpzgkqyz';
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    // Clear general error message
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      setErrorMessage('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `New Contact Form Submission from ${formData.name.trim()}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        // Handle Formspree errors
        const data = await response.json();
        setSubmitStatus('error');
        setErrorMessage(
          data.error || 'Something went wrong. Please try again later.'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        'Network error. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Us"
        description="Have a question, partnership idea, or just want to say hello? Get in touch with our team."
        url="/contact"
        jsonLd={getOrganizationJsonLd()}
      />
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
              <a href="mailto:bizdev@yotechthisout.com" className="contact-email-link">
                bizdev@yotechthisout.com
              </a>
            </PageCard>

            {/* Direct Contact */}
            <PageCard className="contact-info-card">
              <div className="contact-info-icon">👋</div>
              <h3>Direct Contact</h3>
              <a href="mailto:jennifer@yotechthisout.com" className="contact-email-link">
                jennifer@yotechthisout.com
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
                  className={`contact-form-input ${errors.name ? 'contact-form-input--error' : ''}`}
                  placeholder="Your name"
                  required
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="contact-form-error" role="alert">
                    {errors.name}
                  </span>
                )}
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
                  className={`contact-form-input ${errors.email ? 'contact-form-input--error' : ''}`}
                  placeholder="your.email@example.com"
                  required
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="contact-form-error" role="alert">
                    {errors.email}
                  </span>
                )}
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
                  className={`contact-form-textarea ${errors.message ? 'contact-form-textarea--error' : ''}`}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  required
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="contact-form-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="contact-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="contact-form-success" role="alert">
                  ✓ Message sent! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && errorMessage && (
                <div className="contact-form-error-message" role="alert">
                  ⚠ {errorMessage}
                </div>
              )}
            </form>
          </PageCard>
        </div>
      </PageSection>
    </PageLayout>
  );
}

