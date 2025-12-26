import React from 'react';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';
// import { Button } from '../../components/Button';
import './AppPage.css';

/**
 * App page component - showcases Chronomind app features.
 */
export const AppPage: React.FC = () => {
  const features = [
    {
      title: 'Interactive Scenarios',
      description: 'Practice real-life dementia care situations in a safe environment.',
      icon: '',
    },
    {
      title: 'AI Analysis',
      description: 'Have AI analyze your game-play, the decisions you make, and their impact',
      icon: '',
    },
    {
      title: 'Stress Stats',
      description: 'Learn how your decisions in simulation affect patient and caregiver stress, empathy, safety...',
      icon: '',
    },
  ];

  return (
    <div className="app-page">
      {/* Hero */}
      <section className="app-page__hero">
        <div className="container">
          <Typography variant="displayLarge" align="center">
            Chronomind App
          </Typography>
        </div>
      </section>

      {/* Features */}
      <section className="app-page__features">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Key Features
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            Designed to provide effective, empathetic training for caregivers
          </Typography>

          <div className="app-page__feature-grid">
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" padding="medium" className="feature-card">
                <div className="feature-card__icon">{feature.icon}</div>
                <Typography variant="headingMedium" align="center">
                  {feature.title}
                </Typography>
                <Typography variant="bodyRegular" align="center" color="secondary">
                  {feature.description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mode Comparison */}
      <section className="app-page__modes">
        <div className="container">
          <Typography variant="headingLarge" align="center" className="section-title">
            Two Modes, One Mission
          </Typography>
          <Typography variant="bodyRegular" align="center" color="secondary" className="section-description">
            Choose the training path that fits your role
          </Typography>

          <div className="app-page__mode-comparison">
            <Card variant="elevated" padding="large" className="mode-card mode-card--family">
              <Typography variant="headingMedium" align="center" color="primary">
                Family Caregiver Mode
              </Typography>
              <Typography variant="bodyRegular" align="center" color="secondary">
                Focus on empathy, daily care routines, and emotional support for loved ones at home.
              </Typography>
              <ul className="mode-features">
                <li>Personal care scenarios</li>
                <li>Communication techniques</li>
                <li>Stress management tools</li>
                <li>Family support resources</li>
              </ul>
            </Card>

            <Card variant="elevated" padding="large" className="mode-card mode-card--professional">
              <Typography variant="headingMedium" align="center" color="primary">
                Professional Caregiver Mode
              </Typography>
              <Typography variant="bodyRegular" align="center" color="secondary">
                Develop clinical skills, care management, and professional caregiving standards.
              </Typography>
              <ul className="mode-features">
                <li>Clinical assessment training</li>
                <li>Care plan development</li>
                <li>Team coordination exercises</li>
                <li>Professional ethics scenarios</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-page__cta">
        <div className="container">
          <Card variant="filled" padding="large" className="cta-card">
            <Typography variant="headingLarge" align="center">
              Download the App
            </Typography>
            <Typography variant="bodyLarge" align="center" color="secondary">
              Available Soon iOS and Android devices
            </Typography>
            {/* <div className="app-page__download-buttons">
              <Button variant="primary" size="large">
                App Store
              </Button>
              <Button variant="primary" size="large">
                Google Play
              </Button>
            </div> */}
            <Typography variant="caption" align="center" color="secondary">
              *Demo version available on this website
            </Typography>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AppPage;