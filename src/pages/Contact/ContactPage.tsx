import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import './ContactPage.css';

/**
 * Contact Us page component.
 */
export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container contact-page__container">
        {/* Header */}
        <section className="contact-page__section">
          <Typography variant="displayLarge" align="center">
            Contact Us
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary">
            We'd love to hear from you
          </Typography>
        </section>

        {/* General Inquiries */}
        <section className="contact-page__section">
          <Card variant="filled" padding="large" className="contact-page__card">
            <Typography variant="headingLarge" className="contact-page__section-title">
              General Inquiries
            </Typography>
            <Typography variant="bodyRegular" color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
              For general questions, partnership opportunities, or media inquiries, please reach out to us via email.
            </Typography>

            <div className="contact-page__info-item">
              <Typography variant="headingMedium" color="primary" className="contact-page__info-label">
                Email
              </Typography>
              <a href="mailto:chronomind.contact.dev@gmail.com" className="contact-page__link">
                <Typography variant="bodyLarge" color="primary">
                  chronomind.contact.dev@gmail.com
                </Typography>
              </a>
            </div>

            <Typography variant="bodySmall" color="secondary" style={{ marginTop: 'var(--space-6)' }}>
              We aim to respond to all inquiries within 2-3 business days.
            </Typography>
          </Card>
        </section>

        {/* Support */}
        <section className="contact-page__section">
          <Card variant="filled" padding="large" className="contact-page__card">
            <Typography variant="headingLarge" className="contact-page__section-title">
              Technical Support
            </Typography>
            <Typography variant="bodyRegular" color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
              For technical issues, bug reports, or feature requests related to our applications, please visit our Support page.
            </Typography>

            <div className="contact-page__info-item">
              <a href="/support" className="contact-page__link">
                <Button variant="primary" size="medium">
                  Visit Support Page
                </Button>
              </a>
            </div>
          </Card>
        </section>

        {/* Social Media */}
        <section className="contact-page__section">
          <Card variant="filled" padding="large" className="contact-page__card">
            <Typography variant="headingLarge" className="contact-page__section-title">
              Follow Our Journey
            </Typography>
            <Typography variant="bodyRegular" color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
              Stay updated with our latest developments, announcements, and educational content.
            </Typography>

            <div className="contact-page__social-links">
              <a
                href="https://www.youtube.com/@chronomind-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page__social-link"
              >
                <span></span>
                <Typography variant="bodyRegular" color="primary">
                  YouTube
                </Typography>
              </a>
              <a
                href="https://github.com/lcai000"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page__social-link"
              >
                <span></span>
                <Typography variant="bodyRegular" color="primary">
                  GitHub
                </Typography>
              </a>
            </div>
          </Card>
        </section>

        {/* Location */}
        <section className="contact-page__section">
          <Card variant="filled" padding="large" className="contact-page__card">
            <Typography variant="headingLarge" className="contact-page__section-title">
              Our Location
            </Typography>
            <Typography variant="bodyRegular" color="secondary" style={{ marginBottom: 'var(--space-4)' }}>
              Chronomind is based in Austin, Texas.
            </Typography>
            <Typography variant="bodySmall" color="secondary">
              We work remotely and collaborate with partners worldwide.
            </Typography>
          </Card>
        </section>

        {/* Response Time */}
        <section className="contact-page__section">
          <Card variant="elevated" padding="medium">
            <Typography variant="bodyRegular" color="secondary" align="center">
              Thank you for your interest in Chronomind. We're committed to improving dementia care education and appreciate your support.
            </Typography>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;