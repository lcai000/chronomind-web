import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import './PrivacyPage.css';

/**
 * Privacy Policy page component.
 */
export const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page">
      <div className="container privacy-page__container">
        {/* Header */}
        <section className="privacy-page__section">
          <Typography variant="displayLarge" align="center">
            Privacy Policy
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary">
            Last Updated: December 2025
          </Typography>
        </section>

        {/* Introduction */}
        <section className="privacy-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="privacy-page__section-title">
              Introduction
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="privacy-page__content">
              This Privacy Policy describes how Chronomind ("we", "us", or "our") collects, uses, and shares information about you when you use our website, applications, and services (collectively, the "Services"). We are committed to protecting your privacy and handling your personal information with care.
            </Typography>
          </Card>
        </section>

        {/* Information We Collect */}
        <section className="privacy-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="privacy-page__section-title">
              Information We Collect
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="privacy-page__content">
              We may collect information that you provide directly to us, such as when you contact us or participate in surveys. This may include your name, email address, and any other information you choose to provide.
            </Typography>
          </Card>
        </section>

        {/* How We Use Information */}
        <section className="privacy-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="privacy-page__section-title">
              How We Use Your Information
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="privacy-page__content">
              We use the information we collect to:
            </Typography>
            <ul style={{ color: 'var(--color-text-secondary)', marginLeft: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
              <li><Typography variant="bodyRegular" color="secondary">Provide, maintain, and improve our Services</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Respond to your comments and questions</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Send you technical notices and updates</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Monitor and analyze trends and usage</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Protect the security and integrity of our Services</Typography></li>
            </ul>
          </Card>
        </section>

        {/* Information Sharing */}
        <section className="privacy-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="privacy-page__section-title">
              Information Sharing
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="privacy-page__content">
              We do not sell your personal information. We may share your information in the following circumstances:
            </Typography>
            <ul style={{ color: 'var(--color-text-secondary)', marginLeft: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
              <li><Typography variant="bodyRegular" color="secondary">With service providers who assist in operating our Services</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">If required by law or to protect rights and safety</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">In connection with a business transfer, such as a merger or acquisition</Typography></li>
            </ul>
          </Card>
        </section>

        {/* Your Choices */}
        <section className="privacy-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="privacy-page__section-title">
              Your Choices
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="privacy-page__content">
              You may opt out of receiving promotional emails from us by following the instructions in those emails. Even if you opt out, we may still send you non-promotional communications, such as those about our ongoing business relations.
            </Typography>
          </Card>
        </section>

        {/* Contact Us */}
        <section className="privacy-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="privacy-page__section-title">
              Contact Us
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="privacy-page__content">
              If you have any questions about this Privacy Policy, please contact us at:
            </Typography>
            <Typography variant="bodyRegular" color="primary" style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:chronomind.contact.dev@gmail.com" style={{ color: 'inherit' }}>
                chronomind.contact.dev@gmail.com
              </a>
            </Typography>
          </Card>
        </section>

        <Typography variant="bodySmall" color="secondary" className="privacy-page__last-updated">
          This Privacy Policy may be updated periodically. We will post any changes on this page with an updated revision date.
        </Typography>
      </div>
    </div>
  );
};

export default PrivacyPage;