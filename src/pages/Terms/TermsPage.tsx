import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import './TermsPage.css';

/**
 * Terms of Service page component.
 */
export const TermsPage: React.FC = () => {
  return (
    <div className="terms-page">
      <div className="container terms-page__container">
        {/* Header */}
        <section className="terms-page__section">
          <Typography variant="displayLarge" align="center">
            Terms of Service
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary">
            Last Updated: December 2025
          </Typography>
        </section>

        {/* Introduction */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Agreement to Terms
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              By accessing or using Chronomind's website, applications, or services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
            </Typography>
          </Card>
        </section>

        {/* Description of Services */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Description of Services
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              Chronomind provides dementia care simulation and educational tools designed to help caregivers learn and practice caregiving techniques. Our Services may include web-based applications, mobile applications, and related content.
            </Typography>
          </Card>
        </section>


        {/* Acceptable Use */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Acceptable Use
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              You agree not to use our Services to:
            </Typography>
            <ul className="terms-page__list">
              <li><Typography variant="bodyRegular" color="secondary">Violate any applicable laws or regulations</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Infringe upon the rights of others</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Distribute malicious software or harmful content</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Attempt to gain unauthorized access to our systems</Typography></li>
              <li><Typography variant="bodyRegular" color="secondary">Interfere with the proper functioning of our Services</Typography></li>
            </ul>
          </Card>
        </section>

        {/* Intellectual Property */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Intellectual Property
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              All content, features, and functionality of our Services are owned by Chronomind or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.
            </Typography>
          </Card>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Disclaimer of Warranties
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our Services will be uninterrupted, error-free, or completely secure.
            </Typography>
          </Card>
        </section>

        {/* Limitation of Liability */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Limitation of Liability
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              To the fullest extent permitted by law, Chronomind shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services.
            </Typography>
          </Card>
        </section>

        {/* Changes to Terms */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Changes to Terms
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on this page with an updated revision date.
            </Typography>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="terms-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="terms-page__section-title">
              Contact Information
            </Typography>
            <Typography variant="bodyRegular" color="secondary" className="terms-page__content">
              If you have any questions about these Terms of Service, please contact us at:
            </Typography>
            <Typography variant="bodyRegular" color="primary" style={{ marginTop: 'var(--space-2)' }}>
              <a href="mailto:chronomind.contact.dev@gmail.com" style={{ color: 'inherit' }}>
                chronomind.contact.dev@gmail.com
              </a>
            </Typography>
          </Card>
        </section>

        <Typography variant="bodySmall" color="secondary" className="terms-page__last-updated">
          These Terms of Service constitute the entire agreement between you and Chronomind regarding your use of our Services.
        </Typography>
      </div>
    </div>
  );
};

export default TermsPage;