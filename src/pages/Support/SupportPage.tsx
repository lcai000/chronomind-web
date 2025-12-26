import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import './SupportPage.css';

/**
 * Support page component.
 */
export const SupportPage: React.FC = () => {
  const faqs = [
    {
      question: 'How do I report a bug or technical issue?',
      answer: 'Please report bugs or technical issues by contacting us via email at chronomind.contact.dev@gmail.com.'
    },
    {
      question: 'Where can I find documentation for using Chronomind?',
      answer: 'We are currently developing comprehensive documentation. In the meantime, you can watch our YouTube tutorials or check the GitHub repository for website setup instructions.'
    },
    {
      question: 'Is Chronomind free to use?',
      answer: 'Yes, Chronomind is currently free to use. We believe dementia care education should be accessible to everyone.'
    },
    {
      question: 'Can I contribute to the project?',
      answer: 'Yes! We welcome contributions and feedback. Please contact us via email at chronomind.contact.dev@gmail.com to discuss contribution opportunities.'
    },
    {
      question: 'How often is Chronomind updated?',
      answer: 'We release updates regularly as we add new features and improvements. Follow our YouTube channel for announcements about the application, and our GitHub repository for website updates.'
    }
  ];

  return (
    <div className="support-page">
      <div className="container support-page__container">
        {/* Header */}
        <section className="support-page__section">
          <Typography variant="displayLarge" align="center">
            Support
          </Typography>
          <Typography variant="bodyLarge" align="center" color="secondary">
            Help and resources for using Chronomind
          </Typography>
        </section>

        {/* Resources */}
        <section className="support-page__section">
          <Card variant="filled" padding="large" className="support-page__card">
            <Typography variant="headingLarge" className="support-page__section-title">
              Resources & Documentation
            </Typography>
            <Typography variant="bodyRegular" color="secondary">
              Find tutorials, documentation, and community resources to help you get the most out of Chronomind.
            </Typography>

            <div className="support-page__resource-grid">
              {/* YouTube */}
              <Card variant="elevated" padding="medium" className="support-page__resource-card">
                <div className="support-page__resource-icon"></div>
                <Typography variant="headingMedium" className="support-page__resource-title">
                  Video Tutorials
                </Typography>
                <Typography variant="bodySmall" color="secondary" className="support-page__resource-description">
                  Watch step-by-step tutorials and demonstrations on our YouTube channel.
                </Typography>
                <a
                  href="https://www.youtube.com/@chronomind-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="support-page__link"
                >
                  <Button variant="secondary" size="small">
                    Visit YouTube
                  </Button>
                </a>
              </Card>

              {/* GitHub */}
              <Card variant="elevated" padding="medium" className="support-page__resource-card">
                <div className="support-page__resource-icon"></div>
                <Typography variant="headingMedium" className="support-page__resource-title">
                  GitHub Repository
                </Typography>
                <Typography variant="bodySmall" color="secondary" className="support-page__resource-description">
                  Access the website source code and report issues. For contributions, please contact us via email.
                </Typography>
                <a
                  href="https://github.com/lcai000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="support-page__link"
                >
                  <Button variant="secondary" size="small">
                    Visit GitHub
                  </Button>
                </a>
              </Card>

              {/* Contact */}
              <Card variant="elevated" padding="medium" className="support-page__resource-card">
                <div className="support-page__resource-icon"></div>
                <Typography variant="headingMedium" className="support-page__resource-title">
                  Contact Support
                </Typography>
                <Typography variant="bodySmall" color="secondary" className="support-page__resource-description">
                  Get direct help from our team for technical issues or questions.
                </Typography>
                <a href="/contact" className="support-page__link">
                  <Button variant="secondary" size="small">
                    Contact Us
                  </Button>
                </a>
              </Card>
            </div>
          </Card>
        </section>

        {/* FAQs */}
        <section className="support-page__section">
          <Card variant="filled" padding="large">
            <Typography variant="headingLarge" className="support-page__section-title">
              Frequently Asked Questions
            </Typography>

            <div className="support-page__faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="support-page__faq-item">
                  <Typography variant="headingMedium" className="support-page__faq-question">
                    {faq.question}
                  </Typography>
                  <Typography variant="bodyRegular" color="secondary">
                    {faq.answer}
                  </Typography>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Community */}
        <section className="support-page__section">
          <Card variant="filled" padding="large" className="support-page__card">
            <Typography variant="headingLarge" className="support-page__section-title">
              Join Our Community
            </Typography>
            <Typography variant="bodyRegular" color="secondary" style={{ marginBottom: 'var(--space-6)' }}>
              Connect with other caregivers, developers, and educators who are passionate about improving dementia care.
            </Typography>

            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
              <a
                href="https://www.youtube.com/@chronomind-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="support-page__link"
              >
                <Button variant="primary" size="medium">
                  Subscribe on YouTube
                </Button>
              </a>
              <a
                href="https://github.com/lcai000"
                target="_blank"
                rel="noopener noreferrer"
                className="support-page__link"
              >
                <Button variant="secondary" size="medium">
                  Star on GitHub
                </Button>
              </a>
            </div>
          </Card>
        </section>

        {/* Additional Help */}
        <section className="support-page__section">
          <Card variant="elevated" padding="medium">
            <Typography variant="bodyRegular" color="secondary" align="center">
              Can't find what you're looking for? Reach out to us directly at{' '}
              <a href="mailto:chronomind.contact.dev@gmail.com" style={{ color: 'var(--color-primary)' }}>
                chronomind.contact.dev@gmail.com
              </a>
            </Typography>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;